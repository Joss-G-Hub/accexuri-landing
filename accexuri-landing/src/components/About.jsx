import { ABOUT } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

export default function About() {
  return (
    <section id="nosotros" className="section">
      <div className="container">
        <div className="about reveal">
          <div>
            <Eyebrow>{ABOUT.eyebrow}</Eyebrow>
            <h2 className="h2 words">{ABOUT.title}</h2>
          </div>
          <div className="about__text">
            {ABOUT.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>

        <div className="mv">
          <article className="mv__card mv__card--neon reveal">
            <h3>Misión</h3>
            <p>{ABOUT.mission}</p>
          </article>
          <article className="mv__card reveal" style={{ '--d': '120ms' }}>
            <h3>Visión</h3>
            <p>{ABOUT.vision}</p>
          </article>
        </div>

        <ul className="values">
          {ABOUT.values.map((v, i) => (
            <li key={v.title} className="reveal" style={{ '--d': `${i * 90}ms` }}>
              <span className="values__n">0{i + 1}</span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
