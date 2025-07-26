import React, { createContext, useState, useContext, useCallback, useMemo } from 'react';
import { LoaderContextProps, LoaderContextProvider } from '../types/LoaderContext.types';
import Loader from '../components/Loader/Loader';

export const LoaderContext = createContext<LoaderContextProps | undefined>(
    undefined
);

export const LoaderProvider: React.FC<LoaderContextProvider> = ({
    children,
}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const show = useCallback(() => {
        setIsVisible(true);
    }, []);

    const hide = useCallback(() => {
        setIsVisible(false);
    }, []);

    const contextValue: LoaderContextProps = useMemo(() => ({
        show,
        hide,
        isVisible,
    }), [show, hide, isVisible]);

    return (
        <LoaderContext.Provider value={contextValue}>
            {children}
            {isVisible && <Loader />}
        </LoaderContext.Provider>
    );
};

export const useLoader = (): LoaderContextProps => {
    const context = useContext(LoaderContext);

    if (!context) {
        throw new Error('useLoader must be used within a LoaderProvider');
    }

    return context;
};