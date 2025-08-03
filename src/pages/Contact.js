import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaInfoCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with us for bookings, inquiries, and support</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <FaPhone className="contact-icon" />
              <h3>Phone</h3>
              <p>+91 123 456 7890</p>
              <p>+91 987 654 3210</p>
            </div>
            <div className="contact-card">
              <FaEnvelope className="contact-icon" />
              <h3>Email</h3>
              <p>umangworldresort@gmail.com</p>
            </div>
            <div className="contact-card">
              <FaMapMarkerAlt className="contact-icon" />
              <h3>Address</h3>
              <p>Survey No. 337, Dhanali, Mehsana-Ahmedabad Highway, Mehsana, Gujarat, India</p>
              <p>Pin Code: 384310</p>
            </div>
            <div className="contact-card">
              <FaWhatsapp className="contact-icon" />
              <h3>WhatsApp</h3>
              <p>+91 123 456 7890</p>
              <p>24/7 Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-form-map">
        <div className="container">
          <div className="form-map-content">
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="activities">Activities Information</option>
                      <option value="events">Event Management</option>
                      <option value="support">Customer Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Please describe your inquiry or request..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message
                </button>
              </form>
            </div>
            <div className="map-section">
              <h2>Find Us</h2>
              <div className="map-placeholder">
                <span>Google Maps Integration</span>
                <p>Survey No. 337, Dhanali, Mehsana-Ahmedabad Highway, Mehsana, Gujarat, India</p>
              </div>
              <div className="location-info">
                <h3>How to Reach</h3>
                <div className="location-item">
                  <FaInfoCircle />
                  <div>
                    <h4>By Road</h4>
                    <p>Well-connected by major highways and local roads</p>
                  </div>
                </div>
                <div className="location-item">
                  <FaInfoCircle />
                  <div>
                    <h4>By Train</h4>
                    <p>Nearest railway station: 15 km away</p>
                  </div>
                </div>
                <div className="location-item">
                  <FaInfoCircle />
                  <div>
                    <h4>By Air</h4>
                    <p>Nearest airport: 45 km away</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="business-hours">
        <div className="container">
          <h2>Business Hours</h2>
          <div className="hours-grid">
            <div className="hours-card">
              <FaClock className="hours-icon" />
              <h3>Resort Operations</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span>Check-in:</span>
                  <span>8:00 AM</span>
                </div>
                <div className="hours-item">
                  <span>Check-out:</span>
                  <span>8:00 AM (Next Day)</span>
                </div>
                <div className="hours-item">
                  <span>Reception:</span>
                  <span>24/7</span>
                </div>
                <div className="hours-item">
                  <span>Activities:</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
            <div className="hours-card">
              <FaInfoCircle className="hours-icon" />
              <h3>Contact Support</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span>Phone Support:</span>
                  <span>24/7</span>
                </div>
                <div className="hours-item">
                  <span>WhatsApp:</span>
                  <span>24/7</span>
                </div>
                <div className="hours-item">
                  <span>Email Response:</span>
                  <span>Within 24 hours</span>
                </div>
                <div className="hours-item">
                  <span>Booking Confirmation:</span>
                  <span>Within 2 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="quick-contact">
        <div className="container">
          <div className="quick-contact-content">
            <h2>Need Immediate Assistance?</h2>
            <p>Contact us directly for urgent bookings and inquiries</p>
            <div className="quick-contact-buttons">
              <a href="tel:+911234567890" className="btn btn-primary">
                <FaPhone /> Call Now
              </a>
              <a href="https://wa.me/1234567890" className="btn btn-outline">
                <FaWhatsapp /> WhatsApp
              </a>
              <a href="mailto:umangworldresort@gmail.com" className="btn btn-outline">
                <FaEnvelope /> Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 