import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const STEPS = [
  {
    number: '01',
    title: 'Site Identification & Feasibility Studies',
    paras: [
      'We carefully select the best locations for power generation by conducting comprehensive resource assessments using advanced wind and solar data campaigns. Our team deploys meteorological stations and satellite-derived datasets to model long-term energy production potential with high statistical confidence.',
      'During this phase, we evaluate production capacity against multiple turbine and PV configurations, assess environmental and social sensitivities through preliminary screening, analyse land suitability using GIS-based multi-criteria decision analysis, and conduct a preliminary grid connection assessment to identify nearby substation capacity and line routes.',
    ],
    image: '/assets/img/Site_Identification.jpg',
    alt: 'Site survey team conducting feasibility study',
    reverse: false,
  },
  {
    number: '02',
    title: 'Environmental & Social Studies',
    paras: [
      'Ecotrunk rigorously evaluates every project site to understand the full scope of potential impacts on the natural environment and local communities. We commission specialised studies covering flora, fauna, hydrology, archaeology, and socio-economic baseline conditions, all aligned with National Environment Management Authority (NEMA) requirements.',
      'Our team develops robust mitigation measures to minimise ecological disturbance while fostering sustainable local development. We conduct comprehensive community engagement planning, stakeholder mapping exercises, and design benefit-sharing frameworks that ensure host communities are active partners throughout the project lifecycle.',
    ],
    image: '/assets/img/Environmental.jpeg',
    alt: 'Environmental impact assessment fieldwork',
    reverse: true,
  },
  {
    number: '03',
    title: 'Grid Connection Studies',
    paras: [
      'A reliable grid connection is fundamental to any successful renewable energy project. Ecotrunk performs detailed assessments of the existing power infrastructure at the substations where plants will interconnect, evaluating transformer capacity, switchgear condition, protection schemes, and available fault levels.',
      'Our power systems engineers conduct load-flow and dynamic stability studies to determine the network\'s ability to absorb the new generation. We design the interconnection layout, specify required upgrades, and plan power evacuation routes that comply with Kenya Power and Lighting Company standards as well as the Energy and Petroleum Regulatory Authority (EPRA) Grid Code.',
    ],
    image: '/assets/img/Grid%20Connection%20Studies.webp',
    alt: 'High voltage grid infrastructure',
    reverse: false,
  },
  {
    number: '04',
    title: 'Project Design',
    paras: [
      'Our engineering team develops optimised plant designs that balance energy yield, capital cost, and site-specific constraints. We perform detailed technology selection - comparing wind turbine classes, PV module efficiencies, inverter configurations, and mounting structures - to identify the configuration that maximises returns under local resource and grid conditions.',
      'Layout planning optimises micro-siting to minimise wake losses and shading while respecting environmental exclusion zones. We produce comprehensive energy yield assessments using industry-standard software (PVsyst, WindPRO, WaSP), develop construction methodologies aligned with local labour and logistics realities, and create phased implementation plans that enable early generation while maintaining flexibility for future expansion.',
    ],
    image: '/assets/img/eng.jpg',
    alt: 'Engineering design and planning',
    reverse: true,
  },
  {
    number: '05',
    title: 'Land Securing',
    paras: [
      'Land tenure is one of the most critical components of renewable energy project development in Kenya. Ecotrunk collaborates closely with landowners - whether private individuals, community trusts, or government entities - to establish mutually beneficial arrangements. Our team navigates the complexities of land administration, including title verification, encumbrance searches, and family or clan succession matters.',
      'We engage extensively with local communities to build public acceptance through transparent communication, public barazas, and benefit-sharing agreements. Our negotiators structure lease payments, easement rights, access wayleaves, and surface rent agreements that fairly compensate landholders while maintaining long-term project bankability. Every agreement is documented with full due diligence and registered as required under Kenyan law.',
    ],
    image: '/assets/img/land_securing.jpg',
    alt: 'Land survey and community engagement',
    reverse: false,
  },
  {
    number: '06',
    title: 'Permitting & Approvals',
    paras: [
      'Regulatory compliance is paramount to project success. Ecotrunk secures all licences, permits, and authorisations from the relevant Kenyan bodies early in the project lifecycle to prevent costly delays. Our permitting scope includes generation licences from EPRA, Environmental Impact Assessment licences from NEMA, county government approvals for building and planning, and permits from the Water Resources Authority for any water abstraction or diversion.',
      'We also obtain construction permits from the relevant county governments, negotiate community development agreements that satisfy both regulatory requirements and local expectations, and secure wayleave approvals for transmission lines. Our regulatory team tracks every submission through to issuance, maintaining a detailed permitting calendar that aligns with the overall project schedule and financing milestones.',
    ],
    image: '/assets/img/permit.jpg',
    alt: 'Permitting documentation and compliance',
    reverse: true,
  },
];

