import { openLightbox } from './Lightbox.jsx';

// Envuelve una foto para que, al hacer clic, se abra en grande en la galería.
export default function ZoomButton({ items, index, children }) {
  return (
    <button type="button" className="zoom" onClick={() => openLightbox(items, index)} aria-label={`Ver en grande: ${items[index].title}`}>
      {children}
      <span className="zoom__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20"><path d="M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm9.5 16-4.8-4.8M10.5 7.5v6M7.5 10.5h6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
      </span>
    </button>
  );
}
