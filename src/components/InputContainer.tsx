import {  HTMLInputTypeAttribute} from "react";

interface Props {
  label: string;
  type?: HTMLInputTypeAttribute;
  onChange: () => void
}

export function InputContainer({label, type="text", onChange}:Props) {
  return (
    <div className="">
      <label 
        htmlFor={label}
        className="text-light-txt-100 mb-2 inline-block"
      >
        {label}
      </label>
      <input 
        onChange={onChange}
        type={type}
        className="w-full rounded-2xl h-10 px-4 focus:outline focus:outline-4 focus:outline-brand border-none"
        name={label}  
      />
    </div>
  );
}