
import HeaderView from '../components/dashboard/HeaderView';
import OctopusIconSet from '../components/dashboard/icons/OctopusIconSet';
import SalesOverviewChart from '../components/dashboard/charts/SalesOverviewChart';
import { ChartsHeader } from '../components/dashboard/charts/SalesOverviewChart';
import ActiveUsersChart from '../components/dashboard/charts/ActiveUsersChart';
import ActiveUserCard from '../components/dashboard/ActiveUserCard';
import { useNavigate } from 'react-router-dom';
import { RowData } from '../types/TableTypes';
import { SampleProjects } from './Tables';
import ProjectsTable from '../components/tables/ProjectsTable';
//import {useQuery,useQueryClient} from 'react-query'
//import { getProjects } from '../api/projectsApi';
import OrdersOverview from '../components/dashboard/OrdersOverview';
import { useEffect } from 'react';


export const SampleAuthors = [
  {
    id: 1,
    name: 'John Doe',
    email: "esthera@simmmple.com" ,
    function: 'Manager',
    department: 'Organization',
    status: "offlinee",
    employed: '14/06/21',
    img:  "https://s3-alpha-sig.figma.com/img/b940/caf9/f3a52bcc9317c793ebc094db911b237b?Expires=1697414400&Signature=qQRwsgHfkJ6~wd6H5uvjF48~szCxGrX0Z8kjnhC4AdFpakFXgHiWWPz-Xmhe8BU3imtRKGpDa1VnatcMxou8rZl~XfG~7dRr7lFPpbvxVrFgZ4JmCDzdIvhbCOpCKieMSCK7YnJhqEn6k2b1uNvhHD8~yLD~32u~5v4ma6hzEuxbLpYl60VWBkXPfwXBtkjd3Rq~r3ADRSZLwyR~vgPdE4GXYvj0TVqt59OsLHFOnHHpAmmz7y5P0fAsiKIJnyTOej4haXk5OgBOZQJ0vy7RwT3E2~1QhNpl5wbdV~uCsvR1HUIZjLXVREU9n6jbpgfiwVAg6tWdSwr8DkzW2IYhkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: "alexa@simmmple.com",
    function: 'Designer',
    department: 'UI/UX Design',
    status: "offline",
    employed: '14/06/21',
    img: "https://s3-alpha-sig.figma.com/img/58e2/826c/9ef36e80f373f0ff9cb6ba2ea2a3d704?Expires=1697414400&Signature=DuLYPSun6Aouc7O5P3Chu3Ug-ZVryZhta8hfe-H4In2L0LqRGPidQEEfdbLIgs2gTpONpM7Yzhm9A9oVuV6-pl88-7PvbFXqTk7iuCUNT2upwiDwCCEBBCZBTJ9-tQBD0SRo-hZn0Wm4LshfJLQm2kEGu63CBdGm3gk9s~GWYfK5ILFkX2m9oDXHcppG4G8zEN1YOwoZI-MIJAmN4p4GxhZxe8En-eHQm-HxRcMX0pt9nDrSuFTLQOIOtKDhiX-eY~ptMAdftOCFhTtrL5PhrFtE7Wswx33iAS3AHYS6FeQj40Kel2BpI8wcA~~skOEhQbJZbJDWt27RrMG6-d7NAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  },
  {
    id: 3,
    name: 'Michael Johnson',
    email: "laurent@simmmple.com",
    function: 'Programmer',
    department: 'Developer',
    status: "online",
    employed: '14/06/21',
    img: "https://s3-alpha-sig.figma.com/img/59a7/14b8/6b104a52903f0b67ed801ccac9993666?Expires=1697414400&Signature=GJP9nSc3gWT~wDr-VUAZINp~EWlNjyc5k~droORMuw~SaTvNZBame4ra8qmX~kchvQWODbtDUDvnkuucpkOHF-mbE3kxn5MRwn1JuTMHhTzsDDMRJ5OsDLJjemvXyFAh2LebiIDXnPEVZbxZHuCxTAexT7sxb1jn-8Q55ExVEu-WeoDJrqhrdfLPUhnGLMHNs5XMszax0C-pFWS8gxx2Zd3EPAFC0UQubUNtkdJsS4CJIuk~OPXEWoAgibv4JPAaZyJgqh~NLdWWyiB7GqAXlRChoaFVBDHrpHnxVB17LV2LDc21Y3QyJM4BzTTh4IyftkhZewsMUwKED3DfCCtLGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  },
  {
    id: 4,
    name: 'Mary Williams',
    email: "freduardo@simmmple.com",
    function: 'Manager',
    department: 'Organization',
    status: "offline",
    employed: '14/06/21',
    img: "https://s3-alpha-sig.figma.com/img/8131/7c1a/6461999d545aa891a9277a99295c83d4?Expires=1697414400&Signature=NXrR0pQleBCUi2iFZPjytGUlP5vN47R0eAsiM4SSztNr60p3rxI8Zt-V4kXdSbOXeqNJsGdkzGjGloZx~HFRWdqbhqz9~N1zXXhxpuKScdXvdqUsViuaLsOpvBNOjoVtHQx~diKrnJ33BcmmaSKWYWVt6DrmQ1PBv2DHuMtzlzG~j2ReKW47OvxNWEcYqphIy6DFLZa5dMckzgSByEmTjE5NN08O3ZAROeqaPdbJXvhR0HeOHUC8MKiL0P~IHF0aGhv0syO~ccn6NiOxvCiVpf35ugIdV8NlUQvp1ruDQFLvMQ3bgeygk2Avyw5zdJVMHVJnNh7~7Iif1n4MQz4VOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  },
  {
    id: 5,
    name: 'James Brown',
    email: "daniel@simmmple.com",
    function: 'Programmer',
    department: 'Developer',
    status: "online",
    employed: '14/06/21',
    img: "https://s3-alpha-sig.figma.com/img/9353/9f7e/33b5ee1ed96651e2cef8e4e1bc7c5019?Expires=1697414400&Signature=aOBF0W-gSRl2T~hxr9wIdVEYQHw1qQb6vS8OSB60WbY6AZZ5Vc5gtaWPo2wiQSVCh39F9q3ydBBJQjVWvjscwdFXSdZeKB0mxNVSf-40BPPLfvHNRTN3UH4tpY3IGHSyytMKJkoxdht6ed9XeEzxwDMj4KQBOGmk1vdIQKvt8IzLx~FZR6hmUWHvdcJftKAFZV3a6t9Avr3ewGncYJfUdYR9O6wbvS6p7~7A7CADJ2CK~fE2OdXWo6zwRNKGrptz0vdWrGi5qXULvvu7yTs0N0Fb6nrEdMV9vUl8J-wn1swQbKNxdXqJ3ClcEitbOteyVL1KjqWeOKNYAw9IFPZclA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  },
  {
    id: 6,
    name: 'Maria Garcia',
    email: "mark@simmmple.com",
    function: 'Executive',
    department : 'Projects',
    status: "online",
    employed: '14/06/21',
    img: "https://s3-alpha-sig.figma.com/img/e07e/0180/c8f688e34c197dd4674fd7e62937b68c?Expires=1697414400&Signature=NS8-C0lO9X~d1u5NFZ8CaZAKVM2Z7rC3Ttvw0zLH7dcBtGuTTAf8g8x9FnK11MMgzy7K5wqBu8xJEMtfeo~XgiZWXs1aJoAALMUjTMewY57TXuQMpOoasWRit7kZuqqZ8z7TSbrvuV3ee3jWsLtaIHCJfNmjulveCl1RR3JdrA8JmBKUZKfMm7HdHvjlMxiy2p48zhI6dCSkWxtpy4CizjFcKgVNUBsmn4g04jp7Nrt66m0Cwd5-oyItOzFz4LeQkPvuqAezqemtjUvXybYMCQyazrUyN-jAqf7OYs-HvWjE7qOkoByIan-i5moI4YQ0~xl7QTs0RdQV3dFX5mTbZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  }
  ] as RowData[];

const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate('/login');
    }
  }
  ,[navigate]);
  

  

  return (
    <div className="grid grid-cols-dashboardCols gap-x-6 gap-y-6  grid-rows-dashboardRows">
      <HeaderView />
      <div className="h-[290.5px] col-span-12 flex flex-row gap-x-6">

        <div className = "first-card bg-[#FFF]  w-auto min-w-[922px] h-full rounded-[15px] shadow-activeListItem p-[17.5px] flex flex-row justify-between" >
        <p className = "w-auto h-auto text-[#A0AEC0] font-normal text-[14px] pt-[10.5px] pl-[3.5px]" > 
          From colors, cards, typography to complex elements,<br/>
          you will find the full documentation.
          </p>
            <div className = "w-auto min-w-[360px] h-full rounded-[12px] bg-[#4FD1C5] bg-waves2 bg-no-repeat bg-right-bottom flex justify-center items-center pr-[1.5px]" >
              <OctopusIconSet />
            </div>
        </div>

        <div className = "second-card w-auto min-w-[654px] h-full rounded-[15px] shadow-activeListItem bg-[#FFF] p-[17.5px]">
          <div className ="w-full h-full rounded-[12px] bg-brooke bg-no-repeat bg-center" >
            <div className = "w-auto flex flex-col gap-y-[6px] pl-[21.5px] pt-[20px]  font-['Helvetica'] " >
              <p className = "w-auto text-[#FFF] font-[600] text-[18px] " >
              Work with the Rockets
              </p>
              <p className = " w-auto text-[#FFF] font-normal text-[14px]" >
              Wealth creation is an evolutionarily recent positive-sum game.
            It is all about who take the opportunity first.
              </p>
              </div>
          </div>

        </div> 

      </div>

      <div className="h-[445px] col-span-12 flex flex-row gap-x-6">

        <div className = "w-auto h-full rounded-[15px] shadow-activeListItem bg-[#FFF] p-4 min-w-[652px] flex flex-col justify-start items-start gap-y-[36.5px]">

            <div className = "flex flex-col gap-y-6 w-auto h-auto justify-start items-start" >
          <div className = "chart-container box-border  flex items-center justify-center p-[30px] rounded-[12px] w-auto min-w-[620px] h-auto  bg-gradient-to-r from-[#313860] to-[#151928]" >
            <ActiveUsersChart />
          </div>


            <div className = "active-users w-auto pl-[5px]" >
              <ChartsHeader title="Active Users" />
            </div>

          </div>


          <div className = "cards w-auto flex flex-row gap-x-[55px] pl-[5.5px] " >
          <ActiveUserCard title="users" value={32984} />
          <ActiveUserCard title="sales" value={2400} />
          <ActiveUserCard title="items" value={320} />
          <ActiveUserCard title="clicks" value={2420000}  />
      

          </div>
        </div> 


        <div className = "w-auto  rounded-[15px] shadow-activeListItem bg-[#FFF] pl-[21px] pb-[29px] pt-[28px] pr-[19px] min-w-[924px]">
          <SalesOverviewChart />

      </div> 
   
    </div>

    <div className = "col-span-12 gap-x-6 flex flex-row h-[519px]" >

    <div className = "projects bg-white h-full rounded-[15px] flex flex-col gap-y-[28.5px] justify-center items-center pl-[21px] pr-[22.5px] pt-[28px] pb-[31.5px] shadow-activeListItem w-auto min-w-[1057px]" >
      <ProjectsTable projects={SampleProjects} />
    </div>

    <div className = "orders-overview bg-white h-full shadow-activeListItem rounded-[15px] w-auto min-w-[519px] pl-[21px] pt-7 pb-[31px]" >
      <OrdersOverview />
    </div>


    </div>

    </div>
  );
};

export default Dashboard;
