import { useState } from 'react';
import { COMPARE, LINES } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

// Comparador de las tres líneas. Pasar el mouse por una columna la resalta.
// Las barras (nivel 1 a 3) se llenan cuando la tabla aparece en pantalla.
export default function Compare() {
  const [col, setCol] = useState(null);
  const cls = (i, base = '') => `${base}${col === i ? ' is-col' : ''}`;

  return (
    <section id="comparar" className="section cmp-section">
      <div className="container">
        <div className="section__head reveal">
          <Eyebrow>{COMPARE.eyebrow}</Eyebrow>
          <h2 className="h2 words">{COMPARE.title}</h2>
          <p className="lead">{COMPARE.text}</p>
        </div>

        <div className="cmp__scroll reveal" onMouseLeave={() => setCol(null)}>
          <table className="cmp">
            <caption className="sr-only">Comparación de las líneas Estándar, PRO y XTREME de Accexuri</caption>
            <thead>
              <tr>
                <td />
                {LINES.items.map((l, i) => (
                  <th key={l.key} scope="col" className={cls(i, `cmp__head cmp--${l.key}`)} onMouseEnter={() => setCol(i)}>
                    <span className="cmp__brand">accexuri</span>
                    <span className="cmp__name">{l.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE.rows.map((r) => (
                <tr key={r.label}>
                  <th scope="row">{r.label}</th>
                  {r.values.map((v, i) => (
                    <td key={i} className={cls(i, `cmp--${LINES.items[i].key}`)} onMouseEnter={() => setCol(i)}>
                      {r.type === 'level' ? (
                        <span className="cmp__meter" role="img" aria-label={`Nivel ${v} de 3`}>
                          {[1, 2, 3].map((n) => <i key={n} className={n <= v ? 'on' : undefined} style={{ '--n': n }} />)}
                        </span>
                      ) : r.type === 'swatch' ? (
                        <span className="cmp__swatch"><i />{v}</span>
                      ) : (
                        v
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="cmp__hint">Desliza la tabla hacia los lados para ver las tres líneas.</p>
      </div>
    </section>
  );
}
