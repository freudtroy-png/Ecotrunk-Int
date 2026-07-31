import PageHero from '../components/PageHero';
import TechCta from '../components/TechCta';
import Reveal from '../components/Reveal';

const gradient = {
  background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const BENEFITS = [
  {
    title: 'Clean, Abundant Power',
    text: 'Kenya\'s wind corridors, particularly the Turkana Corridor, rival the best wind resources globally. Modern turbines achieve capacity factors exceeding 45% in prime locations, generating electricity at costs competitive with fossil fuels - without fuel price volatility or carbon emissions.',
  },
  {
    title: 'Community Transformation',
    text: 'Wind projects drive profound socio-economic benefits in host communities. In Turkana, the wind farm brought all-weather roads, reliable mobile coverage, and employment to one of Kenya\'s most marginalised regions. Community development agreements fund schools, clinics, and local infrastructure.',
  },
  {
    title: 'Hybrid Integration',
    text: 'Wind and solar profiles are naturally complementary - wind often blows strongest at night and during cloudy periods when solar generation drops. Hybrid wind-solar systems smooth overall generation, improve capacity factors, and reduce the need for battery storage, creating more cost-effective renewable power.',
  },
  {
    title: 'Baseload Complement',
    text: 'Wind generation in Kenya peaks during the June-September dry season when hydroelectric output is lowest, and at night when solar is unavailable. This natural pattern makes wind an ideal complement to Kenya\'s existing hydro and expanding solar capacity.',
  },
];

const APPLICATIONS = [
  { title: 'Onshore Wind Farm Development', text: 'End-to-end project delivery from wind resource assessment and turbine selection through construction, grid connection, and commissioning - backed by rigorous technical and financial modelling.' },
  { title: 'Repowering & Retrofit Solutions', text: 'Upgrading existing wind farms with modern, higher-capacity turbines and improved control systems to boost energy production, extend operational life, and enhance grid compliance.' },
  { title: 'Hybrid Wind-Solar Systems', text: 'Combining complementary wind and solar profiles to smooth overall generation, improve capacity factors, and maximise utilisation of shared grid connection infrastructure.' },
  { title: 'Community Wind Projects', text: 'Developing smaller-scale turbines for rural electrification, water pumping, and productive uses in off-grid areas - designed for local ownership, operability, and long-term sustainability.' },
  { title: 'Measurement & Feasibility Studies', text: 'Deploying meteorological monitoring campaigns with SODAR and met masts, comprehensive data analysis, and financial modelling to de-risk investment decisions and optimise project design.' },
  { title: 'Turbine Supply & Installation', text: 'Procurement, logistics, and installation of wind turbines from leading global manufacturers, with full quality assurance, warranty management, and after-sales service support.' },
];

const IMPACTS = [
  { number: '13', text: 'm/s peak wind speeds in the Turkana Corridor' },
  { number: '310', text: 'MW - Africa\'s largest wind farm (Lake Turkana)' },
  { number: '45%', text: 'modern turbine capacity factor in prime locations' },
  { number: '140', text: 'metres - modern turbine hub height' },
];

const cellPad = (i, total) => {
  const lastRow = i >= total - 2;
  return {
    padding: `${lastRow ? '32px 32px 0 0' : '32px 32px 32px 0'}`,
    borderBottom: lastRow ? 'none' : '1px solid var(--neutral-200)',
    borderRight: '1px solid var(--neutral-200)',
  };
};

export default function Wind() {
  return (
    <>
      <PageHero
        image="/assets/img/windmill.jpg"
        badge={{ icon: 'wind', label: 'Wind Energy' }}
        title={
          <>
            Capturing the Power of Kenya&apos;s{' '}
            <span style={gradient}>Wind Corridors</span>
          </>
        }
        subtitle="Kenya possesses some of Africa's strongest wind resources. From the Turkana Corridor to the Ngong Hills, we develop wind energy projects that deliver clean, competitive power to the national grid and beyond."
        stats={[
          { number: '13', label: 'm/s Peak Wind Speed (Turkana)' },
          { number: '310', label: 'MW Lake Turkana Wind Power' },
          { number: '45%', label: 'Modern Capacity Factor' },
          { number: '365', label: 'Turbines - Africa\'s Largest' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="section-label">Overview</span>
            <h2 className="section-title">Why Wind in Kenya</h2>
          </div>
          <div className="two-col">
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--neutral-600)' }}>
              Wind energy technology converts the kinetic energy of moving air into electricity using turbine generators mounted on tall towers. The fundamental principle is elegantly simple: wind passing over the turbine blades creates lift, causing the rotor to spin a shaft connected to a generator. Modern onshore turbines typically range from 1.5 MW to 6 MW in rated capacity, with hub heights of 80 to 140 metres and rotor diameters exceeding 150 metres. The technological trajectory has been relentless - taller towers access stronger, more consistent wind speeds, while advanced blade aerodynamics, direct-drive permanent magnet generators, and sophisticated power electronics have pushed capacity factors from 25 percent two decades ago to over 45 percent in prime locations today.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--neutral-600)' }}>
              Kenya is blessed with some of Africa&apos;s most promising wind resources. The Turkana Corridor in northern Kenya experiences powerful channeled winds that average 11 to 13 metres per second during the peak season - among the strongest measured anywhere on the continent. The Lake Turkana Wind Power project, with 365 turbines producing 310 MW, stands as Africa&apos;s largest wind farm and a testament to what is possible when technology meets political will. The Ngong Hills, overlooking Nairobi, have hosted wind turbines since the 1990s and continue to demonstrate the viability of ridge-top installations near major load centres. Our wind resource assessment work at Ecotrunk involves deploying meteorological masts and SODAR units to collect at least twelve months of site-specific data before committing to turbine selection and layout design.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="section-label">Key Benefits</span>
            <h2 className="section-title">Why Choose Wind</h2>
          </div>
          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 48px' }}>
            {BENEFITS.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 50}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--neutral-900)', marginBottom: 8 }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--neutral-600)' }}>{benefit.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="section-label">Applications</span>
            <h2 className="section-title">Wind Solutions We Deliver</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--neutral-600)', marginTop: 12 }}>
              From multi-megawatt wind farms to community-scale installations, our wind energy practice covers the full project lifecycle.
            </p>
          </div>
          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {APPLICATIONS.map((app, i) => (
              <div style={cellPad(i, APPLICATIONS.length)} key={app.title}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--neutral-900)', marginBottom: 4 }}>{app.title}</h4>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--neutral-500)' }}>{app.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--neutral-50)' }}>
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">How We Deliver Wind</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--neutral-600)', marginTop: 12 }}>
              Every wind project begins with the wind itself. We deploy meteorological masts and SODAR units for minimum twelve-month data collection campaigns, analysing speed, direction, turbulence, and shear profiles to create detailed energy yield assessments. This science drives every decision that follows.
            </p>
          </div>
          <div style={{ maxWidth: 700, marginTop: 40 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--neutral-600)' }}>
                Turbine selection and micro-siting use computational flow modelling to match hardware precisely to site conditions - optimising hub height, rotor diameter, and array layout to maximise energy capture while minimising wake losses. We then work closely with Kenya Power and KETRACO on grid integration, ensuring reactive power capability, frequency response, and fault ride-through compliance with Kenya&apos;s Grid Code.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--neutral-600)' }}>
                Community engagement is not a box-ticking exercise. We start early, consult genuinely, and structure transparent benefit-sharing agreements that create lasting local value - employment, training, infrastructure, and enterprise development. A wind farm that lacks community support will struggle to operate. One that has it becomes a source of regional pride for decades.
              </p>
            </div>
            <div style={{ marginTop: 32, padding: '24px 28px', background: 'white', borderLeft: '3px solid var(--green-500)' }}>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--neutral-600)', fontStyle: 'italic' }}>
                &quot;Good wind resource assessment is 80 percent of a successful project. The rest is engineering, relationships, and relentless attention to detail. We do all four.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#111' }}>
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="section-label" style={{ color: 'var(--green-400)' }}>Impact</span>
            <h2 className="section-title" style={{ color: 'white' }}>Wind Energy by the Numbers</h2>
          </div>
          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 48px' }}>
            {IMPACTS.map((impact, i) => (
              <Reveal key={impact.number} delay={i * 50}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 800, color: 'var(--green-400)', lineHeight: 1 }}>
                  {impact.number}
                </div>
                <div style={{ fontSize: '1rem', color: 'var(--neutral-400)', marginTop: 4 }}>{impact.text}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TechCta
        title="Ready to Capture the Wind?"
        text="Whether you are exploring a new wind site, planning a hybrid renewable project, or seeking to repower an existing installation - our team has the technical expertise and local experience to guide you from concept to commercial operation."
        buttonLabel="Start Your Wind Assessment"
      />
    </>
  );
}
