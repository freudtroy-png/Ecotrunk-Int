import PageHero from '../components/PageHero';
import TechCta from '../components/TechCta';
import Reveal from '../components/Reveal';

const gradient = {
  background: 'linear-gradient(135deg, var(--green-300), var(--green-500))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const cardStyle = {
  background: 'white',
  border: '1px solid var(--neutral-200)',
  borderRadius: 'var(--radius-lg)',
  padding: '36px 28px',
  transition: 'all 0.3s ease',
};

const iconStyle = {
  width: 48,
  height: 48,
  borderRadius: 'var(--radius-sm)',
  background: 'var(--green-50)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--green-600)',
  fontSize: '1.25rem',
  marginBottom: 16,
};

const h3Style = {
  fontFamily: 'var(--font-display)',
  fontSize: '1.15rem',
  fontWeight: 700,
  marginBottom: 12,
  color: 'var(--neutral-900)',
};

const pStyle = {
  fontSize: '0.9rem',
  color: 'var(--neutral-600)',
  lineHeight: 1.7,
  marginBottom: 12,
};

const OFFERINGS = [
  {
    icon: 'clipboard-check',
    title: 'Project Feasibility Studies',
    paras: [
      'Comprehensive viability assessment covering technical, financial, environmental, and social dimensions. We evaluate resource availability, technology options, regulatory requirements, and market conditions to provide clients with clear go/no-go recommendations.',
      'Our feasibility reports include detailed risk analysis, financial modelling, sensitivity analysis, and implementation roadmaps tailored to each project\'s unique context, ensuring stakeholders have the confidence to commit capital and resources.',
    ],
  },
  {
    icon: 'ruler-combined',
    title: 'Surveys and Technical Assessments',
    paras: [
      'Detailed site surveys and technical evaluations to ensure projects meet required standards and stakeholder expectations. Our assessments cover topographic surveying, geotechnical investigation, resource measurement campaigns, and infrastructure condition assessment.',
      'We deliver actionable recommendations backed by robust data and engineering analysis, enabling clients to proceed with precision and minimise technical risk throughout design and construction phases.',
    ],
  },
  {
    icon: 'tree',
    title: 'Environmental Management',
    paras: [
      'Comprehensive environmental and social impact assessment (ESIA) per NEMA and international standards. We guide clients through the regulatory approval process, develop mitigation and management plans, and facilitate community engagement.',
      'Our approach ensures compliance while fostering positive community relations throughout the project lifecycle, integrating best practices in biodiversity conservation, stakeholder participation, and social safeguard implementation.',
    ],
  },
  {
    icon: 'chart-bar',
    title: 'Monitoring and Evaluation',
    paras: [
      'Robust M and E frameworks to track project progress, measure outcomes against baseline data, and identify performance gaps. We design custom indicator frameworks, establish data collection systems, and conduct periodic evaluations.',
      'Our approach provides actionable recommendations for continuous improvement and adaptive management, ensuring projects remain on track to deliver intended benefits and that lessons learned inform future initiatives.',
    ],
  },
  {
    icon: 'chalkboard-teacher',
    title: 'Training and Facilitation',
    paras: [
      'Capacity building services to equip client teams with the skills needed for successful project implementation and operations. Our training covers renewable energy fundamentals, project management, O and M best practices, and regulatory compliance.',
      'We facilitate workshops, stakeholder meetings, and technical working groups, fostering knowledge transfer and collaborative problem-solving that empowers local teams to sustain project benefits long after handover.',
    ],
  },
  {
    icon: 'water',
    title: 'Resource Management',
    paras: [
      'Responsible management of natural resources balancing economic development with environmental preservation. We advise on sustainable resource utilisation, water management, land use planning, and ecosystem conservation.',
      'Our approach integrates climate resilience and community benefit sharing, ensuring that projects contribute positively to local livelihoods while maintaining the ecological integrity of the landscapes in which they operate.',
    ],
  },
];

const REASONS = [
  {
    title: 'Technical Depth',
    text: 'Our team comprises qualified engineers, environmental specialists, and project managers with hands-on experience across solar, wind, hydro, and hybrid systems. We combine theoretical rigour with practical field experience to deliver solutions that work in Kenya\'s diverse operating conditions.',
  },
  {
    title: 'Regulatory Expertise',
    text: 'With deep familiarity across NEMA, EPRA, REREC, KPLC, and county-level permitting processes, we navigate Kenya\'s regulatory landscape efficiently on behalf of our clients. Our track record of successful approvals saves projects time, cost, and uncertainty.',
  },
  {
    title: 'Client Focus',
    text: 'Every engagement begins with listening. We tailor our approach to each client\'s unique context, budget, and timeline, ensuring recommendations are not just technically sound but practically implementable. Our long-term relationships are built on trust, transparency, and results.',
  },
  {
    title: 'Local Knowledge',
    text: 'We have worked in every major Kenyan energy market - from Turkana to the Coast, from off-grid community projects to grid-connected utility systems. This on-the-ground experience means we understand the logistics, labour, and supply chain realities that can make or break a project.',
  },
];

