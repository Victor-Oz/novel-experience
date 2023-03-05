/** @format */
import { motion } from "framer-motion";

function DashContainer() {
  return (
    <div>
      <div className='dashboard-container'>
        <motion.img
          className='space-man'
          src='src\assets\flyboy.png'
          initial={{ x: -300 }}
          animate={{ x: -80 }}
          transition={{ delay: 0.5 }}></motion.img>
        <div className='dashboard-text'>
          Discover the hidden gems of YOUR CITY
        </div>
        <motion.img
          className='dash-alien'
          src='src\assets\alien.png'
          initial={{ scale: 1.4 }}
          animate={{ x: -40 ,scale: 1}}
          transition={{ delay: 0.7 }}></motion.img>
      </div>
      <motion.button
        whileHover={{ scale: 1.1  }}
        whileTap={{ scale: 0.9  }}
        className='dash-button'>
        Get Started
      </motion.button>
    </div>
  );
}

export default DashContainer;
