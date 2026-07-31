import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';

const STATS = [
  { icon: 'calendar-check', end: 10, suffix: '+', label: 'Years of Experience' },
  { icon: 'solar-panel', end: 50, suffix: '+', label: 'Projects Delivered' },
  { icon: 'users', end: 7, suffix: '', label: 'Counties Served' },
  { icon: 'handshake', end: 25, suffix: '+', label: 'Partner Affiliations' },
];

const TECH_CARDS = [
  {
    tag: 'Solar',
    image: '/assets/img/solar.jpg',
    title: 'Solar Energy',
    text: 'Solar energy technology harnesses solar irradiance to generate electricity via photovoltaics (PV) and concentrating solar power (CSP). We design and manage installations ranging from small commercial rooftops to utility-scale solar farms across Kenya.',
    to: '/solar',
    cta: 'Explore Solar',
  },
  {
    tag: 'Wind',
    image: '/assets/img/windmill.jpg',
    title: 'Wind Energy',
    text: 'Wind energy harnesses the kinetic energy of moving air using advanced turbine technology. Our expertise covers both onshore and offshore installations, including site assessment, turbine selection, grid integration, and farm management.',
    to: '/wind',
    cta: 'Explore Wind',
  },
  {
    tag: 'Hydro',
    image: '/assets/img/hydro.jpg',
    title: 'Hydropower',
    text: 'Hydropower harnesses the energy of water moving from higher to lower elevations. Our project portfolio includes dam projects with reservoirs, run-of-river systems, and small-scale hydro solutions tailored to Kenya\'s diverse topography.',
    to: '/hydro',
    cta: 'Explore Hydro',
  },
];

const SERVICES = [
  {
    icon: 'diagram-project',
    title: 'Project Development & Management',
    text: 'From site identification and feasibility studies through permitting, financing, and construction - we manage every phase of the project lifecycle. Our team coordinates with regulators, communities, and contractors to deliver on time and on budget.',
    to: '/services/project-development',
    cta: 'View Process',
  },
  {
    icon: 'cogs',
    title: 'Engineering Systems Development',
    text: 'We analyse complex engineering challenges and design robust, consumer-centric solutions. Our systems expertise covers energy technology implementation, infrastructure review, and service system optimisation for maximum efficiency.',
    to: '/services/engineering-systems',
    cta: 'Learn More',
  },
  {
    icon: 'chart-line',
    title: 'Project Consultancy',
    text: 'Strategic advisory across feasibility, environmental management, technical assessment, monitoring, and capacity building. We help clients navigate regulatory frameworks, assess risk, and make informed investment decisions.',
    to: '/services/consultancy',
    cta: 'Learn More',
  },
  {
    icon: 'truck-loading',
    title: 'Procurement & Supply',
    text: 'We source and supply high-quality engineering materials - from solar panels and wind turbine components to electrical equipment and construction materials - with rigorous quality assurance and sustainable sourcing practices.',
    to: '/services/procurement',
    cta: 'Learn More',
  },
];

const CLIMATE_STATS = [
  { end: 73, suffix: '%', label: 'of global GHG from energy' },
  { end: 90, suffix: '%', label: 'Kenya\'s grid is already green' },
  { end: 2050, suffix: '', label: 'Net-zero emissions target' },
  { end: 100, suffix: '%', label: 'Kenya\'s clean energy target by 2030' },
];

const GALLERY_ITEMS = [
  { src: '/assets/img/solar-pic.jpg', alt: 'Solar PV installation', label: 'Solar PV Installation, Rift Valley', category: 'solar' },
  { src: '/assets/img/solar.jpg', alt: 'Commercial solar array', label: 'Commercial Solar Array, Nairobi', category: 'solar' },
  { src: '/assets/img/windmill.jpg', alt: 'Wind turbine project', label: 'Wind Farm Development', category: 'wind' },
  { src: '/assets/img/hydro.jpg', alt: 'Hydroelectric facility', label: 'Hydropower Station', category: 'hydro' },
  { src: '/assets/img/solar-pic.jpg', alt: 'Utility solar farm', label: 'Utility Solar Farm, Eastern Kenya', category: 'solar' },
];

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'solar', label: 'Solar' },
  { value: 'wind', label: 'Wind' },
  { value: 'hydro', label: 'Hydro' },
];

const AFFILIATIONS = [
  { src: '/assets/img/kncci.jpg', alt: 'KNCCI' },
  { src: '/assets/img/nca.jpg', alt: 'NCA' },
  { src: '/assets/img/nema.jpg', alt: 'NEMA' },
  { src: '/assets/img/kerea.jpg', alt: 'KEREA' },
  { src: '/assets/img/rerec.jpg', alt: 'REREC' },
  { src: '/assets/img/kplc.jpg', alt: 'KPLC' },
  { src: '/assets/img/epra.jpg', alt: 'EPRA' },
  { src: '/assets/img/ketraco.jpg', alt: 'KETRACO' },
];

