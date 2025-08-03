import React from 'react';
import { FaCamera, FaStar, FaUsers, FaPalette } from 'react-icons/fa';
import './Photography.css';

const Photography = () => {
  return (
    <div className="photography">
      {/* Hero Section */}
      <section className="photography-hero">
        <div className="photography-hero-content">
          <h1>Photography & Selfie Points</h1>
          <p>Capture your memories with our Instagram-worthy photo zones</p>
        </div>
      </section>

      {/* Photography Overview */}
      <section className="photography-overview">
        <div className="container">
          <div className="overview-content">
            <h2>Professional Photography Services</h2>
            <p>From dedicated selfie spots to professional photography sessions, we help you capture every moment of your stay at Umang World Resort.</p>
            <div className="photography-features">
              <div className="feature-item">
                <FaCamera className="feature-icon" />
                <h3>Dedicated Selfie Spots</h3>
                <p>Instagram-worthy photo zones across the property</p>
              </div>
              <div className="feature-item">
                <FaStar className="feature-icon" />
                <h3>Professional Sessions</h3>
                <p>On-demand photography & videography for your trip</p>
              </div>
              <div className="feature-item">
                <FaPalette className="feature-icon" />
                <h3>Vintage Spots</h3>
                <p>Old-school-themed corners for unique photo memories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selfie Points */}
      <section className="selfie-points">
        <div className="container">
          <h2>Instagram-Worthy Selfie Spots</h2>
          <div className="spots-grid">
            <div className="spot-card">
              <div className="spot-image">
                <span>Mountain View</span>
              </div>
              <h3>Artificial Mountain</h3>
              <p>Stunning backdrop with panoramic views</p>
            </div>
            <div className="spot-card">
              <div className="spot-image">
                <span>Waterfall</span>
              </div>
              <h3>Artificial Waterfall</h3>
              <p>Beautiful cascading water feature</p>
            </div>
            <div className="spot-card">
              <div className="spot-image">
                <span>Pool Area</span>
              </div>
              <h3>Swimming Pool</h3>
              <p>Refreshing poolside photos</p>
            </div>
            <div className="spot-card">
              <div className="spot-image">
                <span>Garden</span>
              </div>
              <h3>Lush Gardens</h3>
              <p>Natural beauty and greenery</p>
            </div>
            <div className="spot-card">
              <div className="spot-image">
                <span>Adventure</span>
              </div>
              <h3>Adventure Zones</h3>
              <p>Action shots from activities</p>
            </div>
            <div className="spot-card">
              <div className="spot-image">
                <span>Sunset</span>
              </div>
              <h3>Sunset Points</h3>
              <p>Golden hour photography</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Photography */}
      <section className="professional-photography">
        <div className="container">
          <h2>Professional Photography Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Portrait Sessions</h3>
              <p>Professional portrait photography for individuals and families</p>
              <ul>
                <li>Studio-style portraits</li>
                <li>Outdoor natural lighting</li>
                <li>Family group photos</li>
                <li>High-resolution images</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Event Photography</h3>
              <p>Capture your special events and celebrations</p>
              <ul>
                <li>Birthday celebrations</li>
                <li>Corporate events</li>
                <li>Wedding ceremonies</li>
                <li>Party documentation</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Videography</h3>
              <p>Professional video recording services</p>
              <ul>
                <li>Event videos</li>
                <li>Resort tour videos</li>
                <li>Activity documentation</li>
                <li>Edited highlights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vintage Spots */}
      <section className="vintage-spots">
        <div className="container">
          <h2>Vintage Photo Spots</h2>
          <p>Step back in time with our themed vintage corners</p>
          <div className="vintage-grid">
            <div className="vintage-item">
              <h3>Retro Cafe Corner</h3>
              <p>1950s style cafe setup with vintage props</p>
            </div>
            <div className="vintage-item">
              <h3>Classic Car Display</h3>
              <p>Vintage car models for classic photo shoots</p>
            </div>
            <div className="vintage-item">
              <h3>Old School Games</h3>
              <p>Traditional games and activities setup</p>
            </div>
            <div className="vintage-item">
              <h3>Heritage Wall</h3>
              <p>Traditional artwork and cultural elements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Packages */}
      <section className="photography-packages">
        <div className="container">
          <h2>Photography Packages</h2>
          <div className="packages-grid">
            <div className="package-card">
              <h3>Basic Package</h3>
              <div className="package-price">₹1,500</div>
              <ul>
                <li>30 minutes session</li>
                <li>10 edited photos</li>
                <li>Digital delivery</li>
                <li>Basic editing</li>
              </ul>
            </div>
            <div className="package-card">
              <h3>Standard Package</h3>
              <div className="package-price">₹3,000</div>
              <ul>
                <li>1 hour session</li>
                <li>25 edited photos</li>
                <li>Digital delivery</li>
                <li>Advanced editing</li>
                <li>Location scouting</li>
              </ul>
            </div>
            <div className="package-card">
              <h3>Premium Package</h3>
              <div className="package-price">₹5,000</div>
              <ul>
                <li>2 hour session</li>
                <li>50 edited photos</li>
                <li>Digital + prints</li>
                <li>Professional editing</li>
                <li>Multiple locations</li>
                <li>Video highlights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="photography-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Capture Memories?</h2>
            <p>Book your photography session and create lasting memories</p>
            <div className="cta-buttons">
              <a href="/booking" className="btn btn-primary">Book Session</a>
              <a href="/contact" className="btn btn-outline">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photography; 