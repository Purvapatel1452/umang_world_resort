import React, { useState } from 'react';
import { FaCalendarAlt, FaUsers, FaBed, FaUtensils, FaSwimmingPool, FaGamepad, FaMountain, FaStar, FaPhone } from 'react-icons/fa';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    package: '',
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
    console.log('Booking submitted:', formData);
  };

  const packages = [
    {
      id: 1,
      name: "Day Outing Package",
      price: "₹2,500",
      duration: "8 AM - 8 PM",
      features: [
        "All Adventure Activities",
        "Indoor Games Access",
        "Swimming Pool",
        "Multi-cuisine Lunch",
        "Evening Tea & Snacks",
        "Professional Photography"
      ],
      icon: FaCalendarAlt
    },
    {
      id: 2,
      name: "Weekend Stay Package",
      price: "₹8,500",
      duration: "24 Hours (8 AM - 8 AM)",
      features: [
        "Luxurious Room Accommodation",
        "All Adventure Activities",
        "Indoor Games Arena",
        "Swimming Pool Access",
        "4 Meals Included",
        "Entertainment & Events",
        "Mini Zoo Access"
      ],
      icon: FaBed
    },
    {
      id: 3,
      name: "Group/Corporate Booking",
      price: "Contact Us",
      duration: "Custom Duration",
      features: [
        "Bulk Booking Discounts",
        "Customized Packages",
        "Event Management",
        "Team Building Activities",
        "Conference Facilities",
        "Dedicated Coordinator"
      ],
      icon: FaUsers
    }
  ];

  return (
    <div className="booking">
      {/* Hero Section */}
      <section className="booking-hero">
        <div className="booking-hero-content">
          <h1>Book Your Stay</h1>
          <p>Experience luxury meets adventure at Umang World Resort</p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section">
        <div className="container">
          <h2>Our Packages</h2>
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <div className="package-header">
                  <pkg.icon className="package-icon" />
                  <h3>{pkg.name}</h3>
                  <div className="package-price">{pkg.price}</div>
                  <div className="package-duration">{pkg.duration}</div>
                </div>
                <div className="package-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {pkg.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-primary package-btn">
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="booking-form-section">
        <div className="container">
          <div className="form-content">
            <div className="form-info">
              <h2>Make Your Reservation</h2>
              <p>Fill out the form below to book your stay at Umang World Resort. Our team will get back to you within 24 hours to confirm your booking.</p>
              <div className="contact-info">
                <div className="contact-item">
                  <FaPhone />
                  <span>+91 123 456 7890</span>
                </div>
                <div className="contact-item">
                  <FaCalendarAlt />
                  <span>Book 24/7 Online</span>
                </div>
                <div className="contact-item">
                  <FaStar />
                  <span>Instant Confirmation</span>
                </div>
              </div>
            </div>
            <div className="booking-form">
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
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="guests">Number of Guests *</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="checkIn">Check-in Date *</label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="checkOut">Check-out Date *</label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="package">Select Package *</label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose Package</option>
                    <option value="day-outing">Day Outing Package</option>
                    <option value="weekend-stay">Weekend Stay Package</option>
                    <option value="group-corporate">Group/Corporate Booking</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Special Requirements</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Any special requirements or requests..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="included-section">
        <div className="container">
          <h2>What's Included in Your Stay</h2>
          <div className="included-grid">
            <div className="included-item">
              <FaMountain className="included-icon" />
              <h3>Outdoor Adventures</h3>
              <p>Zip line, bicycle on rope, off-roading cars, hoverboard, and artificial mountain & waterfall</p>
            </div>
            <div className="included-item">
              <FaGamepad className="included-icon" />
              <h3>Indoor Games</h3>
              <p>8-ball pool, air hockey, archery, hammer throw, carrom, chess, ludo, and foosball</p>
            </div>
            <div className="included-item">
              <FaSwimmingPool className="included-icon" />
              <h3>Swimming Pool</h3>
              <p>Large swimming pool with DJ pool parties, tubes, balls, and floating loungers</p>
            </div>
            <div className="included-item">
              <FaUtensils className="included-icon" />
              <h3>Multi-cuisine Dining</h3>
              <p>Delicious meals including breakfast, lunch, evening tea, and dinner</p>
            </div>
            <div className="included-item">
              <FaBed className="included-icon" />
              <h3>Luxurious Rooms</h3>
              <p>Spacious, air-conditioned rooms with premium furnishing and scenic views</p>
            </div>
            <div className="included-item">
              <FaStar className="included-icon" />
              <h3>24x7 Services</h3>
              <p>Round-the-clock entertainment, room service, and premium amenities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="booking-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Book Your Adventure?</h2>
            <p>Contact us directly for immediate assistance and special offers</p>
            <div className="cta-buttons">
              <a href="tel:+911234567890" className="btn btn-primary">
                Call Now
              </a>
              <a href="https://wa.me/1234567890" className="btn btn-outline">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking; 