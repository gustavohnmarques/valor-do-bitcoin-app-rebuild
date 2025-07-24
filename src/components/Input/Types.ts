export interface DefaultInputProps {
    key?: string;
    value: number;
    onChangeText: (text: number | null) => void;
    prefix?: string;
    suffix?: string;
    delimiter?: string;
    separator?: string;
    precision?: number;
    maxValue: number;    
}
