/** @format */

import React from "react";
import { motion, useScroll ,useTransform } from "framer-motion";

function TextSlab() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress,[0,1],[150,-2700])
  return (<div className="slab-container">
    <motion.div className="text-slab" style={{x}}>
      Explore Your World
    </motion.div></div>
  );
}

export default TextSlab;
