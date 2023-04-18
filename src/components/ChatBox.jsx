/** @format */
import { motion, useScroll } from "framer-motion";

function ChatBox() {
  return (
    <div className="chat-box-container">
      <motion.img
          initial={{  opacity: 0.5,  scale: 0.4 }}
          whileInView={{opacity: 1,  scale: 1 }}
       viewport={{ once: false}}
       transition={{ delay: 0.3 }}
       className="giffy" src="https://media.tenor.com/fexGU0GRoB4AAAAC/its-work-a-try-mr-beast.gif" alt="" />
      <motion.div    
       initial={{  opacity: 0.5,  y:150 }}
       whileInView={{opacity: 1,  y: 0 }}
       transition={{ delay: 0.3 }}
       className="phonecase">
    <img className="phone" src="https://firebasestorage.googleapis.com/v0/b/novel-experience-4f69a.appspot.com/o/pngwing.com.png?alt=media&token=703c0320-7d63-4d88-aff5-c1c4598125d6" alt="" />
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
        initial={{ x: -40, opacity: 0.5 , scale: 0.9 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.7 }}
        className='left-chat-container'>
        <div className='left-chat'>No i'snt an option 😂😂</div>
        <div className='left-chat'>I'll change your mind</div>
      
      </motion.div>
    </div>
    </motion.div>
    <motion.img 
     initial={{  opacity: 0.5,  scale: 0.4 }}
     whileInView={{opacity: 1,  scale: 1 }}
     viewport={{ once: false}}
     transition={{ delay: 0.2 , duration:0.4 ,}}
    className="giffy" src="https://media.tenor.com/0uiKObTeltIAAAAC/changes-drake.gif" alt="" />
    </div>
  );
}

export default ChatBox;
