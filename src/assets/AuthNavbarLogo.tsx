import React, { SVGProps } from "react";



interface AuthNavbarLogoProps extends SVGProps<SVGSVGElement> {
  color?: string;
}




const AuthNavbarLogo = ({
    color, ...props
}:AuthNavbarLogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={170}
    height={33}
    viewBox="0 0 170 33"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.0171 26.2529C28.5882 26.2529 29.1553 26.1901 29.7077 26.0607C30.0136 25.9906 30.311 25.8985 30.6061 25.7916C31.4419 25.4852 32.215 25.0279 32.8893 24.4525C33.3425 24.0652 34.023 24.1206 34.4062 24.5746L34.4762 24.6554C34.8594 25.1054 34.8041 25.7877 34.3549 26.1715C33.4745 26.9205 32.4695 27.5101 31.3866 27.9126C30.3082 28.3111 29.17 28.514 28.0171 28.514C25.4139 28.514 22.9354 27.4733 21.098 25.6328C19.2567 23.7883 18.2178 21.3061 18.2178 18.6979C18.2178 18.1038 18.7042 17.6205 19.2934 17.6205H19.4C19.9931 17.6205 20.475 18.1038 20.475 18.6979C20.475 18.9856 20.4936 19.2733 20.5269 19.5571C20.7216 21.2467 21.4767 22.8182 22.6928 24.0353C24.1103 25.4519 26.0098 26.2523 28.0165 26.2523L28.0171 26.2529ZM13.8878 14.1722C13.8878 13.6194 14.3376 13.1688 14.8861 13.1688H15.6705C16.2235 13.1688 16.6721 13.6194 16.6721 14.1722C16.6721 14.7251 16.2235 15.1756 15.6705 15.1756H14.8861C14.3376 15.1756 13.8878 14.7222 13.8878 14.1722ZM17.9497 14.1722C17.9497 13.6194 18.3995 13.1688 18.9519 13.1688H19.7324C20.2848 13.1688 20.734 13.6194 20.734 14.1722C20.734 14.7251 20.2848 15.1756 19.7324 15.1756H18.9519C18.3989 15.1756 17.9497 14.7222 17.9497 14.1722ZM6.71425 26.2529C8.71756 26.2529 10.6216 25.4525 12.0357 24.0359C12.2643 23.8075 12.4776 23.5678 12.6728 23.3129C13.078 22.7894 13.4098 22.2173 13.6638 21.6125C14.0503 20.7012 14.2529 19.7126 14.2529 18.6984C14.2529 18.1043 14.7348 17.621 15.3279 17.621H15.4351C16.0282 17.621 16.5102 18.1043 16.5102 18.6984C16.5102 21.3061 15.4713 23.7888 13.6344 25.6333C11.7931 27.4739 9.31855 28.5146 6.71481 28.5146C5.56248 28.5146 4.42088 28.3117 3.34135 27.9131C2.25956 27.5107 1.25452 26.9211 0.377012 26.1721C-0.0750025 25.7882 -0.126919 25.1059 0.255685 24.656L0.322274 24.5751C0.705442 24.1212 1.39052 24.0658 1.83915 24.453C2.51689 25.0285 3.29056 25.4864 4.12292 25.7922C4.95077 26.0986 5.82771 26.2535 6.71481 26.2535L6.71425 26.2529ZM17.364 2.25774C15.4933 2.25774 13.7146 3.00674 12.3929 4.33064C11.0713 5.65905 10.323 7.43687 10.323 9.31418C10.323 10.1446 10.6582 10.6867 11.0634 11.3763C12.1277 13.1615 12.5509 14.5007 12.5509 16.6216V18.6984C12.5509 20.2513 11.9319 21.7306 10.8343 22.8295C9.74066 23.929 8.26442 24.5446 6.71368 24.5446C5.16295 24.5446 3.68389 23.9284 2.58968 22.8295C1.49209 21.7306 0.874172 20.2513 0.874172 18.6984C0.874172 18.1043 1.3561 17.621 1.94919 17.621H2.05584C2.64837 17.621 3.13086 18.1043 3.13086 18.6984C3.13086 19.6538 3.51008 20.5577 4.18443 21.2326C4.85709 21.9076 5.75999 22.2874 6.71368 22.2874C7.66737 22.2874 8.56632 21.9076 9.24011 21.2326C9.9139 20.5577 10.2937 19.6538 10.2937 18.6984V16.6216C10.2937 14.9105 9.97711 13.9625 9.12612 12.5306C8.48901 11.4572 8.06578 10.6166 8.06578 9.31418C8.06578 6.8388 9.04825 4.48213 10.7948 2.73315C12.5436 0.984724 14.8934 0 17.364 0C19.8345 0 22.1877 0.984724 23.9331 2.73315C25.6786 4.48213 26.6621 6.8388 26.6621 9.31418C26.6621 10.6166 26.2423 11.4572 25.6052 12.5306C24.7542 13.9619 24.4342 14.9099 24.4342 16.6216V18.6984C24.4342 19.6538 24.8174 20.5577 25.4878 21.2326C26.1616 21.9076 27.0634 22.2874 28.0171 22.2874C28.9708 22.2874 29.8731 21.9076 30.5435 21.2326C31.2173 20.5577 31.5965 19.6538 31.5965 18.6984C31.5965 18.1043 32.079 17.621 32.6721 17.621H32.7787C33.3713 17.621 33.8538 18.1043 33.8538 18.6984C33.8538 20.2513 33.2347 21.7306 32.1416 22.8295C31.044 23.929 29.5678 24.5446 28.0171 24.5446L27.5391 24.526C26.165 24.4118 24.8767 23.8143 23.8936 22.829C23.3852 22.3197 22.984 21.7335 22.6933 21.0919C22.3581 20.3462 22.1809 19.5317 22.1809 18.6979V16.621C22.1809 14.5001 22.6042 13.1609 23.6651 11.3758C24.0736 10.6856 24.4049 10.144 24.4049 9.31361C24.4049 7.4363 23.6617 5.65849 22.3356 4.33007C21.0134 3.00618 19.2392 2.25718 17.3645 2.25718L17.364 2.25774ZM20.4129 9.30683C20.4129 8.49565 20.0811 7.72856 19.5106 7.15649C18.9395 6.58499 18.1738 6.26051 17.3634 6.26051C16.7703 6.26051 16.2878 5.7772 16.2878 5.18308V5.07625C16.2878 4.4827 16.7703 3.99938 17.3634 3.99938C18.7691 3.99938 20.1105 4.5641 21.1048 5.55617C22.0991 6.5522 22.6657 7.89079 22.6691 9.30004C22.6691 9.59456 22.5664 9.85289 22.3564 10.0632C22.1465 10.2735 21.8926 10.3803 21.5935 10.3803H21.4874C20.8977 10.3803 20.4158 9.89698 20.4124 9.30683H20.4129ZM17.364 24.3722C17.7358 24.3569 18.1038 24.5344 18.3137 24.8696C19.3594 26.5073 20.8068 27.8651 22.5043 28.8057C24.1984 29.739 26.0837 30.2223 28.0165 30.2223C28.6096 30.2223 29.0921 30.7056 29.0921 31.2992V31.4066C29.0921 32.0001 28.609 32.4835 28.0165 32.4835C25.7039 32.4835 23.4433 31.9006 21.418 30.7825C19.8605 29.9267 18.483 28.7724 17.364 27.3999C16.2444 28.7724 14.8674 29.9267 13.3128 30.7825C11.2874 31.9006 9.02342 32.4835 6.71368 32.4835C6.12115 32.4835 5.63867 32.0001 5.63867 31.4066V31.2992C5.63867 30.7051 6.12115 30.2223 6.71368 30.2223C8.64363 30.2223 10.529 29.739 12.2225 28.8057C13.9239 27.8651 15.3674 26.5073 16.4131 24.8696C16.6264 24.5339 16.9949 24.3569 17.3634 24.3722H17.364Z"
      fill={
        color ? color : "#4FD1C5"
      }
    />
    <path
      d="M42.7312 18.7443V18.6934C42.7312 13.6319 46.8038 9.52789 52.2337 9.52789C57.6635 9.52789 61.6854 13.5815 61.6854 18.6431V18.694C61.6854 23.7544 57.6127 27.8595 52.1829 27.8595C46.7531 27.8595 42.7312 23.8047 42.7312 18.7443ZM56.7075 18.7443V18.6934C56.7075 16.1502 54.8735 13.9343 52.1829 13.9343C49.4922 13.9343 47.7333 16.0999 47.7333 18.6431V18.694C47.7333 21.2372 49.569 23.4531 52.2331 23.4531C54.8972 23.4531 56.707 21.2875 56.707 18.7443H56.7075Z"
      fill={color ? color : "#4FD1C5"}
    />
    <path
      d="M63.6204 18.7443V18.6934C63.6204 13.5567 67.5672 9.52789 72.8961 9.52789C76.4907 9.52789 78.8038 11.0383 80.3619 13.2039L76.6922 16.0496C75.6855 14.7912 74.5303 13.9852 72.8464 13.9852C70.3826 13.9852 68.6485 16.0756 68.6485 18.6431V18.694C68.6485 21.3367 70.3826 23.4028 72.8464 23.4028C74.6804 23.4028 75.7622 22.5464 76.8175 21.262L80.4872 23.8804C78.8281 26.1721 76.5912 27.86 72.6946 27.86C67.6677 27.86 63.6199 24.0076 63.6199 18.7448L63.6204 18.7443Z"
      fill={color ? color : "#4FD1C5"}
    />
    <path
      d="M86.8717 14.1616H81.592V9.88123H97.0266V14.1616H91.7469V27.5062H86.8717V14.1616Z"
      fill={color ? color : "#4FD1C5"}
    />
    <path
      d="M97.8054 18.7443V18.6934C97.8054 13.6319 101.878 9.52789 107.308 9.52789C112.738 9.52789 116.76 13.5815 116.76 18.6431V18.694C116.76 23.7544 112.687 27.8595 107.257 27.8595C101.827 27.8595 97.8054 23.8047 97.8054 18.7443ZM111.782 18.7443V18.6934C111.782 16.1502 109.948 13.9343 107.257 13.9343C104.566 13.9343 102.807 16.0999 102.807 18.6431V18.694C102.807 21.2372 104.643 23.4531 107.307 23.4531C109.971 23.4531 111.781 21.2875 111.781 18.7443H111.782Z"
      fill={color ? color : "#4FD1C5"}

    />
    <path
      d="M119.298 9.88062H126.839C131.289 9.88062 134.154 12.1723 134.154 16.075V16.1242C134.154 20.279 130.962 22.4706 126.588 22.4706H124.175V27.5062H119.298V9.88062ZM126.487 18.6425C128.221 18.6425 129.277 17.7352 129.277 16.3509V16.3C129.277 14.7895 128.221 13.984 126.462 13.984H124.175V18.6419H126.487L126.487 18.6425Z"
      fill={color ? color : "#4FD1C5"}

    />
    <path
      d="M135.989 19.7753V9.88062H140.941V19.6753C140.941 22.2185 142.222 23.4265 144.183 23.4265C146.144 23.4265 147.425 22.2677 147.425 19.8013V9.88062H152.377V19.6493C152.377 25.34 149.135 27.8329 144.132 27.8329C139.129 27.8329 135.989 25.2897 135.989 19.7753H135.989Z"
      fill={color ? color : "#4FD1C5"}

    />
    <path
      d="M153.937 24.8878L156.652 21.6385C158.386 23.0246 160.322 23.7533 162.358 23.7533C163.665 23.7533 164.368 23.3005 164.368 22.5453V22.4944C164.368 21.764 163.79 21.3616 161.402 20.8076C157.657 19.9512 154.766 18.8935 154.766 15.2684V15.2175C154.766 11.9439 157.355 9.57709 161.578 9.57709C164.57 9.57709 166.907 10.3826 168.817 11.9191L166.38 15.3679C164.771 14.235 163.011 13.6307 161.452 13.6307C160.271 13.6307 159.693 14.1344 159.693 14.7636V14.8144C159.693 15.62 160.295 15.9733 162.734 16.5272C166.781 17.408 169.295 18.7172 169.295 22.0156V22.0665C169.295 25.6673 166.454 27.808 162.181 27.808C159.065 27.808 156.098 26.8256 153.937 24.8872L153.937 24.8878Z"
      fill={color ? color : "#4FD1C5"}
    />
    <path
      d="M166.048 5.10566H165.245V7.67883H164.735V5.10566H163.933V4.62347H166.047V5.10566H166.048ZM168.042 6.78908L168.755 4.62347H169.488V7.67883H169.01V5.29051H168.997L168.214 7.67883H167.857L167.074 5.29051H167.062V7.67883H166.584V4.62347H167.323L168.043 6.78908H168.042Z"
      fill={color ? color : "#4FD1C5"}
      
    />
  </svg>
);
export default AuthNavbarLogo
