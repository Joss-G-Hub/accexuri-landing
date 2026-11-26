import { NAV, CONTACT } from '../data/content.js';
import { to } from '../lib/router.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__band" aria-hidden="true">accessories world</div>
      <div className="container footer__grid">
        <div>
          <img src="marca/logo-accexuri-negativo.svg" alt="Accexuri" width="200" height="22" />
          <p className="footer__claim">Diseño con actitud, precios justos y productos hechos para la calle.</p>
        </div>
        <nav aria-label="Pie de página">
          <ul>
            <li><a href={to('inicio')}>Inicio</a></li>
            {NAV.map((n) => <li key={n.id}><a href={to(n.id)}>{n.label}</a></li>)}
            <li><a href={to('contacto')}>Contacto</a></li>
          </ul>
        </nav>
        <ul className="footer__contact">
          <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
          <li><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
          <li>{CONTACT.country}</li>
        </ul>
      </div>
      <div className="container footer__legal">
        <p>© 2026 Accexuri. Una marca de Xuri Group.</p>
      </div>
    </footer>
  );
}
