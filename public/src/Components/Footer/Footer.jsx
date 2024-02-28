import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../../Assets/urbane-high-resolution-logo-transparent.png";


function Footer() {
  return (
    <section data-aos="fade-up" className="footerSection">
      <div className="title">
         <img src={logo} alt="logo" className="titleName"/>
      </div>
      <div className="categories">
        <ul className="list">
          <h4>Categories</h4>
          <li className="item">Men</li>
          <li className="item">Women</li>
          <li className="item">Kids</li>
          <li className="item">Beauty</li>
          <li className="item">Home decor</li>
        </ul>
        <ul className="list2">
          <h4>Get in touch</h4>
          <li className="item">Contact us</li>
          <li className="item">FAQ</li>
          <li className="item">Terms of use</li>
        </ul>
        <ul className="list3">
          <h4>Connect </h4>
          <li className="item">
            <FaFacebook className="icon" />
            <AiFillInstagram className="icon" />
            <BsTwitter className="icon" />
            <IoLogoYoutube className="icon" />
          </li>
        </ul>
      </div>
      <div className="footer-rights flex">
        <p>&copy; {new Date().getFullYear()} urbane. All rights reserved</p>
      </div>
    </section>
  );
}

export default Footer;
