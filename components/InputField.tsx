"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  disabled: boolean;
  onChange?: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  disabled,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-4 font-outfit">
      <p className="font-medium text-[#013941] text-base">{label}</p>
      <input
        className={cn(
          `w-full rounded-[30px]  px-6 py-4  border-[#E0E0E0] max-h-15 flex text-base text-[#013941] placeholder:text-[#828282] outline-0`,
          `${disabled === true ? "bg-[#F2F2F2] border-0" : "bg-white border"}`
        )}
        type="text"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={disabled ? undefined : (e) => onChange?.(e.target.value)}
      />
    </div>
  );
};

export default InputField;
