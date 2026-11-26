import { RAIL } from '../data/content.js';
import { to } from '../lib/router.js';

// Sección fijada: al hacer scroll hacia abajo, los productos se desplazan de lado (scroll horizontal).
export default function ProductRail() {
  return (
    <section className="rail" data-pin style={{ '--n': RAIL.items.length }}>
      <div className="rail__sticky">
        <div className="rail__x" aria-hidden="true"><img src="marca/isotipo-x.svg" alt="" /></div>
        <div className="container rail__head">
          <p className="eyebrow"><img src="marca/isotipo-x.svg" alt="" width="18" height="14" />{RAIL.eyebrow}</p>
          <h2 className="h2 rail__title">{RAIL.title}</h2>
          <div className="rail__bar" aria-hidden="true"><span /></div>
        </div>
        <ul className="rail__track">
          {RAIL.items.map((it, i) => (
            <li key={it.title} className={`rail__card rail__card--${it.line}`} data-tilt>
              <span className="rail__n">{String(i + 1).padStart(2, '0')}</span>
              <div className="rail__img"><img src={it.src} alt={it.title} loading="lazy" /></div>
              <div className="rail__body">
                <span className="rail__tag">{it.tag}</span>
                <h3>{it.title}</h3>
              </div>
            </li>
          ))}
          <li className="rail__card rail__card--cta">
            <a href={to('productos')}>
              <span>Ver todos los productos</span>
              <span className="rail__arrow" aria-hidden="true">→</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
