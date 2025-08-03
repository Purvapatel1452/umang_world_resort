import React from 'react';
import { FaFilm, FaMusic, FaCalendarAlt, FaStar, FaUsers, FaCamera } from 'react-icons/fa';
import './Entertainment.css';

const Entertainment = () => {
  return (
    <div className="entertainment">
      {/* Hero Section */}
      <section className="entertainment-hero">
        <div className="entertainment-hero-content">
          <h1>Entertainment & Events</h1>
          <p>Unforgettable experiences and celebrations</p>
        </div>
      </section>

      {/* Entertainment Overview */}
      <section className="entertainment-overview">
        <div className="container">
          <div className="overview-content">
            <h2>Entertainment for Everyone</h2>
            <p>From movie nights under the stars to DJ parties and complete event management, we provide entertainment that creates lasting memories for all our guests.</p>
            <div className="entertainment-features">
              <div className="feature-item">
                <FaFilm className="feature-icon" />
                <h3>Movie Projector Nights</h3>
                <p>Outdoor big-screen movie sessions with unlimited popcorn</p>
              </div>
              <div className="feature-item">
                <FaMusic className="feature-icon" />
                <h3>DJ Nights</h3>
                <p>Dance to your favorite tracks, including themed nights</p>
              </div>
              <div className="feature-item">
                <FaCalendarAlt className="feature-icon" />
                <h3>Event Management</h3>
                <p>Complete planning & hosting for all types of events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movie Nights */}
      <section className="movie-nights">
        <div className="container">
          <h2>Movie Projector Nights</h2>
          <div className="movie-content">
            <div className="movie-info">
              <h3>Outdoor Cinema Experience</h3>
              <p>Experience the magic of cinema under the stars with our outdoor movie projector setup. Perfect for families, couples, and groups looking for a unique entertainment experience.</p>
              <div className="movie-features">
                <div className="feature">
                  <span>🎬</span>
                  <div>
                    <h4>Big Screen Projection</h4>
                    <p>High-quality outdoor movie experience</p>
                  </div>
                </div>
                <div className="feature">
                  <span>🍿</span>
                  <div>
                    <h4>Unlimited Popcorn</h4>
                    <p>Fresh popcorn throughout the movie</p>
                  </div>
                </div>
                <div className="feature">
                  <span>🪑</span>
                  <div>
                    <h4>Comfortable Seating</h4>
                    <p>Cozy seating arrangements</p>
                  </div>
                </div>
                <div className="feature">
                  <span>🌙</span>
                  <div>
                    <h4>Evening Screenings</h4>
                    <p>Perfect timing for outdoor viewing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="movie-schedule">
              <h3>Movie Schedule</h3>
              <div className="schedule-item">
                <span>Friday:</span>
                <span>Family Movies</span>
              </div>
              <div className="schedule-item">
                <span>Saturday:</span>
                <span>Latest Blockbusters</span>
              </div>
              <div className="schedule-item">
                <span>Sunday:</span>
                <span>Classic Films</span>
              </div>
              <div className="schedule-item">
                <span>Time:</span>
                <span>8:00 PM - 10:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DJ Nights */}
      <section className="dj-nights">
        <div className="container">
          <h2>DJ Nights & Music</h2>
          <div className="dj-content">
            <div className="dj-info">
              <h3>Live Music & DJ Entertainment</h3>
              <p>Dance the night away with our professional DJs and live music performances. From Bollywood hits to international chartbusters, we have music for every taste.</p>
              <div className="dj-features">
                <div className="feature">
                  <span>🎵</span>
                  <div>
                    <h4>Professional DJs</h4>
                    <p>Experienced DJs with latest tracks</p>
                  </div>
                </div>
                <div className="feature">
                  <span>🎪</span>
                  <div>
                    <h4>Themed Nights</h4>
                    <p>Special themed parties and events</p>
                  </div>
                </div>
                <div className="feature">
                  <span>🎤</span>
                  <div>
                    <h4>Live Performances</h4>
                    <p>Live singers and musicians</p>
                  </div>
                </div>
                <div className="feature">
                  <span>💃</span>
                  <div>
                    <h4>Dance Floors</h4>
                    <p>Spacious dance areas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dj-schedule">
              <h3>DJ Schedule</h3>
              <div className="schedule-item">
                <span>Friday:</span>
                <span>Bollywood Night</span>
              </div>
              <div className="schedule-item">
                <span>Saturday:</span>
                <span>International Hits</span>
              </div>
              <div className="schedule-item">
                <span>Sunday:</span>
                <span>Retro & Classics</span>
              </div>
              <div className="schedule-item">
                <span>Time:</span>
                <span>9:00 PM - 12:00 AM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Management */}
      <section className="event-management">
        <div className="container">
          <h2>Event Management Services</h2>
          <p>Complete planning and hosting for all your special occasions</p>
          <div className="events-grid">
            <div className="event-card">
              <FaCalendarAlt className="event-icon" />
              <h3>Weddings</h3>
              <p>Complete wedding planning and hosting services</p>
              <ul>
                <li>Venue decoration</li>
                <li>Catering services</li>
                <li>Photography & videography</li>
                <li>Entertainment arrangements</li>
              </ul>
            </div>
            <div className="event-card">
              <FaUsers className="event-icon" />
              <h3>Corporate Events</h3>
              <p>Professional corporate event management</p>
              <ul>
                <li>Conference facilities</li>
                <li>Team building activities</li>
                <li>Business meetings</li>
                <li>Corporate parties</li>
              </ul>
            </div>
            <div className="event-card">
              <FaStar className="event-icon" />
              <h3>Birthday Celebrations</h3>
              <p>Special birthday party arrangements</p>
              <ul>
                <li>Theme decoration</li>
                <li>Birthday cakes</li>
                <li>Entertainment activities</li>
                <li>Photo sessions</li>
              </ul>
            </div>
            <div className="event-card">
              <FaCamera className="event-icon" />
              <h3>Special Occasions</h3>
              <p>Customized events for any occasion</p>
              <ul>
                <li>Anniversary parties</li>
                <li>Family gatherings</li>
                <li>Festival celebrations</li>
                <li>Custom themes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="entertainment-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Entertainment?</h2>
            <p>Book your stay and experience our amazing entertainment facilities</p>
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

export default Entertainment; 