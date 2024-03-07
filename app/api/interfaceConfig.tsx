
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
        property_type: String,
        location: String,
        bedrooms: String,
        Message: String,
        url: String,
    }[]
}