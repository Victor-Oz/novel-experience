/** @format */
import { motion, useScroll } from "framer-motion";

function StaticBlob() {
  return (
    <div className='chat-box-container'>
      <motion.div
        initial={{ x: -40, opacity: 0.5, scale: 0.9 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className='left-chat-container'>
        <div className='left-chat'>Hi 👋</div>
        <div className='left-chat'>You introverted Legend</div>
        <div className='left-chat'>Are you trying to go out more</div>
      </motion.div>
      <motion.div
        initial={{ x: 70, opacity: 0.5, scale: 0.9 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className='right-chat-container'>
        <img className='chat-gif' src='src\assets\giphy.gif'></img>
        <div className='right-chat '>Maybe some other time </div>
      </motion.div>
      <motion.div
        initial={{ x: -40, opacity: 0.5, scale: 0.9 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className='left-chat-container'>
        <div className='left-chat'>No i'snt an option 😂😂</div>
        <div className='left-chat'>I'll change your mind</div>
        {/* <img src="src\assets\pleasure.webp" alt="pleasure park" className="chat-image" />
      <img src="src\assets\boomtown.jpg" alt="pleasure park" className="chat-image" /> */}
      </motion.div>
    </div>
  );
}

export default StaticBlob;
