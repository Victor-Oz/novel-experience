/** @format */
import { motion } from "framer-motion";

function SampleLocations() {
  return (
    <div className='sample-locations-container'>
      <h2 className='h2 h2-head'>
        A challenge that dares you to explore your city.
      </h2>
      <motion.div className='chat grid-container' whileHover={{ opacity: 1 }}>
        <motion.img
          initial={{
            opacity: 0.5,
            scale: 0.97,
            y: 15,
            filter: "brightness(0.5)",
          }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.03, filter: "brightness(1)" }}
          src='/wine.jpg'
          alt='wine bottle photo park'
          className='chat-image'
        />
      </motion.div>
      <motion.div
        className='chat experience-container'
        whileHover={{ opacity: 1 }}>
        <div className='experience-subcontainer'>
          <div className='h2 purple '>Highly Curated </div>
          <div className='h2 purple '> experiences</div>
          <p>
            Unique restaurants, bars, art shows, performances and more, tailored
            to you.
          </p>
        </div>
        <motion.img
          initial={{
            opacity: 0.5,
            scale: 0.97,
            y: 15,
            filter: "brightness(0.5)",
          }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.03, filter: "brightness(1)" }}
          src='/pleasure.webp'
          alt='pleasure park'
          className='chat-image'
        />
      </motion.div>
      <motion.div
        className='chat experience-container'
        whileHover={{ opacity: 1 }}>
        <div className='experience-subcontainer'>
          <div className='h2 red'>A new challenge </div>
          <div className='h2 red'>Every monday</div>
          <p>
            Get weekly challenges based on the theme of the week. Delivered via
            the mobile app.
          </p>
        </div>
        <motion.img
          initial={{
            opacity: 0.5,
            scale: 0.97,
            y: 15,
            filter: "brightness(0.5)",
          }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.03, filter: "brightness(1)" }}
          src='/gardencity.jpg'
          alt='wood house cafe
        '
          className='chat-image'
        />
      </motion.div>
      <motion.div
        className='chat experience-container'
        whileHover={{ opacity: 1 }}>
        <div className='experience-subcontainer'>
          <div className='h2 purple'>All over </div>
          <div className='h2 purple'>The Garden city</div>
          <p>Discover new places in GRA , Olu Obasanjo road and Beyond</p>
        </div>
        <motion.img
          initial={{
            opacity: 0.5,
            scale: 0.97,
            y: 15,
            filter: "brightness(0.6)",
          }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.03, filter: "brightness(1)" }}
          src='/happyman.jpg'
          alt='photograph of a man happy
        '
          className='chat-image'
        />
      </motion.div>
      <h2 className='h2 h2-foot '>
        Just look at these locations , They're amaizing{" "}
      </h2>
    </div>
  );
}

export default SampleLocations;
