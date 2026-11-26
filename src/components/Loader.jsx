import { useEffect, useState } from 'react';

// Pantalla de carga: la X de Accexuri entra con brillo neón y luego la pantalla sube.
// Solo aparece al abrir el sitio, no al cambiar de página.
export default function Loader() {
  const [state, setState] = useState('on');

  useEffect(() => {
    const start = performance.now();
    const minTime = 2500; // también con "reducir movimiento": se muestra quieta, sin animación
    let done = false;
    const timers = [];
    const finish = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, minTime - (performance.now() - start));
      timers.push(setTimeout(() => {
        setState('out');
        timers.push(setTimeout(() => setState('gone'), 800));
      }, wait));
    };
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish);
    timers.push(setTimeout(finish, 3500)); // por si alguna imagen tarda demasiado
    return () => {
      window.removeEventListener('load', finish);
      timers.forEach(clearTimeout);
    };
  }, []);

  if (state === 'gone') return null;
  return (
    <div className={`loader${state === 'out' ? ' loader--out' : ''}`} aria-hidden="true">
      <div className="loader__inner">
        <img className="loader__x" src="marca/isotipo-x.svg" alt="" width="124" height="66" />
        <p className="loader__word">accessories world</p>
        <span className="loader__bar"><span /></span>
      </div>
    </div>
  );
}
