import * as React from "react";
const AchivmentUnderline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={144}
    height={6}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <g fill="#004A77">
        <rect width={144} height={2} rx={1} />
        <rect width={72} height={2} y={4} rx={1} />
      </g>
    </g>
    <defs>
      <clipPath>
        <path fill="#fff" d="M-104-3205h1440v5743H-104z" />
      </clipPath>
    </defs>
  </svg>
);
export default AchivmentUnderline;
