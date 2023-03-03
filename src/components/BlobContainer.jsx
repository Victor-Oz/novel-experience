/** @format */
import { motion } from "framer-motion";

function BlobContainer() {
  return (
    <div className='blob-container'>
      <motion.img
        className='space-man'
        src='src\assets\flyboy.png'
        initial={{ x: -300 }}
        animate={{ x: -80 }}
        transition={{ delay: 1 }}>
     
      </motion.img>
      <div className='dashboard-text'>
        Discover the hidden gems of YOUR CITY
      </div>
      ;
    </div>
  );
}

export default BlobContainer;
