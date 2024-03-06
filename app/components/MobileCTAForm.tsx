import React from 'react'
import Image from 'next/image';

const MobileCTAForm = () => {
    return (
        <div className="cta-valuation-form w-full h-[552.92px] flex justify-center items-center">
            <div className="bg-white rounded-[10px] w-[80vw] md:w-[60vw] xl:w-[30vw]">
                <div className="form-header flex justify-center items-center">
                    <h2 className="text-text-color text-center w-[281px] pt-6">
                        Fill in the Form below to <span className="font-bold">get a free valuation</span> right away!
                    </h2>
                </div>
                <div className="form-steps flex flex-col justify-center items-end pr-11">
                    <p>
                        1 out of 2
                    </p>
                    <div className="progress w-16 h-[3px] relative">
                        <div className="progress-bar w-8 h-full bg-accent-purple rounded-tl-[1px] rounded-bl-[1px]">
                        </div>
                    </div>
                </div>
                <div className="form-container flex flex-col justify-start py-4 px-10 gap-4 w-full">
                    <div className="property-info flex flex-col gap-4">
                        <div className="property-location flex flex-col justify-center items-start gap-2">
                            {/* <label htmlFor="property-location" className="text-xs text-text-color">Property Location*</label> */}
                            <div className="input px-[10px] py-3 w-full  bg-input-bg flex gap-1 justify-start items-center rounded-[10px]">
                                <Image src="/location.svg" alt="location" width={16} height={16} />
                                <input type="text" id="property-location" placeholder="Enter your property location" className="bg-transparent outline-none border-none w-full" />
                            </div>
                        </div>
                        <div className="Bedrooms* flex flex-col justify-center items-start gap-2">
                            {/* <label htmlFor="bedrooms" className="text-xs text-text-color">Bedrooms*</label> */}
                            <div className="input px-[10px] py-3 w-full bg-input-bg flex justify-start items-center rounded-[10px]">
                                <select name="bedrooms" id="bedrooms" className="bg-transparent outline-none border-none w-full">
                                    <option value="" disabled>Bedrooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="more than 4">more than 4</option>
                                </select>
                            </div>
                        </div>
                        <div className="property-type flex flex-col justify-center items-start gap-2">
                            {/* <label htmlFor="property-type" className="text-xs text-text-color">Property Type*</label> */}
                            <div className="input px-[10px] py-3 w-full bg-input-bg flex justify-start items-center rounded-[10px]">
                                <select name="property-type" id="property-type" className="bg-transparent outline-none border-none w-full">
                                    <option value="Apartment">Apartment</option>
                                    <option value="Villa">Villa</option>
                                </select>
                            </div>
                        </div>
                        <div className="property-type flex flex-col justify-center items-end gap-2 text-white pt-8 pb-5">
                            <button className="p-3 rounded-lg font-bold bg-accent-purple w-[104px]">
                                Next
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MobileCTAForm;