import { useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { services } from '../../data/portfolioData.js';

/**
 * Services with 6 cards and sweeping light-beam hover effect
 */
export default function Services() {
  const ref = useRef(null);
  const visible = useScrollReveal(ref);

  return (
    <section ref={ref} className="services-section">
      <div className={`servicesGrid glass ${visible ? 'show' : ''}`}>
        <h2>Services</h2>
        
        <div className="cards-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="icon-box">
                <i className={`fa ${service.icon}`} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <span className="burmese">{service.burmese_title}</span>
              <div className="beam" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
