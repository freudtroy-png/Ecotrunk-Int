import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';

const TIMELINE = [
  { year: '2014', title: 'Incorporation', text: 'Ecotrunk International Ltd is incorporated in the Republic of Kenya as a firm of Experts in renewable energy technology and management.' },
  { year: '2016', title: 'First Major Project', text: 'Delivered our first utility-scale solar feasibility study, establishing our reputation for technical rigour and reliable project management.' },
  { year: '2018', title: 'Portfolio Expansion', text: 'Expanded into wind and hydropower consultancy, building a multi-technology portfolio serving clients across East Africa.' },
  { year: '2020', title: 'Covid-19 Response', text: 'Adapted operations to support essential energy infrastructure during the pandemic, ensuring continuity of critical power projects.' },
  { year: '2022', title: '50th Project Milestone', text: 'Reached 50 completed projects across 7 Kenyan counties, solidifying our position as a trusted partner in renewable energy development.' },
  { year: '2024 & Beyond', title: 'Regional Expansion', text: 'Extending our reach into neighbouring East African markets while deepening our impact in Kenya\'s transition to 100% clean energy by 2030.' },
];

const VALUES = [
  { icon: 'brain', title: 'Cognisance', text: 'We are committed to continuous learning and understanding. By staying aware of industry trends and global challenges, we ensure informed decisions and forward-thinking strategies.' },
  { icon: 'hard-hat', title: 'Diligence', text: 'Hard work and perseverance define our approach. We meticulously plan and execute every project, ensuring excellence and precision while meeting the highest standards in renewable energy development.' },
  { icon: 'balance-scale', title: 'Integrity', text: 'Integrity is at our core. We deliver sustainable value through dedicated teams, respect for stakeholders, and sound guidance for informed decisions, reflecting high ethical standards across our actions.' },
  { icon: 'medal', title: 'Professionalism', text: 'We adhere to the highest professional standards. Our teams maintain expertise, reliability, and efficiency, exceeding expectations in delivering renewable energy solutions.' },
  { icon: 'hand-peace', title: 'Honesty', text: 'Honesty forms the foundation of our relationships. We value transparency in our dealings, fostering trust and long-term partnerships with clients, stakeholders, and communities.' },
  { icon: 'gavel', title: 'Obedience', text: 'We respect laws, regulations, and ethical principles in every region we operate. Our compliance-first approach ensures responsible and lawful project execution at every stage.' },
  { icon: 'hand-holding-heart', title: 'Trust', text: 'Trust is the cornerstone of our partnerships. By consistently delivering on our promises, we cultivate confidence and loyalty from our clients, collaborators, and stakeholders.' },
];

const DISTINCTS = [
  {
    icon: 'map-marked-alt',
    title: 'Local Knowledge',
    text: 'Deep understanding of Kenya\'s regulatory landscape, community dynamics, and energy infrastructure. We know the terrain because we work in it every day.',
  },
  {
    icon: 'layer-group',
    title: 'Multi-Technology Expertise',
    text: 'Unlike firms that specialise in a single technology, we offer integrated expertise across solar, wind, and hydropower - advising clients on the best solution for their specific context.',
  },
  {
    icon: 'handshake',
    title: 'End-to-End Service',
    text: 'From initial feasibility studies through design, procurement, construction supervision, and commissioning - we can manage your entire project lifecycle.',
  },
];

const timelineCard = {
  padding: 32,
  borderLeft: '3px solid var(--green-500)',
  background: 'var(--neutral-50)',
  borderRadius: '0 var(--radius-md) var(--radius-md) 0',
};

const yearStyle = {
  fontSize: '0.75rem',
  fontWeight: 700,
  color: 'var(--green-600)',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
};

const h3Style = { fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, margin: '8px 0' };

const timelineText = { color: 'var(--neutral-500)', fontSize: '0.9rem', lineHeight: 1.7 };

