import * as React from "react";


const SearchIcon = (props: React.SVGProps<SVGSVGElement>
    ) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <g id="Icon">
      <path
        id="Vector"
        d="M14.1302 13.0962L11.3737 10.3397C12.0373 9.45617 12.3956 8.38077 12.3944 7.27579C12.3944 4.45333 10.0981 2.15704 7.27561 2.15704C4.45315 2.15704 2.15686 4.45333 2.15686 7.27579C2.15686 10.0983 4.45315 12.3945 7.27561 12.3945C8.38059 12.3957 9.45598 12.0375 10.3395 11.3738L13.096 14.1304C13.2356 14.2551 13.4175 14.3217 13.6046 14.3165C13.7917 14.3112 13.9697 14.2346 14.102 14.1022C14.2344 13.9699 14.311 13.7919 14.3163 13.6048C14.3215 13.4177 14.2549 13.2357 14.1302 13.0962ZM3.61936 7.27579C3.61936 6.55265 3.83379 5.84576 4.23555 5.24449C4.6373 4.64322 5.20833 4.17459 5.87642 3.89786C6.54451 3.62113 7.27966 3.54872 7.98891 3.6898C8.69815 3.83087 9.34963 4.1791 9.86097 4.69043C10.3723 5.20177 10.7205 5.85325 10.8616 6.56249C11.0027 7.27174 10.9303 8.00688 10.6535 8.67498C10.3768 9.34307 9.90818 9.9141 9.30691 10.3159C8.70564 10.7176 7.99875 10.932 7.27561 10.932C6.30627 10.9309 5.37696 10.5453 4.69153 9.85987C4.00611 9.17444 3.62052 8.24513 3.61936 7.27579Z"
        fill="#2D3748"
      />
    </g>
  </svg>
);
export default SearchIcon;