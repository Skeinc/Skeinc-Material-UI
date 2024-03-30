export interface PhoneFieldInterface {
    id: string;
    name: string;
    label?: string;
    placeholder?: string;
    value?: string;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    valid?: boolean;
}