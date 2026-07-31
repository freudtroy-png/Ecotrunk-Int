import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const SERVICES = [
  {
    icon: 'map-marked-alt',
    title: 'Project Development & Management',
    text: 'End-to-end development of renewable energy projects - site identification, feasibility, ESIA, grid connection, design, land securing, permitting, and financing support - from concept to construction-ready.',
    points: ['Site identification & feasibility', 'Environmental & social studies', 'Grid connection & permitting'],
    to: '/services/project-development',
    cta: 'Explore Project Development',
    image: '/assets/img/Site_Identification.jpg',
  },
  {
    icon: 'cogs',
    title: 'Engineering Systems Development',
    text: 'Technical depth across the engineering lifecycle - systems review, analysis, energy technology implementation, and the service systems that keep plants performing over decades of operation.',
    points: ['Engineering systems review', 'Systems analysis & design', 'Technology implementation'],
    to: '/services/engineering-systems',
    cta: 'Explore Engineering Systems',
    image: '/assets/img/eng.jpg',
  },
  {
    icon: 'handshake',
    title: 'Consultancy',
    text: 'Independent, rigorous advisory for developers, investors, government agencies, and communities - from feasibility studies and ESIA to monitoring, evaluation, training, and resource management.',
    points: ['Feasibility studies', 'Environmental management', 'Monitoring & evaluation'],
    to: '/services/consultancy',
    cta: 'Explore Consultancy',
    image: '/assets/img/pc.jpg',
  },
  {
    icon: 'truck',
    title: 'Procurement & Supply',
    text: 'Sourcing, verification, and delivery of high-quality engineering materials - solar PV, electrical and mechanical equipment, construction materials, and custom fabrication - KEBS compliant and quality assured.',
    points: ['Renewable energy components', 'Electrical & mechanical equipment', 'Testing & quality assurance'],
    to: '/services/procurement',
    cta: 'Explore Procurement',
    image: '/assets/img/pse.jpg',
  },
];

const WHY = [
  {
    title: 'Integrated Capability',
    text: 'Few firms combine development, engineering, consultancy, and procurement under one roof. Our clients benefit from a single accountable partner across the full project lifecycle.',
  },
  {
    title: 'Local Knowledge, Global Standards',
    text: 'We have worked in every major Kenyan energy market, yet we operate to international technical and ESG standards - giving clients confidence that projects are bankable and deliverable.',
  },
  {
    title: 'From Concept to Operation',
    text: 'Our services are designed to work together: a project we develop is engineered to our standards, advised by our consultants, and supplied through our procurement network.',
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        image="/assets/img/esd.jpg"
        badge={{ icon: 'concierge-bell', label: 'Our Services' }}
        title={
          <>
            Every Stage of Your <span style={{ color: 'var(--volt-teal-light)' }}>Energy Project</span>
          </>
        }
        subtitle="From the first feasibility study to full project development, engineering, procurement, and long-term operation - Ecotrunk delivers integrated services that carry renewable energy projects across the entire lifecycle."
        stats={[
          { number: '4', label: 'Core Service Lines' },
          { number: '6', label: 'Development Stages' },
          { number: '50+', label: 'Projects Served' },
          { number: '10+', label: 'Years Experience' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Four Services, One Accountability</h2>
            <p className="section-subtitle">
              Each service line can stand alone or combine with the others, giving clients flexibility - and a single partner accountable for the whole.
            </p>
          </div>

          <div className="service-hub-grid">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 80} className="service-hub-card">
                <div className="service-hub-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="service-hub-body">
                  <div className="service-hub-icon">
                    <i className={`fas fa-${service.icon}`} aria-hidden="true"></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul className="service-hub-points">
                    {service.points.map((point) => (
                      <li key={point}><i className="fas fa-check" aria-hidden="true"></i> {point}</li>
                    ))}
                  </ul>
                  <Link to={service.to} className="btn btn-primary">
                    {service.cta} <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-a">
        <div className="container">
          <div className="sec-head">
            <span className="section-label" style={{ color: 'var(--volt-teal-light)' }}>Why Ecotrunk</span>
            <h2 className="section-title" style={{ color: 'white' }}>The Advantage of Integration</h2>
          </div>
          <div className="benefit-grid">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 50} className="benefit-item">
                <h3 style={{ color: 'var(--volt-teal-light)' }}>{w.title}</h3>
                <p style={{ color: 'var(--volt-link)' }}>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="sec-head" style={{ textAlign: 'center', margin: '0 auto' }}>
            <span className="section-label">Related</span>
            <h2 className="section-title">Explore Our Technologies</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Our services are applied across solar, wind, and hydropower. Explore the technologies we develop, engineer, and supply.
            </p>
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/technology" className="btn btn-primary">
              Explore Technologies <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
