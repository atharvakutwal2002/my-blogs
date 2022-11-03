import React from "react";
import classes from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.colz}>
        <div className={classes.colzicon}>
          <a href="https://www.facebook.com/atharva.kutwal.73/">
            <FaFacebookF />
          </a>

          <a href="https://www.instagram.com/atharvakutwal2002/">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/atharva-kutwal-588a8a219/">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com/AtharvaKalyan">
            <FaTwitter />
          </a>
          <a href="https://github.com/atharvakutwal2002">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className={classes.textContainerFooter}>
        <p>Made with ❤ by Atharva | &copy; 2022</p>
      </div>
    </div>
  );
};

export default Footer;
