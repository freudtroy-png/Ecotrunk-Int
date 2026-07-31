import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import TechExplorer from '../components/TechExplorer';
import Reveal from '../components/Reveal';
import { technologies } from '../data/technologies';

const accent = { color: 'var(--volt-teal-light)' };

const OVERVIEWS = [
  {
    id: 'solar',
    icon: 'sun',
    image: '/assets/img/solar.jpg',
    title: 'Solar Energy',
    text: 'Photovoltaic systems converting Kenya\'s exceptional insolation into electricity - from commercial rooftops to utility-scale farms, with battery storage integration for firm, dispatchable power.',
    to: '/solar',
    cta: 'Explore Solar',
  },
  {
    id: 'wind',
    icon: 'wind',
    image: '/assets/img/windmill.jpg',
    title: 'Wind Energy',
    text: 'Capturing the power of Kenya\'s world-class wind corridors in Turkana, Ngong Hills, and beyond. Full lifecycle services from resource assessment to turbine selection and grid integration.',
    to: '/wind',
    cta: 'Explore Wind',
  },
  {
    id: 'hydro',
    icon: 'water',
    image: '/assets/img/hydro.jpg',
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
          <div className="sec-head" style={{ textAlign: 'center', margin: '0 auto' }}>
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">Selecting the Right Technology for Every Context</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              No single technology holds all the answers. Every site, community, and investment profile demands a tailored solution. We combine rigorous technical analysis with deep local knowledge to recommend, design, and deliver the optimal pathway - whether solar, wind, hydropower, or a hybrid combination.
            </p>
          </div>

          <div className="volt-tech-tabs volt-tech-tabs-overview">
            {OVERVIEWS.map((overview, i) => (
              <Reveal key={overview.id} delay={i * 100} className="volt-tech-tab">
                <Link to={overview.to} className="volt-tech-tablink">
                  <img src={overview.image} alt={overview.title} loading="lazy" />
                  <div className="hovercontent gray">
                    <div className="display-inner-content">
                      <span className="tech-overview-tag">
                        <i className={`fas fa-${overview.icon}`} aria-hidden="true"></i> {overview.title}
                      </span>
                      <p>{overview.text}</p>
                      <span className="tech-card-link">
                        {overview.cta} <i className="fas fa-arrow-right" aria-hidden="true"></i>
                      </span>
                    </div>
                    <div className="hover-inner-content"><span>{overview.title.toUpperCase()}</span></div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-a">
        <div className="container">
          <TechExplorer technologies={technologies} dark />
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="sec-head" style={{ textAlign: 'center', margin: '0 auto' }}>
            <span className="section-label">Related</span>
            <h2 className="section-title">How We Apply These Technologies</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Our technologies are delivered through integrated services that span the full project lifecycle.
            </p>
          </div>
          <div className="investor-pillar-grid">
            <Reveal className="investor-pillar-card">
              <div className="investor-pillar-icon"><i className="fas fa-map-marked-alt" aria-hidden="true"></i></div>
              <h3>Project Development</h3>
              <p>Taking solar, wind, and hydro projects from site identification to construction-ready status.</p>
              <Link to="/services/project-development" className="tech-card-link">
                Explore <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </Reveal>
            <Reveal delay={100} className="investor-pillar-card">
              <div className="investor-pillar-icon"><i className="fas fa-cogs" aria-hidden="true"></i></div>
              <h3>Engineering Systems</h3>
              <p>Designing, deploying, and servicing the energy systems that make these technologies work.</p>
              <Link to="/services/engineering-systems" className="tech-card-link">
                Explore <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
