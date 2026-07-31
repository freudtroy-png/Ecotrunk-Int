import { useState } from 'react';
import { Link } from 'react-router-dom';

const FORM_ENDPOINT = '';

const QUICK_LINKS = [
  { to: '/about', label: 'About Us' },
  { to: '/technology', label: 'Technologies' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog & News' },
  { to: '/investors', label: 'Investors' },
  { to: '/#contact', label: 'Contact' },
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

const FOOTER_STATS = [
  { value: '11+', label: 'Years Delivering' },
  { value: '50+', label: 'Projects Completed' },
  { value: '4', label: 'Technologies' },
  { value: '3', label: 'East African Countries' },
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
      <div className="footer-map-bg" aria-hidden="true"></div>

      <div className="footer-cta container">
        <div className="footer-cta-inner">
          <div>
            <span className="footer-cta-eyebrow">Powering East Africa</span>
            <h2 className="footer-cta-title">
              Let&rsquo;s build a <span className="footer-cta-accent">sustainable</span> Kenya, together.
            </h2>
          </div>
          <div className="footer-cta-actions">
            <Link to="/#contact" className="btn btn-primary footer-cta-btn">Start a Project</Link>
            <Link to="/#contact" className="btn btn-outline-transparent footer-cta-btn">Get in Touch</Link>
          </div>
        </div>
      </div>

      <div className="footer-stats">
        <div className="container footer-stats-grid">
          {FOOTER_STATS.map((s) => (
            <div className="footer-stat" key={s.label}>
              <span className="footer-stat-value">{s.value}</span>
              <span className="footer-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="header-logo" aria-label="Ecotrunk Home">
                <div className="header-logo-icon">
                  <img src="/assets/logo.png" alt="Ecotrunk International Ltd" />
                </div>
              </Link>
              <p>
                Ecotrunk International Ltd (ETL) is a firm of Technologists, Consultants, and
                Managers delivering renewable energy solutions across East Africa since 2014.
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
              <h4 className="footer-heading">Services</h4>
              {renderLinks(SERVICE_LINKS)}
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Technologies</h4>
              {renderLinks(TECHNOLOGY_LINKS)}
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Investors</h4>
              {renderLinks(INVESTOR_LINKS)}
            </div>

            <div className="footer-col footer-col-wide">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-contact-list">
                <li>
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  <span>Professional Centre, Ngong Road,<br />P.O. Box 7252-00200, Nairobi, Kenya</span>
                </li>
                <li>
                  <i className="fas fa-phone-alt" aria-hidden="true"></i>
                  <a href="tel:+254728367885">+254 728 367 885</a>
                </li>
                <li>
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                  <span>
                    <a href="mailto:info@ecotrunk.co.ke">info@ecotrunk.co.ke</a>
                  </span>
                </li>
                <li>
                  <i className="fas fa-clock" aria-hidden="true"></i>
                  <span>Mon – Fri, 8:00 AM – 5:00 PM (EAT)</span>
                </li>
              </ul>

              <h4 className="footer-heading footer-heading-newsletter">Stay Updated</h4>
              <p className="footer-newsletter-text">
                Subscribe for updates on our projects and Kenya's renewable energy sector.
              </p>
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
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>&copy; 2026 Ecotrunk International Ltd. All rights reserved.</span>
          <div className="footer-legal">
            <Link to="/about">Privacy</Link>
            <Link to="/about#values">Terms</Link>
            <Link to="/sitemap.xml">Sitemap</Link>
          </div>
          <span className="footer-tagline">Committed to a sustainable Kenya</span>
        </div>
      </div>
    </footer>
  );
}
