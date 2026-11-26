import { to } from '../lib/router.js';

// Cabecera de las páginas interiores, con capas que se mueven a distinta velocidad (parallax).
export default function PageHero({ page }) {
  return (
    <section className="phero" data-progress>
      <div className="phero__bg" data-speed="0.35" aria-hidden="true">
        <img src="marca/isotipo-x.svg" alt="" />
      </div>
      <div className="container phero__grid">
        <div className="phero__copy">
          <nav className="crumbs" aria-label="Ruta">
            <a href={to('inicio')}>Inicio</a> <span aria-hidden="true">/</span> <span aria-current="page">{page.title}</span>
          </nav>
          <p className="phero__eyebrow">{page.eyebrow}</p>
          <h1 className="phero__title words">{page.title}<span className="neon">.</span></h1>
          <p className="phero__text">{page.text}</p>
        </div>
        <div className={`phero__media reveal-img${page.photo ? ' phero__media--photo' : ''}`} data-speed="-0.12">
          <div className="phero__depth" style={{ '--depth': 18 }}>
            <img src={page.image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
