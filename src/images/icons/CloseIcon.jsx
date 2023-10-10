import * as React from "react";
const CloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g
      stroke="#121417"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </g>
  </svg>
);
export default CloseIcon;
