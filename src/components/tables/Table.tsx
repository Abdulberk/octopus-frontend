import React from 'react';
import CheckMarkIcon from '../CheckMarkIcon';
import {TableCaptionProps,TableProps} from '../../types/TableTypes'





 const TableCaption = ({caption,done}:TableCaptionProps) => {
        return (
            <caption className = "text-left font-['Helvetica'] font-bold w-auto h-auto flex flex-col gap-y-1.5 " > 
                <h1 className = "text-[#2D3748] text-[18px] leading-[140%] " > {caption} </h1>

                    {done && done > 0 ?


                <div className = "w-auto flex flex-row gap-x-[4.5px] items-center justify-start" >
                        <CheckMarkIcon />
                        <p className = "text-[#A0AEC0] text-[14px] leading-[140%] font-bold" > 
                            {done} done <span className = "font-normal " > this month </span>
                        </p>
                </div>

                        : null}
            </caption>
        )
        }



const Table: React.FC<TableProps> = ({ data, columns, caption,done,pt,pb,headerSpacing }) => {
  return (
    <div className = {`w-full h-full flex flex-col gap-y-[${headerSpacing}px] justify-start items-start`}>
    <TableCaption caption = {caption ? caption : "Table"}  done={done} />
    <table className="table-auto w-full ">
      <thead className = "text-left text-[#A0AEC0] text-[10px] font-bold leading-[150%] font-['Helvetica']  ">
        <tr className = "">
          {columns.map((column, index) => (
            <th className = "pb-[12.5px]" key={index}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody >
        {data.map((item, index) => (
          <tr key={index} 
           style = {{
            borderBottomWidth: `${index >= data.length - 1 ? 0 : 2}px`,
            borderBottomColor: `#F0F3F7`
           }}>
            {columns.map((column, columnIndex) => (
                <td style = {{
                    paddingTop: `${pt}px`,
                    paddingBottom: `${pb}px`,
                  
            
                }} key={columnIndex}>
                  {column.render(item)}
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
