import PageHero from '../components/PageHero';
import TechCta from '../components/TechCta';
import Reveal from '../components/Reveal';

const gradient = {
  background: 'linear-gradient(135deg, var(--green-300), var(--green-500))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const BENEFITS = [
  {
    title: 'Dramatic Cost Savings',
    text: 'Solar electricity undercuts diesel generation by 60-80% with simple payback periods of three to five years. With module prices below USD 0.15 per watt and no fuel cost, solar delivers predictable, low-cost energy for decades. Our financial modelling accounts for Kenya\'s tariff structure, tax incentives, and carbon credit opportunities to optimise your return.',
  },
  {
    title: 'Energy Independence',
    text: 'Reduce reliance on an unstable national grid and volatile diesel prices. With battery storage integration, solar systems provide firm, dispatchable power through evening peaks and grid outages. Our hybrid solutions ensure 24-hour energy availability for commercial clients who cannot afford downtime.',
  },
  {
    title: 'Environmental Impact',
    text: 'Every megawatt-hour of solar electricity displaces approximately 0.8 tonnes of CO₂ that would otherwise come from fossil fuels. Solar projects enhance corporate sustainability credentials, qualify for carbon credits, and demonstrate tangible commitment to Kenya\'s national climate targets under the Paris Agreement.',
  },
  {
    title: 'Quick Deployment',
    text: 'Rooftop solar systems can be installed and commissioned in 4-8 weeks, ground-mounted farms in 6-12 months. This speed of deployment, combined with modular scalability, makes solar the fastest path to clean energy for most Kenyan businesses and institutions.',
  },
];

const APPLICATIONS = [
  { title: 'Commercial & Industrial Rooftop PV', text: 'Reducing operational energy costs for businesses, factories, and office complexes across Kenya\'s urban centres with minimal land use and fast installation timelines.' },
  { title: 'Utility-Scale Solar Farms', text: 'Developing ground-mounted PV installations from 1 MW to 50 MW connected to the national grid via power purchase agreements, with full EPC and financing support.' },
  { title: 'Mini-Grid & Off-Grid Systems', text: 'Deploying decentralised solar solutions for rural communities, schools, and health facilities not reached by grid extension, incorporating smart metering and remote monitoring.' },
  { title: 'Solar-Plus-Storage Hybrids', text: 'Integrating lithium-ion and advanced lead-carbon battery banks to provide firm capacity, voltage stabilisation, and backup power - essential for Kenya\'s evolving grid.' },
  { title: 'Solar Water Pumping & Agriculture', text: 'Powering irrigation schemes, livestock watering, and crop drying for Kenya\'s agricultural sector - replacing expensive diesel pumps with clean, reliable solar energy.' },
  { title: 'Hybrid Solar-Diesel Systems', text: 'Retrofitting existing diesel generators with solar PV and battery storage to minimise fuel consumption while maintaining reliable backup capacity for critical infrastructure.' },
];

const IMPACTS = [
  { number: '6.5', text: 'kWh/m\u00b2/day peak insolation in Kenya\'s Rift Valley' },
  { number: '80%', text: 'cost reduction vs diesel generation' },
  { number: '5x', text: 'Kenya solar capacity growth since 2018' },
  { number: '25+', text: 'year system lifespan with proper maintenance' },
];

const cellPad = (i, total) => {
  const lastRow = i >= total - 2;
  return {
    padding: `${lastRow ? '32px 32px 0 0' : '32px 32px 32px 0'}`,
    borderBottom: lastRow ? 'none' : '1px solid var(--neutral-200)',
    borderRight: '1px solid var(--neutral-200)',
  };
};

