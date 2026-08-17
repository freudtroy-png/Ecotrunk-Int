import { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const NAV = [
  {
    label: 'About',
    to: '/about',
    children: [
      { to: '/about', label: 'About us' },
      { to: '/about#values', label: 'Our values' },
      { to: '/about#journey', label: 'Our history' },
    ],
  },
  {
    label: 'Technologies',
    to: '/technology',
    children: [
      { to: '/technology', label: 'Overview' },
      { to: '/solar', label: 'Solar' },
      { to: '/wind', label: 'Wind' },
      { to: '/hydro', label: 'Hydropower' },
    ],
  },
  {
    label: 'Services',
    to: '/services',
    children: [
      { to: '/services', label: 'Overview' },
      { to: '/services/project-development', label: 'Project Development' },
      { to: '/services/engineering-systems', label: 'Engineering Systems' },
      { to: '/services/consultancy', label: 'Consultancy' },
      { to: '/services/procurement', label: 'Procurement & Supply' },
    ],
  },
  {
    label: 'Investors',
    to: '/investors',
    children: [
      { to: '/investors', label: 'Investor Relations' },
      { to: '/investors/governance', label: 'Governance' },
      { to: '/investors/reports', label: 'Reports & Publications' },
    ],
  },
  {
    label: 'Insights',
    to: '/blog',
    children: [{ to: '/blog', label: 'Blog & News' }],
  },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const path = location.pathname;
  const hash = location.hash;

  const isActive = (match) => path === match || path.startsWith(`${match}/`);

  const handleNavClick = (e, to) => {
    if (to.startsWith('#')) {
      e.preventDefault();
      scrollToSection(to.slice(1));
      return;
    }
    if (!to.includes('#')) return;
    e.preventDefault();
    const [route, section] = to.split('#');
    if (route && route !== path) {
      navigate(`${route}#${section}`);
    } else if (section) {
      scrollToSection(section);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (hash) {
      setTimeout(() => scrollToSection(hash.replace('#', '')), 60);
    } else if (path !== '/' && !hash) {
      window.scrollTo({ top: 0 });
    }
  }, [path, hash]);

  return (
    <>
      <header className="volt-header" role="banner">
        <div className="container volt-header-inner">
          <Link to="/" className="header-logo" aria-label="Ecotrunk Home">
            <div className="header-logo-icon">
              <img src="/assets/logo.png" alt="Ecotrunk International Ltd" />
            </div>
          </Link>

          <nav className="volt-nav" role="navigation" aria-label="Main navigation">
            {NAV.map((item) => (
              <div className="volt-nav-item" key={item.label}>
                <Link
                  to={item.to}
                  className={`volt-nav-link${item.children?.some((c) => isActive(c.to)) ? ' active' : ''}`}
                >
                  {item.label} {item.children && <i className="fas fa-chevron-down" aria-hidden="true"></i>}
                </Link>
                {item.children && (
                  <div className="volt-dropdown">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className={`volt-dropdown-link${isActive(c.to) ? ' active' : ''}`}
                        onClick={(e) => handleNavClick(e, c.to)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="/#contact" className="btn btn-primary volt-nav-cta" onClick={(e) => handleNavClick(e, '/#contact')}>
              Contact Us
            </a>
          </nav>

          <button
            className={`volt-toggle${menuOpen ? ' active' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <nav className={`volt-mobile${menuOpen ? ' open' : ''}`} role="navigation" aria-label="Mobile navigation">
        {NAV.map((item) => (
          <div className="volt-mobile-group" key={item.label}>
            <Link
              to={item.to}
              className={`volt-mobile-link${isActive(item.to) ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
            {item.children && (
              <div className="volt-mobile-links">
                {item.children.map((c) => (
                  <Link
                    key={c.to}
                    to={c.to}
                    className={`volt-mobile-sub${isActive(c.to) ? ' active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link to="/#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)} style={{ marginTop: 16 }}>
          Contact Us
        </Link>
      </nav>
    </>
  );
}
