import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const FACTS = [
  { number: '2014', text: 'year of incorporation in Kenya' },
  { number: '10+', text: 'years operating in the energy sector' },
  { number: '50+', text: 'projects delivered across the country' },
  { number: '7', text: 'counties served to date' },
];

const PILLARS = [
  {
    icon: 'folder-open',
    title: 'Reports & Publications',
    text: 'Annual reports, project case studies, and sector publications. Reports are prepared in line with Kenyan disclosure practice and made available to partners and financiers on request.',
    to: '/investors/reports',
    cta: 'Browse reports',
  },
  {
    icon: 'balance-scale',
    title: 'Governance',
    text: 'Our governance framework is anchored on integrity, transparency, and accountability - from board oversight to ethics and regulatory compliance across every project we undertake.',
    to: '/investors/governance',
    cta: 'See our governance',
  },
  {
    icon: 'solar-panel',
    title: 'Project Portfolio',
    text: 'A growing pipeline spanning solar, wind, and hydropower - from commercial rooftops in Nairobi to utility-scale developments and rural electrification schemes.',
    to: '/solar',
    cta: 'Explore technologies',
  },
  {
    icon: 'envelope-open-text',
    title: 'Investor Contact',
    text: 'Our corporate team responds to investor, partner, and financier enquiries. Contact us for reporting, partnership, or investment-related matters.',
    to: '/#contact',
    cta: 'Contact the team',
  },
];

export default function Investors() {
  return (
    <>
      <PageHero
        image="/assets/img/pmt.jpg"
        badge={{ icon: 'chart-line', label: 'Investor Relations' }}
        title={
          <>
            Building Value Through <span style={{ color: 'var(--volt-teal-light)' }}>Clean Energy</span>
          </>
        }
        subtitle="Ecotrunk International Ltd is a private Kenyan company delivering renewable energy projects across East Africa. This section outlines our business fundamentals, governance, and reporting for partners, financiers, and prospective investors."
        stats={[
          { number: '2014', label: 'Year Incorporated' },
          { number: '50+', label: 'Projects Delivered' },
          { number: '7', label: 'Counties Served' },
          { number: '3', label: 'Core Technologies' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <span className="section-label">Overview</span>
            <h2 className="section-title">A Private Company with a Public Mandate</h2>
          </div>
          <div className="two-col">
            <p>
              Ecotrunk International Ltd (ETL) is incorporated in the Republic of Kenya as a firm of Technologists, Consultants, and Managers with broad experience in project development and management, engineering systems development, and consultancy across the renewable energy industry. Since our establishment in 2014, we have pursued a single objective: improving the global environment while fostering local development.
            </p>
            <p>
              As a privately held company, Ecotrunk is not listed on any securities exchange and does not publish market-facing financial disclosures. We nonetheless operate to institutional standards of governance and transparency for our lenders, development partners, off-takers, and equity investors - and we are glad to make appropriate project and corporate information available under confidentiality on request.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-a">
        <div className="container">
          <div className="sec-head">
            <span className="section-label" style={{ color: 'var(--volt-teal-light)' }}>Business Fundamentals</span>
            <h2 className="section-title" style={{ color: 'white' }}>Ecotrunk at a Glance</h2>
          </div>
          <div className="impact-grid">
            {FACTS.map((fact, i) => (
              <Reveal key={fact.number} delay={i * 50}>
                <div className="impact-num">{fact.number}</div>
                <div className="impact-text">{fact.text}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="sec-head" style={{ textAlign: 'center', margin: '0 auto' }}>
            <span className="section-label">Explore</span>
            <h2 className="section-title">Investor Information</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Navigate to the information most relevant to you - from governance and reporting to our technology portfolio.
            </p>
          </div>
          <div className="investor-pillar-grid">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 80} className="investor-pillar-card">
                <div className="investor-pillar-icon">
                  <i className={`fas fa-${pillar.icon}`} aria-hidden="true"></i>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
                <Link to={pillar.to} className="tech-card-link">
                  {pillar.cta} <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--neutral-50)' }}>
        <div className="container">
          <div className="sec-head">
            <span className="section-label">Why Ecotrunk</span>
            <h2 className="section-title">Why Partners and Financiers Work With Us</h2>
          </div>
          <div className="approach-cols">
            <p>
              Ecotrunk combines technical engineering depth with first-hand knowledge of Kenya&apos;s energy landscape - from resource assessment and feasibility through permitting, financing support, construction, and operations. Our multidisciplinary team has worked across the country&apos;s principal energy markets, giving lenders and partners confidence that projects are bankable and deliverable.
            </p>
            <p>
              We operate to recognised standards across environmental and social practice, regulated by NEMA and aligned with Kenyan and international norms. Our affiliations with NCA, NEMA, KEREA, and KEPSA underpin a compliance-first culture, while our track record of community engagement protects the social licence on which long-lived energy assets depend.
            </p>
          </div>
          <div className="volt-callout">
            <div className="volt-callout-icon"><i className="fas fa-handshake" aria-hidden="true"></i></div>
            <div>
              <h4>Bankability through discipline</h4>
              <p>
                Every project we develop is engineered for scrutiny - by lenders, regulators, and
                communities. Documentation, due diligence, and reporting follow institutional
                standards from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section tech-cta-section">
        <div className="container">
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <Reveal>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: 20, lineHeight: 1.15 }}>
                Partner With Ecotrunk
              </h2>
            </Reveal>
            <Reveal delay={50}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.9, marginBottom: 32 }}>
                Whether you are a financier assessing a project, a development partner exploring co-investment, or an institution seeking a reliable Kenyan counterpart - our team is ready to engage.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/#contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 40px' }}>
                Contact Investor Relations <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
