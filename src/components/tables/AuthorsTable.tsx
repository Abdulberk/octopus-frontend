import Table from './Table';
import React from 'react';
import {RowData, Column} from '../../types/TableTypes'




interface AuthorsTableProps {
  authors: RowData[];
}

const AuthorsTable: React.FC<AuthorsTableProps> = ({ authors }) => {
    const columns: Column[] = [
      {
        header: 'AUTHOR',
        render: (author) => (
          <div className="flex items-center font-['Helvetica'] w-auto justify-start gap-x-[15px]">
            <img src={author.img} alt={author.name} className="w-10 h-10 rounded-[12px] object-cover" />
            <div className = "flex w-auto flex-col items-start justify-center">
              <p className="font-bold leading-[120%] text-[14px] text-[#2D3748]">{author.name}</p>
              <p className="font-normal text-[#718096] text-[14px] leading-[120%] ">{author.email}</p>
            </div>
          </div>
        ),
      },
      { header: 'FUNCTION', render: (author) => (
        <div className = "w-auto flex flex-col items-start justify-start font-['Helvetica'] text-left  text-[14px]" >
        <p className="text-[#2D3748] font-bold leading-[140%] ">
          {author.function}
        </p>
        <p className="text-[#718096] font-normal leading-[140%] ">
          {author.department}
        </p>
        </div>
      ) },
      { header: 'STATUS', render: (author) => (
        <span className = {`w-auto max-w-[65px] h-[25px] rounded-[8px] ${author.status === 'online' ? 'bg-[#48BB78]' : 'bg-[#CBD5E0]'} flex items-center justify-center font-['Helvetica']`}>
                <p className = "font-bold leading-[140%] text-[14px] text-[white]" >
                    {author.status ==='online' ? 'Online' : 'Offline'}
                </p>
        </span>
      ) },
      { header: 'EMPLOYED', render: (author) => (
        <span className="text-[#2D3748] font-bold text-[14px] leading-[140%] font-['Helvetica'] text-center ">
          {author.employed}
        </span>
      
      ) },
      {
        header: '',
        render: () => (
          <span className="text-[#718096] font-bold text-[12px] leading-[150%] font-['Helvetica'] ">
            Edit
          </span>
        ),
      },
    ];
  
    return <Table data={authors} columns={columns} caption="Authors Table" pt = {11} pb = {11} headerSpacing = {23.5}/>;
  };
  
  export default AuthorsTable;
  


