import React from 'react'
import Table from './Table'
import EditIcon from '../EditIcon';
import {RowData, Column} from '../../types/TableTypes'
import ProgressBar from '../ProgressBar';
import formatCurrency from '../../utils/formatCurrency';

  
  interface ProjectsTableProps {
    projects: RowData[];
  }

  const ProjectsTable: React.FC<ProjectsTableProps> = ({ projects }) => {
    const columns: Column[] = [
        { header: 'COMPANIES', render: (project) => (
          <div className = "w-auto flex flex-row gap-x-[17px] justify-start items-center" >
            <span>
              {project.icon}
            </span>
            <span className = "w-auto text-[#2D3748] font-bold text-[14px] leading-[100%] font-['Helvetica'] " >
              {project.company}
            </span>
          </div>
        ) },
        { header: 'BUDGET', render: (project) => (
          <span className = "w-auto text-[#2D3748] font-bold text-[14px] leading-[140%] font-['Helvetica'] ">
            {project.budget ? formatCurrency(project.budget) : 'Not set'}
          </span>
        ) },
        { header: 'STATUS', render: (project) => (
          <div className = "w-auto text-[#2D3748] font-bold text-[14px] leading-[140%] font-['Helvetica'] text-left " >
            {project.status}
          </div>
        )},
        { header: 'COMPLETION', render: (project) => (
          
          <span className="w-[125px]">
        <ProgressBar value={
          project.completion
        } showPercentage = {true}
          width = {125}
        />
      </span>
         
        )},

        {
          header: '',
          render: () => (
            <EditIcon />
          ),
        },
      ];

  return <Table data={projects} columns={columns} caption="Projects" pt = {16.5} pb = {16.5} headerSpacing={28.5} done = {
      projects.filter((project) => project.status === 'done').length 
  }/>;

}


export default ProjectsTable