import PageHero from '../components/PageHero';
import TechCta from '../components/TechCta';
import Reveal from '../components/Reveal';

const accent = { color: 'var(--volt-teal-light)' };

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

export default function Wind() {
  return (
    <>
      <PageHero
        image="/assets/img/windmill.jpg"
        badge={{ icon: 'wind', label: 'Wind Energy' }}
        title={
          <>
            Capturing the Power of Kenya&apos;s{' '}
            <span style={accent}>Wind Corridors</span>
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
          <div className="sec-head">
            <span className="section-label">Overview</span>
            <h2 className="section-title">Why Wind in Kenya</h2>
          </div>
          <div className="two-col">
            <p>
              Wind energy technology converts the kinetic energy of moving air into electricity using turbine generators mounted on tall towers. The fundamental principle is elegantly simple: wind passing over the turbine blades creates lift, causing the rotor to spin a shaft connected to a generator. Modern onshore turbines typically range from 1.5 MW to 6 MW in rated capacity, with hub heights of 80 to 140 metres and rotor diameters exceeding 150 metres. The technological trajectory has been relentless - taller towers access stronger, more consistent wind speeds, while advanced blade aerodynamics, direct-drive permanent magnet generators, and sophisticated power electronics have pushed capacity factors from 25 percent two decades ago to over 45 percent in prime locations today.
            </p>
            <p>
              Kenya is blessed with some of Africa&apos;s most promising wind resources. The Turkana Corridor in northern Kenya experiences powerful channeled winds that average 11 to 13 metres per second during the peak season - among the strongest measured anywhere on the continent. The Lake Turkana Wind Power project, with 365 turbines producing 310 MW, stands as Africa&apos;s largest wind farm and a testament to what is possible when technology meets political will. The Ngong Hills, overlooking Nairobi, have hosted wind turbines since the 1990s and continue to demonstrate the viability of ridge-top installations near major load centres. Our wind resource assessment work at Ecotrunk involves deploying meteorological masts and SODAR units to collect at least twelve months of site-specific data before committing to turbine selection and layout design.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="sec-head">
            <span className="section-label">Key Benefits</span>
            <h2 className="section-title">Why Choose Wind</h2>
          </div>
          <div className="benefit-grid">
            {BENEFITS.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 50} className="benefit-item">
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <span className="section-label">Applications</span>
            <h2 className="section-title">Wind Solutions We Deliver</h2>
            <p className="section-subtitle">
              From multi-megawatt wind farms to community-scale installations, our wind energy practice covers the full project lifecycle.
            </p>
          </div>
          <div className="app-grid">
            {APPLICATIONS.map((app) => (
              <div className="app-cell" key={app.title}>
                <h4>{app.title}</h4>
                <p>{app.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--neutral-50)' }}>
        <div className="container">
          <div className="sec-head">
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">How We Deliver Wind</h2>
            <p className="section-subtitle">
              Every wind project begins with the wind itself. We deploy meteorological masts and SODAR units for minimum twelve-month data collection campaigns, analysing speed, direction, turbulence, and shear profiles to create detailed energy yield assessments. This science drives every decision that follows.
            </p>
          </div>
          <div className="approach-cols">
            <p>
              Turbine selection and micro-siting use computational flow modelling to match hardware precisely to site conditions - optimising hub height, rotor diameter, and array layout to maximise energy capture while minimising wake losses. We then work closely with Kenya Power and KETRACO on grid integration, ensuring reactive power capability, frequency response, and fault ride-through compliance with Kenya&apos;s Grid Code.
            </p>
            <p>
              Community engagement is not a box-ticking exercise. We start early, consult genuinely, and structure transparent benefit-sharing agreements that create lasting local value - employment, training, infrastructure, and enterprise development. A wind farm that lacks community support will struggle to operate. One that has it becomes a source of regional pride for decades.
            </p>
          </div>
          <div className="volt-callout">
            <div className="volt-callout-icon"><i className="fas fa-chart-line" aria-hidden="true"></i></div>
            <div>
              <h4>Data first, hardware second</h4>
              <p>
                We collect at least twelve months of site-specific wind data before recommending
                turbine class, hub height, and layout. Good resource assessment underpins every
                yield forecast we commit to.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-a">
        <div className="container">
          <div className="sec-head">
            <span className="section-label" style={{ color: 'var(--volt-teal-light)' }}>Impact</span>
            <h2 className="section-title" style={{ color: 'white' }}>Wind Energy by the Numbers</h2>
          </div>
          <div className="impact-grid">
            {IMPACTS.map((impact, i) => (
              <Reveal key={impact.number} delay={i * 50}>
                <div className="impact-num">{impact.number}</div>
                <div className="impact-text">{impact.text}</div>
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
