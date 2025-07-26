import { ReactNode } from "react";

export interface LoaderContextProps {
    show: () => void;
    hide: () => void;
    isVisible: boolean;
}

export interface LoaderContextProvider {
    children: ReactNode;
}