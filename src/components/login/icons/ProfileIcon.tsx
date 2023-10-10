import * as React from "react";


interface DashboardIconProps {
    mode?: "light" | "dark";
    props?: React.SVGProps<SVGSVGElement>;
}


const ProfileIcon = ({
    mode, ...props
}:DashboardIconProps) => {

  
    if (mode==="light") {
        return (
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width={12}
          height={12}
          viewBox="0 0 12 12"
          fill="none"
          {...props}
        >
          <g id="Icon" clipPath="url(#clip0_92_42)">
            <path
              id="Vector"
              d="M7.64707 2.1349C7.22899 1.68351 6.64504 1.43494 6.00051 1.43494C5.35254 1.43494 4.76666 1.68201 4.35051 2.1306C3.92984 2.58414 3.72488 3.20052 3.77301 3.86611C3.8684 5.17923 4.86764 6.24744 6.00051 6.24744C7.13338 6.24744 8.1309 5.17945 8.22779 3.86654C8.27656 3.20697 8.07031 2.59187 7.64707 2.1349Z"
              fill="#2D3748"
            />
            <path
              id="Vector_2"
              d="M9.78161 11.0594H2.21912C2.12013 11.0607 2.0221 11.0399 1.93216 10.9986C1.84223 10.9572 1.76264 10.8963 1.6992 10.8203C1.55955 10.6534 1.50326 10.4254 1.54494 10.1949C1.72627 9.18902 2.29216 8.34404 3.18162 7.75085C3.97181 7.22427 4.97277 6.93445 6.00037 6.93445C7.02796 6.93445 8.02892 7.22449 8.81911 7.75085C9.70857 8.34382 10.2745 9.1888 10.4558 10.1947C10.4975 10.4252 10.4412 10.6532 10.3015 10.8201C10.2381 10.8961 10.1585 10.9571 10.0686 10.9985C9.97865 11.0399 9.88062 11.0607 9.78161 11.0594Z"
              fill="#2D3748"
            />
          </g>
          <defs>
            <clipPath id="clip0_92_42">
              <rect
                width={11}
                height={11}
                fill="white"
                transform="translate(0.500488 0.74762)"
              />
            </clipPath>
          </defs>
        </svg>
       
        )
    }
   
    else {
        return (
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width={12}
          height={12}
          viewBox="0 0 12 12"
          fill="none"
          {...props}
          >
          <g id="Icon" clipPath="url(#clip0_92_190)">
            <path
              id="Vector"
              d="M7.64609 2.13496C7.22801 1.68357 6.64406 1.435 5.99953 1.435C5.35156 1.435 4.76568 1.68207 4.34953 2.13066C3.92887 2.5842 3.72391 3.20058 3.77203 3.86617C3.86742 5.17929 4.86666 6.2475 5.99953 6.2475C7.1324 6.2475 8.12992 5.17951 8.22682 3.8666C8.27559 3.20703 8.06934 2.59193 7.64609 2.13496Z"
              fill="white"
            />
            <path
              id="Vector_2"
              d="M9.78088 11.0595H2.21838C2.1194 11.0608 2.02137 11.04 1.93143 10.9986C1.84149 10.9573 1.76191 10.8964 1.69846 10.8204C1.55881 10.6535 1.50253 10.4255 1.5442 10.195C1.72553 9.18908 2.29143 8.3441 3.18088 7.75092C3.97108 7.22433 4.97204 6.93451 5.99963 6.93451C7.02723 6.93451 8.02819 7.22455 8.81838 7.75092C9.70783 8.34388 10.2737 9.18886 10.4551 10.1948C10.4967 10.4253 10.4405 10.6532 10.3008 10.8202C10.2374 10.8962 10.1578 10.9571 10.0679 10.9985C9.97792 11.0399 9.87988 11.0608 9.78088 11.0595Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_92_190">
              <rect
                width={11}
                height={11}
                fill="white"
                transform="translate(0.499512 0.747681)"
              />
            </clipPath>
          </defs>
          </svg>
        )
    }

}

export default ProfileIcon;

