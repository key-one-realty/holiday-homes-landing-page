"use client";
import React, { useState, useEffect, MutableRefObject, FC } from "react";
import Image from "next/image";
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { CTAFormAPIInputs } from "../api/interfaceConfig";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import InputField from "./InputField";
import CTAForm from "./CTAForm";

interface MobileCTAFormProps {
  CTAForm2Ref: MutableRefObject<null>;
}

const MobileCTAForm: FC<MobileCTAFormProps> = ({ CTAForm2Ref }) => {
  const [formStep, setFormStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("https://List-a-property.keyonehomes.com/");
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<String>("");
  const [apiSuccess, setApiSuccess] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (window.location.search) {
      const searchParams = new URLSearchParams(window.location.search);
      setUrl(
        "https://List-a-property.keyonehomes.com/" + searchParams.toString()
      );
    }
  }, [url]);

  useEffect(() => {
    if (apiSuccess) {
      setTimeout(() => {
        setApiSuccess(false);
      }, 3000);
    } else if (apiError) {
      setTimeout(() => {
        setApiError("");
      }, 3000);
    }
  }, [apiSuccess, apiError]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      source_id: "70",
      division_id: "1",
      lead_type_id: "3",
      employee_id: 11,
      method_id: 5,
      property_type_id: 1,
      contact: {
        name: "",
        first_name: "",
        last_name: "",
        email: "",
        country_code: "",
        phone: "",
        number: "",
      },
      additional_fields: [
        {
          property_type: "Apartment",
          location: "",
          bedrooms: "studio",
          Message: "I am interested in a free valuation for my property.",
          url: "",
        },
      ],
    },
  });

  const handleNextFlow:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined = (e) => {
    e.preventDefault();
    console.log(`formStep: ${formStep}`);

    if (formStep < 2) {
      setFormStep(formStep + 1);
    } else {
      handleSubmit(handleSubmitForm);
    }
  };

  const handleSubmitForm: SubmitHandler<CTAFormAPIInputs> = async (data) => {
    try {
      setIsLoading(true);
      let firstName = data.contact?.name?.split(" ")[0];
      let lastName = data.contact?.name?.split(" ").slice(1).join(" ");
      const apiData = {
        source_id: "70",
        division_id: "1",
        lead_type_id: "3",
        employee_id: 11,
        method_id: 5,
        property_type_id: 1,
        contact: {
          first_name: firstName,
          last_name: lastName,
          email: data.contact.email,
          number: phone,
        },
        additional_fields: [
          {
            property_type: data.additional_fields[0].property_type,
            location: data.additional_fields[0].location,
            bedrooms: data.additional_fields[0].bedrooms,
            Message: data.additional_fields[0].Message,
            url: url,
          },
        ],
      };
      if (data.additional_fields[0].property_type === "Villa") {
        apiData.property_type_id = 2;
      } else if (data.additional_fields[0].property_type === "Penthouse") {
        apiData.property_type_id = 13;
      } else if (data.additional_fields[0].property_type === "Townhouse") {
        apiData.property_type_id = 16;
      } else if (data.additional_fields[0].property_type === "Mansion") {
        apiData.property_type_id = 37;
      } else {
        apiData.property_type_id = 1;
      }

      if (disableButton) {
        console.log("Button is disabled");
        return;
      }
      setDisableButton(true);
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
  };

  return (
    <div
      ref={CTAForm2Ref}
      className="cta-valuation-form w-full h-[552.92px] flex justify-center items-center"
    >
      <div className="bg-white rounded-[10px] w-[80vw] md:w-[60vw] xl:w-[30vw]">
        {apiSuccess && (
          <div className="success-message w-full mt-4">
            <p className="text-accent-purple text-center">
              Your request has been submitted successfully, we will get back to
              you shortly!
            </p>
          </div>
        )}
        {apiError && (
          <div className="error-message w-full mt-4">
            <p className="text-red-300 text-center">{apiError}</p>
          </div>
        )}
        <div className="form-header flex justify-center items-center">
          <h2 className="text-text-color text-center sm:w-[281px] pt-6">
            Fill in the Form below to{" "}
            <span className="font-bold">get a free valuation</span> right away!
          </h2>
        </div>
        <div className="flex justify-between items-center">
          {formStep > 1 && (
            <div className="back-button flex justify-start items-center pl-10">
              <button
                onClick={() => setFormStep(1)}
                className="p-3 rounded-lg font-bold w-[104px]"
              >
                {errors.additional_fields?.[0]?.location ||
                errors.additional_fields?.[0]?.bedrooms ||
                errors.additional_fields?.[0]?.property_type ? (
                  <Image
                    src="/back.svg"
                    className="animate-bounce"
                    alt="back-btn"
                    width={20}
                    height={10}
                  />
                ) : (
                  <Image
                    src="/back.svg"
                    alt="back-btn"
                    width={20}
                    height={10}
                  />
                )}
              </button>
            </div>
          )}
          <div className="form-steps flex flex-col w-full justify-center items-end pr-11">
            <p>{formStep} out of 2</p>
            <div className="progress w-20 h-[3px] relative bg-white">
              <div className="w-20 h-[3px] bg-transparent">
                <div
                  style={{ width: (formStep / 2) * 100 + "%" }}
                  className={`progress-bar h-full bg-accent-purple rounded-tl-[1px] rounded-bl-[1px]`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <form>
          <div className="form-container flex flex-col justify-start py-4 px-10 gap-4 w-full">
            <div className="property-info flex flex-col gap-4">
              <div
                className={` ${
                  formStep === 1 ? "flex" : "hidden"
                } property-info flex-col gap-4`}
              >
                <InputField
                  register={register}
                  name="additional_fields.0.location"
                  placeholder="Enter the location of your property"
                  label="Location"
                  inputType="location"
                  error={errors.additional_fields?.[0]?.location}
                  required={true}
                  labelRequired={false}
                />
                <div className="Bedrooms* flex flex-col justify-center items-start gap-2">
                  <InputField
                    register={register}
                    name="additional_fields.0.bedrooms"
                    placeholder="Select the number of bedrooms"
                    label="Bedrooms"
                    inputType="select_bedroom_type"
                    error={errors.additional_fields?.[0]?.bedrooms}
                    required={true}
                    labelRequired={false}
                  />
                </div>
                <div className="property-type flex flex-col justify-center items-start gap-2">
                  <InputField
                    register={register}
                    name="additional_fields.0.property_type"
                    placeholder="Select the type of property"
                    label="Property Type"
                    inputType="select_property_type"
                    error={errors.additional_fields?.[0]?.property_type}
                    required={true}
                    labelRequired={false}
                  />
                </div>
              </div>

              <div
                className={`${
                  formStep === 2 ? "flex" : "hidden"
                } property-info flex flex-col gap-4`}
              >
                <div className="property-location flex flex-col justify-center items-start gap-2">
                  <InputField
                    register={register}
                    name="contact.name"
                    placeholder="Enter your name"
                    label="Name"
                    inputType="text"
                    error={errors.contact?.name}
                    required={true}
                    labelRequired={false}
                  />
                </div>
                <div className="Bedrooms* flex flex-col justify-center items-start gap-2">
                  <InputField
                    register={register}
                    name="contact.email"
                    placeholder="Enter your email"
                    label="Email"
                    inputType="email"
                    error={errors.contact?.email}
                    required={true}
                    labelRequired={false}
                  />
                </div>
                <div className="property-type flex flex-col justify-center items-start gap-2">
                  <div className="input px-[10px] py-3 w-full bg-input-bg flex justify-start items-center rounded-[10px]">
                    <PhoneInput
                      enableSearch={true}
                      inputStyle={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "black",
                      }}
                      dropdownStyle={{ border: "none", color: "black" }}
                      buttonStyle={{
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                      buttonClass="hover:bg-transparent"
                      country={"ae"}
                      inputProps={{
                        name: "contact.phone",
                        required: "Enter a number we can reach you on",
                        className:
                          "form-control w-full lg:w-[24.405vw] outline-none bg-transparent border-b px-0 text-black py-4 border-zinc-100",
                      }}
                      onChange={(phone) => {
                        setPhone(phone);
                      }}
                      // {...register("contact.phone", { required: "Enter a number we can reach you on" })}
                      placeholder="+___-___-____"
                    />
                  </div>
                </div>
              </div>
              <div className="property-type flex flex-col justify-center items-end gap-2 text-white pt-8 pb-5">
                {formStep === 1 ? (
                  <button
                    onClick={handleNextFlow}
                    className="p-3 rounded-lg font-bold bg-accent-purple w-[104px]"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit(handleSubmitForm)}
                    className={`p-3 flex justify-center items-center rounded-lg font-bold ${
                      disableButton
                        ? "bg-neutral-400 cursor-not-allowed"
                        : "bg-accent-purple cursor-pointer"
                    }  w-[104px]`}
                    disabled={disableButton}
                  >
                    Submit
                    {isLoading && (
                      <div className="loading-icon relative w-[20px] h-[20px] animate-spin text-accent-purple">
                        <Image src="/tube-spinner.svg" alt="loading" fill />
                      </div>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MobileCTAForm;
