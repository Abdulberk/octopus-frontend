import SearchIcon from "./dashboard/icons/SearchIcon";
import MyProfileIcon from "./MyProfileIcon";
import NotificationIcon from "./NotificationsIcon";
import SettingsIcon from "./SettingsIcon";
import { me } from "../api/authApi";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link,useLocation } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import Breadcrumbs from "./Breadcrumbs";

interface User {
  message: string;
  user: {
    id: number;
    email: string;
    username: string;
    iat: number;
    exp: number;
  };
}

interface ListItemProps {
  icon: React.ReactNode | null;
  text?: string;
  link?: string;
  onClick?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ icon, text, link,onClick }) => (
  <li className="w-auto h-auto flex justify-center items-center gap-x-1 text-[#718096] font-bold text-[12px] cursor-pointer hover:text-slate-800 "
  onClick={onClick}
  >
    {icon}
    {link ? <Link to={link}>{text}</Link> : <p>{text}</p>}
  </li>
);

const Navbar = () => {
  const { data, isLoading, isError, error, isSuccess } = useQuery("me", me);
  const [user, setUser] = useState<User | null>(null);



  useEffect(() => {
    console.log(data);
    if (isSuccess) {
      setUser(data);

    }
  }, [data, isSuccess]);



  if (isError) {
    console.log(error);
  }



  const getPageName = (pathname: string): string => {
    const paths = pathname.split("/").filter((x) => x);
    if (paths.length > 0) {
      const lastPath = paths[paths.length - 1];
     
      return lastPath
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }
    return "Home";
  };




  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }


  const location = useLocation();
  const currentPage = getPageName(location.pathname);


  return (
    <div className="flex flex-row h-[52px] w-full ">
      <div className="flex-grow flex flex-col justify-end items-start gap-y-[5.5px]">
     
          <Breadcrumbs />
        
        <p className="text-[#2D3748] font-bold text-[14px]">{
          currentPage
        }</p>
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
            onFocus={(e) => (
              (e.target.style.width = "300px"),
              (e.target.style.border = "1px solid #2D3748")
            )}
            onBlur={(e) => (
              (e.target.style.width = "199px"),
              (e.target.style.border = "0.5px solid #E2E8F0")
            )}
          />
          <div className="absolute left-[5.25px] top-[9.75px] bottom-[9.75px] flex justify-center items-center w-[27px] h-[20px] cursor-pointer">
            <SearchIcon />
          </div>

          {isLoading && (
            <div className="flex justify-center items-center">
              <MoonLoader color="#36d7b7" size={20} />
            </div>
          )}
          <ul className="flex flex-row gap-x-[18px] items-center justify-center">
            {user ? (
              <>
                <ListItem
                  icon={<MyProfileIcon />}
                  text={user.user.username}
                  link="/profile"
                />
                <ListItem icon={<NotificationIcon />} />
                <ListItem icon={<SettingsIcon />} />
                <ListItem icon={null} text="Log Out" onClick={logout} />
              </>
            ) : (
              <>
                <ListItem icon={<MyProfileIcon />} text="Log In" />
                <ListItem icon={<NotificationIcon />} />
                <ListItem icon={<SettingsIcon />} />
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
