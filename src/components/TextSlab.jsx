/** @format */

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function TextSlab() {
  const { scrollYProgress } = useScroll();

    const x = useTransform(scrollYProgress, [0, 1], [900, -9300]);
    return (
      <div className='slab-container'>
      <motion.div className='text-slab1 ' style={{ x }}>
        Who's World is this? , the world is Yours
      </motion.div>
     
    </div>
    )

 
  
}

export default TextSlab;
