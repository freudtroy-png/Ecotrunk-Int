import PageHero from '../components/PageHero';
import TechCta from '../components/TechCta';
import Reveal from '../components/Reveal';

const gradient = {
  background: 'linear-gradient(135deg, var(--green-300), var(--green-500))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const MATERIALS = [
  {
    image: '/assets/img/Renewable%20Energy%20Components.jpg',
    title: 'Renewable Energy Components',
    paras: [
      'Solar PV modules (monocrystalline, polycrystalline, bifacial), string and central inverters, mounting structures, wind turbine components, energy storage systems, and all balance-of-system parts sourced from certified manufacturers with proven performance in tropical and high-altitude African conditions.',
      'Every product is selected for long-term reliability and bankability, with full warranty coverage and technical support.',
    ],
  },
  {
    image: '/assets/img/Electrical%20and%20Mechanical%20Equipment.jpg',
    title: 'Electrical and Mechanical Equipment',
    paras: [
      'Step-up and distribution transformers, medium and low voltage switchgear, armoured and solar-specific cables, motor control centres, PLC and SCADA components, water pumps, backup generators, and industrial machinery meeting KEBS requirements and relevant IEC standards.',
      'Full traceability, factory test certificates, and warranty coverage provided for every item delivered.',
    ],
  },
  {
    image: '/assets/img/Construction%20Materials.jpg',
    title: 'Construction Materials',
    paras: [
      'High-grade structural steel beams and columns, Portland cement and Pozzolana, graded aggregates, precast concrete components, prefabricated building systems, fencing materials, and comprehensive safety equipment from reputable mills and quarries.',
      'Batch testing and certification available to verify compliance with project structural specifications.',
    ],
  },
  {
    image: '/assets/img/fabricated.jpg',
    title: 'Custom Fabricated Parts',
    paras: [
      'Design and supply of custom-fabricated components including brackets, support frames, cable trays, equipment enclosures, and piping spools produced to your exact drawings and specifications by experienced local fabricators.',
      'Reduces import lead times, lowers shipping costs, and supports Kenya\'s growing manufacturing sector with full quality control.',
    ],
  },
  {
    image: '/assets/img/quality-assurance_01.jpg',
    title: 'Testing and Quality Assurance',
    paras: [
      'Every order backed by pre-shipment factory inspections, material testing certification from accredited laboratories, comprehensive documentation review, and batch traceability recording for critical components.',
      'Third-party inspection services available for independent verification of quality and compliance.',
    ],
  },
  {
    image: '/assets/img/lightbulb-1776372_1280.jpg',
    title: 'Sustainable Sourcing',
    paras: [
      'Environmentally responsible procurement aligned with Kenya\'s green energy transition. Our framework prioritises suppliers with recognised environmental certifications, minimises packaging waste, optimises logistics routes to reduce carbon emissions, and favours local manufacturers.',
      'We help our clients meet their environmental, social, and governance objectives through every procurement decision.',
    ],
  },
];

export default function Procurement() {
  return (
    <>
      <PageHero
        image="/assets/img/pse.jpg"
        badge={{ icon: 'truck', label: 'Procurement and Supply' }}
        title={
          <>
            Quality Materials for{' '}
            <span style={gradient}>Kenya&apos;s Energy Future</span>
          </>
        }
        subtitle="From solar PV modules to structural steel, we source, verify, and deliver high-quality engineering materials that meet the technical and regulatory demands of your renewable energy and infrastructure projects."
        stats={[
          { number: '100%', label: 'Quality Verified Shipments' },
          { number: '6', label: 'Product Categories' },
          { number: '50+', label: 'Supplier Partnerships' },
          { number: 'KEBS', label: 'Standards Compliant' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="section-label">Overview</span>
            <h2 className="section-title">End-to-End Procurement for Your Projects</h2>
          </div>
          <div className="two-col">
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--neutral-600)' }}>
              Ecotrunk International Ltd specialises in the procurement and supply of high-quality engineering materials tailored to Kenya&apos;s renewable energy, construction, and infrastructure sectors. Our team leverages deep industry relationships, rigorous quality standards, and local market knowledge to deliver the right materials on time and to specification. Whether sourcing solar PV modules from leading global manufacturers or procuring structural steel from trusted regional mills, we ensure every component meets the technical and regulatory demands of your project. From initial needs assessment through logistics coordination to final delivery, our end-to-end procurement service reduces risk, optimises cost, and keeps your project moving forward.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--neutral-600)' }}>
              What sets Ecotrunk apart is our technical understanding of the materials we supply. Our procurement team includes engineers who understand the specifications, performance requirements, and quality standards that matter in renewable energy and infrastructure projects. We do not simply process purchase orders; we act as a technical partner, advising on material selection, verifying supplier credentials, inspecting shipments, and coordinating logistics across Kenya and the East African region. Our commitment to quality is backed by systematic testing and documentation procedures, ensuring full traceability and compliance from factory floor to project site.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--neutral-50)' }}>
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="section-label">Process</span>
            <h2 className="section-title">Our Supply Process</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--neutral-600)', marginTop: 12 }}>
              Procurement done right is about more than finding the lowest price. It is about matching the right materials to your project specifications, timelines, and quality standards.
            </p>
          </div>
          <div style={{ maxWidth: 700, marginTop: 40 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--neutral-600)' }}>
                We work closely with your engineering team to understand project specifications, quantities, and timelines before sourcing begins. Our procurement network evaluates suppliers on pricing, lead times, certifications, and track record to secure optimal value for every order.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--neutral-600)' }}>
                Every shipment undergoes inspection and documentation review to confirm compliance with specifications and Kenyan standards. We coordinate transport, customs clearance, and site delivery across the country, ensuring materials arrive safely and on schedule to avoid costly project delays.
              </p>
            </div>
            <div style={{ marginTop: 32, padding: '24px 28px', background: 'white', borderLeft: '3px solid var(--green-500)' }}>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--neutral-600)', fontStyle: 'italic' }}>
                &quot;In our experience, the cheapest component is rarely the most cost-effective over a project&apos;s lifetime. We source for performance, durability, and value - not just upfront price.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label">Categories</span>
            <h2 className="section-title" style={{ maxWidth: 600, margin: '0 auto 20px' }}>
              Materials We Supply
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A comprehensive range of engineering materials sourced from certified manufacturers with proven performance in African conditions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 60 }}>
            {MATERIALS.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} className="mat-card">
                <div className="mat-card-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="mat-card-body">
                  <h3>{item.title}</h3>
                  {item.paras.map((para) => (
                    <p key={para.slice(0, 24)}>{para}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TechCta
        title="Need Materials for Your Project?"
        text="From a single equipment order to full project procurement, our team is ready to source, verify, and deliver the materials you need. Let us discuss your requirements and provide a competitive quotation."
        buttonLabel="Request a Quote"
      />
    </>
  );
}
