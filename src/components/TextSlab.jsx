/** @format */

import React from "react";
import { motion, useScroll ,useTransform } from "framer-motion";

function TextSlab() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress,[0,1],[400,-1000])
  return (
    <motion.div className="text-slab" style={{x}}>
      Travel today
    </motion.div>
  );
}

export default TextSlab;
