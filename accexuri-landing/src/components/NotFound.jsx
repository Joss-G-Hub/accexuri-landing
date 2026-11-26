import { NOT_FOUND } from '../data/content.js';
import { to } from '../lib/router.js';

// Página 404: aparece si alguien escribe una dirección que no existe (por ejemplo #/precios).
export default function NotFound() {
  return (
    <section className="nf">
      <img className="nf__x" data-speed="0.3" src="marca/isotipo-x.svg" alt="" aria-hidden="true" />
      <div className="container nf__inner">
        <p className="nf__code" aria-hidden="true">404</p>
        <p className="nf__eyebrow">{NOT_FOUND.eyebrow}</p>
        <h1 className="nf__title words">{NOT_FOUND.title}</h1>
        <p className="nf__text">{NOT_FOUND.text}</p>
        <div className="nf__actions">
          <a className="btn btn--neon btn--lg" href={to('inicio')}>Ir al inicio</a>
          <a className="btn btn--ghost btn--lg" href={to('productos')}>Ver productos</a>
        </div>
      </div>
    </section>
  );
}
