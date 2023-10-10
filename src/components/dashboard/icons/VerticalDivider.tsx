import * as React from "react";
const VerticalDivider = (props:React.SVGAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={2}
    height={38}
    viewBox="0 0 2 38"
    fill="none"
    {...props}
  >
    <line
      x1={0.999756}
      y1={1.50002}
      x2={0.999756}
      y2={36.5}
      stroke="#E2E8F0"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default VerticalDivider 