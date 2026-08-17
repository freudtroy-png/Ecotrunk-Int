import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import MobileActions from './MobileActions';
import Seo from './Seo';

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <Seo path={pathname} />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileActions />
      <CookieBanner />
    </>
  );
}
