/** @format */
import { motion } from "framer-motion";

function SampleLocations() {
  return (
    <div className='sample-locations-container'>
      <h2 className='h2 h2-head'>A challenge that dares you to explore your city.</h2>
      <motion.div className='chat grid-container' whileHover={{ opacity: 1 }}>
        <motion.img
          initial={{ opacity: 0.5, scale: 0.9, y: 15 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          src='/pleasure.webp'
          alt='pleasure park'
          className='chat-image'
        />
      </motion.div>
      <motion.div className='chat experience-container' whileHover={{ opacity: 1 }}>
        <div className='h2 purple '>Highly Curated </div>
        <div className='h2 purple '> experiences</div>
        <p >
          Unique restaurants, bars, art shows, performances and more, tailored
          to you.
        </p>
        <motion.img
          initial={{ opacity: 0.5, scale: 0.9, y: 15 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          src='/woodhouse.jpg'
          alt='wood house cafe
        '
          className='chat-image'
        />
      </motion.div>
      <motion.div className='chat experience-container' whileHover={{ opacity: 1 }}>
        <div className='h2 red'>a new challenge every monday</div>
        <p>
        Get weekly challenges based on the theme of the week. Delivered via the mobile app.
        </p>
        <motion.img
          initial={{ opacity: 0.5, scale: 0.9, y: 15 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          src='/woodhouse.jpg'
          alt='wood house cafe
        '
          className='chat-image'
        />
      </motion.div>
      <motion.div className='chat experience-container' whileHover={{ opacity: 1 }}>
        <div className='h2 purple'>all over the Garden city</div>
        <p >
        Discover new places in
        </p>
        <motion.img
          initial={{ opacity: 0.5, scale: 0.9, y: 15 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          src='/woodhouse.jpg'
          alt='wood house cafe
        '
          className='chat-image'
        />
      </motion.div>
      <h2 className='h2'>Just look at these locations , They're amaizing </h2>
    </div>
  );
}

export default SampleLocations;
