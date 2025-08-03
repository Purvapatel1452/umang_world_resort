import React from 'react';
import { FaGamepad, FaBullseye, FaChess, FaTableTennis, FaUsers, FaStar, FaClock } from 'react-icons/fa';
import './IndoorGames.css';

const IndoorGames = () => {
  const games = [
    {
      id: 1,
      title: "8-Ball Pool & Air Hockey",
      description: "Perfect for competitive fun with friends & family. Challenge your skills in our professional pool tables and air hockey games.",
      icon: FaGamepad,
      features: ["Professional Pool Tables", "Air Hockey Tables", "Tournament Setup", "All Skill Levels Welcome"],
      players: "2-4 players",
      duration: "30-60 minutes",
      image: "Pool & Air Hockey"
    },
    {
      id: 2,
      title: "Archery & Hammer Throw",
      description: "Experience the thrill of precision sports. Test your accuracy and strength with our professional archery range and hammer throw area.",
      icon: FaBullseye,
      features: ["Professional Equipment", "Safety Training", "Scoring System", "Instructor Guidance"],
      players: "1-4 players",
      duration: "45-90 minutes",
      image: "Archery & Hammer"
    },
    {
      id: 3,
      title: "Carrom, Chess, Ludo & Ring Toss",
      description: "Classic board games for all ages. Enjoy traditional games that bring families and friends together for hours of fun.",
      icon: FaChess,
      features: ["Multiple Game Boards", "Tournament Options", "Family-Friendly", "All Age Groups"],
      players: "2-6 players",
      duration: "30-120 minutes",
      image: "Board Games"
    },
    {
      id: 4,
      title: "Foosball",
      description: "Lively and engaging matches for group fun. Experience the excitement of table football with our premium foosball tables.",
      icon: FaTableTennis,
      features: ["Premium Tables", "Team Matches", "Tournament Mode", "Fast-Paced Action"],
      players: "2-4 players",
      duration: "15-45 minutes",
      image: "Foosball"
    }
  ];

  return (
    <div className="indoor-games">
      {/* Hero Section */}
      <section className="games-hero">
        <div className="games-hero-content">
          <h1>Indoor Games Arena</h1>
          <p>Fun, competitive, and engaging indoor activities for all ages</p>
        </div>
      </section>

      {/* Games Overview */}
      <section className="games-overview">
        <div className="container">
          <div className="overview-content">
            <h2>Entertainment for Everyone</h2>
            <p>
              Our indoor games arena offers a wide variety of activities perfect for families, friends, and corporate groups. 
              From competitive sports to classic board games, there's something for everyone to enjoy regardless of age or skill level.
            </p>
            <div className="overview-features">
              <div className="overview-item">
                <FaUsers className="overview-icon" />
                <h3>All Age Groups</h3>
                <p>Activities designed for children, adults, and seniors</p>
              </div>
              <div className="overview-item">
                <FaStar className="overview-icon" />
                <h3>Professional Equipment</h3>
                <p>High-quality equipment and facilities</p>
              </div>
              <div className="overview-item">
                <FaClock className="overview-icon" />
                <h3>Flexible Timing</h3>
                <p>Available throughout your stay</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="games-grid-section">
        <div className="container">
          <h2>Our Indoor Activities</h2>
          <div className="games-grid">
            {games.map((game) => (
              <div key={game.id} className="game-card">
                <div className="game-image">
                  <div className="image-placeholder">
                    <span>{game.image}</span>
                  </div>
                  <div className="game-overlay">
                    <div className="players-badge">{game.players}</div>
                    <div className="duration-badge">{game.duration}</div>
                  </div>
                </div>
                <div className="game-content">
                  <div className="game-header">
                    <game.icon className="game-icon" />
                    <h3>{game.title}</h3>
                  </div>
                  <p className="game-description">{game.description}</p>
                  <div className="game-features">
                    <h4>Features:</h4>
                    <ul>
                      {game.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="game-info">
                    <div className="info-item">
                      <span className="info-label">Players:</span>
                      <span className="info-value">{game.players}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Duration:</span>
                      <span className="info-value">{game.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Section */}
      <section className="tournament-section">
        <div className="container">
          <div className="tournament-content">
            <h2>Tournaments & Events</h2>
            <p>Join our regular tournaments and special events for a competitive experience</p>
            <div className="tournament-types">
              <div className="tournament-type">
                <h3>Weekly Tournaments</h3>
                <ul>
                  <li>Pool Championship</li>
                  <li>Archery Competition</li>
                  <li>Chess Tournament</li>
                  <li>Foosball League</li>
                </ul>
              </div>
              <div className="tournament-type">
                <h3>Special Events</h3>
                <ul>
                  <li>Family Game Day</li>
                  <li>Corporate Team Building</li>
                  <li>Birthday Celebrations</li>
                  <li>Holiday Tournaments</li>
                </ul>
              </div>
              <div className="tournament-type">
                <h3>Prizes & Rewards</h3>
                <ul>
                  <li>Winner Certificates</li>
                  <li>Resort Credits</li>
                  <li>Special Discounts</li>
                  <li>Recognition Wall</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Guidelines */}
      <section className="rules-section">
        <div className="container">
          <h2>Rules & Guidelines</h2>
          <div className="rules-grid">
            <div className="rule-card">
              <h3>General Rules</h3>
              <ul>
                <li>Respect equipment and facilities</li>
                <li>Follow safety instructions</li>
                <li>Be courteous to other players</li>
                <li>Report any issues immediately</li>
              </ul>
            </div>
            <div className="rule-card">
              <h3>Booking & Reservations</h3>
              <ul>
                <li>First come, first served basis</li>
                <li>Tournament bookings in advance</li>
                <li>Equipment provided free of charge</li>
                <li>Professional guidance available</li>
              </ul>
            </div>
            <div className="rule-card">
              <h3>Safety Guidelines</h3>
              <ul>
                <li>Use provided safety equipment</li>
                <li>Follow instructor guidance</li>
                <li>Stay within designated areas</li>
                <li>Supervision for children</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="games-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Play?</h2>
            <p>Book your stay and enjoy unlimited access to our indoor games arena</p>
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

export default IndoorGames; 