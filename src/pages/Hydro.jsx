import PageHero from '../components/PageHero';
import TechCta from '../components/TechCta';
import Reveal from '../components/Reveal';

const gradient = {
  background: 'linear-gradient(135deg, #60a5fa, #065fd4)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const BENEFITS = [
  {
    title: 'Dispatchable Baseload Power',
    text: 'Unlike solar and wind, hydropower can be called upon when needed - providing firm, dispatchable electricity that stabilises the grid. Reservoir hydro offers multi-season storage, while run-of-river plants deliver predictable baseload generation. This flexibility is increasingly valuable as Kenya integrates more variable renewable energy sources.',
  },
  {
    title: 'Exceptional Longevity',
    text: 'Well-designed hydropower plants operate for 50 to 100 years - far outlasting other renewable energy technologies. The Seven Forks dams, built in the 1970s and 1980s, continue to generate reliably today with proper maintenance. This long operational life creates outstanding lifecycle value and stable electricity prices for decades.',
  },
  {
    title: 'Multi-Purpose Benefits',
    text: 'Hydropower projects often deliver far more than electricity. Multi-purpose dams provide irrigation water, municipal water supply, flood control, and recreation amenities. Well-designed projects - with proper environmental and social safeguards - create lasting value for entire river basins and the communities that depend on them.',
  },
  {
    title: 'Climate-Resilient Design',
    text: 'Modern hydro projects incorporate climate scenario modelling, sediment management systems, and environmental flow protocols. Run-of-river designs minimise ecological disruption while providing reliable power that complements Kenya\'s seasonal solar and wind generation profiles.',
  },
];

const APPLICATIONS = [
  { title: 'Run-of-River Hydro Schemes', text: 'Environmentally-sensitive projects that harness river flows without large reservoirs, ideal for Kenya\'s highland catchments with reliable year-round gradients and minimal ecological disruption.' },
  { title: 'Reservoir Hydro & Multi-Purpose Dams', text: 'Large-scale projects combining electricity generation with irrigation, water supply, and flood management - designed with rigorous environmental and social impact mitigation measures.' },
  { title: 'Small & Mini Hydro for Rural Electrification', text: 'Community-scale plants from 10 kW to 1 MW serving off-grid populations, powering schools, clinics, agro-processing, and homes with reliable 24-hour electricity.' },
  { title: 'Hydro Rehabilitation & Modernisation', text: 'Upgrading ageing turbines, control systems, and civil infrastructure to improve efficiency, restore lost capacity, enhance safety, and extend operational life by decades.' },
  { title: 'Climate Resilience & Sediment Management', text: 'Designing for extreme hydrology under changing rainfall patterns, incorporating sediment bypass systems, environmental flow releases, and adaptive operational protocols for long-term sustainability.' },
  { title: 'Feasibility & Hydrology Studies', text: 'Catchment-scale hydrological assessments with flow gauging, rainfall analysis, climate scenario modelling, and preliminary design to bankable feasibility level for project financing.' },
];

const IMPACTS = [
  { number: '500+', text: 'MW combined capacity - Seven Forks cascade' },
  { number: '50+', text: 'years of reliable operation from well-built plants' },
  { number: '24/7', text: 'dispatchable power - hydro is always available' },
  { number: '10-500', text: 'kW range for community-scale hydro plants' },
];

const cellPad = (i, total) => {
  const lastRow = i >= total - 2;
  return {
    padding: `${lastRow ? '32px 32px 0 0' : '32px 32px 32px 0'}`,
    borderBottom: lastRow ? 'none' : '1px solid var(--neutral-200)',
    borderRight: '1px solid var(--neutral-200)',
  };
};

