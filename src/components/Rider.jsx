import { RIDER } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

export default function Rider() {
  const u = RIDER.uniforms;
  return (
    <section id="rider" className="section">
      <div className="container">
        <div className="section__head reveal">
          <Eyebrow>{RIDER.eyebrow}</Eyebrow>
          <h2 className="h2 words">{RIDER.title}</h2>
          <p className="lead">{RIDER.text}</p>
        </div>

        <ul className="merch">
          {RIDER.items.map((m, i) => (
            <li key={m.title} data-tilt className={`merch__item reveal${m.light ? ' merch__item--light' : ''}`} style={{ '--d': `${i * 80}ms` }}>
              <img src={m.src} alt={`${m.title} Accexuri`} width={m.w} height={m.h} loading="lazy" />
              <h3>{m.title}</h3>
            </li>
          ))}
        </ul>

        <div className="uniforms reveal">
          <div className="uniforms__copy">
            <h3 className="h3">{u.title}</h3>
            <p>{u.text}</p>
          </div>
          <div className="uniforms__imgs">
            {u.images.map((im) => <img key={im.src} src={im.src} alt={im.alt} width={im.w} height={im.h} loading="lazy" />)}
          </div>
        </div>
      </div>
    </section>
  );
}
