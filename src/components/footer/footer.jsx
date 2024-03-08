import React from "react";
import "./footer-style.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return <div className="footer">{year} &copy; BUYIT</div>;
};

export default Footer;
