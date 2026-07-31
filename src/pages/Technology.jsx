import PageHero from '../components/PageHero';
import TechExplorer from '../components/TechExplorer';
import Reveal from '../components/Reveal';
import { Link } from 'react-router-dom';
import { technologies } from '../data/technologies';

const accent = { color: 'var(--volt-teal-light)' };

const OVERVIEWS = [
  {
    id: 'solar',
    icon: 'sun',
    bg: 'var(--green-500)',
    title: 'Solar Energy',
    text: 'Photovoltaic systems converting Kenya\'s exceptional insolation into electricity - from commercial rooftops to utility-scale farms, with battery storage integration for firm, dispatchable power.',
    to: '/solar',
    cta: 'Explore Solar',
  },
  {
    id: 'wind',
    icon: 'wind',
    bg: 'var(--green-600)',
    title: 'Wind Energy',
    text: 'Capturing the power of Kenya\'s world-class wind corridors in Turkana, Ngong Hills, and beyond. Full lifecycle services from resource assessment to turbine selection and grid integration.',
    to: '/wind',
    cta: 'Explore Wind',
  },
  {
    id: 'hydro',
    icon: 'water',
    bg: 'var(--green-700)',
    title: 'Hydropower',
    text: 'Leveraging Kenya\'s rivers for clean, dispatchable baseload power. Run-of-river schemes, small hydro for rural electrification, and climate-resilient dam rehabilitation projects.',
    to: '/hydro',
    cta: 'Explore Hydropower',
  },
];

export default function Technology() {
  return (
    <>
      <PageHero
        image="/assets/img/solar-pic.jpg"
        badge={{ icon: 'bolt', label: 'Our Technologies' }}
        title={
          <>
            Renewable Energy <span style={accent}>Technologies</span>
          </>
        }
        subtitle="Kenya's energy transition demands a portfolio approach. We combine deep technical expertise with local knowledge to select, design, and deliver the right technology mix for every project - from solar and wind to hydropower."
        stats={[
          { number: '10+', label: 'Years Experience' },
          { number: '3', label: 'Core Technologies' },
          { number: '90%', label: 'Kenya Renewable Share' },
          { number: '50+', label: 'Projects Delivered' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <Reveal>
              <span className="section-label">Our Approach</span>
            </Reveal>
            <Reveal delay={50}>
              <h2 className="section-title" style={{ maxWidth: 600, margin: '0 auto 20px' }}>
                Selecting the Right Technology for Every Context
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
                At Ecotrunk, we believe no single technology holds all the answers. Every site, community, and investment profile demands a tailored solution. Our team combines rigorous technical analysis with deep local knowledge to recommend, design, and deliver the optimal technology pathway - whether solar, wind, hydropower, or a hybrid combination.
              </p>
            </Reveal>
          </div>

          <div className="tech-overview-grid">
            {OVERVIEWS.map((overview, i) => (
              <Reveal key={overview.id} delay={i * 100} className="tech-overview-card">
                <div className="tech-overview-icon" style={{ background: overview.bg, color: 'white' }}>
                  <i className={`fas fa-${overview.icon}`} aria-hidden="true"></i>
                </div>
                <h3>{overview.title}</h3>
                <p>{overview.text}</p>
                <Link to={overview.to} className="tech-card-link">
                  {overview.cta} <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white', paddingBottom: 0 }}>
        <div className="container">
          <TechExplorer technologies={technologies} />
        </div>
      </section>
    </>
  );
}
