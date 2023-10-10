import * as React from "react";
import {memo} from "react";

interface HomeIconProps {
    selected?: boolean;
}


const HomeIcon = ({selected, ...props}:HomeIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={16}
    viewBox="0 0 15 16"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_2_78)">
      <path
        d="M7.66264 3.46748C7.61903 3.42575 7.56099 3.40247 7.50063 3.40247C7.44027 3.40247 7.38224 3.42575 7.33862 3.46748L1.94507 8.61992C1.92216 8.64183 1.90394 8.66816 1.8915 8.69731C1.87906 8.72647 1.87267 8.75785 1.87271 8.78955L1.87183 13.6253C1.87183 13.8739 1.9706 14.1124 2.14641 14.2882C2.32223 14.464 2.56069 14.5628 2.80933 14.5628H5.62475C5.74907 14.5628 5.8683 14.5134 5.95621 14.4255C6.04412 14.3376 6.0935 14.2184 6.0935 14.094V10.1097C6.0935 10.0475 6.1182 9.98789 6.16215 9.94393C6.2061 9.89998 6.26572 9.87529 6.32788 9.87529H8.67163C8.73379 9.87529 8.7934 9.89998 8.83736 9.94393C8.88131 9.98789 8.906 10.0475 8.906 10.1097V14.094C8.906 14.2184 8.95539 14.3376 9.0433 14.4255C9.1312 14.5134 9.25043 14.5628 9.37475 14.5628H12.189C12.4377 14.5628 12.6761 14.464 12.8519 14.2882C13.0277 14.1124 13.1265 13.8739 13.1265 13.6253V8.78955C13.1265 8.75785 13.1202 8.72647 13.1077 8.69731C13.0953 8.66816 13.0771 8.64183 13.0541 8.61992L7.66264 3.46748Z"
        fill={
            selected
                ? "#FFFFFF"
                : "#4FD1C5"
        }
      />
      <path
        d="M14.3821 7.65369L12.1907 5.5572V2.37585C12.1907 2.25153 12.1413 2.13231 12.0534 2.0444C11.9655 1.95649 11.8463 1.9071 11.722 1.9071H10.3157C10.1914 1.9071 10.0722 1.95649 9.98427 2.0444C9.89637 2.13231 9.84698 2.25153 9.84698 2.37585V3.31335L8.15011 1.69089C7.99132 1.53035 7.75518 1.43835 7.50001 1.43835C7.24571 1.43835 7.01016 1.53035 6.85138 1.69119L0.619933 7.6531C0.437706 7.82888 0.414855 8.11804 0.580675 8.30847C0.622315 8.35654 0.6733 8.39563 0.730528 8.42337C0.787756 8.4511 0.850029 8.46691 0.913558 8.46981C0.977087 8.47272 1.04054 8.46266 1.10006 8.44026C1.15958 8.41787 1.21392 8.38359 1.25978 8.33953L7.33888 2.53054C7.38249 2.48882 7.44053 2.46553 7.50089 2.46553C7.56125 2.46553 7.61928 2.48882 7.6629 2.53054L13.7426 8.33953C13.8321 8.42541 13.9521 8.47228 14.0762 8.46986C14.2002 8.46745 14.3183 8.41594 14.4044 8.32663C14.5843 8.14031 14.5693 7.83269 14.3821 7.65369Z"
        fill={
            selected
                ? "#FFFFFF"
                : "#4FD1C5"
        }
      />
    </g>
    <defs>
      <clipPath id="clip0_2_78">
        <rect
          width={15}
          height={15}
          fill="white"
          transform="translate(-0.000244141 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default memo(HomeIcon);
