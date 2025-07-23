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
    const [exchanges, setExchanges] = useState<Exchange[]>([]);
    const [selectedExchanges, setSelectedExchanges] = useState<number[]>([]);

    const handleClickBack = () => {

        navigation.goBack();
    }

    const createAlertForm = object({
        cryptoId: number().required(),
        type_indicator: string()
            .oneOf(['SUBIR', 'CAIR'], 'Selecione uma opção válida para o indicador')
            .required('Tipo de indicador é obrigatório'),
        type_alert: string()
            .oneOf(['PORCENTAGEM', 'VALOR'], 'Selecione uma opção válida para o tipo de alerta')
            .required('Tipo de alerta é obrigatório'),
        value: number().test(
            'validacaoValor',
            'Informe um valor válido.',
            function (value) {
                const { type_alert } = this.parent;
                
                if (value === undefined || value === null) {
                    return false;
                }

                if (type_alert === 'PORCENTAGEM') {                    
                    return value > 0 && value <= 100;
                }
                                
                return value > 0;
            }
        ).required('Valor é obrigatório'),
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
            cryptoId: selectedCrypto.id,
            type_indicator: 'SUBIR',
            type_alert: 'VALOR',
            value: 0,
            exchangeIds: [],
        },
    });
    
    const watchedTypeAlert = watch('type_alert');

    const indicatorOptions = useMemo(() => {
        if (watchedTypeAlert === "VALOR") {
            return TYPE_INDICATOR_OPTIONS;
        }
        return TYPE_INDICATOR_PERCENT_OPTIONS;
    }, [watchedTypeAlert]);


    useEffect(() => {
        setSelectedExchanges([]);
        ExchangeService.getByCrypto(selectedCrypto.name).then((response) => {
            setExchanges(response.data);
        }).catch((error) => {
            console.error("Erro ao buscar exchanges:", error);
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
        setValue,
        getValues,        
        errors,
        indicatorOptions,
        typeAlertOptions: TYPE_ALERT_OPTIONS,
    }
}

export default useCreateAlertScreen;