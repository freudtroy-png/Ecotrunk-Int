import { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const SERVICES = [
  { to: '/services/project-development', label: 'Project Development' },
  { to: '/services/engineering-systems', label: 'Engineering Systems' },
  { to: '/services/consultancy', label: 'Consultancy' },
  { to: '/services/procurement', label: 'Procurement & Supply' },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  }, [location]);

  const path = location.pathname;
  const hash = location.hash;

  const isActive = (match, exact = false) => {
    if (exact) return path === match;
    return path.startsWith(match);
  };

  const servicesActive = path.startsWith('/services');

  const handleNavClick = (e, to) => {
    e.preventDefault();
    if (menuOpen) setMenuOpen(false);
    const [route, section] = to.split('#');
    if (route && route !== path) {
      navigate(route + (section ? `#${section}` : ''));
      return;
    }
    if (section) {
      scrollToSection(section);
    } else {
      navigate(route || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const navLinkClass = (active) => `nav-link${active ? ' active' : ''}`;

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="header-inner">
          <Link to="/" className="header-logo" aria-label="Ecotrunk Home" onClick={(e) => handleNavClick(e, '/')}>
            <div className="header-logo-icon">
              <img src="/assets/logo.png" alt="Ecotrunk International Ltd" />
            </div>
          </Link>
          <nav className="nav" role="navigation" aria-label="Main navigation">
            <Link to="/" className={navLinkClass(path === '/')} onClick={(e) => handleNavClick(e, '/')}>
              Home
            </Link>
            <Link to="/about" className={navLinkClass(path === '/about')} onClick={(e) => handleNavClick(e, '/about')}>
              About
            </Link>
            <Link to="/about#values" className={navLinkClass(false)} onClick={(e) => handleNavClick(e, '/about#values')}>
              Values
            </Link>
            <Link to="/technology" className={navLinkClass(isActive('/technology') || path === '/solar' || path === '/wind' || path === '/hydro')} onClick={(e) => handleNavClick(e, '/technology')}>
              Technologies
            </Link>
            <Link to="/blog" className={navLinkClass(isActive('/blog'))} onClick={(e) => handleNavClick(e, '/blog')}>
              Blog
            </Link>
            <div className="nav-dropdown">
              <a className={`nav-link nav-dropdown-trigger${servicesActive ? ' active' : ''}`}>
                Services <i className="fas fa-chevron-down" aria-hidden="true"></i>
              </a>
              <div className="nav-dropdown-menu">
                {SERVICES.map((s) => (
                  <Link key={s.to} to={s.to} className={`nav-dropdown-link${path === s.to ? ' active' : ''}`} onClick={(e) => handleNavClick(e, s.to)}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
            <a href="#contact" className={navLinkClass(false)} onClick={(e) => handleNavClick(e, '/#contact')}>
              Contact
            </a>
            <Link to="/#contact" className="nav-cta" onClick={(e) => handleNavClick(e, '/#contact')}>
              Get in Touch
            </Link>
          </nav>
          <button
            className={`mobile-toggle${menuOpen ? ' active' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <nav className={`mobile-menu${menuOpen ? ' open' : ''}`} role="navigation" aria-label="Mobile navigation">
        <Link to="/" className={navLinkClass(path === '/')} onClick={(e) => handleNavClick(e, '/')}>Home</Link>
        <Link to="/about" className={navLinkClass(path === '/about')} onClick={(e) => handleNavClick(e, '/about')}>About</Link>
        <Link to="/about#values" className={navLinkClass(false)} onClick={(e) => handleNavClick(e, '/about#values')}>Values</Link>
        <Link to="/technology" className={navLinkClass(isActive('/technology') || path === '/solar' || path === '/wind' || path === '/hydro')} onClick={(e) => handleNavClick(e, '/technology')}>Technologies</Link>
        <Link to="/blog" className={navLinkClass(isActive('/blog'))} onClick={(e) => handleNavClick(e, '/blog')}>Blog</Link>
        <div className={`mobile-submenu${submenuOpen ? ' open' : ''}`}>
          <div className="mobile-submenu-header" onClick={() => setSubmenuOpen((v) => !v)}>
            <span className={`nav-link${servicesActive ? ' active' : ''}`}>Services</span>
            <span className="mobile-submenu-toggle"><i className="fas fa-chevron-down" aria-hidden="true"></i></span>
          </div>
          <div className="mobile-submenu-links">
            {SERVICES.map((s) => (
              <Link key={s.to} to={s.to} className={`nav-link${path === s.to ? ' active' : ''}`} onClick={(e) => handleNavClick(e, s.to)}>
                {s.label}
              </Link>
            ))}
          </div>
        </div>
        <a href="#gallery" className="nav-link" onClick={(e) => handleNavClick(e, '/#gallery')}>Gallery</a>
        <a href="#contact" className={navLinkClass(false)} onClick={(e) => handleNavClick(e, '/#contact')}>Contact</a>
        <Link to="/#contact" className="nav-cta" onClick={(e) => handleNavClick(e, '/#contact')}>Get in Touch</Link>
      </nav>
    </>
  );
}
