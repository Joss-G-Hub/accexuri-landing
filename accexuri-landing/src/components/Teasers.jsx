import { TEASERS } from '../data/content.js';
import { to } from '../lib/router.js';
import Eyebrow from './Eyebrow.jsx';

// Resumen de cada página en Inicio.
export default function Teasers() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__head reveal">
          <Eyebrow>Explora</Eyebrow>
          <h2 className="h2 words">Todo Accexuri en un vistazo.</h2>
        </div>
        <ul className="teasers">
          {TEASERS.map((t, i) => (
            <li key={t.id} className="reveal" style={{ '--d': `${i * 90}ms` }}>
              <a className="teaser" href={to(t.id)} data-tilt>
                <div className={`teaser__img${t.photo ? ' teaser__img--photo' : ''}`}>
                  <img src={t.image} alt="" loading="lazy" />
                </div>
                <div className="teaser__body">
                  <span className="teaser__n">0{i + 1}</span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                  <span className="teaser__more">Ver más <span aria-hidden="true">→</span></span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
