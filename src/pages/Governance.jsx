import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const PRINCIPLES = [
  {
    icon: 'hand-holding-heart',
    title: 'Integrity',
    text: 'We act honestly and responsibly in every engagement. Our mission to foster local development can only be fulfilled if each member of our team behaves in the most ethical and responsible way in all circumstances.',
  },
  {
    icon: 'balance-scale',
    title: 'Transparency',
    text: 'We document decisions, contracts, and project information to institutional standards. Partners and financiers can rely on accurate, timely, and complete information at every stage of a project.',
  },
  {
    icon: 'shield-alt',
    title: 'Compliance',
    text: 'We operate within the full regulatory framework governing Kenya\'s energy sector - EPRA licences, NEMA environmental and social requirements, county approvals, and all applicable corporate obligations.',
  },
  {
    icon: 'users',
    title: 'Accountability',
    text: 'Clear lines of responsibility govern every project and business function. Leadership answers for outcomes to clients, communities, partners, and regulators alike.',
  },
];

const REGULATORY = [
  { icon: 'file-signature', title: 'EPRA', text: 'Generation licensing and grid code compliance for energy projects.' },
  { icon: 'leaf', title: 'NEMA', text: 'Environmental and social impact assessment and licensing.' },
  { icon: 'building', title: 'County Governments', text: 'Planning, building, and operational approvals at county level.' },
  { icon: 'hard-hat', title: 'NCA', text: 'National construction authority registration and works supervision.' },
  { icon: 'handshake', title: 'KEREA & KEPSA', text: 'Professional affiliations with Kenya\'s energy and private sector associations.' },
];

const COMMITMENTS = [
  {
    icon: 'file-invoice-dollar',
    title: 'Financial Discipline',
    text: 'Projects are structured for bankability from concept stage, with transparent budgeting, procurement, and financial reporting throughout development and construction.',
  },
  {
    icon: 'people-carry',
    title: 'Ethical Supply Chains',
    text: 'Our procurement practices favour certified suppliers, verify factory test certificates and traceability, and reject corruption and conflict-of-interest in any form.',
  },
  {
    icon: 'sitemap',
    title: 'Board & Management Oversight',
    text: 'A clearly defined management structure provides board-level accountability for corporate governance, risk management, and project delivery performance.',
  },
];

export default function Governance() {
  return (
    <>
      <PageHero
        image="/assets/img/eng.jpg"
        badge={{ icon: 'balance-scale', label: 'Governance' }}
        title={
          <>
            Governance Anchored in <span style={{ color: 'var(--volt-teal-light)' }}>Integrity</span>
          </>
        }
        subtitle="Ecotrunk intends to be exemplary in corporate governance - pursuing the growth of its activities while remaining faithful to one of its core values: integrity. This section sets out the principles, obligations, and standards that govern how we do business."
        stats={[
          { number: '4', label: 'Core Principles' },
          { number: '5+', label: 'Regulatory Obligations' },
          { number: '0', label: 'Tolerance for Corruption' },
          { number: '100%', label: 'Projects ESG-Compliant' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <span className="section-label">Our Principles</span>
            <h2 className="section-title">The Foundations of How We Work</h2>
          </div>
          <div className="benefit-grid">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 50} className="benefit-item">
                <h3><i className={`fas fa-${p.icon}`} aria-hidden="true" style={{ color: 'var(--volt-teal)', marginRight: 10 }}></i>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--neutral-50)' }}>
        <div className="container">
          <div className="sec-head">
            <span className="section-label">Regulatory Framework</span>
            <h2 className="section-title">Obligations We Uphold</h2>
            <p className="section-subtitle">
              Our operations sit within a defined regulatory framework. Compliance is not optional overhead - it is how long-lived assets earn their social and financial licence to operate.
            </p>
          </div>
          <div className="app-grid">
            {REGULATORY.map((r) => (
              <div className="app-cell" key={r.title}>
                <h4><i className={`fas fa-${r.icon}`} aria-hidden="true" style={{ color: 'var(--volt-teal)', marginRight: 8 }}></i>{r.title}</h4>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-a">
        <div className="container">
          <div className="sec-head">
            <span className="section-label" style={{ color: 'var(--volt-teal-light)' }}>Standards</span>
            <h2 className="section-title" style={{ color: 'white' }}>Our Governance Commitments</h2>
          </div>
          <div className="benefit-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {COMMITMENTS.map((c, i) => (
              <Reveal key={c.title} delay={i * 50} className="benefit-item">
                <h3 style={{ color: 'var(--volt-teal-light)' }}>{c.title}</h3>
                <p style={{ color: 'var(--volt-link)' }}>{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="sec-head" style={{ textAlign: 'center', margin: '0 auto' }}>
            <span className="section-label">Further Reading</span>
            <h2 className="section-title">Explore Governance &amp; Reporting</h2>
          </div>
          <div className="investor-pillar-grid">
            <Reveal className="investor-pillar-card">
              <div className="investor-pillar-icon"><i className="fas fa-file-alt" aria-hidden="true"></i></div>
              <h3>Reports &amp; Publications</h3>
              <p>Corporate and project reports, case studies, and sector publications prepared to institutional standards.</p>
              <Link to="/investors/reports" className="tech-card-link">
                Browse reports <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </Reveal>
            <Reveal delay={100} className="investor-pillar-card">
              <div className="investor-pillar-icon"><i className="fas fa-chart-line" aria-hidden="true"></i></div>
              <h3>Investor Relations</h3>
              <p>Return to the investor relations overview for business fundamentals and partnership information.</p>
              <Link to="/investors" className="tech-card-link">
                Investor relations <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </Reveal>
            <Reveal delay={200} className="investor-pillar-card">
              <div className="investor-pillar-icon"><i className="fas fa-envelope-open-text" aria-hidden="true"></i></div>
              <h3>Contact Us</h3>
              <p>Our team is available for governance, compliance, and partnership enquiries from clients and stakeholders.</p>
              <Link to="/#contact" className="tech-card-link">
                Get in touch <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
