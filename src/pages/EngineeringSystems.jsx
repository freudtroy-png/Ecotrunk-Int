import Reveal from '../components/Reveal';

const SERVICES = [
  {
    icon: 'search',
    title: 'Engineering Systems Review',
    text: 'We conduct in-depth evaluations of existing engineering systems to assess efficiency, reliability, and compatibility with modern renewable energy technologies. Our review methodology includes performance benchmarking against industry standards, identification of optimisation opportunities across electrical, mechanical, and control subsystems, and comprehensive lifecycle cost analysis. Each review delivers a prioritised roadmap of interventions that maximise return on investment while minimising operational downtime. Our engineers inspect every layer - from generation and transmission infrastructure to downstream utilisation - ensuring that no efficiency gap goes unnoticed.',
  },
  {
    icon: 'chart-pie',
    title: 'Systems Analysis',
    text: 'Our systems analysis practice tackles complex engineering challenges by applying structured methodologies to identify functional and structural requirements. We begin with thorough requirements gathering, engaging stakeholders to capture technical, regulatory, and operational constraints. From there we develop detailed technical specifications and conduct feasibility assessments that account for site conditions, grid integration parameters, environmental factors, and budget realities. The result is a consumer-centric solution design that balances technical performance with practical deployability. Our analysis has supported projects ranging from mini-grid electrification schemes to utility-scale renewable energy plants.',
  },
  {
    icon: 'bolt',
    title: 'Energy Technology Implementation',
    text: 'We project-manage the full deployment lifecycle of renewable energy technologies - solar photovoltaic, wind turbines, and hydroelectric systems - from technology selection and procurement through to installation, commissioning, and handover. Our implementation approach emphasizes meticulous planning: site surveys, civil works coordination, electrical integration, and performance monitoring setup are all managed under a unified quality framework. Post-commissioning, we provide operations support and maintenance planning to ensure sustained energy production. Every installation is accompanied by comprehensive documentation, training, and a clear performance baseline.',
  },
  {
    icon: 'concierge-bell',
    title: 'Service Systems Development',
    text: 'Beyond individual projects, we design and refine the operational systems that underpin long-term energy service delivery. This includes developing maintenance management protocols, performance dashboards, customer engagement mechanisms, and operational workflows that enhance efficiency, reliability, and customer satisfaction. Our service systems work is grounded in a deep understanding of the Kenyan energy landscape - from rural off-grid contexts to urban industrial applications - and is always aligned with our clients\' strategic goals. We treat service systems as living frameworks that evolve alongside technology and market conditions.',
  },
];

const APPROACH = [
  {
    icon: 'clipboard-check',
    title: 'Technical Rigour',
    text: 'We adhere to recognised engineering standards and codes of practice across all our work. Every deliverable undergoes internal quality assurance review, and our project teams follow documented procedures for design verification, risk assessment, and compliance checking. This rigour ensures that our systems are safe, reliable, and built to last in Kenya\'s diverse operating environments - from the highlands to the coast.',
  },
  {
    icon: 'lightbulb',
    title: 'Innovation',
    text: 'We actively monitor emerging technologies and evolving best practices in the renewable energy and engineering sectors. Our team evaluates new tools - from advanced modelling software to novel energy storage configurations - and adopts those that offer genuine improvements in performance, cost, or sustainability. This culture of continuous improvement means our clients benefit from solutions that are not only current but forward-looking.',
  },
  {
    icon: 'handshake',
    title: 'Collaboration',
    text: 'We believe the best engineering outcomes emerge from close partnership with our clients and stakeholders. Throughout every engagement we maintain open communication channels, provide regular progress updates, and actively seek input from end users, regulators, and community representatives. This collaborative model ensures that our solutions are technically sound, socially accepted, and fully aligned with the unique goals of each client.',
  },
];

export default function EngineeringSystems() {
  return (
    <>
      <section className="section" style={{ paddingTop: 140 }}>
        <div className="container">
          <Reveal>
            <span className="section-label">Engineering Systems</span>
            <h2 className="section-title">Engineering Systems Development</h2>
            <p className="intro-text">
              Ecotrunk International Ltd brings deep technical expertise to every phase of engineering systems development. From initial system review and complex analysis through to energy technology deployment and service system refinement, our team delivers robust, efficient, and future-ready solutions tailored to the renewable energy sector across Kenya and East Africa.
            </p>
          </Reveal>

          <div className="hero-banner">
            <img src="/assets/img/eng.jpg" alt="Engineering team reviewing technical drawings and system schematics" loading="lazy" />
            <div className="hero-banner-overlay">
              <h2>Integrated Engineering for a Sustainable Energy Future</h2>
              <p>Our multidisciplinary team combines systems thinking with hands-on renewable energy expertise to deliver solutions that perform.</p>
            </div>
          </div>

          <div className="services-grid">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 100} className="service-card">
                <div className="service-card-icon">
                  <i className={`fas fa-${service.icon}`} aria-hidden="true"></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <Reveal>
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">Our Engineering Approach</h2>
            <p className="intro-text">
              Every engineering engagement at Ecotrunk is underpinned by three core pillars that ensure technical excellence, enduring value, and strong client relationships.
            </p>
          </Reveal>

          <div className="approach-grid">
            {APPROACH.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} className="approach-card">
                <div className="approach-card-icon">
                  <i className={`fas fa-${item.icon}`} aria-hidden="true"></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
