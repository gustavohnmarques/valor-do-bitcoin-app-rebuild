export interface CustomSelectDropdownProps {    
    items: CustomSelectDropdownItem[];
    onChange: (item: CustomSelectDropdownItem) => void;
}

export interface CustomSelectDropdownItem  {     
    id: string;
    value: string;
}