import React from "react";
import styles from "./Footer.module.css";
import EmailIcon from "../../assets/email.avif";
import LinkedInIcon from "../../assets/linkedin.avif";
import GitHubIcon from "../../assets/Github.png";
import LeetCodeIcon from "../../assets/leetcode.png";

const Footer = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>Let's connect and collaborate!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={EmailIcon} alt="Email icon" />
          <a href="mailto:vashuaggarwal05@gmail.com" target="_blank">vashuaggarwal05@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={LinkedInIcon} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/vashu-aggarwal-215064292/" target="_blank" rel="noopener noreferrer">
          https://www.linkedin.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={GitHubIcon} alt="GitHub icon" />
          <a href="https://github.com/vashu-aggarwal" target="_blank" rel="noopener noreferrer">
            https://github.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={LeetCodeIcon} alt="LeetCode icon" />
          <a href="https://leetcode.com/u/VashuAggarwal/" target="_blank" rel="noopener noreferrer">
            https://leetcode.com
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
