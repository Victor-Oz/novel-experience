import React, { useState } from 'react';
import { motion } from "framer-motion"

function TextSlab(){
    const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    setScrollPosition(event.target.scrollTop);
  };

  const styles = {
    container: {
    fontSize: "20em",
      width: '100wh',
      height: '1000px',
      overflow: 'auto',
    },
    text: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: '100%',
      position: 'relative',
      left: `${scrollPosition}px`,
    },
  };

  return (
    <div style={styles.container} onScroll={handleScroll}>
      <div className="text-slab" style={styles.text}>
        Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Vivamus malesuada tortor ut tincidunt hendrerit. Nam euismod tincidunt ligula sed feugiat. Integer ac ultrices turpis. Aenean ut bibendum nisi. Sed auctor faucibus lacus, vel blandit justo efficitur in. Mauris in nulla auctor, iaculis leo vel, mattis libero. Nam id magna id felis consectetur euismod. Duis ullamcorper quam vel aliquam imperdiet.
      </div>
    </div>
  );
}


export default TextSlab