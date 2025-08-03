import React from 'react';
import { FaSwimmingPool, FaMusic, FaUmbrellaBeach, FaWater, FaStar } from 'react-icons/fa';
import './Pool.css';

const Pool = () => {
  return (
    <div className="pool">
      {/* Hero Section */}
      <section className="pool-hero">
        <div className="pool-hero-content">
          <h1>Swimming Pool Zone</h1>
          <p>Relax, swim, and party by our beautiful pool</p>
        </div>
      </section>

      {/* Pool Overview */}
      <section className="pool-overview">
        <div className="container">
          <div className="overview-content">
            <h2>Resort Swimming Pool</h2>
            <p>Our large swimming pool offers the perfect blend of relaxation and entertainment. Whether you want to swim, sunbathe, or enjoy our DJ pool parties, our pool area has something for everyone.</p>
            <div className="pool-features">
              <div className="feature-item">
                <FaSwimmingPool className="feature-icon" />
                <h3>Large Swimming Pool</h3>
                <p>Spacious pool with comfortable seating areas</p>
              </div>
              <div className="feature-item">
                <FaMusic className="feature-icon" />
                <h3>DJ Pool Parties</h3>
                <p>Dance to live DJ beats by the pool</p>
              </div>
              <div className="feature-item">
                <FaUmbrellaBeach className="feature-icon" />
                <h3>Pool Amenities</h3>
                <p>Tubes, balls, floating loungers, dolphin showers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pool Details */}
      <section className="pool-details">
        <div className="container">
          <div className="details-grid">
            <div className="detail-card">
              <h3>Pool Specifications</h3>
              <ul>
                <li>Large Olympic-size swimming pool</li>
                <li>Depth: 3-6 feet</li>
                <li>Temperature controlled</li>
                <li>Professional lifeguard on duty</li>
                <li>Separate kids' pool area</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>DJ Pool Parties</h3>
              <ul>
                <li>Live DJ music every weekend</li>
                <li>Special themed parties</li>
                <li>Professional sound system</li>
                <li>Poolside bar service</li>
                <li>Evening entertainment</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>Pool Amenities</h3>
              <ul>
                <li>Floating tubes and loungers</li>
                <li>Pool balls and games</li>
                <li>Dolphin showers</li>
                <li>Comfortable seating</li>
                <li>Umbrella shades</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pool Schedule */}
      <section className="pool-schedule">
        <div className="container">
          <h2>Pool Schedule</h2>
          <div className="schedule-grid">
            <div className="schedule-item">
              <h3>Pool Hours</h3>
              <div className="time-item">
                <span>Morning:</span>
                <span>6:00 AM - 10:00 AM</span>
              </div>
              <div className="time-item">
                <span>Afternoon:</span>
                <span>2:00 PM - 6:00 PM</span>
              </div>
              <div className="time-item">
                <span>Evening:</span>
                <span>7:00 PM - 10:00 PM</span>
              </div>
            </div>
            <div className="schedule-item">
              <h3>DJ Pool Parties</h3>
              <div className="time-item">
                <span>Friday:</span>
                <span>6:00 PM - 9:00 PM</span>
              </div>
              <div className="time-item">
                <span>Saturday:</span>
                <span>4:00 PM - 8:00 PM</span>
              </div>
              <div className="time-item">
                <span>Sunday:</span>
                <span>5:00 PM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Rules */}
      <section className="pool-safety">
        <div className="container">
          <h2>Pool Safety & Rules</h2>
          <div className="safety-grid">
            <div className="safety-item">
              <FaStar className="safety-icon" />
              <h3>Safety First</h3>
              <p>Professional lifeguards on duty during all pool hours</p>
            </div>
            <div className="safety-item">
              <FaStar className="safety-icon" />
              <h3>Pool Rules</h3>
              <p>Follow posted pool rules for everyone's safety</p>
            </div>
            <div className="safety-item">
              <FaStar className="safety-icon" />
              <h3>Equipment</h3>
              <p>All pool equipment provided free of charge</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pool-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Dive In?</h2>
            <p>Book your stay and enjoy our amazing pool facilities</p>
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

export default Pool; 