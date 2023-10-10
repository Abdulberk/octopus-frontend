import React from 'react';
import SearchIcon from './dashboard/icons/SearchIcon';
import MyProfileIcon from './MyProfileIcon';
import NotificationIcon from './NotificationsIcon';
import SettingsIcon from './SettingsIcon';



const Navbar = () => {
  return (
    <div className="flex flex-row h-[52px] w-full">
      <div className="flex-grow flex flex-col justify-end items-start">
        <p className="text-[#2D3748] font-normal text-[12px]">
          <span className="text-[#A0AEC0]">Pages</span> / Dashboard
        </p>
        <p className="text-[#2D3748] font-bold text-[14px]">Dashboard</p>
      </div>
        
      <div className=" w-auto flex flex-row gap-x-[18px] h-auto justify-start items-start ">
      <div className=" w-auto relative h-auto flex flex-row gap-x-[18px]">
        <input
          type="text"
          placeholder="Type here..."
          className="w-auto min-w-[199px] h-[39.5px] outline-none bg-[#FFF] rounded-[15px] border-[#E2E8F0] border-[0.5px] pl-[37.5px] text-[#A0AEC0] font-normal text-[12px]"
          style={{
            width: "199px", 
            transition: "all 0.2s ease-in-out", 
          }}
          onFocus={(e) => (e.target.style.width = "300px",
          e.target.style.border = "1px solid #2D3748")} 
          onBlur={(e) => (e.target.style.width = "199px",
          e.target.style.border = "0.5px solid #E2E8F0"
          )} 
        />
      <div className="absolute left-[5.25px] top-[9.75px] bottom-[9.75px] flex justify-center items-center w-[27px] h-[20px] cursor-pointer">
    <SearchIcon />
  </div>





        <ul className = "flex flex-row gap-x-[18px] items-center justify-center ">
       
        <li className = "w-auto h-auto flex justify-center items-center gap-x-1" >
          <MyProfileIcon />
          <p className = "text-[#718096] font-bold text-[12px]">Sign In </p>
          </li>
          <li className =  "w-auto h-auto flex justify-center items-center" >
          <NotificationIcon />
          </li>
          <li className =  "w-auto h-auto flex justify-center items-center" >
          <SettingsIcon />
        </li>

          </ul>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
