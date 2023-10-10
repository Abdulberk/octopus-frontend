
import AuthorsTable from '../components/tables/AuthorsTable'
import { SampleAuthors } from './Dashboard'
import CompanyIcon from '../components/tables/icons/CompanyIcons'
import ProjectsTable from '../components/tables/ProjectsTable'
import { RowData } from '../types/TableTypes'
import {useQuery} from 'react-query'
import { getProjects } from '../api/projectsApi'
import { useEffect, useState } from 'react'
import {GridLoader} from 'react-spinners'


export const SampleProjects = [
    {
        id: 1,
        company: "Chakra Soft UI Version",
        icon: <CompanyIcon type = "xd"/>,
        status: "working",
        completion: 60,
        budget: 14000,
    },
    {
        id: 2,
        company: "Add Progress Track",
        icon: <CompanyIcon type = "atlassian"/>,
        status: "cancelled",
        completion: 10,
        budget: 3000,
    },
    {
        id: 3,
        company: "Fix Platform Errors",
        icon: <CompanyIcon type = "slack"/>,
        status: "done",
        completion: 100,
        budget: undefined
    },
    {
        id: 4,
        company: "Launch our Mobile App",
        icon: <CompanyIcon type = "spotify"/>,
        status: "done",
        completion: 100,
        budget: 32000,
    },
    {
        id: 5,
        company: "Launch our Mobile App",
        icon: <CompanyIcon type = "jira"/>,
        status: "working",
        completion: 25,
        budget: 400,
    },
    {
        id: 6,
        company: "Redesign New Online Shop",
        icon: <CompanyIcon type = "invision"/>,
        status: "working",
        completion: 40,
        budget: 7600,
        
    }

] as RowData[]


interface Project {
    id?: number;
    title?: string;
    description?: string;
    price?: number;
    brand?: string;
    category?: string;
    company?: string;
    thumbnail?: string;
    images?: string[];
    completion: number;
    budget: number;  
}




export const Tables = () => {
    const [projects, setProjects] = useState<RowData[]>(SampleProjects);
    const { data, isLoading, isError,error } = useQuery<Project[]>('projects', getProjects);

    useEffect(() => {
        if (!isError && !isLoading && data) {
            const updatedProjects: RowData[] = data?.map((project) => ({
                id: project.id,
                company: project.title,
                icon: <CompanyIcon type = "xd"/>,
                status: "done",
                completion: 70,
                budget: project.price

            }));
            setProjects(updatedProjects);
        }
    }, [data, isLoading, isError]);
    
    if (isLoading) {
        return (
            <div className = "flex justify-center items-center w-full h-full">
                <GridLoader color = "#4FD1C5" size = {30} />
            </div>
        )
    }
    
    if (isError) {
        console.log(error)
        return <div>Error loading data from the server.</div>;
    }


  return (
    <div className = "grid grid-cols-dashboardCols gap-x-6 gap-y-6  grid-rows-dashboardRows w-full ">

    
            <div  className = " h-[488.5px] rounded-[15px] shadow-activeListItem bg-white pl-[21.5px] pr-[22.5px] pt-[28px] pb-[23.5px] w-full " >
                <AuthorsTable  authors={SampleAuthors} />
          
        </div>
        <div  className = " h-[453.5px] rounded-[15px] shadow-activeListItem bg-white pl-[21.5px] pr-[22.5px] pt-[28px] pb-[28px] w-full overflow-auto" >
                <ProjectsTable  projects={projects} />

        </div>

    </div>
  )
}

export default Tables