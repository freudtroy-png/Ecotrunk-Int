import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Technology from './pages/Technology';
import Solar from './pages/Solar';
import Wind from './pages/Wind';
import Hydro from './pages/Hydro';
import ProjectDevelopment from './pages/ProjectDevelopment';
import EngineeringSystems from './pages/EngineeringSystems';
import Consultancy from './pages/Consultancy';
import Procurement from './pages/Procurement';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="technology" element={<Technology />} />
        <Route path="solar" element={<Solar />} />
        <Route path="wind" element={<Wind />} />
        <Route path="hydro" element={<Hydro />} />
        <Route path="services/project-development" element={<ProjectDevelopment />} />
        <Route path="services/engineering-systems" element={<EngineeringSystems />} />
        <Route path="services/consultancy" element={<Consultancy />} />
        <Route path="services/procurement" element={<Procurement />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
