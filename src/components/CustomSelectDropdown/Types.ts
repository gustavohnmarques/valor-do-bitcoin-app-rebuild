export interface CustomSelectDropdownProps {    
    defaultValue?: CustomSelectDropdownItem;
    items: CustomSelectDropdownItem[];
    onChange: (item: CustomSelectDropdownItem) => void;
}

export interface CustomSelectDropdownItem  {     
    id: string;
    value: string;
}