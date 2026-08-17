import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MobileActions() {
  const navigate = useNavigate();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="mobile-actions" aria-label="Mobile quick actions">
      <button
        type="button"
        className="mobile-action mobile-action-back"
        aria-label="Go back"
        onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/'))}
      >
        <i className="fas fa-arrow-left" aria-hidden="true"></i>
      </button>
      <button
        type="button"
        className={`mobile-action mobile-action-top${showTop ? ' visible' : ''}`}
        aria-label="Back to top"
        onClick={goUp}
      >
        <i className="fas fa-arrow-up" aria-hidden="true"></i>
      </button>
    </div>
  );
}