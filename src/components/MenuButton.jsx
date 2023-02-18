import React, { useState } from 'react';

function MenuButton() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='menu'>
    <svg width="24" height="24" viewBox="0 0 24 24" onClick={toggleMenu}>
      <path d={menuOpen ? "M2 2l20 0M2 11l20 0M2 20l20 0" : "M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"}style={{stroke: "white", fill: "white"}}  />
    </svg>
    </div>
  );
}

export default MenuButton;