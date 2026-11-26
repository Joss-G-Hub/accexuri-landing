import { useState } from 'react';
import { CONFIG, COMPARE, LINES, WHATSAPP } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

// Configurador: el rider cambia al color de la línea elegida y vas sumando accesorios.
// Al final, el botón abre WhatsApp con tu combinación ya escrita.
const level = (key) => {
  const i = LINES.items.findIndex((l) => l.key === key);
  return COMPARE.rows.find((r) => r.label === 'Rendimiento').values[i];
};

export default function Configurator() {
  const [line, setLine] = useState(LINES.items[0].key);
  const [extras, setExtras] = useState(['Grips']);
  const current = LINES.items.find((l) => l.key === line);

  const toggle = (x) => setExtras((list) => (list.includes(x) ? list.filter((e) => e !== x) : [...list, x]));
  const onKeyLines = (e) => {
    const i = LINES.items.findIndex((l) => l.key === line);
    const step = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = LINES.items[(i + step + LINES.items.length) % LINES.items.length];
    setLine(next.key);
    e.currentTarget.querySelector(`[data-key="${next.key}"]`)?.focus();
  };

  const summary = `Línea ${current.name}${extras.length ? ` + ${extras.join(', ')}` : ''}`;
  const msg = `Hola Accexuri, armé mi setup en la web: ${summary}. ¿Me pueden dar precios y disponibilidad?`;
  const wa = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(msg)}`;

  return (
    <section className={`section cfg cfg--${line}`}>
      <div className="container">
        <div className="section__head reveal">
          <Eyebrow>{CONFIG.eyebrow}</Eyebrow>
          <h2 className="h2 words">{CONFIG.title}</h2>
          <p className="lead">{CONFIG.text}</p>
        </div>

        <div className="cfg__grid">
          <div className="cfg__stage reveal" aria-live="polite">
            <div className="cfg__photo">
              {LINES.items.map((l) => (
                <img
                  key={l.key}
                  src={CONFIG.images[l.key]}
                  alt={l.key === line ? `Rider Accexuri con detalles de la línea ${l.name}` : ''}
                  aria-hidden={l.key !== line || undefined}
                  className={l.key === line ? 'is-on' : undefined}
                  width="605"
                  height="900"
                  loading="lazy"
                />
              ))}
              <p className="cfg__big" key={line} aria-hidden="true">{current.name}</p>
              <ul className="cfg__tags" aria-hidden="true">
                {extras.map((x, i) => <li key={x} style={{ '--i': i }}>+ {x}</li>)}
              </ul>
            </div>
          </div>

          <div className="cfg__panel reveal" style={{ '--d': '120ms' }}>
            <p className="cfg__step"><span>01</span> Elige tu línea</p>
            <div className="cfg__lines" role="radiogroup" aria-label="Línea" onKeyDown={onKeyLines}>
              {LINES.items.map((l) => (
                <button
                  key={l.key}
                  type="button"
                  role="radio"
                  data-key={l.key}
                  aria-checked={l.key === line}
                  tabIndex={l.key === line ? 0 : -1}
                  className={`cfg__line cfg__line--${l.key}`}
                  onClick={() => setLine(l.key)}
                >
                  <i aria-hidden="true" />
                  <strong>{l.name}</strong>
                  <span>{l.tag}</span>
                </button>
              ))}
            </div>

            <p className="cfg__step"><span>02</span> Suma accesorios</p>
            <div className="cfg__extras">
              {CONFIG.extras.map((x) => (
                <button key={x} type="button" className="cfg__chip" aria-pressed={extras.includes(x)} onClick={() => toggle(x)}>
                  {x}
                </button>
              ))}
            </div>

            <div className="cfg__summary">
              <p className="cfg__step"><span>03</span> Tu setup</p>
              <p className="cfg__result">
                <strong>accexuri {current.name}</strong>
                {extras.length ? ` + ${extras.length} accesorio${extras.length > 1 ? 's' : ''}` : ' sin accesorios'}
              </p>
              <span className="cfg__meter" role="img" aria-label={`Nivel de rendimiento ${level(line)} de 3`}>
                {[1, 2, 3].map((n) => <i key={n} className={n <= level(line) ? 'on' : undefined} />)}
              </span>
              <div className="cfg__actions">
                <a className="btn btn--neon btn--lg" href={wa} target="_blank" rel="noopener noreferrer">Pedir por WhatsApp</a>
                <button type="button" className="btn btn--ghost" onClick={() => { setLine(LINES.items[0].key); setExtras([]); }}>Reiniciar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