export default function Hydro() {
  return (
    <>
      <PageHero
        image="/assets/img/hydro.jpg"
        badge={{ icon: 'water', label: 'Hydropower' }}
        title={
          <>
            Leveraging Kenya&apos;s Rivers for{' '}
            <span style={gradient}>Clean Baseload Power</span>
          </>
        }
        subtitle="From the Seven Forks cascade to community-scale run-of-river schemes, hydropower remains the backbone of Kenya's electricity system - delivering reliable, dispatchable renewable energy around the clock."
        stats={[
          { number: '500+', label: 'MW Seven Forks Cascade' },
          { number: '1970s', label: 'Backbone of Kenya\'s Grid' },
          { number: '10\u2013500', label: 'kW Community Hydro Range' },
          { number: '24/7', label: 'Dispatchable Power' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="section-label">Overview</span>
            <h2 className="section-title">Why Hydropower in Kenya</h2>
          </div>
          <div className="two-col">
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--neutral-600)' }}>
              Hydropower captures the energy of water moving from higher to lower elevations, converting gravitational potential energy into electricity through turbines coupled to generators. The technology encompasses a broad spectrum of project types. Large dam projects with reservoirs store vast quantities of water, providing multi-season storage that can dispatch power on demand - these are the workhorses of many national grids, capable of supplying hundreds of megawatts of firm capacity. Run-of-river projects, by contrast, divert a portion of a river&apos;s flow through a turbine without significant impoundment, offering lower environmental impact but greater sensitivity to seasonal flow variations. Each configuration carries distinct trade-offs among capacity, cost, environmental footprint, and operational flexibility.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--neutral-600)' }}>
              Kenya&apos;s hydropower potential is concentrated along the Tana River basin, the Athi River system, and the numerous rivers draining the Aberdare Range and Mount Kenya. The Seven Forks cascade on the Tana River - comprising Masinga, Kamburu, Gitaru, Kindaruma, and Kiambere - has been the backbone of Kenya&apos;s electricity system since the 1970s, with a combined installed capacity exceeding 500 MW. More recently, run-of-river projects on the Sondu Miriu and Turkwel rivers have added capacity while demonstrating lower reservoir footprints. Our involvement in Kenya&apos;s hydro sector includes hydrological assessments for new run-of-river schemes in Nandi and Murang&apos;a counties, feasibility studies for small hydro projects capable of powering tea factories and agro-processing hubs, and technical audits of existing plants.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="section-label">Key Benefits</span>
            <h2 className="section-title">Why Choose Hydropower</h2>
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
            <h2 className="section-title">Hydro Solutions We Deliver</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--neutral-600)', marginTop: 12 }}>
              Our hydropower practice spans the full spectrum, from large multi-purpose dams to community-scale installations that transform rural livelihoods.
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
            <h2 className="section-title">How We Deliver Hydro</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--neutral-600)', marginTop: 12 }}>
              Responsible hydropower starts with understanding the catchment. We analyse river flow records spanning at least 20 years, study rainfall patterns, and model climate projections before selecting a turbine type - Pelton, Francis, Kaplan, or cross-flow - matched precisely to the site&apos;s head and flow characteristics.
            </p>
          </div>
          <div style={{ maxWidth: 700, marginTop: 40 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--neutral-600)' }}>
                Environmental stewardship is built into every design decision, not added as an afterthought. We conduct rigorous environmental and social impact assessments addressing river ecology, sediment management, fish passage, water quality, and downstream flows. Our civil works are optimised for local geology, seismic conditions, and constructability in Kenya&apos;s often remote terrain.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--neutral-600)' }}>
                Early engagement with riparian communities shapes every project. We structure transparent resettlement frameworks where needed, create local employment and training programmes, and establish benefit-sharing mechanisms that make host communities genuine partners. A hydro project that respects both the river and the people who depend on it will operate successfully for generations.
              </p>
            </div>
            <div style={{ marginTop: 32, padding: '24px 28px', background: 'white', borderLeft: '3px solid var(--green-500)' }}>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--neutral-600)', fontStyle: 'italic' }}>
                &quot;You cannot design a hydro project from a desk. You have to walk the catchment, talk to the communities, and understand the river through every season. That is the only way to build something that lasts.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#111' }}>
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="section-label" style={{ color: 'var(--green-400)' }}>Impact</span>
            <h2 className="section-title" style={{ color: 'white' }}>Hydropower by the Numbers</h2>
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
        title="Ready to Develop Your Hydro Project?"
        text="Whether you are assessing a run-of-river opportunity, planning a multi-purpose dam, or seeking to rehabilitate an ageing plant - our hydropower team brings decades of combined experience in hydrology, engineering, environmental management, and community engagement."
        buttonLabel="Start Your Hydro Assessment"
      />
    </>
  );
}
