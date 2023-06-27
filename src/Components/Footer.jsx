// import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
          <Link style={{ textDecoration: 'none' }} to='/'><h2 className='brand-name' >Foot  Island</h2></Link>
            <p>
            Praesent eget tortor sit risus egestas nulla pharetra ornare quis bibendum est bibendum sapien proin nascetur
            </p>
            <div className="social-icons">
              <a href="#" className="icon-link">
                <i className="fa fa-facebook"><BsFacebook /></i>
              </a>
              <a href="#" className="icon-link">
                <i className="fa fa-twitter"><AiFillTwitterCircle/></i>
              </a>
              <a href="#" className="icon-link">
                <i className="fa fa-instagram"><AiFillInstagram/></i>
              </a>
              <a href="#" className="icon-link">
                <i className="fa fa-linkedin"><AiFillLinkedin/></i>
              </a>
            </div>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section contact-form">
            <h2>Contact Us</h2>
            <form>
              <input
                type="email"
                name="email"
                className="text-input contact-input"
                placeholder="Your email address"
              />
              <textarea
                rows="4"
                name="message"
                className="text-input contact-input"
                placeholder="Your message"
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
