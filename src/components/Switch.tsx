import { useState } from "react";


interface SwitchProps {
    label: string;
}


const Switch = ({label}:SwitchProps) => {

    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
      setIsOn(!isOn);
    };
  

    return (
        <div className="flex items-start justify-start gap-x-[10px]">
        <div className={` mt-[2.5px] w-[36px] h-[18.5px] flex items-center gap-0 cursor-pointer rounded-full p-[2.5px] ${isOn ? 'bg-[#4FD1C5]' : 'bg-gray-700'}`} onClick = {handleToggle}>
            <div className={`w-[13.5px] h-[13.5px] bg-white rounded-full  relative transition left-0 ${isOn ? 'left-[18px] animate-bounceBackOn' : 'left-0 animate-bounceBackOff'}`}></div>
        </div>
        <span className="text-[#2D3748] leading-[150%]  font-[500] text-[12px] font-['Helvetica']">{label}</span>
        </div>

    )

}

export default Switch;
