import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function TechCta({ title, text, buttonLabel }) {
  return (
    <section className="section tech-cta-section">
      <div className="container">
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <Reveal>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                marginBottom: 20,
                lineHeight: 1.15,
              }}
            >
              {title}
            </h2>
          </Reveal>
          <Reveal delay={50}>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: 32,
              }}
            >
              {text}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Link
              to="/#contact"
              className="btn btn-primary"
              style={{ fontSize: '1.1rem', padding: '16px 40px' }}
            >
              {buttonLabel} <i className="fas fa-arrow-right btn-icon" aria-hidden="true"></i>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
