import { THANKS, WHATSAPP, FORM_ENDPOINT } from '../data/content.js';
import { to } from '../lib/router.js';
import { getThanksName } from '../lib/thanks.js';

// Página de Gracias: aparece después de enviar el formulario de contacto.
export default function Thanks() {
  const name = getThanksName();
  const wa = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`;
  return (
    <section className="ty">
      <img className="ty__x" data-speed="0.3" src="marca/isotipo-x.svg" alt="" aria-hidden="true" />
      <div className="container ty__inner">
        <svg className="ty__check" viewBox="0 0 120 120" aria-hidden="true">
          <path className="ty__ring" d="M30 6 H114 V90 L90 114 H6 V30 Z" pathLength="100" />
          <path className="ty__tick" d="M34 62 L52 80 L88 42" pathLength="100" />
        </svg>
        <p className="ty__eyebrow">{THANKS.eyebrow}</p>
        <h1 className="ty__title words">{name ? `¡Gracias, ${name}!` : THANKS.title}</h1>
        <p className="ty__text">{THANKS.text}</p>
        {!FORM_ENDPOINT && <p className="ty__demo">{THANKS.demo}</p>}

        <ol className="ty__steps">
          {THANKS.steps.map((s, i) => (
            <li key={s.title} className="reveal" style={{ '--d': `${200 + i * 120}ms` }}>
              <span className="ty__num">{String(i + 1).padStart(2, '0')}</span>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="ty__actions">
          <a className="btn btn--neon btn--lg" href={to('inicio')}>Volver al inicio</a>
          <a className="btn btn--ghost btn--lg" href={to('productos')}>Ver productos</a>
        </div>
        <p className="ty__wa">
          ¿Es urgente? <a href={wa} target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp <span aria-hidden="true">→</span></a>
        </p>
      </div>
    </section>
  );
}
