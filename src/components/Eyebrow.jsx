// Etiqueta pequeña sobre los títulos, con la X de la marca.
export default function Eyebrow({ children, dark = false }) {
  return (
    <p className={`eyebrow${dark ? ' eyebrow--dark' : ''}`}>
      <img src="marca/isotipo-x.svg" alt="" width="18" height="14" aria-hidden="true" />
      {children}
    </p>
  );
}
