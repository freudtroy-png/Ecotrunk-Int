import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const REPORTS = [
  {
    icon: 'file-alt',
    type: 'Corporate Report',
    title: 'Annual Corporate Report',
    text: 'A consolidated summary of Ecotrunk\'s activities, projects, and corporate development. Prepared annually and made available to partners and financiers on request.',
  },
  {
    icon: 'chart-bar',
    type: 'Project Report',
    title: 'Project Case Studies',
    text: 'Technical and financial summaries of completed and ongoing projects across solar, wind, and hydropower - covering resource assessment, engineering, and delivery.',
  },
  {
    icon: 'leaf',
    type: 'ESG Report',
    title: 'Environmental & Social Performance',
    text: 'Reporting on environmental and social impact assessment, community engagement, and ESG compliance across our project portfolio.',
  },
  {
    icon: 'briefcase',
    type: 'Institutional Document',
    title: 'Company Profile & Capability Statement',
    text: 'An overview of our corporate structure, registrations, affiliations, team capabilities, and sector experience for institutional review.',
  },
];

const FEATURES = [
  {
    icon: 'lock',
    title: 'Confidentiality First',
    text: 'Reports are shared under appropriate confidentiality arrangements. Contact our team to discuss what information is available for your specific needs.',
  },
  {
    icon: 'check-double',
    title: 'Institutional Standards',
    text: 'Our documentation follows the standards expected by lenders, development finance institutions, and Kenyan regulators.',
  },
  {
    icon: 'clock',
    title: 'Responsive Requests',
    text: 'Information requests from partners, financiers, and accredited investors are handled promptly by our corporate team.',
  },
];

export default function Reports() {
  return (
    <>
      <PageHero
        image="/assets/img/paper.jpg"
        badge={{ icon: 'file-alt', label: 'Reports & Publications' }}
        title={
          <>
            Reporting to <span style={{ color: 'var(--volt-teal-light)' }}>Institutional Standards</span>
          </>
        }
        subtitle="Ecotrunk documents its work to the standards expected by partners, financiers, and regulators. The reports and publications below are representative of the information we make available under confidentiality on request."
        stats={[
          { number: '4', label: 'Report Categories' },
          { number: '10+', label: 'Years of Documentation' },
          { number: '50+', label: 'Project Records' },
          { number: '100%', label: 'Confidential Handling' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <span className="section-label">Available Reports</span>
            <h2 className="section-title">Publications &amp; Corporate Documentation</h2>
            <p className="section-subtitle">
              As a private company, Ecotrunk does not publish statutory market disclosures. The following categories of information are available to bona fide partners, financiers, and accredited investors on request.
            </p>
          </div>
          <div className="report-grid">
            {REPORTS.map((r, i) => (
              <Reveal key={r.title} delay={i * 80} className="report-card">
                <div className="report-card-type">{r.type}</div>
                <div className="report-card-icon">
                  <i className={`fas fa-${r.icon}`} aria-hidden="true"></i>
                </div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <span className="report-card-request">
                  Available on request <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--neutral-50)' }}>
        <div className="container">
          <div className="sec-head">
            <span className="section-label">How We Share Information</span>
            <h2 className="section-title">Our Disclosure Approach</h2>
          </div>
          <div className="benefit-grid">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 50} className="benefit-item">
                <h3><i className={`fas fa-${f.icon}`} aria-hidden="true" style={{ color: 'var(--volt-teal)', marginRight: 10 }}></i>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="sec-head" style={{ textAlign: 'center', margin: '0 auto' }}>
            <span className="section-label">Latest Thinking</span>
            <h2 className="section-title">Insights From Our Team</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Our team regularly shares analysis on Kenya&apos;s renewable energy transition through our blog and news section.
            </p>
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/blog" className="btn btn-primary">
              Visit Our Blog <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="section tech-cta-section">
        <div className="container">
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <Reveal>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: 20, lineHeight: 1.15 }}>
                Request Information
              </h2>
            </Reveal>
            <Reveal delay={50}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.9, marginBottom: 32 }}>
                If you are a partner, financier, or accredited investor seeking corporate or project information, contact our team to discuss your requirements under confidentiality.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/#contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 40px' }}>
                Request a Report <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
