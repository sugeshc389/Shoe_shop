// import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import socialIcons from '../assets/socialIcons.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <Link style={{ textDecoration: 'none' }} to='/'><h2 className='brand-name' >Footland</h2></Link>
            <p>
              Praesent eget tortor sit risus egestas nulla pharetra ornare quis bibendum est bibendum sapien proin nascetur
            </p>
            <div className="social-icons">
              <img style={{ height: '10rem' }} src={socialIcons} alt="" />
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
              <button type="submit" className="btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Footland. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
