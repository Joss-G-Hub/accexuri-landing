import { CTA } from '../data/content.js';
import { to } from '../lib/router.js';

// Franja final que invita a ir a Contacto.
export default function CtaBand() {
  return (
    <section className="cta">
      <div className="cta__x" data-speed="0.12" aria-hidden="true"><img src="marca/isotipo-x.svg" alt="" /></div>
      <div className="container cta__inner reveal">
        <div>
          <h2 className="h2">{CTA.title}</h2>
          <p>{CTA.text}</p>
        </div>
        <a className="btn btn--dark btn--lg" href={to('contacto')}>{CTA.button}</a>
      </div>
    </section>
  );
}
