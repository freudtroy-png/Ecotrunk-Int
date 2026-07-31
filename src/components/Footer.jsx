import { useState } from 'react';
import { Link } from 'react-router-dom';

const FORM_ENDPOINT = '';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return;
    if (FORM_ENDPOINT) {
      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
        .then(() => setStatus('success'))
        .catch(() => setStatus('error'));
    } else {
      setStatus('success');
    }
    setEmail('');
    setTimeout(() => setStatus(''), 6000);
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="header-logo" aria-label="Ecotrunk Home">
              <div className="header-logo-icon">
                <img src="/assets/logo.png" alt="Ecotrunk International Ltd" />
              </div>
            </Link>
            <p>Ecotrunk International Ltd (ETL) is a firm of Technologists, Consultants, and Managers delivering world-class renewable energy solutions across East Africa.</p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
              <a href="#" aria-label="Twitter" onClick={(e) => e.preventDefault()}><i className="fab fa-twitter" aria-hidden="true"></i></a>
              <a href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()}><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
              <a href="#" aria-label="YouTube" onClick={(e) => e.preventDefault()}><i className="fab fa-youtube" aria-hidden="true"></i></a>
            </div>
          </div>
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/about#values">Our Values</Link>
              <Link to="/technology">Technologies</Link>
              <Link to="/solar">Solar Energy</Link>
              <Link to="/wind">Wind Energy</Link>
              <Link to="/hydro">Hydropower</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/#services">Services</Link>
              <Link to="/#contact">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="footer-heading">Services</h4>
            <div className="footer-links">
              <Link to="/services/project-development">Project Development</Link>
              <Link to="/services/engineering-systems">Engineering Systems</Link>
              <Link to="/services/consultancy">Consultancy</Link>
              <Link to="/services/procurement">Procurement &amp; Supply</Link>
            </div>
          </div>
          <div className="footer-newsletter">
            <h4 className="footer-heading">Stay Updated</h4>
            <p>Subscribe to receive updates on our projects and the latest in Kenya's renewable energy sector.</p>
            <form className="footer-newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                aria-label="Email for newsletter"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" aria-label="Subscribe">Subscribe</button>
            </form>
            {status && (
              <p className={`form-status ${status}`}>
                {status === 'success' ? 'Subscribed! Thank you.' : 'Something went wrong. Please try again.'}
              </p>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2024 Ecotrunk International Ltd. All rights reserved.</span>
          <span>Committed to a sustainable Kenya</span>
        </div>
      </div>
    </footer>
  );
}
