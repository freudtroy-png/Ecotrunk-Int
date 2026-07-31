import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
