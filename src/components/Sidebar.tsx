import React, { useEffect, useState } from 'react';
import LogoImage from '../assets/octopus-logo.svg';
import DividerIcon from "../assets/divider.svg";
import HomeIcon from './HomeIcon';
import ChartIcon from './ChartIcon';
import BillingIcon from './BillingIcon';
import BuildIcon from './BuildIcon';
import UserIcon from './UserIcon';
import LoginIcon from './LoginIcon';
import RegisterIcon from './RegisterIcon';
import { Link,useLocation } from "react-router-dom";
import HelpIcon from './HelpIcon';

interface SidebarItemProps {
  id: string;
  label: string;
  icon?: React.ReactElement;
  selected: boolean;
  onClick?: (id: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ id, label, icon, selected, onClick }) => {
  const handleClick = () => {
    if (id !== 'accountPages' && onClick) {
      onClick(id);
    }
  };

  return (
    <Link to={`${id}`}>
    <li
      className={`text-${selected ? 'sidebarListItemActiveText' : 'sidebarListItemPassiveText'} text-[12px] font-bold cursor-pointer flex flex-row items-center space-x-[12px] pl-4 h-[54px] ${selected ? 'bg-sidebarListItemActiveBg rounded-[15px] shadow-activeListItem' : ''}`}
      onClick={handleClick}
    >
      {icon && (
        <div className={`flex justify-center items-center w-[30px] h-[30px] rounded-[12px] ${selected ? 'bg-sidebarListItemActiveIconBg' : 'bg-sidebarListItemPassiveIconBg'} shadow-activeListItem`}>
          {React.cloneElement(icon, { selected: selected })}
        </div>
      )}
      
      <span className={`leading-[150%] not-italic ${selected ? 'text-sidebarListItemActiveText' : 'text-sidebarListItemPassiveText'}`}>
        {label}
      </span>
     
    </li>
    </Link>
  );
};


const Divider: React.FC = () => {
  return <img src={DividerIcon} alt="Divider" className="w-full h-auto" />;
};


const HelpButton: React.FC = () => {
  return (
    <button className="w-[35px] h-[35px] rounded-[12px] flex justify-center items-center bg-[#FFF] ml-[0.5px]">
      <HelpIcon className="w-auto h-auto" />
    </button>
  );
};

interface LogoProps {
  logo: string;

}


const Logo = ({
logo 

}:LogoProps) => {
  return <img src={logo} alt="octopus" className="cursor-pointer" />;
};

interface AccountPagesItemProps {
  label: string;
}

const AccountPagesItem: React.FC<AccountPagesItemProps> = ({ label }) => {
  return (
    <li className="text-[12px] font-bold cursor-pointer flex flex-row items-center space-x-[12px] pl-4 h-[42px] text-sidebarListItemActiveText">
      <span className="leading-[150%] not-italic">{label}</span>
    </li>
  );
};

const HelpContent: React.FC = () => {
  return (
    <div className="w-auto h-auto flex flex-col">
      <p className="text-[#FFF] text-[14px] font-bold"> Need help? </p>
      <p className="text-[#FFF] text-[12px] font-normal"> Please check our docs </p>
      <button className="hover:bg-[#E5E7EB] rounded-[12px] w-full h-[35px] bg-[#FFF] mt-[8.5px] flex items-center justify-center text-[#2D3748] text-[10px] font-bold leading-[150%]">
        DOCUMENTATION
      </button>
    </div>
  );
};

const Sidebar: React.FC = () => {


  const location = useLocation();



  const [selectedItem, setSelectedItem] = useState<string>('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <HomeIcon /> },
    { id: 'tables', label: 'Tables', icon: <ChartIcon /> },
    { id: 'billing', label: 'Billing', icon: <BuildIcon /> },
    { id: 'rtl', label: 'RTL', icon: <BillingIcon /> },
    { id: 'accountPages', label: 'ACCOUNT PAGES' },
    { id: 'user', label: 'User', icon: <UserIcon /> },
    { id: 'login', label: 'Login', icon: <LoginIcon /> },
    { id: 'register', label: 'Register', icon: <RegisterIcon /> },
  ];


  useEffect(() => {
    const path = location.pathname.split('/')[1];
    setSelectedItem(path === '' ? 'dashboard' : path);

    

  }, [location.pathname]);


  return (
    <div className="flex  bg-sidebar pt-[33px] pt h-screen flex-col font-['Helvetica'] pl-[13.5px] pr-4 space-y-8 ">
      <div className ="flex flex-col items-center justify-center">

      <div className="pl-[5px]">
        <Logo logo={LogoImage} />
      </div>


      <span className = "w-full mt-[29px]">
        <Divider />
      </span>
      </div>

        <div className = "flex justify-center items-center flex-col w-full h-auto gap-[69.5px]" >

        
      <ul className="flex flex-col w-full items-left justify-center">
        {menuItems.map(item => (
          item.id !== 'accountPages' ? (
            <SidebarItem
              key={item.id}
              id={item.id}
              label={item.label}
              icon={item.icon}
              selected={selectedItem === item.id}
              onClick={(id) => setSelectedItem(id)}
            />
          ) : (
            <AccountPagesItem key={item.id} label={item.label} />
          )
        ))}
      </ul>


      <div className = "rounded-[15px] flex flex-col w-full h-[169.5px] bg-[#4FD1C5] bg-waves bg-right-bottom bg-no-repeat items-left justify-center gap-[21.5px] pl-4 pr-4 " >

            <HelpButton />

            <HelpContent />
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
