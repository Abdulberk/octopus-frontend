import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const breadcrumbs = [{ path: "/dashboard", label: "Pages" }];
    const upperCase = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
    }


  pathnames.forEach((segment, index) => {
    const path = `/${pathnames.slice(0, index + 1).join("/")}`;
    const labelUpper = upperCase(segment);
    breadcrumbs.push({ path, label: labelUpper });
  });

  return (
    <div className="flex flex-row items-center justify-start font-['Helvetica'] gap-x-1">
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.path}>
          {index < breadcrumbs.length - 1 ? (
            <Link to={breadcrumb.path} className="text-[12px] font-normal leading-[150%] text-[#A0AEC0]">
              
                {breadcrumb.label}
             
            </Link>
          ) : (
            <span className="text-[12px] font-normal leading-[150%] text-[#2D3748]">
              {breadcrumb.label}
            </span>
          )}
          {index < breadcrumbs.length - 1 && (
            <span className=" text-[#2D3748] font-normal text-[12px] leading-[150%]">/</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
