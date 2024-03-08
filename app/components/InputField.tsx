import React, { FC } from "react";
import { InputFieldProps } from "../api/interfaceConfig";
import Image from "next/image";

const InputField: FC<InputFieldProps> = ({
  register,
  name,
  placeholder,
  inputType,
  label,
  error,
  required = true,
  labelRequired = true,
}) => {
  const handleInputType = () => {
    if (inputType === "textarea") {
      return (
        <div className="input px-[10px] py-3  w-full md:w-[50vw] bg-input-bg flex justify-start items-center rounded-[10px]">
          <textarea
            {...register(name, { required: required })}
            id={label}
            placeholder={placeholder}
            className="bg-transparent outline-none border-none w-full h-[46px]"
          />
        </div>
      );
    } else if (inputType === "select_property_type") {
      return (
        <div className="input px-[10px] py-3 xl:w-[24.405vw] bg-input-bg flex justify-start items-center rounded-[10px] w-full">
          <select
            {...register(name, { required: required })}
            id={label}
            className="bg-transparent outline-none border-none w-full"
          >
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Mansion">Mansion</option>
          </select>
        </div>
      );
    } else if (inputType === "select_bedroom_type") {
      return (
        <div className="input px-[10px] py-3 xl:w-[24.405vw] bg-input-bg flex justify-start items-center rounded-[10px] w-full">
          <select
            {...register(name, { required: required })}
            id={label}
            className="bg-transparent outline-none border-none w-full"
          >
            <option value="studio">studio</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="more than 4">more than 4</option>
          </select>
        </div>
      );
    } else if (inputType === "location") {
      return (
        <div className="input px-[10px] py-3 xl:w-[24.405vw] bg-input-bg flex justify-start items-center rounded-[10px] gap-2 w-full">
          <Image src="/location.svg" alt="location" width={12} height={12} />
          <input
            type="text"
            {...register(name, { required: true })}
            id={label}
            placeholder={placeholder}
            className="bg-transparent outline-none border-none w-full"
          />
        </div>
      );
    } else {
      return (
        <div className="input px-[10px] py-3 xl:w-[24.405vw] bg-input-bg flex justify-start items-center rounded-[10px] gap-2 w-full">
          <input
            {...register(name, { required: required })}
            id={label}
            placeholder={placeholder}
            className="bg-transparent outline-none border-none w-full"
          />
        </div>
      );
    }
  };

  return (
    <div className="name flex flex-col justify-center items-start gap-2 w-full">
      {labelRequired && (
        <label htmlFor={label} className="text-xs text-accent-purple">
          {label} {required ? "*" : ""}
        </label>
      )}
      {handleInputType()}
      {error && (
        <span role="alert" className="text-red-500">
          This field is required
        </span>
      )}
    </div>
  );
};

export default InputField;