export default function Consultancy() {
  return (
    <>
      <PageHero
        image="/assets/img/pc.jpg"
        badge={{ icon: 'handshake', label: 'Consultancy' }}
        title={
          <>
            Strategic Advisory for{' '}
            <span style={gradient}>Renewable Energy Success</span>
          </>
        }
        subtitle="Decades of combined expertise across the full spectrum of renewable energy and infrastructure development in East Africa. We empower clients to make informed decisions, navigate complex regulations, and optimise project outcomes."
        stats={[
          { number: '10+', label: 'Years of Experience' },
          { number: '100+', label: 'Projects Advised' },
          { number: '8', label: 'Regulatory Bodies' },
          { number: '3', label: 'Countries Served' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="section-label">Overview</span>
            <h2 className="section-title">Expert Guidance at Every Stage</h2>
          </div>
          <div className="two-col">
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--neutral-600)' }}>
              Ecotrunk International Ltd delivers expert consultancy services that empower clients to make informed decisions, navigate complex regulatory environments, and optimise project outcomes. Our multidisciplinary team brings decades of combined experience across the full spectrum of renewable energy and infrastructure development in East Africa. From feasibility studies that establish project viability to technical assessments that ensure engineering integrity, our consultancy practice is built on rigour, independence, and deep local knowledge. We work alongside developers, investors, government agencies, and communities to provide the analytical foundation that turns energy concepts into bankable, sustainable projects.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--neutral-600)' }}>
              Our value lies not only in what we know but in how we apply it. Every consultancy engagement begins with a thorough understanding of your objectives, constraints, and operating context. We then deploy the right blend of technical analysis, financial modelling, regulatory insight, and stakeholder engagement to deliver recommendations that are both rigorous and practical. Whether you need a rapid technical review to support a funding application or a comprehensive multi-year environmental monitoring programme, our team scales to match the challenge. We pride ourselves on delivering clear, actionable advice that stands up to scrutiny from lenders, regulators, and partners.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--neutral-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label">Services</span>
            <h2 className="section-title" style={{ maxWidth: 600, margin: '0 auto 20px' }}>
              Our Consultancy Offerings
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Tailored advisory solutions across the entire project lifecycle from concept through commissioning and beyond.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 60 }}>
            {OFFERINGS.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} style={cardStyle}>
                <div style={iconStyle}>
                  <i className={`fas fa-${item.icon}`} aria-hidden="true"></i>
                </div>
                <h3 style={h3Style}>{item.title}</h3>
                {item.paras.map((para) => (
                  <p style={pStyle} key={para.slice(0, 24)}>
                    {para}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">Consultancy Process</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--neutral-600)', marginTop: 12 }}>
              Every engagement begins with listening. We take time to understand your objectives, constraints, and context before defining scope and success criteria. Only then do we deploy our analytical rigour.
            </p>
          </div>
          <div style={{ maxWidth: 700, marginTop: 40 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--neutral-600)' }}>
                Our team gathers primary and secondary data through site surveys, resource assessments, and technical evaluations. We build a robust evidence base before generating recommendations supported by financial models, risk assessments, and implementation roadmaps tailored to your specific context.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--neutral-600)' }}>
                We deliver comprehensive reports and presentations, then stay engaged to support implementation, answer questions, and adapt recommendations as conditions evolve. A consultancy report that sits on a shelf has failed. Ours are designed to be acted on.
              </p>
            </div>
            <div style={{ marginTop: 32, padding: '24px 28px', background: 'white', borderLeft: '3px solid var(--green-500)' }}>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--neutral-600)', fontStyle: 'italic' }}>
                &quot;Good consultancy is not about delivering a report. It is about delivering clarity. Our clients make better decisions because they understand the trade-offs, the risks, and the opportunities.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="section-label">Why Ecotrunk</span>
            <h2 className="section-title">Why Work With Us</h2>
          </div>
          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 48px' }}>
            {REASONS.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 50}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--neutral-900)', marginBottom: 8 }}>
                  {reason.title}
                </h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--neutral-600)' }}>{reason.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TechCta
        title="Ready to Get Expert Advice?"
        text="Whether you need a feasibility study, environmental assessment, technical review, or capacity building programme, our consultancy team is ready to support your project with independent, rigorous, and actionable advice."
        buttonLabel="Start Your Consultation"
      />
    </>
  );
}
