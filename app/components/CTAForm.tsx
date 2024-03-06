"use client";
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { FieldValues, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


interface CTAFormAPIInputs {
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

const CTAForm = () => {
    const [step, setStep] = useState(1);
    const [phone, setPhone] = useState('');
    const [url, setUrl] = useState('http://List-a-property.keyonehomes.com/');
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState<unknown>(null);
    const [apiSuccess, setApiSuccess] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 768) {
                setStep(3);
            } else {
                setStep(1);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call the function initially

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.location.search) {
            const searchParams = new URLSearchParams(window.location.search);
            setUrl(
                "http://List-a-property.keyonehomes.com/" +
                searchParams.toString()
            );
        }
    }, [url]);

    useEffect(() => {
        if (apiSuccess) {
            setTimeout(() => {
                setApiSuccess(false);
            }, 3000);
        }
    }, [apiSuccess]);


    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            "source_id": "70",
            "division_id": "1",
            "lead_type_id": "3",
            "employee_id": 11,
            "method_id": 5,
            "property_type_id": 1,
            "contact": {
                "name": "",
                "first_name": "",
                "last_name": "",
                "email": "",
                "country_code": "",
                "phone": "",
                "number": "",
            },
            "additional_fields": [
                {
                    "property_type": "Apartment",
                    "location": "",
                    "bedrooms": "1",
                    "Message": "",
                    "url": "",
                }
            ]
        }
    });

    const handleNextFlow: React.MouseEventHandler<HTMLButtonElement> | undefined = (e) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        } else {
            handleSubmit(handleSubmitForm);
        }
    }

    const handleSubmitForm: SubmitHandler<CTAFormAPIInputs> = async (data) => {
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
            }

            console.log(apiData);

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

            console.log('Form submitted: ', responseData);
        } catch (error: any) {
            setIsLoading(false);
            setApiError(error.message);
            console.log(error);
        }

    }

    const handleBackClick = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    }
    return (
        <div className="form flex justify-center items-center">
            <form className="bg-white rounded-lg w-[81.481vw] pb-6 -mt-10 lg:-mt-14 xl:-mt-32 2xl:-mt-44 shadow" onSubmit={(e) => handleSubmit(handleSubmitForm)}>
                {
                    apiSuccess && (
                        <div className="success-message w-full mt-4">
                            <p className="text-accent-purple text-center">
                                Your form has been submitted successfully
                            </p>
                        </div>
                    )
                }
                <div className="form-container flex flex-col justify-start py-4 px-5 gap-4">
                    <h2 className="text-sm text-accent-purple ">
                        Find out <span className="font-bold">how much you can maximize your income</span> with Key One Holiday Homes
                    </h2>
                    <div className="form-steps md:hidden flex  justify-center items-stretch">
                        {step > 1 && (
                            <div onClick={handleBackClick}>
                                <Image src="/back.svg" alt="back-btn" width={20} height={10} />
                            </div>
                        )}
                        <div className="form-header w-full flex flex-col justify-center items-end">
                            <p>
                                {step} out of 3
                            </p>
                            <div className="progress w-20 h-[3px] relative bg-white">
                                <div className='w-20 h-[3px] bg-transparent'>
                                    <div style={{ width: (step / 3) * 100 + '%' }} className={`progress-bar h-full bg-accent-purple rounded-tl-[1px] rounded-bl-[1px]`}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group flex flex-col gap-4">
                        <div className={`${step !== 1 ? 'hidden md:flex' : 'flex'} "personal-info flex lg:grid lg:grid-cols-3 justify-center items-center flex-col md:flex-row gap-2 lg:gap-6 w-full"`}>
                            <div className="name flex flex-col justify-center items-start gap-2 w-full">
                                <label htmlFor="name" className="text-xs text-accent-purple">Name*</label>
                                <div className="input px-[10px] py-3 w-full lg:w-[24.405vw] bg-input-bg flex justify-start items-center rounded-[10px]">
                                    <input type="text" {...register("contact.name", { required: true })} id="name" placeholder="Enter your name" className="bg-transparent outline-none border-none w-full" />
                                </div>
                            </div>
                            <div className="email flex flex-col justify-center items-start gap-2 w-full">
                                <label htmlFor="email" className="text-xs text-accent-purple">Email*</label>
                                <div className="input px-[10px] py-3 w-full lg:w-[24.405vw] bg-input-bg flex justify-start items-center rounded-[10px]">
                                    <input type="email" {...register("contact.email", { required: true })} id="email" placeholder="Enter your email" className="bg-transparent outline-none border-none w-full " />
                                </div>
                            </div>
                            <div className="phone flex flex-col justify-center items-start gap-2 w-full">
                                <label htmlFor="phone" className="text-xs text-accent-purple">Phone*</label>
                                <div className="input px-[10px] py-3 w-full lg:w-[24.405vw] bg-input-bg flex justify-start items-center rounded-[10px]">
                                    <PhoneInput
                                        enableSearch={true}
                                        inputStyle={{ backgroundColor: 'transparent', border: 'none', color: 'black' }}
                                        dropdownStyle={{ border: 'none', color: 'black' }}
                                        buttonStyle={{ backgroundColor: 'transparent', border: 'none' }}
                                        buttonClass='hover:bg-transparent'
                                        country={'ae'}
                                        inputProps={{
                                            name: "contact.phone",
                                            required: "Enter a number we can reach you on",
                                            className: "form-control w-full lg:w-[24.405vw] outline-none bg-transparent border-b px-0 text-black py-4 border-zinc-100"
                                        }}
                                        onChange={(phone) => { setPhone(phone) }}
                                        // {...register("contact.phone", { required: "Enter a number we can reach you on" })}
                                        placeholder='+___-___-____'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={`${step !== 2 ? 'hidden md:flex' : 'flex'} "property-info flex lg:grid lg:grid-cols-3 justify-center items-center flex-col md:flex-row flex-wrap gap-2 lg:gap-6"`}>
                            <div className="property-location flex flex-col justify-center items-start gap-2 w-full">
                                <label htmlFor="property-location" className="text-xs text-accent-purple">Property Location*</label>
                                <div className="input px-[10px] py-3 lg:w-[24.405vw] bg-input-bg flex justify-start items-center rounded-[10px] gap-2 w-full">
                                    <Image src="/location.svg" alt="location" width={12} height={12} />
                                    <input type="text" {...register("additional_fields.0.location", { required: true })} id="property-location" placeholder="Enter your property location" className="bg-transparent outline-none border-none w-full" />
                                </div>
                            </div>
                            <div className="property-type flex flex-col justify-center items-start gap-2 w-full">
                                <label htmlFor="property-type" className="text-xs text-accent-purple">Property Type*</label>
                                <div className="input px-[10px] py-3 lg:w-[24.405vw] bg-input-bg flex justify-start items-center rounded-[10px] w-full">
                                    <select {...register("additional_fields.0.property_type", { required: true })} id="property-type" className="bg-transparent outline-none border-none w-full">
                                        <option value="Apartment">Apartment</option>
                                        <option value="Villa">Villa</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Bedrooms* flex flex-col justify-center items-start gap-2 w-full">
                                <label htmlFor="bedrooms" className="text-xs text-accent-purple">Bedrooms*</label>
                                <div className="input px-[10px] py-3 lg:w-[24.405vw] bg-input-bg flex justify-start items-center rounded-[10px] w-full">
                                    <select {...register("additional_fields.0.bedrooms", { required: true })} id="bedrooms" className="bg-transparent outline-none border-none w-full">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="more than 4">more than 4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="cta flex justify-center items-center flex-col md:flex-row gap-2 lg:gap-6">
                            <div className="flex flex-col md:flex-row justify-start items-center w-full gap-6">
                                <div className={`w-full md:w-8/12 gap-2 ${step !== 3 ? 'hidden md:flex' : 'flex'} "message flex-col justify-center items-start"`}>
                                    <label htmlFor="message" className="text-xs text-accent-purple">Message</label>
                                    <div className="input px-[10px] py-3  w-full md:w-[50vw] bg-input-bg flex justify-start items-center rounded-[10px]">
                                        <textarea {...register("additional_fields.0.Message", { required: true })} id="message" placeholder="Enter your message" className="bg-transparent outline-none border-none w-full h-[46px]" />
                                    </div>
                                </div>
                                {
                                    step == 3 ? (
                                        <button className="bg-accent-purple w-full md:w-4/12 lg:w-[24.405vw] flex justify-center items-center text-white py-3 px-5 rounded-lg mt-4" onClick={handleSubmit(handleSubmitForm)}>SUBMIT {
                                            isLoading && (
                                                <div className="loading-icon relative w-[20px] h-[20px] animate-spin text-accent-purple">
                                                    <Image src="/tube-spinner.svg" alt="loading" fill />
                                                </div>
                                            )
                                        }</button>
                                    ) : (
                                        <button className="bg-accent-purple w-full md:w-4/12 lg:w-[24.405vw] text-white py-3 px-5 rounded-lg mt-4" onClick={handleNextFlow}>NEXT</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CTAForm;