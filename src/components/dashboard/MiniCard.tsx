import React from 'react'

export interface MiniCardProps {
    title: string,
    value: string | number,
    icon?: React.ReactNode,
    rate?: string
}


export const MiniCard = ({
    title,
    value,
    icon,
    rate
}:MiniCardProps) => {

  const downColor = "#E53E3E"
  const upColor = "#48BB78"

  return (
    <div className = " w-auto flex-1 h-[80px] rounded-[15px] shadow-activeListItem bg-[#FFF] flex flex-row pl-[21.5px] pr-[17.5px] justify-between items-center font-['Helvetica'] " >
        <div className = "flex flex-col gap-y-[1px] w-auto h-auto">
            <p className = "text-[#A0AEC0] text-[12px] font-bold">{title}</p>
            <div className = "flex flex-row gap-x-[5px] items-center">
                <p className = "text-[#2D3748] text-[18px] font-bold antialiased">{value}</p>
                <p className = {`${rate?.startsWith("-") || Math.sign(Number(rate)) === -1 || rate?.includes("-")
                 ? "text-[#E53E3E]" : "text-[#48BB78]"}
                text-[14px] font-bold`}>{rate}</p>
                </div>
        </div>
        <div className = "flex items-center justify-center w-[45px] h-[45px] bg-[#4FD1C5] rounded-[12px]">
            {icon}
            </div>
    </div>
  )
}

export default MiniCard