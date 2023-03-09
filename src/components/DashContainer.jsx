/** @format */
import { motion } from "framer-motion";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function DashContainer() {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-items'>
        <motion.img
          className='graffiti'
          src='/graffiti.jpg'
          initial={{ y: 100 ,opacity:0}}
          animate={{ y: 0 ,opacity:0.2 }}
          transition={{ delay: 0.5, duration: 0.8 }}></motion.img>
          <div className="dash-colors-container">
        <div className=' purple p '>One new experience,</div>
        <div className=' red  '> per week,</div>
        <div className=' red '>for 6 weeks</div>
  
        <div className=' purple '>no questions asked.</div>
        
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='dash-button'>
       Take the Challenge
      </motion.button>
    </div>
  );
}

export default DashContainer;
