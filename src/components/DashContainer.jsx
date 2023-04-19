/** @format */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function DashContainer() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-items">
        <motion.img
          className="graffiti"
          src="/graffiti.jpg"
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 0.2 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        ></motion.img>
        <div className="dash-colors-container">
          <div className=" purple  ">One new experience,</div>
          <div className=" red  "> per week,</div>
          <div className=" red ">for 6 weeks</div>

          <div className=" purple ">no questions asked.</div>
        </div>
      </div>
      <Link to="/signin">
        <button className="dash-button">Take the Challenge</button>
      </Link>
    </div>
  );
}

export default DashContainer;
