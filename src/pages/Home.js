import React, { useState, useEffect } from 'react';
import { FaPlay, FaMountain, FaGamepad, FaBed, FaCalendarAlt, FaClock, FaVideo, FaTimes, FaStar, FaUsers, FaBicycle, FaCar, FaSnowflake, FaWater, FaShieldAlt, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInfoCircle, FaSwimmingPool, FaCamera, FaUtensils, FaPaw, FaArrowUp, FaChevronDown, FaMusic } from 'react-icons/fa';
import './Home-new.css';

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle scroll to update scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const adventures = [
    {
      id: 1,
      title: "Zip Line Adventure",
      description: "Soar above breathtaking landscapes with our safe & thrilling zip line ride. Experience the adrenaline rush as you glide through the air with panoramic views of our resort.",
      icon: FaMountain,
      features: ["Safe & Secure Equipment", "Professional Guides", "Panoramic Views", "Suitable for All Ages"],
      difficulty: "Moderate",
      duration: "15-20 minutes",
      image: "/images/outdoor-activity.jpg"
    },
    {
      id: 2,
      title: "Bicycle on Rope",
      description: "Test your balance and enjoy panoramic views on a rope-cycling adventure. Challenge yourself with this unique activity that combines cycling with high-wire excitement.",
      icon: FaBicycle,
      features: ["Balance Challenge", "Safety Harness", "Scenic Route", "Professional Supervision"],
      difficulty: "Advanced",
      duration: "30-45 minutes",
      image: "/images/outdoor-activity.jpg"
    },
    {
      id: 3,
      title: "Off-Roading Cars",
      description: "Unleash the adventurer in you with our powerful off-road experience. Navigate through challenging terrains and experience the thrill of off-road driving.",
      icon: FaCar,
      features: ["Powerful Vehicles", "Professional Training", "Safety Equipment", "Guided Tours"],
      difficulty: "Moderate",
      duration: "1-2 hours",
      image: "/videos/off-roading.jpg"
    },
    {
      id: 4,
      title: "Self-Balancing Hoverboard",
      description: "Cruise around our scenic property in style with our self-balancing hoverboards. Enjoy a modern and fun way to explore the resort grounds.",
      icon: FaSnowflake,
      features: ["Easy to Learn", "Scenic Routes", "Safety Gear", "Professional Training"],
      difficulty: "Easy",
      duration: "30-60 minutes",
      image: "/images/outdoor-activity.jpg"
    },
    {
      id: 5,
      title: "Artificial Mountain & Waterfall",
      description: "Enjoy nature-inspired beauty for perfect relaxation and selfies. Our artificial mountain and waterfall create a stunning backdrop for memorable photos.",
      icon: FaWater,
      features: ["Scenic Beauty", "Photo Opportunities", "Relaxation Spot", "Family-Friendly"],
      difficulty: "Easy",
      duration: "Flexible",
      image: "/images/resort-exterior.jpg"
    }
  ];

  const indoorGames = [
    {
      id: 1,
      title: "8-Ball Pool",
      description: "Classic pool table experience with professional equipment and comfortable seating.",
      icon: FaGamepad,
      image: "/images/air-hockey.jpg"
    },
    {
      id: 2,
      title: "Air Hockey",
      description: "Fast-paced air hockey tables for exciting competitive gameplay.",
      icon: FaGamepad,
      image: "/images/air-hockey.jpg"
    },
    {
      id: 3,
      title: "Archery",
      description: "Professional archery range with safety equipment and expert guidance.",
      icon: FaGamepad,
      image: "/images/archery.jpg"
    },
    {
      id: 4,
      title: "Board Games",
      description: "Collection of classic board games including chess, carrom, and ludo.",
      icon: FaGamepad,
      image: "/images/air-hockey.jpg"
    },
    {
      id: 5,
      title: "Foosball",
      description: "Exciting foosball tables for team competitions and fun gameplay.",
      icon: FaGamepad,
      image: "/images/foosball.jpg"
    }
  ];

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
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="home">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      {/* Video Modal */}
      {showVideo && (
        <div className="video-modal-overlay" onClick={closeVideo}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="video-close-btn" onClick={closeVideo}>
              <FaTimes />
            </button>
            <div className="video-container">
              <video 
                controls 
                autoPlay 
                className="resort-video"
                poster="/images/resort-exterior.jpg"
              >
                <source src="/videos/resort-hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-info">
              <h3>Discover Umang World Resort</h3>
              <p>Experience the perfect blend of luxury and adventure in our stunning resort</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <video className="hero-video-bg" autoPlay muted loop>
            <source src="/videos/resort-hero.mp4" type="video/mp4" />
            <div className="hero-fallback-bg"></div>
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Umang World Resort</span>
          </h1>
          <p className="hero-subtitle">Where Luxury Meets Adventure</p>
          <p className="hero-description">
            Experience the perfect blend of thrill, leisure, and luxury — designed for families, friends, and corporate getaways.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('contact')} className="btn btn-green">
              Contact Us
            </button>
            <button onClick={() => scrollToSection('adventures')} className="btn btn-outline">
              Explore Activities
            </button>
          </div>
          <div className="hero-video" onClick={handleVideoClick}>
            <button className="play-btn">
              <FaPlay />
            </button>
            <span>Watch Our Story</span>
          </div>
          <div className="scroll-indicator">
            <FaChevronDown />
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* Quick Highlights Bar */}
      <section className="highlights">
        <div className="highlights-container">
          <div className="highlight-item">
            <FaMountain className="highlight-icon" />
            <h3>Outdoor Adventures</h3>
            <p>Zip line, off-roading, and nature trails</p>
          </div>
          <div className="highlight-item">
            <FaGamepad className="highlight-icon" />
            <h3>Indoor Games</h3>
            <p>Pool, archery, and classic board games</p>
          </div>
          <div className="highlight-item">
            <FaBed className="highlight-icon" />
            <h3>Luxurious Rooms</h3>
            <p>Comfortable stays with premium amenities</p>
          </div>
          <div className="highlight-item">
            <FaCalendarAlt className="highlight-icon" />
            <h3>Event Management</h3>
            <p>Perfect venues for all celebrations</p>
          </div>
          <div className="highlight-item">
            <FaClock className="highlight-icon" />
            <h3>24x7 Experience</h3>
            <p>Round-the-clock entertainment & services</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>About Umang World Resort</h2>
            <p>Where Luxury Meets Adventure</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Our Story</h3>
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
              <div className="features">
                <div className="feature">
                  <h4>🌿 Natural Surroundings</h4>
                  <p>Surrounded by lush greenery and artificial mountains</p>
                </div>
                <div className="feature">
                  <h4>🏊‍♂️ Premium Amenities</h4>
                  <p>Swimming pool, entertainment zones, and dining experiences</p>
                </div>
                <div className="feature">
                  <h4>🎯 Adventure Activities</h4>
                  <p>Zip line, off-roading, and outdoor sports</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img 
                src="/images/resort-main.jpg" 
                alt="Umang World Resort - Main View"
                className="resort-main-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Adventures Section */}
      <section id="adventures" className="adventures-section">
        <div className="container">
          <div className="section-header">
            <h2>Outdoor Adventures</h2>
            <p>Experience the thrill of adventure with our exciting outdoor activities</p>
          </div>
          
          {/* Safety Information */}
          <div className="safety-section">
            <div className="safety-content">
              <h3>Safety First</h3>
              <p>All our adventure activities are conducted under strict safety protocols with professional guides and certified equipment.</p>
              <div className="safety-features">
                <div className="safety-item">
                  <FaShieldAlt className="safety-icon" />
                  <h4>Certified Equipment</h4>
                  <p>All equipment meets international safety standards</p>
                </div>
                <div className="safety-item">
                  <FaUsers className="safety-icon" />
                  <h4>Professional Guides</h4>
                  <p>Experienced and trained professionals</p>
                </div>
                <div className="safety-item">
                  <FaStar className="safety-icon" />
                  <h4>Safety Briefing</h4>
                  <p>Comprehensive safety instructions before each activity</p>
                </div>
              </div>
            </div>
          </div>

          {/* Adventures Grid */}
          <div className="adventures-grid">
            {adventures.map((adventure) => (
              <div key={adventure.id} className="adventure-card">
                <div className="adventure-image">
                  <img 
                    src={adventure.image} 
                    alt={adventure.title}
                    className="adventure-img"
                  />
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indoor Games Section */}
      <section id="indoor-games" className="indoor-games-section">
        <div className="container">
          <div className="section-header">
            <h2>Indoor Games Arena</h2>
            <p>Enjoy exciting indoor activities and games</p>
          </div>
          <div className="games-grid">
            {indoorGames.map((game) => (
              <div key={game.id} className="game-card">
                <div className="game-image">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="game-img"
                  />
                </div>
                <div className="game-content">
                  <game.icon className="game-icon" />
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pool Section */}
      <section id="pool" className="pool-section">
        <div className="container">
          <div className="section-header">
            <h2>Swimming Pool</h2>
            <p>Relax and enjoy our premium swimming facilities</p>
          </div>
          <div className="pool-content">
            <div className="pool-text">
              <h3>Premium Pool Experience</h3>
              <p>Our large swimming pool offers the perfect setting for relaxation and entertainment. Enjoy comfortable seating, DJ pool parties, and movie projector nights.</p>
              <div className="pool-features">
                <div className="pool-feature">
                  <FaSwimmingPool className="pool-icon" />
                  <h4>Large Swimming Pool</h4>
                  <p>Spacious pool with comfortable seating areas</p>
                </div>
                <div className="pool-feature">
                  <FaMusic className="pool-icon" />
                  <h4>DJ Pool Parties</h4>
                  <p>Regular pool parties with professional DJs</p>
                </div>
                <div className="pool-feature">
                  <FaVideo className="pool-icon" />
                  <h4>Movie Nights</h4>
                  <p>Outdoor movie screenings by the pool</p>
                </div>
              </div>
            </div>
            <div className="pool-image">
              <img 
                src="/images/swimming-pool.jpg" 
                alt="Swimming Pool"
                className="pool-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment Section */}
      <section id="entertainment" className="entertainment-section">
        <div className="container">
          <div className="section-header">
            <h2>Entertainment & Events</h2>
            <p>Professional event management and entertainment services</p>
          </div>
          <div className="entertainment-content">
            <div className="entertainment-grid">
              <div className="entertainment-card">
                <FaCalendarAlt className="entertainment-icon" />
                <h3>Event Management</h3>
                <p>Professional event planning for weddings, corporate events, and celebrations</p>
              </div>
              <div className="entertainment-card">
                <FaCamera className="entertainment-icon" />
                <h3>Photography Services</h3>
                <p>Professional photography and videography services</p>
              </div>
              <div className="entertainment-card">
                <FaMusic className="entertainment-icon" />
                <h3>Live Entertainment</h3>
                <p>Live music, DJs, and entertainment programs</p>
              </div>
              <div className="entertainment-card">
                <FaPaw className="entertainment-icon" />
                <h3>Mini Zoo</h3>
                <p>Pet-friendly zone with various animals and birds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="rooms-section">
        <div className="container">
          <div className="section-header">
            <h2>Luxurious Accommodation</h2>
            <p>Comfortable rooms with premium amenities</p>
          </div>
          <div className="rooms-content">
            <div className="rooms-text">
              <h3>Premium Rooms</h3>
              <p>Experience luxury and comfort in our well-appointed rooms designed for your complete relaxation.</p>
              <div className="room-features">
                <div className="room-feature">
                  <FaBed className="room-icon" />
                  <h4>Comfortable Beds</h4>
                  <p>Premium mattresses and bedding for restful sleep</p>
                </div>
                <div className="room-feature">
                  <FaClock className="room-icon" />
                  <h4>24x7 Service</h4>
                  <p>Round-the-clock room service and support</p>
                </div>
                <div className="room-feature">
                  <FaStar className="room-icon" />
                  <h4>Premium Amenities</h4>
                  <p>Modern amenities and facilities in every room</p>
                </div>
              </div>
            </div>
            <div className="rooms-image">
              <img 
                src="/images/rooms/room-1.jpg" 
                alt="Luxury Room"
                className="room-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section id="dining" className="dining-section">
        <div className="container">
          <div className="section-header">
            <h2>Dining Experience</h2>
            <p>Multi-cuisine dining with exceptional service</p>
          </div>
          <div className="dining-content">
            <div className="dining-image">
              <img 
                src="/images/dining/dining-1.jpg" 
                alt="Dining Area"
                className="dining-img"
              />
            </div>
            <div className="dining-text">
              <h3>Gourmet Dining</h3>
              <p>Enjoy delicious multi-cuisine meals prepared by expert chefs using fresh, local ingredients.</p>
              <div className="dining-features">
                <div className="dining-feature">
                  <FaUtensils className="dining-icon" />
                  <h4>Multi-Cuisine</h4>
                  <p>Indian, Continental, and International cuisines</p>
                </div>
                <div className="dining-feature">
                  <FaStar className="dining-icon" />
                  <h4>Fresh Ingredients</h4>
                  <p>Locally sourced fresh ingredients</p>
                </div>
                <div className="dining-feature">
                  <FaClock className="dining-icon" />
                  <h4>Flexible Timing</h4>
                  <p>Dining available throughout the day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>Photo Gallery</h2>
            <p>Explore our resort through beautiful images</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/resort-exterior.jpg" alt="Resort Exterior" />
            </div>
            <div className="gallery-item">
              <img src="/images/swimming-pool.jpg" alt="Swimming Pool" />
            </div>
            <div className="gallery-item">
              <img src="/images/outdoor-activity.jpg" alt="Outdoor Activity" />
            </div>
            <div className="gallery-item">
              <img src="/images/air-hockey.jpg" alt="Air Hockey" />
            </div>
            <div className="gallery-item">
              <img src="/images/resort-aerial.jpg" alt="Resort Aerial View" />
            </div>
            <div className="gallery-item">
              <img src="/images/resort-main.jpg" alt="Resort Main" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Contact Us</h2>
            <p>Get in touch with us for bookings, inquiries, and support</p>
          </div>
          
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-grid">
              <div className="contact-card">
                <FaPhone className="contact-icon" />
                <h3>Phone</h3>
                <p>+91 87358 06414</p>
                <p>+91 98750 77159</p>
                <a 
                  href="tel:+919875077159" 
                  className="phone-link"
                >
                  Call Now
                </a>
              </div>
              <div className="contact-card">
                <FaEnvelope className="contact-icon" />
                <h3>Email</h3>
                <p>umangworldresort@gmail.com</p>
                <a 
                  href="mailto:umangworldresort@gmail.com?subject=Inquiry about Umang World Resort" 
                  className="email-link"
                >
                  Send Email
                </a>
              </div>
              <div className="contact-card">
                <FaMapMarkerAlt className="contact-icon" />
                <h3>Address</h3>
                <p>Survey No. 337, Dhanali, Mehsana-Ahmedabad Highway, Mehsana, Gujarat, India</p>
                <p>Pin Code: 123456</p>
              </div>
              <div className="contact-card">
                <FaWhatsapp className="contact-icon" />
                <h3>WhatsApp</h3>
                <p>+91 98750 77159</p>
                <p>24/7 Support Available</p>
                <a 
                  href="https://wa.me/919875077159?text=Hi! I'm interested in Umang World Resort. Can you provide more information?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="contact-form-map">
            <div className="contact-form">
              <h3>Send Us a Message</h3>
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
              <h3>Find Us</h3>
              <div className="map-placeholder">
                <span>Google Maps Integration</span>
                <p>Survey No. 337, Dhanali, Mehsana-Ahmedabad Highway, Mehsana, Gujarat, India</p>
              </div>
              <div className="location-info">
                <h4>How to Reach</h4>
                <div className="location-item">
                  <FaInfoCircle />
                  <div>
                    <h5>By Road</h5>
                    <p>Well-connected by major highways and local roads</p>
                  </div>
                </div>
                <div className="location-item">
                  <FaInfoCircle />
                  <div>
                    <h5>By Train</h5>
                    <p>Nearest railway station: 15 km away</p>
                  </div>
                </div>
                <div className="location-item">
                  <FaInfoCircle />
                  <div>
                    <h5>By Air</h5>
                    <p>Nearest airport: 45 km away</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Your Adventure?</h2>
            <p>Contact us now and experience the perfect blend of nature and luxury</p>
            <div className="cta-buttons">
              <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
                Contact Us
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 