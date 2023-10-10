import * as React from "react";

export interface SocialProps extends React.SVGProps<SVGSVGElement> {
  iconType: "facebook" | "apple" | "google";
}

const SocialIcons = ({ iconType, ...props }: SocialProps) => {
  switch (iconType) {
    case "facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
          {...props}
        >
          <g clipPath="url(#clip0_92_243)">
            <path
              d="M28.9173 16C28.9173 8.87004 23.1307 3.08337 16.0007 3.08337C8.87065 3.08337 3.08398 8.87004 3.08398 16C3.08398 22.2517 7.52732 27.4571 13.4173 28.6584V19.875H10.834V16H13.4173V12.7709C13.4173 10.278 15.4452 8.25004 17.9382 8.25004H21.1673V12.125H18.584C17.8736 12.125 17.2923 12.7063 17.2923 13.4167V16H21.1673V19.875H17.2923V28.8521C23.8152 28.2063 28.9173 22.7038 28.9173 16Z"
              fill="#2D3748"
            />
          </g>
          <defs>
            <clipPath id="clip0_92_243">
              <rect
                width={31}
                height={31}
                fill="white"
                transform="translate(0.500488 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      );

    case "apple":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
          {...props}
        >
          <g id="IONIcon/L/logo/apple">
            <path
              id="Vector"
              d="M21.6389 8.78461C19.1976 8.78461 18.1659 9.94953 16.4658 9.94953C14.7226 9.94953 13.393 8.79308 11.2775 8.79308C9.20681 8.79308 6.99866 10.0573 5.5964 12.211C3.62741 15.248 3.96163 20.9678 7.15064 25.8407C8.29134 27.585 9.8147 29.5413 11.8127 29.5625H11.8491C13.5856 29.5625 14.1014 28.4254 16.4912 28.4121H16.5275C18.8816 28.4121 19.3539 29.5558 21.0831 29.5558H21.1194C23.1174 29.5346 24.7225 27.367 25.8633 25.6294C26.6843 24.3797 26.9894 23.7524 27.6191 22.3386C23.006 20.5876 22.265 14.0479 26.8272 11.5407C25.4346 9.79695 23.4777 8.78703 21.6328 8.78703L21.6389 8.78461Z"
              fill="#2D3748"
            />
            <path
              id="Vector_2"
              d="M21.1018 2.43903C19.6487 2.53772 17.9534 3.46287 16.9604 4.67078C16.0595 5.76547 15.3184 7.38934 15.609 8.96416H15.7253C17.2728 8.96416 18.8567 8.03234 19.7819 6.83836C20.6731 5.7019 21.3488 4.09135 21.1018 2.43903Z"
              fill="#2D3748"
            />
          </g>
        </svg>
      );
    case "google":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          {...props}
        >
          <g id="IONIcon/L/logo/google">
            <path
              id="Vector"
              d="M22.1799 10.3817L22.0739 9.93222H12.3033V14.0675H18.1411C17.535 16.9457 14.7225 18.4607 12.4252 18.4607C10.7536 18.4607 8.99158 17.7575 7.82533 16.6274C7.21002 16.0216 6.72023 15.3004 6.38401 14.505C6.0478 13.7097 5.87175 12.8558 5.86596 11.9924C5.86596 10.2505 6.64877 8.50816 7.78783 7.36206C8.92689 6.21597 10.6472 5.57472 12.3577 5.57472C14.3166 5.57472 15.7205 6.61488 16.2455 7.08925L19.1841 4.16613C18.322 3.40863 15.9539 1.49988 12.263 1.49988C9.41533 1.49988 6.68486 2.59066 4.68892 4.58003C2.71924 6.53894 1.69971 9.37159 1.69971 11.9999C1.69971 14.6282 2.66439 17.3192 4.57314 19.2936C6.61267 21.3992 9.50111 22.4999 12.4753 22.4999C15.1814 22.4999 17.7464 21.4396 19.5745 19.5158C21.3717 17.6221 22.3013 15.0017 22.3013 12.2549C22.3013 11.0985 22.185 10.4117 22.1799 10.3817Z"
              fill="#2D3748"
            />
          </g>
        </svg>
      );
  }
};
export default SocialIcons;