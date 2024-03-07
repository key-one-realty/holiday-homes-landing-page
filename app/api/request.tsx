import React from "react"
import { CTAFormAPIInputs } from "./interfaceConfig";

export const handleSubmitForm = async (data: CTAFormAPIInputs, phone: string, url: string, setIsLoading: (value: React.SetStateAction<boolean>) => void, setApiSuccess: (value: React.SetStateAction<boolean>) => void, setApiError: (value: React.SetStateAction<String>) => void) => {
    try {
        setIsLoading(true);
        let firstName = data.contact?.name?.split(' ')[0];
        let lastName = data.contact?.name?.split(' ').slice(1).join(' ');
        const apiData = {
            "source_id": "70",
            "division_id": "1",
            "lead_type_id": "3",
            "employee_id": 11,
            "method_id": 5,
            "property_type_id": 1,
            "contact": {
                "first_name": firstName,
                "last_name": lastName,
                "email": data.contact.email,
                "number": phone,
            },
            "additional_fields": [
                {
                    "property_type": data.additional_fields[0].property_type,
                    "location": data.additional_fields[0].location,
                    "bedrooms": data.additional_fields[0].bedrooms,
                    "Message": data.additional_fields[0].Message,
                    "url": url,
                }
            ]
        }

        if (data.additional_fields[0].property_type === 'Villa') {
            apiData.property_type_id = 2;
        } else if (data.additional_fields[0].property_type === 'Penthouse') {
            apiData.property_type_id = 13;
        } else if (data.additional_fields[0].property_type === 'Townhouse') {
            apiData.property_type_id = 16;
        } else if (data.additional_fields[0].property_type === 'Mansion') {
            apiData.property_type_id = 37;
        }

        const response = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
            },
            body: JSON.stringify(apiData),
        });
        const responseData = await response.json();
        setIsLoading(false);
        setApiSuccess(true);

    } catch (error: any) {
        setIsLoading(false);
        setApiError(error.message);
    }
}