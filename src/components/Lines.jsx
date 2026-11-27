import { LINES } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

export default function Lines() {
  return (
    <section id="lineas" className="section section--pattern">
      <div className="pattern" aria-hidden="true" style={{ backgroundImage: 'url(marca/logo-accexuri-negativo.svg)' }} />
      <div className="container">
        <div className="lines__head reveal">
          <div>
            <Eyebrow>{LINES.eyebrow}</Eyebrow>
            <h2 className="h2 words">{LINES.title}</h2>
          </div>
          <p className="lead">{LINES.text}</p>
        </div>

        <figure className="lines__photo reveal-img">
          <img data-speed="0.08" src={LINES.image} alt="Empaques de las tres líneas Accexuri: XTREME turquesa, PRO naranja y Estándar verde lima" width="1600" height="900" loading="lazy" />
        </figure>

        <div className="lines">
          {LINES.items.map((l, i) => (
            <article key={l.key} data-tilt className={`line line--${l.key} reveal`} style={{ '--d': `${i * 110}ms` }}>
              <p className="line__tag">{l.tag}</p>
              <h3 className="line__name">
                <span className="line__brand">accexuri</span> {l.name}
              </h3>
              <p>{l.text}</p>
              <button
                type="button"
                className="line__more"
                onClick={() => document.getElementById('comparar')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}
              >
                Comparar líneas <span aria-hidden="true">↓</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
