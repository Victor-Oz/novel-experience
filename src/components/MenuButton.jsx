import React from 'react';

const MenuButton = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path d="M0 0h24v24H0z" fill= "none"  />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" stroke="rgb(0, 0, 0)" strokeWidth="1" />
    </svg>
  );
};

export default MenuButton;