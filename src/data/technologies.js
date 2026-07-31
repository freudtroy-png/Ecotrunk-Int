export const technologies = [
  {
    id: 'solar',
    title: 'Solar Energy',
    subtitle: 'Harnessing Kenya\'s Abundant Sunshine',
    marker: 'var(--green-500)',
    to: '/solar',
    cta: 'Explore Solar Energy',
    paragraphs: [
      'The economics of solar have been transformed in a single decade. Module prices have fallen over 90 percent since 2010, and modern monocrystalline panels now achieve 21-23% efficiency - up from 15% a decade ago. Bifacial modules capturing light on both sides add 5-15% yield, while microinverters and power optimisers maximise harvest from each panel, critical for the partially shaded rooftops common in Kenyan cities.',
      'Battery costs have fallen by over 80 percent since 2015 to under USD 150 per kWh. LFP chemistry is now preferred for stationary storage with 6,000+ cycle life. Solar-plus-storage systems deliver firm, dispatchable power through evening peaks, stabilise voltage, and provide backup during Kenya\'s frequent grid outages.',
      'C&I users achieve 3-5 year paybacks at current module prices. The Rift Valley\'s 5.5-6.5 kWh/m2/day insolation is among the world\'s best. Feed-in tariffs and international climate finance are driving utility-scale pipeline growth, while the off-grid market serves 25 percent of Kenyans through PAYG mini-grids.',
    ],
    stats: [
      { value: '6.5', label: 'kWh/m2/day Insolation' },
      { value: '80%', label: 'Cost Reduction vs Diesel' },
      { value: '5x', label: 'Market Growth Since 2018' },
    ],
    applications: [
      { title: 'Commercial & Industrial Rooftop PV', text: 'Reducing operational energy costs for businesses, factories, and office complexes across Kenya\'s urban centres with minimal land use.' },
      { title: 'Utility-Scale Solar Farms', text: 'Ground-mounted PV from 1 MW to 50 MW connected via PPAs, with full EPC and project financing support for developers.' },
      { title: 'Mini-Grid & Off-Grid Systems', text: 'Decentralised solar for rural communities, schools, and health facilities beyond grid reach with smart metering and mobile payments.' },
      { title: 'Agricultural Solar & Water Pumping', text: 'Powering irrigation, cold storage, and agro-processing across arid regions, replacing diesel pumps at 90 percent operating cost reduction.' },
    ],
  },
  {
    id: 'wind',
    title: 'Wind Energy',
    subtitle: 'Capturing the Power of Kenya\'s Wind Corridors',
    marker: 'var(--green-400)',
    to: '/wind',
    cta: 'Explore Wind Energy',
    paragraphs: [
      'Modern onshore turbines range from 1.5 MW to 6 MW with hub heights of 80-140 metres and rotor diameters exceeding 150 metres. Direct-drive permanent magnet generators eliminate the gearbox - historically the most failure-prone component - improving reliability. Advanced blade aerodynamics with serrated trailing edges boost energy capture by 20-30 percent over earlier designs.',
      'The Turkana Corridor\'s channeled winds average 11-13 m/s during peak season - among the world\'s strongest. The Ngong Hills demonstrate ridge-top viability near Nairobi. Our resource assessment uses meteorological masts and SODAR units collecting 12+ months of site data before turbine selection and micrositing.',
      'Integrating variable wind into Kenya\'s hydro/geothermal grid requires sophisticated forecasting, dispatch scheduling, and curtailment protocols. Modern wind farms provide reactive power, frequency response, and fault ride-through compliant with Kenya\'s Grid Code. Community benefits include roads, schools, and employment through development agreements.',
    ],
    stats: [
      { value: '310', label: 'MW Turkana Wind Farm' },
      { value: '45%', label: 'Capacity Factor' },
      { value: '13', label: 'm/s Peak Wind Speed' },
    ],
    applications: [
      { title: 'Onshore Wind Farm Development', text: 'End-to-end delivery from wind resource assessment and turbine selection through construction, commissioning, and grid connection.' },
      { title: 'Repowering & Retrofit Solutions', text: 'Upgrading existing wind farms with modern, higher-capacity turbines and advanced control systems to improve energy capture and extend operational life.' },
      { title: 'Hybrid Wind-Solar Systems', text: 'Combining complementary wind and solar profiles to smooth generation, improve capacity factors, and share grid connection infrastructure.' },
      { title: 'Wind Measurement & Feasibility', text: 'Comprehensive meteorological monitoring, energy yield assessment, and financial modelling to de-risk investment decisions before capital commitment.' },
    ],
  },
  {
    id: 'hydro',
    title: 'Hydropower',
    subtitle: 'Leveraging Kenya\'s Rivers for Clean Baseload Power',
    marker: 'var(--green-300)',
    to: '/hydro',
    cta: 'Explore Hydropower',
    paragraphs: [
      'Pelton turbines excel in high-head, low-flow mountain catchments at over 90 percent efficiency. Francis turbines handle medium head and flow ranges as the global standard. Kaplan\'s adjustable blades suit low-head, high-flow river applications. CFD modelling optimises turbine selection and intake design for each site\'s unique hydrology.',
      'The Tana River\'s Seven Forks cascade delivers 500+ MW through five plants. The Athi system and rivers draining the Aberdares and Mt Kenya add significant capacity. Run-of-river projects on Sondu Miriu and Turkwel demonstrate low-footprint models. Our hydrological assessments span Nandi, Murang\'a, and other highland catchments.',
      'Run-of-river designs avoid large reservoirs, preserving river flow regimes and sediment transport. Fish-friendly turbines, minimum flow releases, and watershed reforestation programmes mitigate ecological impacts. Strategic environmental assessments are integrated from concept through operations, aligned with NEMA and international standards.',
    ],
    stats: [
      { value: '500+', label: 'MW Seven Forks Cascade' },
      { value: '35%', label: 'Share of Kenya\'s Power Mix' },
      { value: '50+', label: 'Year Design Life' },
    ],
    applications: [
      { title: 'Run-of-River Hydropower', text: 'Low-impact projects diverting a portion of river flow through turbines without significant storage, preserving ecological continuity and community access.' },
      { title: 'Small & Mini Hydropower (SHP)', text: 'Projects under 10 MW serving rural electrification, industrial off-take, or mini-grid anchor loads with standardised turbine packages for rapid deployment.' },
      { title: 'Feasibility & Hydrological Studies', text: 'Catchment-scale assessments with flow gauging, rainfall analysis, climate scenario modelling, and preliminary design to bankable feasibility level.' },
      { title: 'Plant Refurbishment & Modernisation', text: 'Turbine runner replacement, control system upgrades, and electro-mechanical refurbishment to restore capacity and extend asset life by 20-30 years.' },
    ],
  },
];
