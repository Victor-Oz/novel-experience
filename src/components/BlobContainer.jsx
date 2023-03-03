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
      <motion.img
        className='dash-alien'
        src='src\assets\alien.png'
        initial={{ x: 300 }}
        animate={{ x: -40 }}
        transition={{ delay: 0.7 }}>
     
      </motion.img>
    </div>
  );
}

export default BlobContainer;
