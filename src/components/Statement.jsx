import { STATEMENT } from '../data/content.js';

// Frase grande cuyas palabras se iluminan en neón a medida que haces scroll.
export default function Statement() {
  const n = STATEMENT.text.split(/\s+/).length;
  return (
    <section className="statement" data-progress>
      <div className="statement__glow" aria-hidden="true" />
      <div className="container">
        <p className="statement__text words words--scrub" style={{ '--n': n }}>{STATEMENT.text}</p>
        <p className="statement__sign">{STATEMENT.sign}</p>
      </div>
    </section>
  );
}
