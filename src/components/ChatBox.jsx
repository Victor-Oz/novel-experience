/** @format */
import { motion, useScroll } from "framer-motion";

function ChatBox() {
  return (
    <div className="chat-box-container">
    <img className="phone" src="src\assets\iphone.png" alt="" />
    <div className='chat-box-subcontainer'>
  
      <motion.div
        initial={{ x: -40, opacity: 0.5, scale: 0.9 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: false}}
        transition={{ delay: 0.5 }}
        className='left-chat-container'>
        <div className='left-chat'>Hi 👋</div>
        <div className='left-chat'>You introverted Legend</div>
        <div className='left-chat'>Are you trying to go out more</div>
      </motion.div>
      <motion.div
        initial={{ x: 70, opacity: 0.5, scale: 0.9 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.7 }}
        className='right-chat-container'>
        <img className='chat-gif' src='/giphy.gif'></img>
        <div className='right-chat '>Maybe some other time </div>
      </motion.div>
      <motion.div
        initial={{ x: -40, opacity: 0.5, scale: 0.9 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.7 }}
        className='left-chat-container'>
        <div className='left-chat'>No i'snt an option 😂😂</div>
        <div className='left-chat'>I'll change your mind</div>
      
      </motion.div>
    </div>
    </div>
  );
}

export default ChatBox;
