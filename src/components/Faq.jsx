import { FAQ } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

// Preguntas frecuentes en acordeón (usa <details>, funciona sin JavaScript y con teclado).
// Los textos [COMPLETAR: …] se resaltan para que se vean fácil hasta que la empresa los confirme.
function Answer({ text }) {
  const parts = text.split(/(\[COMPLETAR:[^\]]*\])/);
  return (
    <p>
      {parts.map((p, i) => (p.startsWith('[COMPLETAR') ? <mark key={i} className="todo">{p}</mark> : p))}
    </p>
  );
}

export default function Faq() {
  return (
    <section className="section section--faq">
      <div className="container faq">
        <div className="reveal">
          <Eyebrow>{FAQ.eyebrow}</Eyebrow>
          <h2 className="h2">{FAQ.title}</h2>
        </div>
        <div className="faq__list reveal" style={{ '--d': '100ms' }}>
          {FAQ.items.map((f, i) => (
            <details key={f.q} className="faq__item" open={i === 0}>
              <summary>{f.q}</summary>
              <Answer text={f.a} />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
