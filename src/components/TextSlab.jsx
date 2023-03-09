/** @format */

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function TextSlab() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [400, -5100]);
  const y = useTransform(scrollYProgress, [0, 1], [400, -5100]);
  const z = useTransform(scrollYProgress, [0, 1], [400, -5100]);
  return (
    <div className='slab-container'>
      <motion.div className='text-slab1 ' style={{ x }}>
        explore our city
      </motion.div>
      <motion.div className=' text-slab2  ' style={{ y }}>
        explore our city
      </motion.div>
      <motion.div className='text-slab3 ' style={{ z }}>
        explore our city
      </motion.div>
    </div>
  );
}

export default TextSlab;
