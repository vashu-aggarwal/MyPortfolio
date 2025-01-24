// import React from "react";
import "./Intro.css";
import { Link } from "react-scroll";
import bg from "../../assets/bg2.jpg";
import btnimg from "../../assets/hireme.png";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div>
      <section id="intro" className="intro">
        {/* Left Content with Sequenced Motion */}
        <motion.div
          className="introContent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* "Hello," appears first */}
          <motion.span
            className="hello"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Hello,
          </motion.span>
          {/* "I'm Vashu" appears next */}
          <motion.span
            className="introText"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            I'm <span className="introName">Vashu</span>
          </motion.span>
          {/* "Welcome to my portfolio" appears after */}
          <motion.span
            className="introText"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Welcome To My Personal Portfolio
          </motion.span>
          {/* Paragraph appears */}
          <motion.p
            className="introPara"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            I'm Vashu Aggarwal, a pre-final year B.Tech CSE student passionate
            about web development and machine learning, dedicated to creating
            impactful solutions and growing as a software engineer.
          </motion.p>
          {/* Button appears */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            <a
              href="https://drive.google.com/file/d/1AN0LQkRRjhSSioM5GoNn9jeRqLu3Ez92/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">
                <img src={btnimg} alt="Hire Me" className="btnImg" />
                Hire Me
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image with Smooth Motion */}
        <div className="bgContainer">
          <motion.img
            src={bg}
            alt="profile"
            className="bg"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Intro;