export default function Home() {
  const [filter, setFilter] = useState('all');
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const visibleGallery = GALLERY_ITEMS.filter((item) => filter === 'all' || item.category === filter);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'success', message: 'Thank you for your message. Our team will get back to you shortly.' });
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-image">
          <img src="/assets/img/solar-pic.jpg" alt="Renewable energy landscape with solar panels and wind turbines at sunset" loading="eager" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">Renewable Energy Experts - Nairobi, Kenya</div>
          <h1 className="hero-title">
            Powering Kenya&apos;s<br />
            <span className="hero-title-accent">Sustainable Future</span>
          </h1>
          <p className="hero-description">
            Ecotrunk International Ltd delivers project development, engineering systems, and consultancy services across East Africa&apos;s renewable energy sector. From solar and wind to hydropower, we build the infrastructure for a cleaner tomorrow.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">
              Learn About Us <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </Link>
            <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Start a Project <i className="fas fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <Reveal>
                <span className="section-label">About ETL</span>
                <h2 className="section-title">Engineering a Greener Tomorrow</h2>
                <p className="section-subtitle">
                  <strong>Ecotrunk International Ltd (ETL)</strong> is a firm of Technologists, Consultants, and Managers incorporated in the Republic of Kenya. The firm has broad experience in Project Development &amp; Management, Engineering Systems Development and Consultancy in the renewable energy industry.
                </p>
                <p className="section-subtitle">
                  Since 2014, Ecotrunk has been deeply dedicated to enhancing the global environment while promoting local development across Kenya. Our teams of qualified engineers and project managers work closely with communities, regulators, and investors to deliver energy projects that are technically sound, financially viable, and socially responsible.
                </p>
                <p className="section-subtitle">
                  We believe that renewable energy is where human progress and climate protection converge. Every project we undertake reflects this conviction - from initial feasibility studies through to commissioning and operations.
                </p>
                <Link to="/about" className="btn btn-outline-dark" style={{ marginTop: 16 }}>
                  Read More About ETL <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </Reveal>
            </div>
            <div className="about-stats">
              <Reveal delay={100}>
                {STATS.map((stat) => (
                  <div className="stat-card" key={stat.label}>
                    <span className="stat-icon"><i className={`fas fa-${stat.icon}`} aria-hidden="true"></i></span>
                    <div className="stat-number">
                      <CountUp end={stat.end} suffix={stat.suffix} />
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <div className="mission-grid">
            <Reveal className="mission-card">
              <div className="mission-card-icon"><i className="fas fa-bullseye" aria-hidden="true"></i></div>
              <h3>Our Mission</h3>
              <p>To provide the most competitive energy, engineering, and construction consulting services and tools in the respective industries, incorporating an advanced and sustainable approach that drives meaningful change for our clients and communities.</p>
            </Reveal>
            <Reveal delay={100} className="mission-card">
              <div className="mission-card-icon"><i className="fas fa-eye" aria-hidden="true"></i></div>
              <h3>Our Vision</h3>
              <p>To be the leading renewable energy consultancy in East Africa, known for technical excellence, integrity, and a unwavering commitment to sustainable development that benefits both people and the planet.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="technologies">
        <div className="container">
          <Reveal>
            <span className="section-label">Technologies</span>
            <h2 className="section-title">Renewable Energy Technologies</h2>
            <p className="section-subtitle">
              Our consultancy and project development services span a diverse range of renewable energy technologies, each selected and deployed based on site-specific conditions and client objectives.
            </p>
          </Reveal>

          <div className="tech-grid">
            {TECH_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 100} className="tech-card">
                <div className="tech-card-image">
                  <span className="tech-card-tag">{card.tag}</span>
                  <img src={card.image} alt={card.title} loading="lazy" />
                </div>
                <div className="tech-card-body">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <Link to={card.to} className="tech-card-link">
                    {card.cta} <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <Reveal>
            <span className="section-label">Our Services</span>
            <h2 className="section-title">What We Deliver</h2>
            <p className="section-subtitle">
              End-to-end expertise across the full lifecycle of renewable energy and engineering projects in Kenya and East Africa.
            </p>
          </Reveal>

          <div className="services-grid">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 100} className="service-card">
                <div className="service-card-icon"><i className={`fas fa-${service.icon}`} aria-hidden="true"></i></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link to={service.to} className="service-card-link">
                  {service.cta} <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section climate-section">
        <div className="climate-bg"></div>
        <div className="container">
          <div className="climate-content">
            <div className="climate-text">
              <Reveal>
                <span className="section-label" style={{ color: 'var(--green-400)', paddingLeft: 48 }}>Why Green Energy</span>
                <h2>The Urgency of Kenya&apos;s Energy Transition</h2>
                <p>
                  The energy supply sector is the largest contributor to global greenhouse gas emissions. In Kenya, rapid economic growth and increasing energy demand make the transition to renewable sources both an environmental imperative and an economic opportunity. Renewable energy solutions constitute the safe, reliable, and affordable pathway capable of meeting Kenya&apos;s nationally determined contributions under the Paris Agreement while powering sustainable development.
                </p>
              </Reveal>
            </div>
            <div className="climate-stats">
              <Reveal delay={100}>
                {CLIMATE_STATS.map((stat) => (
                  <div className="climate-stat" key={stat.label}>
                    <div className="climate-stat-number">
                      <CountUp end={stat.end} suffix={stat.suffix} />
                    </div>
                    <div className="climate-stat-label">{stat.label}</div>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container">
          <Reveal style={{ textAlign: 'center' }}>
            <span className="section-label" style={{ paddingLeft: 0 }}>Gallery</span>
            <h2 className="section-title">Our Projects in Action</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A selection of renewable energy installations and engineering work delivered by the Ecotrunk team across Kenya.
            </p>
          </Reveal>

          <div className="gallery-filters" style={{ justifyContent: 'center' }}>
            {FILTERS.map((f) => (
              <button
                key={f.value}
                className={`gallery-filter${filter === f.value ? ' active' : ''}`}
                onClick={() => setFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {visibleGallery.map((item) => (
              <div className="gallery-item" key={item.label}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-label">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section affiliations-section">
        <div className="container">
          <Reveal style={{ textAlign: 'center' }}>
            <span className="section-label section-label-center">Affiliations</span>
            <h2 className="section-title">Trusted Partners &amp; Accreditations</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Ecotrunk is proud to be affiliated with Kenya&apos;s leading energy, regulatory, and professional bodies.
            </p>
          </Reveal>

          <div className="affiliations-grid">
            {AFFILIATIONS.map((aff) => (
              <div className="affiliation-item" key={aff.alt}>
                <img src={aff.src} alt={aff.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container">
          <Reveal>
            <span className="section-label">Contact</span>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Ready to discuss your renewable energy project? Reach out to our team in Nairobi.
            </p>
          </Reveal>

          <div className="contact-grid">
            <div className="contact-info">
              <Reveal>
                <h3>Let&apos;s Talk About Your Project</h3>
                <p>Whether you need project development, engineering consultancy, or procurement support - we&apos;re here to help with expert advice and reliable delivery.</p>
                <div className="contact-details">
                  <div className="contact-detail">
                    <div className="contact-detail-icon"><i className="fas fa-map-marker-alt" aria-hidden="true"></i></div>
                    <div>
                      <h4>Our Location</h4>
                      <p>Professional Centre, Off Ngong Road<br />P.O Box 13327-00200, Nairobi, Kenya</p>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <div className="contact-detail-icon"><i className="fas fa-phone-alt" aria-hidden="true"></i></div>
                    <div>
                      <h4>Phone Number</h4>
                      <p><a href="tel:+254728367885">+254 728 367 885</a></p>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <div className="contact-detail-icon"><i className="fas fa-envelope" aria-hidden="true"></i></div>
                    <div>
                      <h4>Email Address</h4>
                      <p><a href="mailto:info@ecotrunk.co.ke">info@ecotrunk.co.ke</a><br /><a href="mailto:contact@ecotrunk.co.ke">contact@ecotrunk.co.ke</a></p>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <div className="contact-detail-icon"><i className="fas fa-clock" aria-hidden="true"></i></div>
                    <div>
                      <h4>Office Hours</h4>
                      <p>Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="contact-form">
              <Reveal delay={100}>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input type="text" id="name" name="name" placeholder="Your full name" required value={form.name} onChange={update('name')} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" placeholder="you@example.com" required value={form.email} onChange={update('email')} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="+254 7XX XXX XXX" value={form.phone} onChange={update('phone')} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" value={form.subject} onChange={update('subject')}>
                      <option value="">Select a service...</option>
                      <option value="project-development">Project Development &amp; Management</option>
                      <option value="engineering-systems">Engineering Systems Development</option>
                      <option value="consultancy">Consultancy Services</option>
                      <option value="procurement">Procurement &amp; Supply</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Tell us about your project, requirements, and timeline..." required value={form.message} onChange={update('message')}></textarea>
                  </div>
                  <button type="submit" className="form-submit">
                    Send Message <i className="fas fa-paper-plane" aria-hidden="true"></i>
                  </button>
                  {status.type && <div className={`form-status ${status.type}`}>{status.message}</div>}
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
