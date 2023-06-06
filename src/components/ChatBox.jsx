/** @format */
import { motion, useScroll } from "framer-motion";

function ChatBox() {
  return (
    <div className="chat-box-container">
      <motion.img
        initial={{ opacity: 0.5, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3 }}
        className="giffy"
        src="/beast.gif"
        alt=""
        loading="lazy"
      />
      <motion.div
        initial={{ opacity: 0.5, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="phonecase"
      >
        <img className="phone" src="/iphone.png" alt="" loading="lazy" />
        <div className="chat-box-subcontainer">
          <motion.div
            initial={{ x: -40, opacity: 0.5, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5 }}
            className="left-chat-container"
          >
            <div className="left-chat">Hi 👋</div>
            <div className="left-chat">You introverted Legend</div>
            <div className="left-chat">Are you trying to go out more</div>
          </motion.div>
          <motion.div
            initial={{ x: 70, opacity: 0.8, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="right-chat-container"
          >
            <img className="chat-gif" src="/giphy.gif" loading="lazy"></img>
            <div className="right-chat ">Maybe some other time </div>
          </motion.div>
          <motion.div
            initial={{ x: -40, opacity: 0.8, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="left-chat-container"
          >
            <div className="left-chat">No i'snt an option 😂😂</div>
            <div className="left-chat">I'll change your mind</div>
          </motion.div>
        </div>
      </motion.div>
      <motion.img
        initial={{ opacity: 0.5, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="giffy"
        src="/drake.webp"
        alt=""
        loading="lazy"
      />
    </div>
  );
}

export default ChatBox;
