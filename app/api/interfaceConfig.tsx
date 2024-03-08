import { FieldError, UseFormRegister } from "react-hook-form";


export type NestedKeys<T> = T extends object ? { [K in keyof T]: `${K & string}.${NestedKeys<T[K]> & string}` }[keyof T] : never;

export type CTAFormAPIInputKeys = keyof CTAFormAPIInputs | "contact.name" | "contact.first_name" | "contact.last_name" | "contact.email" | "contact.country_code" | "contact.phone" | "contact.number" | "additional_fields.0.property_type" | "additional_fields.0.location" | "additional_fields.0.bedrooms" | "additional_fields.0.Message" | "additional_fields.0.url";


export interface CTAFormAPIInputs {
    source_id: string;
    division_id: string;
    lead_type_id: string;
    employee_id: number;
    method_id: number;
    property_type_id: number;
    contact: {
        name: string;
        first_name: string;
        last_name: string;
        email: string;
        country_code: string;
        phone: string;
        number: string;
    };
    additional_fields: {
        property_type: string,
        location: string,
        bedrooms: string,
        Message: string,
        url: string,
    }[]
}

export interface InputFieldProps {
    register: UseFormRegister<CTAFormAPIInputs>;
    name: CTAFormAPIInputKeys;
    placeholder: string;
    inputType?: string;
    label: string;
    error: FieldError | undefined;
    required?: boolean;
    labelRequired?: boolean;
}