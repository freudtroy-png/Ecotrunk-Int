import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const KEY_FIGURES = [
  { icon: 'calendar-check', number: '10+', label: 'years of experience' },
  { icon: 'solar-panel', number: '50+', label: 'projects delivered' },
  { icon: 'map-marked-alt', number: '7', label: 'counties served' },
  { icon: 'handshake', number: '25+', label: 'partner affiliations' },
];

const TECHNOLOGIES = [
  {
    id: 'overview',
    image: '/assets/img/solar-pic.jpg',
    label: 'OVERVIEW',
    to: '/technology',
  },
  {
    id: 'solar',
    image: '/assets/img/solar.jpg',
    label: 'SOLAR',
    to: '/solar',
  },
  {
    id: 'wind',
    image: '/assets/img/windmill.jpg',
    label: 'WIND',
    to: '/wind',
  },
  {
    id: 'hydro',
    image: '/assets/img/hydro.jpg',
    label: 'HYDRO',
    to: '/hydro',
  },
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
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'success', message: 'Thank you for your message. Our team will get back to you shortly.' });
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <>
      {/* ===== Hero: full-screen video with mission ===== */}
      <section className="volt-jumbotron">
        <div className="volt-jumbotron-bg">
          <video
            src="/assets/video/hero-wind-solar.mp4"
            poster="/assets/img/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Aerial footage of wind turbines and solar panels"
          >
            <source src="/assets/video/hero-wind-solar.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="volt-jumbotron-caption">
          <h1>Clean energy for Kenya&apos;s tomorrow</h1>
          <p>
            We develop, engineer, and deliver renewable energy projects that improve the global
            environment and foster local development.
          </p>
          <Link to="/about" className="btn">
            About Us
          </Link>
        </div>
      </section>

      {/* ===== Our mission ===== */}
      <section className="bg-white">
        <div className="container">
          <Reveal className="quote-container">
            <h2 className="volt-mission-title">Our mission</h2>
            <h4 className="volt-mission-line">Improve <span className="text-b">global environment</span></h4>
            <h4 className="volt-mission-line mb-5">Fostering <span className="text-b">local development</span></h4>
            <Link to="/about" className="btn btn-primary">About Us</Link>
          </Reveal>
        </div>
      </section>

      {/* ===== What we do ===== */}
      <section className="bg-white" id="services">
        <div className="container-fluid">
          <Reveal>
            <h2 className="text-a text-center volt-block-title">What we do</h2>
          </Reveal>
          <div className="row justify-content-center" id="cta-wwdo">
            <Reveal className="volt-hover-card" delay={100}>
              <Link to="/services/engineering-systems" className="divLink">
                <div className="volt-hover-media">
                  <img src="/assets/img/solar.jpg" alt="Engineering systems" loading="lazy" />
                </div>
                <div className="hovercontent gray">
                  <div className="display-inner-content">
                    <p className="text-white font-lg">
                      Ecotrunk&apos;s engineering practice covers the entire life cycle of renewable energy plants - from systems design, technical review, and infrastructure optimisation to supervision, commissioning, and operations support.
                    </p>
                    <p><span className="btn btn-outline-transparent volt-read-more">Learn more</span></p>
                  </div>
                  <div className="hover-inner-content"><span>ENGINEERING SYSTEMS</span></div>
                </div>
              </Link>
            </Reveal>
            <Reveal className="volt-hover-card" delay={200}>
              <Link to="/services/project-development" className="divLink">
                <div className="volt-hover-media">
                  <img src="/assets/img/windmill.jpg" alt="Project development" loading="lazy" />
                </div>
                <div className="hovercontent gray">
                  <div className="display-inner-content">
                    <p className="text-white font-lg">
                      The development of renewable energy projects is central to Ecotrunk&apos;s strategy. Our teams manage every stage - from assessing potential and securing the best sites to construction and commissioning.
                    </p>
                    <p><span className="btn btn-outline-transparent volt-read-more">Learn more</span></p>
                  </div>
                  <div className="hover-inner-content"><span>PROJECT DEVELOPMENT</span></div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Business model ===== */}
      <section className="bg-white">
        <div className="container py-5">
          <Reveal>
            <h2 className="text-a text-center volt-block-title">Ecotrunk&apos;s model</h2>
            <div className="volt-model-figure">
              <div className="volt-model-step">
                <div className="volt-model-icon"><i className="fas fa-map-marked-alt" aria-hidden="true"></i></div>
                <h5>Identify</h5>
                <p>Site identification, feasibility, and resource assessment.</p>
              </div>
              <div className="volt-model-arrow"><i className="fas fa-arrow-right" aria-hidden="true"></i></div>
              <div className="volt-model-step">
                <div className="volt-model-icon"><i className="fas fa-drafting-compass" aria-hidden="true"></i></div>
                <h5>Develop</h5>
                <p>Design, permitting, engineering systems, and financing.</p>
              </div>
              <div className="volt-model-arrow"><i className="fas fa-arrow-right" aria-hidden="true"></i></div>
              <div className="volt-model-step">
                <div className="volt-model-icon"><i className="fas fa-hard-hat" aria-hidden="true"></i></div>
                <h5>Build</h5>
                <p>Procurement, construction, supervision, and commissioning.</p>
              </div>
              <div className="volt-model-arrow"><i className="fas fa-arrow-right" aria-hidden="true"></i></div>
              <div className="volt-model-step">
                <div className="volt-model-icon"><i className="fas fa-chart-line" aria-hidden="true"></i></div>
                <h5>Operate</h5>
                <p>Monitoring, maintenance, and performance optimisation.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Key figures ===== */}
      <section className="bg-l-gray pt-5">
        <div className="container">
          <Reveal>
            <h2 className="text-a text-center volt-block-title">Key figures</h2>
          </Reveal>
          <div className="row justify-content-center volt-figures">
            {KEY_FIGURES.map((kf) => (
              <Reveal key={kf.label} delay={100} className="volt-figure">
                <div className="volt-figure-icon"><i className={`fas fa-${kf.icon}`} aria-hidden="true"></i></div>
                <h3 className="volt-figure-number">{kf.number}</h3>
                <p className="small font-weight-bold">{kf.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Technologies tabs ===== */}
      <section className="bg-a" id="Technologies">
        <div className="container">
          <div className="volt-tech-tabs">
            {TECHNOLOGIES.map((t) => (
              <Reveal key={t.id} delay={100} className="volt-tech-tab">
                <Link to={t.to} className="volt-tech-tablink">
                  <img src={t.image} alt={t.label} loading="lazy" />
                  <div className="hovercontent gray">
                    <div className="display-inner-content">
                      <span className="read-intro">Read intro</span>
                      <i className="fas fa-chevron-down" aria-hidden="true"></i>
                    </div>
                    <div className="hover-inner-content"><span>{t.label}</span></div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Sustainability ===== */}
      <section className="bg-white volt-split">
        <div className="volt-split-media">
          <img src="/assets/img/solar-pic.jpg" alt="Sustainability at Ecotrunk" loading="lazy" />
        </div>
        <div className="volt-split-body">
          <h2 className="text-b">Sustainability</h2>
          <p className="lead">
            Since its incorporation in 2014, Ecotrunk has been fully committed to improving the global environment while fostering local development across Kenya. With the conviction that renewables are where human development and climate preservation meet, our teams deliver the most innovative and tailored solutions for a sustainable future.
          </p>
          <Link to="/about#values" className="btn btn-secondary">Learn More</Link>
        </div>
      </section>

      {/* ===== Uncompromising ethics ===== */}
      <section className="bg-l-gray volt-split volt-split-reverse">
        <div className="volt-split-body">
          <h2 className="text-b">Uncompromising ethics</h2>
          <p className="lead">
            Ecotrunk&apos;s mission to <strong>foster local development</strong> can only be fulfilled if each member of our team acts in the most <strong>ethical and responsible way</strong>.
          </p>
          <p className="lead">
            In this regard, Ecotrunk intends to be exemplary and to pursue the growth of its activities while remaining faithful to one of its core values: <strong>integrity</strong>.
          </p>
          <Link to="/about#values" className="btn btn-secondary mt-3">Know more</Link>
        </div>
        <div className="volt-split-media">
          <img src="/assets/img/hydro.jpg" alt="Ethics and responsible development" loading="lazy" />
        </div>
      </section>

      {/* ===== Quality ===== */}
      <section className="bg-white volt-split">
        <div className="volt-split-media">
          <img src="/assets/img/windmill.jpg" alt="Quality in delivery" loading="lazy" />
        </div>
        <div className="volt-split-body">
          <h2 className="text-b">Quality</h2>
          <p className="lead">
            Ecotrunk covers the entire life cycle of renewable energy plants, from development to operation. A strong quality mindset is a key factor for our clients, suppliers, partners, employees, and ultimately for our overall success.
          </p>
          <Link to="/services/engineering-systems" className="btn btn-secondary">Learn More</Link>
        </div>
      </section>

      {/* ===== Our Subsidiaries ===== */}
      <section className="bg-l-gray volt-subsidiaries">
        <div className="container">
          <Reveal>
            <h2 className="text-a text-center volt-block-title">Our Affiliations</h2>
            <p className="text-center volt-subsidiaries-sub">
              Ecotrunk is proud to be affiliated with Kenya&apos;s leading energy, regulatory, and professional bodies.
            </p>
          </Reveal>
          <div className="volt-affiliations">
            {AFFILIATIONS.map((aff, i) => (
              <Reveal key={aff.alt} delay={i * 60} className="volt-affiliation">
                <img src={aff.src} alt={aff.alt} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact Us ===== */}
      <section className="bg-a volt-contact-cta">
        <div className="container text-center">
          <Reveal>
            <h2>Contact Us</h2>
            <p>Please feel free to get in touch with our team if you need more information.</p>
            <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Reach Us
            </a>
          </Reveal>
        </div>
      </section>

      {/* ===== Contact form ===== */}
      <section className="section" id="contact">
        <div className="container">
          <Reveal>
            <h2 className="section-title text-center">Get in Touch</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 48px', textAlign: 'center' }}>
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
                  <button type="submit" className="btn btn-primary form-submit">
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
