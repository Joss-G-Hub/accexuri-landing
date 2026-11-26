import { PRODUCTS } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

export default function Products() {
  return (
    <section id="productos" className="section section--light">
      <div className="container">
        <div className="section__head reveal">
          <Eyebrow dark>{PRODUCTS.eyebrow}</Eyebrow>
          <h2 className="h2 words">{PRODUCTS.title}</h2>
          <p className="lead">{PRODUCTS.text}</p>
        </div>
        <ul className="pgrid">
          {PRODUCTS.items.map((p, i) => (
            <li key={p.title} data-tilt className={`pcard reveal${p.big ? ' pcard--big' : ''}${p.wide ? ' pcard--wide' : ''}`} style={{ '--d': `${(i % 3) * 90}ms` }}>
              <div className="pcard__img">
                <img src={p.src} alt={p.title} width={p.w} height={p.h} loading="lazy" />
              </div>
              <div className="pcard__body">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