export default function Solar() {
  return (
    <>
      <PageHero
        image="/assets/img/solar-pic.jpg"
        badge={{ icon: 'sun', label: 'Solar Energy' }}
        title={
          <>
            Harnessing Kenya&apos;s <span style={gradient}>Abundant Sunshine</span>
          </>
        }
        subtitle="From commercial rooftops to utility-scale farms, we deliver end-to-end solar energy solutions across East Africa - reducing costs, enhancing energy security, and driving the clean energy transition."
        stats={[
          { number: '6.5', label: 'kWh/m\u00b2/day Peak Insolation' },
          { number: '80%', label: 'Cost Reduction vs Diesel' },
          { number: '5\u00d7', label: 'Growth Since 2018' },
          { number: '25+', label: 'Year System Lifespan' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="section-label">Overview</span>
            <h2 className="section-title">Why Solar in Kenya</h2>
          </div>
          <div className="two-col">
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--neutral-600)' }}>
              Solar energy technology encompasses two primary pathways for converting sunlight into usable power. Photovoltaic (PV) systems use semiconductor cells to directly transform solar irradiance into electricity - a silent, scalable technology that works from a single rooftop panel to sprawling utility-scale arrays covering hundreds of acres. Concentrating Solar Power (CSP), by contrast, uses mirrors or lenses to focus sunlight onto a receiver, generating heat that drives a turbine. While CSP remains less common in East Africa due to its capital intensity and water requirements, PV has become the dominant solar technology across Kenya, with installed capacity growing more than fivefold since 2018. Our team at Ecotrunk has designed and supervised PV installations ranging from 10 kW commercial rooftops in Nairobi to multi-megawatt ground-mounted farms in the Rift Valley.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--neutral-600)' }}>
              Kenya possesses some of the finest solar resources on the planet. The Great Rift Valley region, stretching from Lake Turkana in the north to Lake Magadi in the south, receives insolation levels of 5.5 to 6.5 kWh per square metre per day - among the highest in the world. At current module prices below USD 0.15 per watt, unsubsidised solar electricity in Kenya frequently undercuts diesel generation by 60 to 80 percent. Commercial and industrial users in Nairobi, Mombasa, and Kisumu are increasingly turning to rooftop solar not as an environmental gesture but as a hard-nosed financial decision, with simple payback periods of three to five years. Large-scale solar farms are beginning to feed power into the national grid, supported by Kenya&apos;s feed-in tariff policy and the growing appetite of international climate financiers.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="section-label">Key Benefits</span>
            <h2 className="section-title">Why Choose Solar</h2>
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
            <h2 className="section-title">Solar Solutions We Deliver</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--neutral-600)', marginTop: 12 }}>
              Our solar practice spans the full spectrum of applications, from small-scale off-grid systems to multi-megawatt utility installations.
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
            <h2 className="section-title">How We Deliver Solar</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--neutral-600)', marginTop: 12 }}>
              Every solar project starts with the ground truth. We deploy pyranometers and satellite data to measure actual site irradiance, run structural analysis on rooftops, and build 3D shading models before specifying a single panel. This data feeds into a system design that balances inverter selection, string sizing, and battery dimensioning for maximum yield at minimum cost.
            </p>
          </div>
          <div style={{ maxWidth: 700, marginTop: 40 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--neutral-600)' }}>
                Installation is carried out by certified technicians following strict quality protocols. Every subsystem - modules, inverters, wiring, switchgear, and battery banks - is tested individually and as an integrated system. Grid interconnection complies with Kenya Power&apos;s technical standards, and commissioning includes a full performance benchmark against the design model.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--neutral-600)' }}>
                Once operational, each system is monitored in real time through a cloud platform that tracks generation, consumption, and battery status. We schedule proactive maintenance, conduct annual system audits, and provide responsive support to keep production optimal over the full 25+ year design life. Our approach is systematic, but every project is tailored to its site, client, and commercial context.
              </p>
            </div>
            <div style={{ marginTop: 32, padding: '24px 28px', background: 'white', borderLeft: '3px solid var(--green-500)' }}>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--neutral-600)', fontStyle: 'italic' }}>
                &quot;We do not believe in one-size-fits-all solar design. Every site, client, and commercial context is different. Our job is to understand those differences and engineer a system that performs optimally within them.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--neutral-950)' }}>
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="section-label" style={{ color: 'var(--green-400)' }}>Impact</span>
            <h2 className="section-title" style={{ color: 'white' }}>Solar Energy by the Numbers</h2>
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
        title="Ready to Harness the Sun?"
        text="Whether you are a business owner seeking to reduce energy costs, a developer planning a solar farm, or a community exploring off-grid solutions - our team is ready to help. Let us assess your site, model your savings, and design a solar system that delivers measurable returns."
        buttonLabel="Start Your Solar Assessment"
      />
    </>
  );
}
