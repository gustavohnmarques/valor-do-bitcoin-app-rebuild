import { array, number, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { CreateAlertScreenNavigationProp } from "../../types/Navigation.types";
import { useEffect, useMemo, useState } from "react";
import { Crypto } from "../../types/Crypto.types";
import { Exchange } from "../../types/Exchange.types";
import { ExchangeService } from "../../services/ExchangeService";
import { CreateAlert } from "../../types/Alert.types";
import { useForm } from "react-hook-form";
import { CustomSelectDropdownItem } from "../../components/CustomSelectDropdown/Types";
import Toast from 'react-native-toast-message'
import storage from "../../storage/storage";
import { OneSignal } from 'react-native-onesignal';

export const TYPE_ALERT_OPTIONS = [
    { id: 'VALOR', value: 'Preço deve' },
    { id: 'PORCENTAGEM', value: 'Porcentagem deve' },
] as CustomSelectDropdownItem[];

export const TYPE_INDICATOR_OPTIONS = [
    { id: 'SUBIR', value: 'Subir até' },
    { id: 'CAIR', value: 'Ficar abaixo de' },
] as CustomSelectDropdownItem[];

export const TYPE_INDICATOR_PERCENT_OPTIONS = [
    { id: 'SUBIR', value: 'Subir' },
    { id: 'CAIR', value: 'Cair' },
] as CustomSelectDropdownItem[];


const useCreateAlertScreen = () => {

    const navigation = useNavigation<CreateAlertScreenNavigationProp>();
    const [selectedCrypto, setSelectedCrypto] = useState<Crypto>({
        id: 0,
        name: 'BTC',
    });
    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [exchanges, setExchanges] = useState<Exchange[]>([]);
    const [selectedExchanges, setSelectedExchanges] = useState<number[]>([]);
    const [cryptoAveragePrice, setCryptoAveragePrice] = useState<number>(0);

    useEffect(() => {
        setIsBottomSheetVisible(true);

        const userId = storage.getString('userId');
        OneSignal.Notifications.requestPermission(true);
        if (userId !== undefined) {
            setValue('userId', userId);
        } else {
            OneSignal.User.getOnesignalId().then((user) => {
                if (user == null) {
                    Toast.show({
                        type: 'error',
                        text1: 'Não foi possível habilitar notificações.',
                    });
                } else {
                    storage.set('userId', user);
                    setValue('userId', user);
                }
            })

        }
    }, []);

    const handleClickBack = () => {
        navigation.goBack();
    }

    const createAlertForm = object({
        userId: string().required('Usuário é obrigatório'),
        cryptoId: number().required(),
        type_indicator: string()
            .oneOf(['SUBIR', 'CAIR'], 'Selecione uma opção válida para o indicador')
            .required('Tipo de indicador é obrigatório'),
        type_alert: string()
            .oneOf(['PORCENTAGEM', 'VALOR'], 'Selecione uma opção válida para o tipo de alerta')
            .required('Tipo de alerta é obrigatório'),
        value: number()
            .test(
                'valorObrigatorio',
                'Valor é obrigatório',
                function (value) {
                    return value !== undefined || value !== null || value === 0;
                }
            ).test(
                'validacaoEspecifica',
                function (value) {
                    const { type_alert, type_indicator } = this.parent;

                    if (type_alert === 'PORCENTAGEM' && value! <= 0) {
                        return this.createError({
                            message: 'A porcentagem deve ser maior que 0%'
                        });
                    }

                    if (type_alert === 'PORCENTAGEM' && type_indicator === 'CAIR' && value! >= 100) {
                        return this.createError({
                            message: 'Para "Cair", o valor máximo é 99.99%'
                        });
                    }

                    if (type_alert === 'VALOR' && type_indicator === 'SUBIR' && value! <= cryptoAveragePrice) {
                        return this.createError({
                            message: 'Informe um valor maior que o preço médio'
                        });
                    }

                    if (type_alert === 'VALOR' && type_indicator === 'CAIR' && value! >= cryptoAveragePrice) {
                        return this.createError({
                            message: 'Informe um valor menor que o preço médio'
                        });
                    }

                    if (type_alert === 'VALOR' && type_indicator === 'CAIR' && value! <= 0) {
                        return this.createError({
                            message: 'Informe um valor maior que 0'
                        });
                    }

                    return true;
                }
            )
            .required('Valor é obrigatório'),
        exchangeIds: array().of(number().required()).min(1, 'Selecione pelo menos uma corretora.').required(),
    });

    const {
        control,
        handleSubmit,
        setValue,
        getValues,
        watch,
        formState: { errors },
    } = useForm<CreateAlert>({
        resolver: yupResolver(createAlertForm),
        defaultValues: {
            userId: '',
            cryptoId: selectedCrypto.id,
            type_indicator: 'SUBIR',
            type_alert: 'VALOR',
            value: 0,
            exchangeIds: [],
        },
    });

    const watchedTypeAlert = watch('type_alert');
    const watchedTypeIndicator = watch('type_indicator');

    const indicatorOptions = useMemo(() => {
        //Clear value when change type_alert
        setValue('value', 0);

        if (watchedTypeAlert === "VALOR") {
            return TYPE_INDICATOR_OPTIONS;
        }
        return TYPE_INDICATOR_PERCENT_OPTIONS;
    }, [watchedTypeAlert, watchedTypeIndicator]);


    useEffect(() => {
        setSelectedExchanges([]);
        setIsLoading(true);
        ExchangeService.getByCrypto(selectedCrypto.name).then((response) => {
            setExchanges(response.data);
            const total = response.data.reduce((acc, exchange) => acc + Number(exchange.last), 0);
            const average = total / response.data.length;
            setCryptoAveragePrice(average);
        }).catch((error) => {
            console.error("Erro ao buscar exchanges:", error);
        }).finally(() => {
            setIsLoading(false);
        });
    }, [selectedCrypto]);

    const handleExchangeSelection = (exchangeId: number) => {
        setSelectedExchanges((prevSelected) => {
            if (prevSelected.includes(exchangeId)) {
                return prevSelected.filter((id) => id !== exchangeId);
            }
            return [...prevSelected, exchangeId];
        });
    }

    const handleSelectAllExchanges = () => {
        if (selectedExchanges.length === exchanges.length) {
            setSelectedExchanges([]);
        } else {
            setSelectedExchanges(exchanges.map(exchange => exchange.id));
        }
    }

    const submitForm = (data: CreateAlert) => {
        Toast.show({
            type: 'success',
            text1: 'Alerta criado com sucesso!',
        });
    }

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const errorMessage = Object.values(errors)[0].message || 'Erro ao validar o formulário';
            Toast.show({
                type: 'error',
                text1: errorMessage,
            });
        }
    }, [errors]);


    useEffect(() => {
        setValue('exchangeIds', selectedExchanges);
    }, [selectedExchanges]);

    return {
        handleClickBack,
        selectedCrypto,
        isBottomSheetVisible,
        setSelectedCrypto,
        setIsBottomSheetVisible,
        exchanges,
        selectedExchanges,
        handleExchangeSelection,
        handleSelectAllExchanges,
        control,
        handleSubmit,
        submitForm,
        getValues,
        indicatorOptions,
        typeAlertOptions: TYPE_ALERT_OPTIONS,
        watchedTypeAlert,
        cryptoAveragePrice,
        watchedTypeIndicator,
        isLoading,
    }
}

export default useCreateAlertScreen;