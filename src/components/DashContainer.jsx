/** @format */
import { motion } from "framer-motion";

function DashContainer() {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-items'>
        <motion.img
          className='graffiti'
          src='/graffiti.jpg'
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}></motion.img>
        <div className=' purple dash-grid1'>One new experience per week,</div>
        <div className=' red dash-grid2'>For six weeks,no questions asked.</div>
        <div className=' red dash-grid3'>One new experience per week,</div>
        <div className=' purple dash-grid4'>For six weeks,no questions asked.</div>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='dash-button'>
        Get Started >
      </motion.button>
    </div>
  );
}

export default DashContainer;
