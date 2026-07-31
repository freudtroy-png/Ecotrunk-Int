import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) {
      setShow(true);
      setTimeout(() => setFadeIn(true), 500);
    }
  }, []);

  const decide = (choice) => {
    localStorage.setItem('cookie-consent', choice);
    setFadeIn(false);
    setTimeout(() => setShow(false), 400);
  };

  if (!show) return null;

  return (
    <div className={`cookie-banner${fadeIn ? ' show' : ''}`}>
      <p>
        We use cookies to enhance your browsing experience and analyse site traffic. By continuing to use this site, you consent to our use of cookies.{' '}
        <Link to="/about">Learn more</Link>
      </p>
      <div className="cookie-banner-actions">
        <button className="cookie-btn cookie-btn-decline" onClick={() => decide('declined')}>Decline</button>
        <button className="cookie-btn cookie-btn-accept" onClick={() => decide('accepted')}>Accept</button>
      </div>
    </div>
  );
}
