import { HERO } from '../data/content.js';

export default function Hero() {
  const [a, b] = HERO.title;
  return (
    <section id="inicio" className="hero">
      <div className="hero__mega" aria-hidden="true">accessories world · accessories world · accessories world</div>
      <div className="hero__glow" data-speed="0.4" aria-hidden="true" style={{ backgroundImage: 'url(marca/isotipo-x.svg)' }} />
      <div className="container hero__grid">
        <div className="hero__copy">
          <img className="hero__logo" src="marca/logo-accexuri-negativo.svg" alt="Accexuri" width="360" height="40" />
          <p className="hero__tagline">accessories world</p>
          <h1 className="hero__title words">
            {a}<span className="neon">{b}</span>
          </h1>
          <p className="hero__text">{HERO.text}</p>
          <div className="hero__actions">
            <a className="btn btn--neon btn--lg" href={HERO.primary.href}>{HERO.primary.label}</a>
            <a className="btn btn--ghost btn--lg" href={HERO.secondary.href}>{HERO.secondary.label}</a>
          </div>
        </div>
        <div className="hero__media" data-speed="-0.1">
          <div className="hero__frame hero__depth" style={{ '--depth': 14 }}>
            <img src={HERO.image} alt="Motociclista con traje verde y negro de Accexuri sobre su moto en la ciudad" width="605" height="900" fetchpriority="high" />
          </div>
          <div className="hero__x hero__depth" style={{ '--depth': -40 }} aria-hidden="true"><img src="marca/isotipo-x.svg" alt="" width="160" height="120" /></div>
        </div>
      </div>
    </section>
  );
}
