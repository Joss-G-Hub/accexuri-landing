# Landing Accexuri — Accessories World

Landing page de Accexuri (accesorios para motocicletas), construida con **React + Vite** siguiendo el **MANUAL ACCEXURI 2026**.

## Cómo correrla

Requiere Node.js 18 o superior.

```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:5173
npm run build    # genera la carpeta dist/ lista para subir a cualquier hosting
```

## Estructura

```
public/
  img/     fotos de productos, empaques, merch y uniformes (extraídas del manual)
  marca/   logotipo (positivo, negativo, negro) e isotipo X en SVG
src/
  App.jsx            arma la página con todas las secciones
  styles.css         colores, tipografías y diseño responsive
  data/content.js    TODOS los textos y datos de contacto
  components/        Header, Hero, Ticker, About, Lines, Products, Rider, Contact, Footer
```

Para cambiar textos o datos de contacto, edita solo `src/data/content.js`.

## Marca (del manual)

- Paleta principal: neón `#DDDE00`, gris asfalto `#55585A`, negro `#000000`, blanco `#FFFFFF`.
- Acentos de línea: Estándar = neón/verde lima, PRO = naranja `#EA9334`, XTREME = turquesa `#74CECA`.
- Tipografías: Montserrat y Poppins (secundarias del manual, gratuitas en Google Fonts).
  Montserrat Black Italic sustituye a Gotham Black y Gutsand, que son de pago.
- Cortes diagonales inspirados en los 35° del logotipo.

## Pendientes

- **Formulario:** está en modo demostración. Para recibir mensajes, poner la URL del servicio
  de envío (Formspree, Getform o backend propio) en `FORM_ENDPOINT` dentro de `src/data/content.js`.
- **Contacto:** se usan los datos de Xuri (xurisa.com). Cambiar si Accexuri tiene correo, WhatsApp o redes propias.
- **Imágenes:** son los renders del manual. Reemplazar por fotos reales de producto cuando estén disponibles.

## Páginas y movimiento

- **Páginas separadas:** cada pestaña del menú abre su propia página (`#/nosotros`, `#/lineas`,
  `#/productos`, `#/rider`, `#/contacto`). Inicio muestra un resumen con botones "Ver más".
  El enrutador está en `src/lib/router.js` (sin librerías extra) y funciona en cualquier hosting estático.
- **Parallax:** `src/lib/motion.js`. Añade `data-speed="0.2"` a un elemento para que se mueva a otra
  velocidad al hacer scroll, `--depth` para que siga al mouse, y la clase `reveal` para que aparezca
  con animación. Respeta la opción "reducir movimiento" del sistema.

## Secciones agregadas

- **¿Por qué Accexuri?** (Inicio y Nosotros): insights del motociclista urbano y la respuesta de la marca, tomados del sistema de marca del manual. Textos en `WHY` (`src/data/content.js`).
- **Preguntas frecuentes** (página Contacto): acordeón en `src/components/Faq.jsx`, textos en `FAQ`.
  Las respuestas con `[COMPLETAR: …]` se ven resaltadas en naranja: la empresa debe confirmar esos datos (envíos, pagos, puntos de venta, requisitos de distribuidor).
- **Botón flotante de WhatsApp** (todas las páginas): `src/components/WhatsAppButton.jsx`, número y mensaje en `WHATSAPP`.
  Se usa el número de Xuri (+593 97 878 6285); cambiarlo si Accexuri tiene uno propio.

## Efectos de scroll v2

Todo está en `src/lib/motion.js` (sin librerías) y en la sección "EFECTOS LLAMATIVOS v2" de `src/styles.css`:

- Barra de progreso de lectura arriba de la página.
- Títulos que entran palabra por palabra (clase `words`).
- Frase grande que se ilumina palabra por palabra al hacer scroll (`words words--scrub` + `data-progress`).
- Sección fijada que se anima mientras haces scroll (`data-pin`): riel horizontal de productos en Accexuri,
  cadena de suministro con el isotipo dibujándose en Huicheng. En celular se vuelve una sección normal.
- Imágenes que se descubren con un barrido de color (`reveal-img`).
- Tarjetas que se inclinan en 3D con el mouse (`data-tilt`).
- Contadores que suben desde 0 (`data-count`).
- Portada que se despide al hacer scroll (variable `--sy`).
- Todo se desactiva si el sistema tiene activado "reducir movimiento".
- Solo Accexuri: cursor neón que sigue al mouse y marquesina gigante "accessories world" en la portada.
