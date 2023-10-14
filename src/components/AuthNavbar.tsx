import React from 'react';
import DashboardIcon from './login/icons/DashboardIcon';
import ProfileIcon from './login/icons/ProfileIcon';
import SigninIcon from './login/icons/SigninIcon';
import SignupIcon from './login/icons/SignupIcon';
import AutNavbarLogo from '../assets/AuthNavbarLogo'


interface MenuItemProps {
    id?: number;
    label: string;
    icon: React.FC<{ mode: 'light' | 'dark' }>;
    link: string;
    mode: 'light' | 'dark';
  }
  
  export const MenuItem: React.FC<MenuItemProps> = ({ label, icon: Icon, link,mode }) => {
    return (
      <li className={`w-auto h-auto flex justify-center items-center gap-x-1 ${
        mode === 'light' ? 'hover:bg-slate-200' : 'hover:bg-slate-800'
      } rounded-[15px] p-[10px]`}>
        <Icon mode={mode} />
        <a href={link}>{label}</a>
      </li>
    );
  };
  

  const menuItems = [

    { id: 1, label: 'DASHBOARD', icon: DashboardIcon, link: '/dashboard',},
    { id: 2, label: 'PROFILE', icon: ProfileIcon, link: '/profile',},
    { id: 3, label: 'SIGN UP', icon: SignupIcon, link: '/register', },
    { id: 4, label: 'SIGN IN', icon: SigninIcon, link: '/login', },
  ] as MenuItemProps[];


  interface AuthNavbarProps {
    mode: 'light' | 'dark';
    bg?: boolean;
    labelsColor?: string;
    color?: string;

  }

/*   pt-[${mode === 'light' ? '17.5px' : '0'}] pb-[${mode === 'light' ? '17.5px' : '0'}] */


const AuthNavbar = ({mode,bg,labelsColor,color}:AuthNavbarProps) => {
  return (
    <nav style = {{
     paddingTop: `${mode === 'light' ? '17.5px' : '0'}`,
      paddingBottom: `${mode === 'light' ? '17.5px' : '0'}`,
      
    }} className={`pl-[69px] pr-6  w-auto min-w-[987.5px] rounded-[15px] ${mode === "light" ? 'border-[1.5px] border-white shadow-authNavbar backdrop-blur-[10.500000953674316px]' : ''} h-[${
      mode === 'light' ? '70px' : 'auto'}]  ${bg ? 'bg-[linear-gradient(113deg,_#ffffffd1_0%,_#ffffffcc_110.84%)]' : 'bg-transparent'}`}>
      <div className="h-auto w-full flex flex-row justify-between items-center">
        <div className="w-auto h-auto max-w-[169.5px] max-h-[32.5px] flex justify-center items-center">
            <AutNavbarLogo color = {color} />
        </div>
        <ul className={`flex flex-row gap-x-[29px] justify-start items-center text-[${labelsColor ? labelsColor : '#2D3748'}] text-[10px] leading-[150%] font-['Helvetica'] font-bold text-center`}>
          {menuItems.map((menuItem) => (
            <MenuItem key={menuItem.id} label={menuItem.label} icon={menuItem.icon} link={menuItem.link} mode={mode} />
          ))}
        </ul>
        <button className={`rounded-[34.5px] flex items-center justify-center w-auto min-w-[150px] h-[35px] text-center font-['Helvetica'] font-bold text-[10px] leading-[150%] ${mode ===  'light' ? 'text-white' : 'text-[#2D3748]'}  ${mode === 'light' ? 'bg-[linear-gradient(82deg,_#313860_2.25%,_#151928_79.87%)]' : 'bg-white'} `}>
          Free Download
        </button>
      </div> 
    </nav>
  );
};

export default AuthNavbar;
