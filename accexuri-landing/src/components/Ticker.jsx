import { TICKER } from '../data/content.js';

// Banda neón que se desplaza. Se duplica el contenido para que el bucle no tenga cortes.
export default function Ticker() {
  const row = (hidden) => (
    <ul className="ticker__row" aria-hidden={hidden || undefined}>
      {TICKER.map((t) => (
        <li key={t}>
          {t}
          <span className="ticker__x" aria-hidden="true">✕</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="ticker" role="region" aria-label="Lo que nos define">
      <div className="ticker__track">{row(false)}{row(true)}</div>
    </div>
  );
}
