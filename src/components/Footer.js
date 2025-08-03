import React from 'react';
import { FaHotel, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <FaHotel className="logo-icon" />
            <span>Umang World Resort</span>
          </div>
          <p className="footer-description">
            Where Luxury Meets Adventure. Experience the perfect blend of thrill, leisure, and luxury — designed for families, friends, and corporate getaways.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              <FaFacebook />
            </a>
            <a href="#" className="social-link">
              <FaInstagram />
            </a>
            <a href="#" className="social-link">
              <FaTwitter />
            </a>
            <a href="https://wa.me/1234567890" className="social-link whatsapp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#adventures">Adventures</a></li>
            <li><a href="#indoor-games">Indoor Games</a></li>
            <li><a href="#pool">Swimming Pool</a></li>
            <li><a href="#entertainment">Entertainment</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Activities</h3>
          <ul className="footer-links">
            <li><a href="#adventures">Zip Line</a></li>
            <li><a href="#adventures">Bicycle on Rope</a></li>
            <li><a href="#adventures">Off-Roading Cars</a></li>
            <li><a href="#adventures">Hoverboard</a></li>
            <li><a href="#indoor-games">8-Ball Pool</a></li>
            <li><a href="#indoor-games">Archery</a></li>
            <li><a href="#entertainment">Mini Zoo</a></li>
            <li><a href="#entertainment">Photography</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Address</h4>
                <p>Survey No. 337, Dhanali, Mehsana-Ahmedabad Highway, Mehsana, Gujarat, India</p>
              </div>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 87358 06414</p>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>umangworldresort@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <FaWhatsapp className="contact-icon" />
              <div>
                <h4>WhatsApp</h4>
                <p>+91 98750 77159</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; 2025 Umang World Resort. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 