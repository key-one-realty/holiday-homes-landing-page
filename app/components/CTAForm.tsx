"use client";
import React, { useState } from 'react'
import Image from "next/image";


const CTAForm = () => {
    const [step, setStep] = useState(1);

    const handleNextFlow = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    }

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement> | undefined) => {
        e!.preventDefault();
        console.log('Form submitted');
    }

    const handleBackClick = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    }
    return (
        <div className="form flex justify-center items-center">
            <form className="bg-white rounded-lg w-[81.481vw] pb-6 -mt-10 lg:-mt-14 xl:-mt-32 2xl:-mt-44 shadow" onSubmit={(e) => handleSubmitForm(e)}>
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
                            <div className="progress w-20 h-[3px] relative">
                                <div className='w-20 h-[3px]'>
                                    <div className={`"progress-bar w-${step}/3 h-full bg-accent-purple rounded-tl-[1px] rounded-bl-[1px]"`}>
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
                                    <input type="text" id="name" placeholder="Enter your name" className="bg-transparent outline-none border-none w-full" />
                                </div>
                            </div>
                            <div className="email flex flex-col justify-center items-start gap-2 w-full">
                                <label htmlFor="email" className="text-xs text-accent-purple">Email*</label>
                                <div className="input px-[10px] py-3 w-full lg:w-[24.405vw] bg-input-bg flex justify-start items-center rounded-[10px]">
                                    <input type="email" id="email" placeholder="Enter your email" className="bg-transparent outline-none border-none w-full " />
                                </div>
                            </div>
                            <div className="phone flex flex-col justify-center items-start gap-2 w-full">
                                <label htmlFor="phone" className="text-xs text-accent-purple">Phone*</label>
                                <div className="input px-[10px] py-3 w-full lg:w-[24.405vw] bg-input-bg flex justify-start items-center rounded-[10px]">
                                    <select name="country" id="country" className="bg-transparent outline-none border-none w-full">
                                        <option value="UAE">UAE</option>
                                        <option value="KSA">KS</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={`${step !== 2 ? 'hidden md:flex' : 'flex'} "property-info flex lg:grid lg:grid-cols-3 justify-center items-center flex-col md:flex-row flex-wrap gap-2 lg:gap-6"`}>
                            <div className="property-location flex flex-col justify-center items-start gap-2 w-full">
                                <label htmlFor="property-location" className="text-xs text-accent-purple">Property Location*</label>
                                <div className="input px-[10px] py-3 lg:w-[24.405vw] bg-input-bg flex justify-start items-center rounded-[10px] gap-2 w-full">
                                    <Image src="/location.svg" alt="location" width={12} height={12} />
                                    <input type="text" id="property-location" placeholder="Enter your property location" className="bg-transparent outline-none border-none w-full" />
                                </div>
                            </div>
                            <div className="property-type flex flex-col justify-center items-start gap-2 w-full">
                                <label htmlFor="property-type" className="text-xs text-accent-purple">Property Type*</label>
                                <div className="input px-[10px] py-3 lg:w-[24.405vw] bg-input-bg flex justify-start items-center rounded-[10px] w-full">
                                    <select name="property-type" id="property-type" className="bg-transparent outline-none border-none w-full">
                                        <option value="Apartment">Apartment</option>
                                        <option value="Villa">Villa</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Bedrooms* flex flex-col justify-center items-start gap-2 w-full">
                                <label htmlFor="bedrooms" className="text-xs text-accent-purple">Bedrooms*</label>
                                <div className="input px-[10px] py-3 lg:w-[24.405vw] bg-input-bg flex justify-start items-center rounded-[10px] w-full">
                                    <select name="bedrooms" id="bedrooms" className="bg-transparent outline-none border-none w-full">
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
                                <div className={`w-8/12 gap-2 ${step !== 3 ? 'hidden md:flex' : 'flex'} "message flex-col justify-center items-start"`}>
                                    <label htmlFor="message" className="text-xs text-accent-purple">Message</label>
                                    <div className="input px-[10px] py-3 w-9/12 md:w-[50vw] bg-input-bg flex justify-start items-center rounded-[10px]">
                                        <textarea name="message" id="message" placeholder="Enter your message" className="bg-transparent outline-none border-none w-full h-[46px]" />
                                    </div>
                                </div>
                                <button className="bg-accent-purple w-full md:w-4/12 lg:w-[24.405vw] text-white py-3 px-5 rounded-lg mt-4" onClick={handleNextFlow}>{step == 3 ? 'SUBMIT' : 'NEXT'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CTAForm;