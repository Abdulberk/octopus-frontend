import React,{ChangeEvent}  from 'react';

interface CustomInputProps {
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    pattern?: string | RegExp;
    textType?:string;
    label?:string;
    name?:string;
}   


const CustomInput: React.FC<CustomInputProps> = ({ placeholder, value, onChange,pattern,textType,label,name }) => {
    const patternAttribute = pattern instanceof RegExp ? pattern.source : pattern;
    return (
        <div className = "flex flex-col justify-start items-start gap-y-[5.5px]"> 
        <label className="pl-[4.5px] text-[#2D3748] text-[14px] font-normal leading-[140%] font-['Helvetica']">{label}</label>
        <input
            onChange={onChange}
            value={value}
            name={name}
            placeholder={placeholder}
            pattern={patternAttribute ? patternAttribute : undefined}
            type={textType}
            className="outline-none  w-[350px] h-[50px] pl-5 pr-5 bg-white border border-[#E2E8F0] rounded-[15px] text-[#A0AEC0] text-[14px] font-normal leading-[140%] font-['Helvetica']"
        />
        </div>
    );
};


export default CustomInput;
