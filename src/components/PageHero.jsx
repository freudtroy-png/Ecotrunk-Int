import Reveal from './Reveal';

export default function PageHero({ image, badge, title, subtitle, stats }) {
  return (
    <section className="tech-page-hero">
      <div className="tech-page-hero-bg">
        <img src={image} alt={badge.label} loading="eager" />
      </div>
      <div className="tech-page-hero-content">
        <Reveal>
          <span className="tech-page-hero-badge">
            {badge.icon && <i className={`fas fa-${badge.icon}`} aria-hidden="true"></i>} {badge.label}
          </span>
          <h1 className="tech-page-hero-title">{title}</h1>
          <p className="tech-page-hero-subtitle">{subtitle}</p>
        </Reveal>
        <div className="tech-page-hero-stats">
          {stats.map((s) => (
            <div className="tech-page-hero-stat" key={s.number}>
              <div className="tech-page-hero-stat-number">{s.number}</div>
              <div className="tech-page-hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
