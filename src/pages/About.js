import React from 'react';
import { FaMountain, FaLeaf, FaClock, FaStar, FaUsers, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Umang World Resort</h1>
          <p>Where Luxury Meets Adventure</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                A perfect blend of thrill, leisure, and luxury — designed for families, friends, and corporate getaways. 
                Umang World Resort was born from a vision to create a unique destination that combines the excitement of 
                outdoor adventures with the comfort of luxury accommodation.
              </p>
              <p>
                Nestled in the heart of nature, our resort offers an unparalleled experience where guests can indulge in 
                thrilling activities during the day and relax in premium comfort at night. From zip-lining through scenic 
                landscapes to enjoying gourmet meals by the pool, every moment at Umang World Resort is crafted to create 
                lasting memories.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span>Resort Story Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p className="mission-text">
              To create unforgettable memories through curated adventure, luxury, and exceptional hospitality.
            </p>
            <div className="mission-values">
              <div className="value-item">
                <FaHeart className="value-icon" />
                <h3>Passion for Excellence</h3>
                <p>We strive for excellence in every aspect of our service</p>
              </div>
              <div className="value-item">
                <FaUsers className="value-icon" />
                <h3>Guest-Centric Approach</h3>
                <p>Your satisfaction and comfort are our top priorities</p>
              </div>
              <div className="value-item">
                <FaStar className="value-icon" />
                <h3>Quality Experience</h3>
                <p>Premium facilities and world-class amenities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Umang World Resort?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaMountain />
              </div>
              <h3>Unique Combination</h3>
              <p>Adventure + Leisure in one place. Experience the thrill of outdoor activities and the comfort of luxury accommodation all in one destination.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaLeaf />
              </div>
              <h3>Nature-Friendly Space</h3>
              <p>Artificial mountain & waterfall create a natural environment perfect for relaxation and adventure activities.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaClock />
              </div>
              <h3>24-Hour Stay</h3>
              <p>Unlimited entertainment & premium services available round the clock for your complete satisfaction.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3>Family-Friendly</h3>
              <p>Activities and facilities designed for all age groups, making it perfect for family getaways.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaStar />
              </div>
              <h3>Premium Services</h3>
              <p>From gourmet dining to professional event management, we provide top-notch services.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaHeart />
              </div>
              <h3>Memorable Experiences</h3>
              <p>Every activity and service is designed to create unforgettable memories for our guests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="facilities-overview">
        <div className="container">
          <h2>Our Facilities</h2>
          <div className="facilities-grid">
            <div className="facility-item">
              <h3>Outdoor Adventures</h3>
              <ul>
                <li>Zip Line Adventure</li>
                <li>Bicycle on Rope</li>
                <li>Off-Roading Cars</li>
                <li>Self-Balancing Hoverboard</li>
                <li>Artificial Mountain & Waterfall</li>
              </ul>
            </div>
            <div className="facility-item">
              <h3>Indoor Entertainment</h3>
              <ul>
                <li>8-Ball Pool & Air Hockey</li>
                <li>Archery & Hammer Throw</li>
                <li>Carrom, Chess, Ludo</li>
                <li>Ring Toss Games</li>
                <li>Foosball</li>
              </ul>
            </div>
            <div className="facility-item">
              <h3>Swimming & Events</h3>
              <ul>
                <li>Large Swimming Pool</li>
                <li>DJ Pool Parties</li>
                <li>Movie Projector Nights</li>
                <li>Event Management</li>
                <li>Wedding & Corporate Events</li>
              </ul>
            </div>
            <div className="facility-item">
              <h3>Additional Services</h3>
              <ul>
                <li>Professional Photography</li>
                <li>Selfie Points & Vintage Spots</li>
                <li>Mini Zoo & Pet Zone</li>
                <li>Multi-cuisine Dining</li>
                <li>24x7 Room Service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Adventure?</h2>
            <p>Book your stay at Umang World Resort and create memories that last a lifetime</p>
            <div className="cta-buttons">
              <a href="/booking" className="btn btn-primary">Book Now</a>
              <a href="/contact" className="btn btn-outline">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 