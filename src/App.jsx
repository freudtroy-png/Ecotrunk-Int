import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Technology = lazy(() => import('./pages/Technology'));
const Solar = lazy(() => import('./pages/Solar'));
const Wind = lazy(() => import('./pages/Wind'));
const Hydro = lazy(() => import('./pages/Hydro'));
const ProjectDevelopment = lazy(() => import('./pages/ProjectDevelopment'));
const EngineeringSystems = lazy(() => import('./pages/EngineeringSystems'));
const Consultancy = lazy(() => import('./pages/Consultancy'));
const Procurement = lazy(() => import('./pages/Procurement'));
const Services = lazy(() => import('./pages/Services'));
const Investors = lazy(() => import('./pages/Investors'));
const Governance = lazy(() => import('./pages/Governance'));
const Reports = lazy(() => import('./pages/Reports'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

function PageFallback() {
  return (
    <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <i className="fas fa-spinner fa-spin" style={{ fontSize: '2rem', color: 'var(--green-600)' }} aria-hidden="true"></i>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Suspense fallback={<PageFallback />}><Home /></Suspense>} />
        <Route path="about" element={<Suspense fallback={<PageFallback />}><About /></Suspense>} />
        <Route path="technology" element={<Suspense fallback={<PageFallback />}><Technology /></Suspense>} />
        <Route path="solar" element={<Suspense fallback={<PageFallback />}><Solar /></Suspense>} />
        <Route path="wind" element={<Suspense fallback={<PageFallback />}><Wind /></Suspense>} />
        <Route path="hydro" element={<Suspense fallback={<PageFallback />}><Hydro /></Suspense>} />
        <Route path="services" element={<Suspense fallback={<PageFallback />}><Services /></Suspense>} />
        <Route path="services/project-development" element={<Suspense fallback={<PageFallback />}><ProjectDevelopment /></Suspense>} />
        <Route path="services/engineering-systems" element={<Suspense fallback={<PageFallback />}><EngineeringSystems /></Suspense>} />
        <Route path="services/consultancy" element={<Suspense fallback={<PageFallback />}><Consultancy /></Suspense>} />
        <Route path="services/procurement" element={<Suspense fallback={<PageFallback />}><Procurement /></Suspense>} />
        <Route path="investors" element={<Suspense fallback={<PageFallback />}><Investors /></Suspense>} />
        <Route path="investors/governance" element={<Suspense fallback={<PageFallback />}><Governance /></Suspense>} />
        <Route path="investors/reports" element={<Suspense fallback={<PageFallback />}><Reports /></Suspense>} />
        <Route path="blog" element={<Suspense fallback={<PageFallback />}><Blog /></Suspense>} />
        <Route path="blog/:slug" element={<Suspense fallback={<PageFallback />}><BlogPost /></Suspense>} />
        <Route path="*" element={<Suspense fallback={<PageFallback />}><Home /></Suspense>} />
      </Route>
    </Routes>
  );
}
