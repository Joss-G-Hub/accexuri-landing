// Cortina neón en diagonal que cruza la pantalla al cambiar de página (ver src/lib/transition.js).
export default function Curtain({ phase }) {
  return (
    <div className={`curtain curtain--${phase}`} aria-hidden="true">
      <img src="marca/logo-accexuri-negro.svg" alt="" width="220" height="21" />
    </div>
  );
}
