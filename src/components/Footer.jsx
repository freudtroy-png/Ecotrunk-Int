import { useState } from 'react';
import { Link } from 'react-router-dom';

const FORM_ENDPOINT = '';

const QUICK_LINKS = [
  { to: '/about', label: 'About us' },
  { to: '/about#values', label: 'Our values' },
  { to: '/about#journey', label: 'Our history' },
  { to: '/blog', label: 'Blog & News' },
];

const SERVICE_LINKS = [
  { to: '/services/project-development', label: 'Project Development' },
  { to: '/services/engineering-systems', label: 'Engineering Systems' },
  { to: '/services/consultancy', label: 'Consultancy' },
  { to: '/services/procurement', label: 'Procurement & Supply' },
];

const INVESTOR_LINKS = [
  { to: '/investors', label: 'Investor Relations' },
  { to: '/investors/governance', label: 'Governance' },
  { to: '/investors/reports', label: 'Reports & Publications' },
];

const TECHNOLOGY_LINKS = [
  { to: '/solar', label: 'Solar Energy' },
  { to: '/wind', label: 'Wind Energy' },
  { to: '/hydro', label: 'Hydropower' },
];

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

  const renderLinks = (links) => (
    <div className="footer-links">
      {links.map((l) => (
        <Link key={l.to + l.label} to={l.to}>
          {l.label}
        </Link>
      ))}
    </div>
  );

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="header-logo" aria-label="Ecotrunk Home">
                <div className="header-logo-icon">
                  <img src="/assets/logo.png" alt="Ecotrunk International Ltd" />
                </div>
              </Link>
              <p className="footer-company">
                Ecotrunk International Ltd (ETL)<br />
                Professional Centre, Ngong Road<br />
                P.O. Box 7252-00200, Nairobi, Kenya<br />
                Registered in the Republic of Kenya
              </p>
              <div className="footer-social">
                <a href="#" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
                <a href="#" aria-label="Twitter" onClick={(e) => e.preventDefault()}><i className="fab fa-twitter" aria-hidden="true"></i></a>
                <a href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()}><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                <a href="#" aria-label="YouTube" onClick={(e) => e.preventDefault()}><i className="fab fa-youtube" aria-hidden="true"></i></a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Company</h4>
              {renderLinks(QUICK_LINKS)}
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Technologies</h4>
              {renderLinks(TECHNOLOGY_LINKS)}
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Services</h4>
              {renderLinks(SERVICE_LINKS)}
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Investors</h4>
              {renderLinks(INVESTOR_LINKS)}
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-contact-list">
                <li>
                  <i className="fas fa-phone-alt" aria-hidden="true"></i>
                  <a href="tel:+254728367885">+254 728 367 885</a>
                </li>
                <li>
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                  <a href="mailto:info@ecotrunk.co.ke">info@ecotrunk.co.ke</a>
                </li>
                <li>
                  <i className="fas fa-clock" aria-hidden="true"></i>
                  <span>Mon – Fri, 8:00 AM – 5:00 PM (EAT)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-newsletter">
        <div className="container footer-newsletter-inner">
          <div className="footer-newsletter-text">
            <span className="footer-newsletter-label">Stay informed</span>
            <p>Energy insights and company updates, delivered to your inbox.</p>
          </div>
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
            <button type="submit">Subscribe</button>
            {status && (
              <span className={`form-status ${status}`}>
                {status === 'success' ? 'Subscribed. Thank you.' : 'Something went wrong. Please try again.'}
              </span>
            )}
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>&copy; 2026 Ecotrunk International Ltd. All rights reserved.</span>
          <div className="footer-legal">
            <Link to="/about">Privacy Policy</Link>
            <Link to="/about#values">Terms of Use</Link>
            <Link to="/#contact">Cookie Policy</Link>
            <Link to="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
