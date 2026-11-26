import { WHY } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

// Lo que vive el motociclista urbano y cómo responde la marca (sistema de marca del manual).
export default function Why() {
  return (
    <section className="section why">
      <div className="container">
        <div className="section__head reveal">
          <Eyebrow>{WHY.eyebrow}</Eyebrow>
          <h2 className="h2 words">{WHY.title}</h2>
          <p className="lead">{WHY.text}</p>
        </div>
        <ol className="why__list">
          {WHY.items.map((it, i) => (
            <li key={it.answer} className="why__row reveal" style={{ '--d': `${i * 90}ms` }}>
              <p className="why__insight">
                <span className="why__who">El rider dice</span>
                “{it.insight}”
              </p>
              <span className="why__arrow" aria-hidden="true">→</span>
              <div className="why__answer">
                <h3>{it.answer}</h3>
                <p>{it.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