export default function About() {
  return (
    <>
      <section className="section" style={{ paddingTop: 140, paddingBottom: 64 }}>
        <div className="container">
          <div className="about-hero-top">
            <Reveal>
              <span className="section-label">About ETL</span>
              <h2 className="about-hero-title">
                Engineering a <span>Greener</span> Tomorrow
              </h2>
            </Reveal>
          </div>

          <div className="about-hero-body">
            <Reveal>
              <p className="about-hero-lead">
                Ecotrunk International Ltd (ETL) is a firm of Technologists, Consultants, and Managers incorporated in the Republic of Kenya as a firm of Experts. The firm has broad experience in Project Development &amp; Management, Engineering Systems Development and Consultancy in the renewable energy industry.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p>
                Since its establishment in 2014, Ecotrunk has been deeply dedicated to enhancing the global environment while promoting local development. Our team brings together qualified engineers, environmental specialists, and project managers with decades of combined experience in Kenya&apos;s energy sector.
              </p>
              <p>
                Our headquarters are located at the Professional Centre along Ngong Road in Nairobi, from where we coordinate projects across multiple counties.
              </p>
            </Reveal>
          </div>

          <div className="about-hero-stats">
            <div className="about-hero-stat">
              <div className="about-hero-stat-num">
                <CountUp end={10} suffix="+" />
              </div>
              <div className="about-hero-stat-label">Years of Experience</div>
            </div>
            <div className="about-hero-stat">
              <div className="about-hero-stat-num">
                <CountUp end={50} suffix="+" />
              </div>
              <div className="about-hero-stat-label">Projects Delivered</div>
            </div>
            <div className="about-hero-stat">
              <div className="about-hero-stat-num">
                <CountUp end={7} />
              </div>
              <div className="about-hero-stat-label">Counties Served</div>
            </div>
            <div className="about-hero-stat">
              <div className="about-hero-stat-num">
                <CountUp end={25} suffix="+" />
              </div>
              <div className="about-hero-stat-label">Partner Affiliations</div>
            </div>
          </div>

          <div className="about-hero-foot">
            <Reveal>
              <span className="about-hero-cred-label">Registered &amp; Affiliated With</span>
              <div className="about-hero-cred-tags">
                <span className="about-hero-cred-tag">NCA</span>
                <span className="about-hero-cred-tag">NEMA</span>
                <span className="about-hero-cred-tag">KEREA</span>
                <span className="about-hero-cred-tag">KEPSA</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <span className="about-hero-cred-label">Head Office</span>
              <p className="about-hero-hq">
                Professional Centre, Ngong Road, Nairobi<br />
                Coordinating projects across multiple counties.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <Reveal>
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Company Timeline</h2>
          </Reveal>
          <div style={{ marginTop: 48 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={(i % 2) * 100} style={timelineCard}>
                  <span style={yearStyle}>{item.year}</span>
                  <h3 style={h3Style}>{item.title}</h3>
                  <p style={timelineText}>{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-section" id="mission">
        <div className="container">
          <div className="mission-grid">
            <Reveal className="mission-card">
              <div className="mission-card-icon">
                <i className="fas fa-bullseye" aria-hidden="true"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide the most competitive energy, engineering, and construction consulting services and tools in the respective industries incorporating an advanced approach. We deliver value through technical excellence, innovative thinking, and a relentless focus on client outcomes.
              </p>
            </Reveal>
            <Reveal delay={100} className="mission-card">
              <div className="mission-card-icon">
                <i className="fas fa-leaf" aria-hidden="true"></i>
              </div>
              <h3>Sustainability Commitment</h3>
              <p>
                Since 2014, Ecotrunk has been dedicated to enhancing the global environment while promoting local development. Believing that renewable energy is where human progress and climate protection converge, our teams create innovative and customised solutions for a sustainable future in Kenya and beyond.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="values">
        <div className="container">
          <div className="about-grid" style={{ marginBottom: 0 }}>
            <Reveal>
              <span className="section-label">Our Values</span>
              <h2 className="section-title">Principles That Guide Every Project</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="section-subtitle" style={{ maxWidth: '100%' }}>
                Seven core principles define how we work, how we treat our clients and partners, and how we approach every engineering challenge.
              </p>
            </Reveal>
          </div>

          <div className="values-grid">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={(i % 3) * 100} className="value-card">
                <div className="value-card-icon">
                  <i className={`fas fa-${value.icon}`} aria-hidden="true"></i>
                </div>
                <h4>{value.title}</h4>
                <p>{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <Reveal style={{ textAlign: 'center' }}>
            <span className="section-label section-label-center">Why Choose Ecotrunk</span>
            <h2 className="section-title">What Sets Us Apart</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginTop: 48 }}>
            {DISTINCTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} style={{ textAlign: 'center', padding: '32px 24px' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--green-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '1.5rem', color: 'var(--green-600)' }}>
                  <i className={`fas fa-${item.icon}`} aria-hidden="true"></i>
                </div>
                <h3 style={h3Style}>{item.title}</h3>
                <p style={timelineText}>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
