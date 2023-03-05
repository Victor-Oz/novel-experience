/** @format */
import { motion } from "framer-motion";

function SampleLocations() {
  return (
    <div className='sample-locations-container'>
      <motion.div className='chat grid-container' whileHover={{ opacity: 1 }}>
        <h2 className='h2'>Pleasure Park </h2>
        <motion.img
          initial={{ opacity: 0.5 , scale:0.8}}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          src='/pleasure.webp'
          alt='pleasure park'
          className='chat-image'
        />
      </motion.div>
      <motion.div className='chat grid-container' whileHover={{ opacity: 1 }}>
      <h2 className='h2 wood'>The WoodHouse Cafe</h2>
      <motion.img
          initial={{ opacity: 0.5 , scale:0.8}}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
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