const FURTHER = [
  { icon: 'gavel', label: 'Participation in Tenders & Auctions' },
  { icon: 'chart-line', label: 'Project Financing & Due Diligence' },
  { icon: 'file-signature', label: 'Offtaker Negotiations' },
];

export default function ProjectDevelopment() {
  return (
    <>
      <PageHero
        image="/assets/img/Site_Identification.jpg"
        badge={{ icon: 'map-marked-alt', label: 'Our Service' }}
        title={
          <>
            Project Development <span style={{ color: 'var(--volt-teal-light)' }}>&amp; Management</span>
          </>
        }
        subtitle="Ecotrunk's dedicated in-house team manages every stage of project development - from evaluating site potential and securing prime locations to initiating construction after obtaining all necessary permits and authorizations."
        stats={[
          { number: '6', label: 'Core Development Stages' },
          { number: '10+', label: 'Years Experience' },
          { number: '3', label: 'Technologies Delivered' },
          { number: '100%', label: 'NEMA-Aligned ESIA' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <span className="section-label">Our Process</span>
            <h2 className="section-title">From Concept to Construction-Ready</h2>
            <p className="section-subtitle">
              With over a decade of experience across East Africa, we deliver bankable renewable energy projects on time and on budget - one rigorously managed stage at a time.
            </p>
          </div>

          <div style={{ marginTop: 16 }}>
            {STEPS.map((step) => (
              <div className={`step-card${step.reverse ? ' reverse' : ''}`} key={step.number}>
                <div>
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  {step.paras.map((para) => (
                    <p key={para.slice(0, 24)}>{para}</p>
                  ))}
                </div>
                <div className="step-image">
                  <img src={step.image} alt={step.alt} loading="lazy" />
                </div>
              </div>
            ))}
          </div>

          <div className="volt-callout">
            <div className="volt-callout-icon"><i className="fas fa-clipboard-check" aria-hidden="true"></i></div>
            <div>
              <h4>Bankable from day one</h4>
              <p>
                Every stage is documented for lender and regulator scrutiny - resource data, ESIA
                records, grid studies, and permitting calendars are maintained to institutional
                standards from concept to commissioning.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 72 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: 8, color: 'var(--neutral-800)' }}>
              Further Steps
            </h3>
            <p style={{ color: 'var(--neutral-500)', marginBottom: 8, maxWidth: 600 }}>
              Beyond the core development phases, Ecotrunk also manages the critical commercial and financial processes that transform a consented project into a construction-ready asset:
            </p>
            <div className="further-list">
              {FURTHER.map((item) => (
                <div className="further-item" key={item.label}>
                  <i className={`fas fa-${item.icon}`} aria-hidden="true"></i>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="sec-head" style={{ textAlign: 'center', margin: '0 auto' }}>
            <span className="section-label">Related Services</span>
            <h2 className="section-title">Continue Exploring</h2>
          </div>
          <div className="investor-pillar-grid">
            <Reveal className="investor-pillar-card">
              <div className="investor-pillar-icon"><i className="fas fa-cogs" aria-hidden="true"></i></div>
              <h3>Engineering Systems</h3>
              <p>Technical depth across review, analysis, and implementation of energy technologies.</p>
              <Link to="/services/engineering-systems" className="tech-card-link">
                Explore <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </Reveal>
            <Reveal delay={100} className="investor-pillar-card">
              <div className="investor-pillar-icon"><i className="fas fa-handshake" aria-hidden="true"></i></div>
              <h3>Consultancy</h3>
              <p>Independent feasibility, ESIA, and monitoring services for developers and financiers.</p>
              <Link to="/services/consultancy" className="tech-card-link">
                Explore <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </Reveal>
            <Reveal delay={200} className="investor-pillar-card">
              <div className="investor-pillar-icon"><i className="fas fa-truck" aria-hidden="true"></i></div>
              <h3>Procurement &amp; Supply</h3>
              <p>Quality-assured materials and equipment for renewable energy projects across Kenya.</p>
              <Link to="/services/procurement" className="tech-card-link">
                Explore <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
