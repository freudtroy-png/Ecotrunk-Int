const SITE = 'https://ecotrunk-int.vercel.app';
const SITE_NAME = 'Ecotrunk International Ltd';

export const DEFAULT_TITLE =
  'Ecotrunk International Ltd | Renewable Energy Consultancy & Project Development in Kenya';
export const DEFAULT_DESCRIPTION =
  'Ecotrunk International Ltd (ETL) is a Nairobi-based renewable energy consultancy and project developer. Solar, wind, and hydropower project development, engineering systems, and procurement across East Africa since 2014.';

export const seoMap = [
  {
    path: '/',
    title: 'Renewable Energy Company Kenya | Solar, Wind & Hydropower Experts | Ecotrunk',
    description:
      'Ecotrunk International Ltd delivers renewable energy project development, engineering systems, consultancy and procurement in Kenya. Solar, wind and hydropower solutions from our Nairobi office since 2014.',
    keywords:
      'renewable energy company Kenya, solar company Nairobi, wind energy Kenya, hydropower Kenya, energy consultancy Kenya',
  },
  {
    path: '/about',
    title: 'About Ecotrunk International Ltd | Renewable Energy Firm Nairobi',
    description:
      'Ecotrunk International Ltd is a firm of technologists, consultants and managers delivering renewable energy projects across Kenya since 2014. NCA, NEMA, KEREA and KEPSA affiliated.',
    keywords:
      'about Ecotrunk, renewable energy firm Kenya, energy consultants Nairobi, NCA NEMA KEREA KEPSA affiliated energy firm',
  },
  {
    path: '/technology',
    title: 'Renewable Energy Technologies | Solar, Wind & Hydropower | Ecotrunk Kenya',
    description:
      'Explore Ecotrunk\u2019s solar, wind and hydropower technologies. We select, design and deliver the optimal renewable technology mix for every site, community and investment profile in East Africa.',
    keywords:
      'renewable energy technologies Kenya, solar PV technology, wind turbine technology Kenya, small hydro technology, hybrid renewable systems',
  },
  {
    path: '/solar',
    title: 'Solar Energy Company Nairobi | Commercial & Utility-Scale Solar PV | Ecotrunk',
    description:
      'End-to-end solar PV solutions in Kenya: commercial rooftops, utility-scale farms, mini-grids and solar-plus-storage. 60-80% cost savings vs diesel with 3-5 year payback.',
    keywords:
      'solar energy company Nairobi, solar PV installation Kenya, commercial solar Kenya, utility scale solar farm Kenya, solar plus storage',
  },
  {
    path: '/wind',
    title: 'Wind Energy Project Development Kenya | Wind Resource Assessment | Ecotrunk',
    description:
      'Wind energy expertise for Kenya\u2019s world-class wind corridors including Turkana and Ngong Hills. Resource assessment, turbine selection, wind farm development and grid integration.',
    keywords:
      'wind energy Kenya, wind farm development Turkana, wind resource assessment Kenya, wind turbine installation, hybrid wind solar Kenya',
  },
  {
    path: '/hydro',
    title: 'Hydropower Development Kenya | Run-of-River & Small Hydro | Ecotrunk',
    description:
      'Hydropower project development in Kenya: run-of-river schemes, small and mini hydro for rural electrification, dam rehabilitation and hydrological feasibility studies.',
    keywords:
      'hydropower Kenya, run of river hydro Kenya, small hydro rural electrification, hydro feasibility study, mini hydro projects Kenya',
  },
  {
    path: '/services/project-development',
    title: 'Renewable Energy Project Development & Management | Ecotrunk Kenya',
    description:
      'Full lifecycle renewable energy project development: site identification, feasibility, ESIA, grid connection, design, land securing and EPRA/NEMA permitting in Kenya.',
    keywords:
      'renewable energy project development Kenya, EPRA generation licence, NEMA EIA Kenya, grid connection study, renewable energy land acquisition',
  },
  {
    path: '/services/engineering-systems',
    title: 'Engineering Systems Development & Energy Technology Implementation | Ecotrunk',
    description:
      'Engineering systems review, analysis, energy technology implementation and service systems development for renewable energy projects across Kenya and East Africa.',
    keywords:
      'engineering systems Kenya, energy technology implementation, renewable energy systems analysis, engineering consultancy Nairobi',
  },
  {
    path: '/services/consultancy',
    title: 'Renewable Energy Consultancy & Feasibility Studies Kenya | Ecotrunk',
    description:
      'Independent renewable energy consultancy: feasibility studies, ESIA, technical assessments, monitoring & evaluation, training and resource management across East Africa.',
    keywords:
      'renewable energy consultancy Kenya, ESIA Kenya NEMA, solar feasibility study, energy monitoring evaluation, energy sector training Nairobi',
  },
  {
    path: '/services/procurement',
    title: 'Renewable Energy Equipment Procurement & Supply Kenya | Ecotrunk',
    description:
      'Procurement and supply of solar PV modules, inverters, wind turbine components, transformers, switchgear and construction materials, KEBS-compliant with quality assurance.',
    keywords:
      'solar equipment suppliers Kenya, renewable energy procurement, solar PV modules supply Kenya, electrical equipment supply, KEBS compliant engineering materials',
  },
  {
    path: '/blog',
    title: 'Blog | Kenya Renewable Energy Insights & Market Trends | Ecotrunk',
    description:
      'Expert analysis on Kenya\u2019s renewable energy transition: solar trends, wind power lessons, small hydro, regulatory landscape and energy storage from the Ecotrunk team.',
    keywords:
      'Kenya renewable energy news, solar market trends Kenya, renewable energy regulation Kenya, Kenya energy sector insights',
  },
];

export function getSeoForPath(path) {
  const normalized = path.split('#')[0];
  const route = seoMap.find((r) => {
    if (normalized === '/') return r.path === '/';
    if (r.path === '/') return false;
    return normalized.startsWith(r.path);
  });
  return route || null;
}

export { SITE, SITE_NAME };
