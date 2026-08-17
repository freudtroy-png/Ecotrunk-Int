import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function TechExplorer({ technologies }) {
  const [active, setActive] = useState(0);

  const current = technologies[active];

  return (
    <div className="tech-explorer">
      <Reveal className="tech-explorer-head">
        <span className="section-label">Deep Dive</span>
        <h2 className="section-title">Technology in Detail</h2>
        <p className="section-subtitle">
          Each technology is selected, designed, and delivered through a rigorous process tailored to Kenya's unique conditions, resources, and regulatory environment.
        </p>
      </Reveal>

      <Reveal className="tech-tabs" as="div" role="tablist" aria-label="Technologies">
        {technologies.map((t, i) => (
          <button
            key={t.id}
            className={`tech-tab${i === active ? ' active' : ''}`}
            role="tab"
            aria-selected={i === active}
            aria-controls={`panel-${t.id}`}
            onClick={() => setActive(i)}
          >
            <span className="tech-tab-num">0{i + 1}</span>
            <span className="tech-tab-label">{t.title}</span>
          </button>
        ))}
      </Reveal>

      <div className="tech-panel active" role="tabpanel" aria-labelledby={`tab-${current.id}`}>
        <Reveal className="tech-panel-header">
          <h3>{current.title}</h3>
          <div className="tech-panel-sub">{current.subtitle}</div>
        </Reveal>
        <Reveal className="tech-panel-grid">
          {current.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal className="tech-essay-stat-row" as="div">
          {current.stats.map((s) => (
            <div className="tech-essay-stat" key={s.label}>
              <span className="tech-essay-stat-num">{s.value}</span>
              <span className="tech-essay-stat-label">{s.label}</span>
            </div>
          ))}
        </Reveal>

        <Reveal className="tech-essay-apps">
          <h4>Applications</h4>
          <div className="tech-essay-apps-grid">
            {current.applications.map((a) => (
              <div className="tech-essay-app" key={a.title}>
                <div className="tech-essay-app-marker" style={{ background: current.marker }}></div>
                <div>
                  <h5>{a.title}</h5>
                  <p>{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Link to={current.to} className="btn btn-primary">
          {current.cta} <i className="fas fa-arrow-right btn-icon" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  );
}
