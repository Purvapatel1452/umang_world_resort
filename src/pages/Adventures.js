import React from 'react';
import { FaMountain, FaBicycle, FaCar, FaSnowflake, FaWater, FaStar, FaShieldAlt, FaUsers } from 'react-icons/fa';
import './Adventures.css';

const Adventures = () => {
  const adventures = [
    {
      id: 1,
      title: "Zip Line Adventure",
      description: "Soar above breathtaking landscapes with our safe & thrilling zip line ride. Experience the adrenaline rush as you glide through the air with panoramic views of our resort.",
      icon: FaMountain,
      features: ["Safe & Secure Equipment", "Professional Guides", "Panoramic Views", "Suitable for All Ages"],
      difficulty: "Moderate",
      duration: "15-20 minutes",
      image: "Zip Line"
    },
    {
      id: 2,
      title: "Bicycle on Rope",
      description: "Test your balance and enjoy panoramic views on a rope-cycling adventure. Challenge yourself with this unique activity that combines cycling with high-wire excitement.",
      icon: FaBicycle,
      features: ["Balance Challenge", "Safety Harness", "Scenic Route", "Professional Supervision"],
      difficulty: "Advanced",
      duration: "30-45 minutes",
      image: "Bicycle Rope"
    },
    {
      id: 3,
      title: "Off-Roading Cars",
      description: "Unleash the adventurer in you with our powerful off-road experience. Navigate through challenging terrains and experience the thrill of off-road driving.",
      icon: FaCar,
      features: ["Powerful Vehicles", "Professional Training", "Safety Equipment", "Guided Tours"],
      difficulty: "Moderate",
      duration: "1-2 hours",
      image: "off-roading"
    },
    {
      id: 4,
      title: "Self-Balancing Hoverboard",
      description: "Cruise around our scenic property in style with our self-balancing hoverboards. Enjoy a modern and fun way to explore the resort grounds.",
      icon: FaSnowflake,
      features: ["Easy to Learn", "Scenic Routes", "Safety Gear", "Professional Training"],
      difficulty: "Easy",
      duration: "30-60 minutes",
      image: "Hoverboard"
    },
    {
      id: 5,
      title: "Artificial Mountain & Waterfall",
      description: "Enjoy nature-inspired beauty for perfect relaxation and selfies. Our artificial mountain and waterfall create a stunning backdrop for memorable photos.",
      icon: FaWater,
      features: ["Scenic Beauty", "Photo Opportunities", "Relaxation Spot", "Family-Friendly"],
      difficulty: "Easy",
      duration: "Flexible",
      image: "muntain"
    }
  ];

  return (
    <div className="adventures">
      {/* Hero Section */}
      <section className="adventures-hero">
        <div className="adventures-hero-content">
          <h1>Outdoor Adventures</h1>
          <p>Experience the thrill of adventure with our exciting outdoor activities</p>
        </div>
      </section>

      {/* Safety Information */}
      <section className="safety-section">
        <div className="container">
          <div className="safety-content">
            <h2>Safety First</h2>
            <p>All our adventure activities are conducted under strict safety protocols with professional guides and certified equipment.</p>
            <div className="safety-features">
              <div className="safety-item">
                <FaShieldAlt className="safety-icon" />
                <h3>Certified Equipment</h3>
                <p>All equipment meets international safety standards</p>
              </div>
              <div className="safety-item">
                <FaUsers className="safety-icon" />
                <h3>Professional Guides</h3>
                <p>Experienced and trained professionals</p>
              </div>
              <div className="safety-item">
                <FaStar className="safety-icon" />
                <h3>Safety Briefing</h3>
                <p>Comprehensive safety instructions before each activity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adventures Grid */}
      <section className="adventures-grid-section">
        <div className="container">
          <h2>Our Adventure Activities</h2>
          <div className="adventures-grid">
            {adventures.map((adventure) => (
              <div key={adventure.id} className="adventure-card">
                <div className="adventure-image">
                  <div className="image-placeholder">
                    <span>{adventure.image}</span>
                  </div>
                  <div className="adventure-overlay">
                    <div className="difficulty-badge">{adventure.difficulty}</div>
                    <div className="duration-badge">{adventure.duration}</div>
                  </div>
                </div>
                <div className="adventure-content">
                  <div className="adventure-header">
                    <adventure.icon className="adventure-icon" />
                    <h3>{adventure.title}</h3>
                  </div>
                  <p className="adventure-description">{adventure.description}</p>
                  <div className="adventure-features">
                    <h4>Features:</h4>
                    <ul>
                      {adventure.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="adventure-info">
                    <div className="info-item">
                      <span className="info-label">Difficulty:</span>
                      <span className="info-value">{adventure.difficulty}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Duration:</span>
                      <span className="info-value">{adventure.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="booking-info">
        <div className="container">
          <div className="booking-content">
            <h2>Book Your Adventure</h2>
            <p>All adventure activities are included in your resort stay. Book your activities at the reception or through our mobile app.</p>
            <div className="booking-features">
              <div className="booking-item">
                <h3>Included in Stay</h3>
                <p>All adventure activities are complimentary with your resort booking</p>
              </div>
              <div className="booking-item">
                <h3>Professional Training</h3>
                <p>Receive proper training and safety instructions before each activity</p>
              </div>
              <div className="booking-item">
                <h3>Flexible Timing</h3>
                <p>Activities available throughout the day based on weather conditions</p>
              </div>
            </div>
            <div className="booking-cta">
              <a href="/booking" className="btn btn-primary">Book Your Stay</a>
              <a href="/contact" className="btn btn-outline">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="tips-section">
        <div className="container">
          <h2>Adventure Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>What to Wear</h3>
              <ul>
                <li>Comfortable clothing</li>
                <li>Closed-toe shoes</li>
                <li>Weather-appropriate attire</li>
                <li>Sun protection</li>
              </ul>
            </div>
            <div className="tip-card">
              <h3>Safety Guidelines</h3>
              <ul>
                <li>Follow guide instructions</li>
                <li>Use provided safety equipment</li>
                <li>Stay within designated areas</li>
                <li>Report any concerns immediately</li>
              </ul>
            </div>
            <div className="tip-card">
              <h3>Best Times</h3>
              <ul>
                <li>Morning: Best for zip line</li>
                <li>Afternoon: Ideal for off-roading</li>
                <li>Evening: Perfect for hoverboard</li>
                <li>All day: Mountain & waterfall</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Adventures; 