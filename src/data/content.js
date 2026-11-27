// Todos los textos de la landing. Fuente: MANUAL ACCEXURI 2026 (brandbook).
// Para cambiar un texto o un dato de contacto, edita solo este archivo.

export const NAV = [
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'lineas', label: 'Líneas' },
  { id: 'productos', label: 'Productos' },
  { id: 'rider', label: 'Rider' },
];
export const NAV_CONTACT = { id: 'contacto', label: 'Contáctanos' };

export const HERO = {
  kicker: 'Accesorios para motocicletas',
  title: ['El estilo no debe ser un ', 'privilegio.'], // la última palabra va resaltada en neón
  text: 'Accesorios que combinan estética, funcionalidad y precio justo, pensados para el uso real y el presupuesto de quienes viven la moto todos los días.',
  primary: { label: 'Ver líneas', href: '#/lineas' },
  secondary: { label: 'Contáctanos', href: '#/contacto' },
  image: 'img/rider.webp',
};

// Banda que se desplaza (atributos de la personalidad de marca del manual).
export const TICKER = ['Estilo accesible', 'Uso real', 'Precio justo', 'Hecho para la calle', 'Accessories world'];

export const ABOUT = {
  eyebrow: 'Nosotros',
  title: 'Para quienes ruedan, trabajan y avanzan kilómetro a kilómetro.',
  paragraphs: [
    'Accexuri es una marca de accesorios para motocicletas que combina estética, funcionalidad y precio justo. Seleccionamos productos pensados para el uso real y el presupuesto de quienes viven la moto todos los días.',
    'Ofrecemos opciones con buena compatibilidad, materiales confiables y una estética cuidada, demostrando que es posible mejorar la apariencia y la funcionalidad de una moto sin pagar de más.',
  ],
  mission: 'Democratizar el estilo en el mundo de las motos a través de accesorios accesibles, funcionales y con identidad. Diseñamos para motociclistas que buscan diferenciarse: el carácter de una moto no depende de su precio, sino de la esencia de quien la conduce.',
  vision: 'Crecer como una marca de alcance internacional, presente en distintas ciudades y culturas, sin perder nuestro origen ni nuestra esencia: diseño con actitud, precios justos y productos hechos para la calle.',
  values: [
    { title: 'Cercana', text: 'Hablamos claro, como en la calle. Sin poses ni tecnicismos innecesarios.' },
    { title: 'Práctica', text: 'Funcionalidad real para la rutina diaria, no solo estética.' },
    { title: 'Urbana', text: 'Accesorios pensados para la ciudad y el trabajo sobre dos ruedas.' },
    { title: 'Honesta', text: 'Sin promesas exageradas: beneficios explicados y precio justo.' },
  ],
};

// Arquitectura de producto: tres líneas oficiales de la marca matriz.
export const LINES = {
  eyebrow: 'Portafolio',
  title: 'Una marca, tres líneas.',
  text: 'Nuestras categorías no son marcas independientes: son líneas oficiales que comparten el ADN y el respaldo de Accexuri, y se diferencian por su nivel de rendimiento, su enfoque técnico y su público.',
  image: 'img/lineas.webp',
  items: [
    {
      key: 'estandar',
      name: 'Estándar',
      tag: 'Empaque verde lima',
      text: 'Diseñada para el día a día: soluciones prácticas que combinan funcionalidad, comodidad y un estilo accesible, con una excelente relación calidad-precio.',
    },
    {
      key: 'pro',
      name: 'PRO',
      tag: 'Empaque naranja',
      text: 'Para usuarios exigentes que requieren un rendimiento superior: materiales técnicos y diseño de ingeniería avanzada que optimizan la durabilidad en uso urbano frecuente.',
    },
    {
      key: 'xtreme',
      name: 'XTREME',
      tag: 'Empaque turquesa',
      text: 'El tope de gama: máxima innovación técnica para ofrecer protección superior y resistencia total frente al clima y el asfalto.',
    },
  ],
};

export const PRODUCTS = {
  eyebrow: 'Productos y empaques',
  title: 'Diseño con actitud, de la caja a la moto.',
  text: 'Un sistema de packaging modular: un mismo formato estructural que se adapta a cada accesorio mediante gráfica, troqueles y etiquetado, manteniendo la coherencia de marca.',
  items: [
    { src: 'img/empaque-premium.webp', w: 1000, h: 978, title: 'Empaques premium', text: 'Para nuestros productos top.', big: true },
    { src: 'img/caja-embalaje.webp', w: 1000, h: 530, title: 'Cajas de embalaje', text: 'Protección para el transporte.', wide: true },
    { src: 'img/empaque-grips.webp', w: 789, h: 800, title: 'Empaque base universal', text: 'Línea Estándar.' },
    { src: 'img/funda-ziploc.webp', w: 789, h: 800, title: 'Funda ziploc', text: 'Para accesorios pequeños.' },
    { src: 'img/blister.webp', w: 268, h: 600, title: 'Blisters', text: 'Para exhibición en punto de venta.', wide: true },
    { src: 'img/cubre-palanca.webp', w: 338, h: 700, title: 'Logo en producto', text: 'Un estándar de fabricación que se nota.', wide: true },
  ],
};

export const RIDER = {
  eyebrow: 'Rider performance essentials',
  title: 'Equipados para la jornada.',
  text: 'Una línea de equipamiento para el ritmo del delivery o los traslados de cada día. Cada pieza prioriza ergonomía, durabilidad y libertad de movimiento sobre dos ruedas.',
  items: [
    { src: 'img/manga.webp', w: 900, h: 784, title: 'Manga protectora' },
    { src: 'img/canguro.webp', w: 900, h: 690, title: 'Bolsa canguro' },
    { src: 'img/tomatodo.webp', w: 397, h: 700, title: 'Tomatodo' },
    { src: 'img/gorras.webp', w: 900, h: 772, title: 'Gorras', light: true },
    { src: 'img/lanyard.webp', w: 900, h: 661, title: 'Lanyard', light: true },
  ],
  uniforms: {
    title: 'Uniformes oficiales',
    text: 'Diseño deportivo con acabado profesional para el staff técnico y los embajadores en puntos de venta.',
    images: [
      { src: 'img/uniforme-polo.webp', w: 638, h: 800, alt: 'Polo negro Accexuri con detalles en verde neón' },
      { src: 'img/uniforme-vestido.webp', w: 383, h: 800, alt: 'Uniforme deportivo negro y neón de Accexuri' },
    ],
  },
};

// Datos de contacto tomados del sitio oficial de Xuri (xurisa.com).
export const CONTACT = {
  eyebrow: 'Contacto',
  title: '¿Quieres vender o comprar Accexuri?',
  text: 'Escríbenos si eres distribuidor, tienda o motociclista. Te respondemos con disponibilidad, precios y la línea que mejor va con tu moto.',
  email: 'comercioxurisa@gmail.com',
  phone: '+593 97 878 6285',
  phoneHref: 'tel:+593978786285',
  country: 'Ecuador',
};

// Dirección a la que se envía el formulario (por ejemplo un endpoint de Formspree,
// Getform o el backend de la empresa). Mientras esté vacía, el formulario funciona
// en modo demostración: valida los datos y muestra el mensaje de éxito sin enviar nada.
export const FORM_ENDPOINT = '';

// ---------- Páginas (cada pestaña del menú abre su propia página) ----------
// Cabecera de cada página interior: título, texto corto e imagen con parallax.
export const PAGES = {
  nosotros: { title: 'Nosotros', eyebrow: 'Quiénes somos', text: 'Una marca hecha desde la calle para quienes viven la moto todos los días.', image: 'img/rider.webp', photo: true },
  lineas: { title: 'Líneas', eyebrow: 'Estándar · PRO · XTREME', text: 'Una sola marca con tres niveles de rendimiento, cada uno con su color.', image: 'img/caja-producto.webp' },
  productos: { title: 'Productos', eyebrow: 'Productos y empaques', text: 'Accesorios con buena compatibilidad, materiales confiables y una estética cuidada.', image: 'img/empaque-premium.webp' },
  rider: { title: 'Rider', eyebrow: 'Rider performance essentials', text: 'Equipamiento para el delivery y los traslados de cada día.', image: 'img/manga.webp' },
  contacto: { title: 'Contacto', eyebrow: 'Hablemos', text: 'Distribuidores, tiendas y motociclistas: escríbenos.', image: 'img/caja-embalaje.webp' },
};

// Adelantos que aparecen en Inicio, con botón "Ver más" hacia cada página.
export const TEASERS = [
  { id: 'nosotros', title: 'Nosotros', text: 'Democratizamos el estilo: accesorios accesibles, funcionales y con identidad.', image: 'img/rider.webp', photo: true },
  { id: 'lineas', title: 'Líneas', text: 'Estándar, PRO y XTREME: elige el nivel de rendimiento que necesita tu moto.', image: 'img/lineas.webp', photo: true },
  { id: 'productos', title: 'Productos', text: 'Empaques modulares y productos con el logo como sello de calidad.', image: 'img/empaque-grips.webp' },
  { id: 'rider', title: 'Rider', text: 'Mangas, bolsas, gorras y uniformes para la jornada sobre dos ruedas.', image: 'img/canguro.webp' },
];

export const CTA = {
  title: '¿Listo para darle estilo a tu moto?',
  text: 'Cuéntanos qué buscas y te ayudamos a elegir.',
  button: 'Contáctanos',
};

// ---------- ¿Por qué Accexuri? (sistema de marca del manual: insights → respuesta) ----------
export const WHY = {
  eyebrow: '¿Por qué Accexuri?',
  title: 'Hecha desde la calle, para la calle.',
  text: 'Entendemos la realidad de quien rueda todos los días y respondemos con soluciones que elevan su experiencia sin alejarse de su presupuesto.',
  items: [
    { insight: 'Quiero verme bien sin pagar de más.', answer: 'Urbano, no elitista', text: 'Estilo con identidad a un precio justo. El carácter de una moto no depende de su precio.' },
    { insight: 'Mi moto es mi herramienta de trabajo, no un lujo.', answer: 'Rutina diaria, no aventura', text: 'Accesorios pensados para el tráfico, el delivery y los traslados de todos los días.' },
    { insight: 'Me importa el diseño, pero no sacrifico seguridad.', answer: 'Funcional, no solo estética', text: 'Materiales confiables y buena compatibilidad: que se vea bien y que funcione.' },
    { insight: 'No confío en marcas que posan más de lo que son.', answer: 'Funcional, no lujo falso', text: 'Información clara, beneficios explicados y cero promesas exageradas.' },
  ],
};

// ---------- Preguntas frecuentes ----------
// Las respuestas marcadas con pending: true tienen datos que la empresa debe confirmar.
// Se muestran resaltadas en la página hasta que se completen (cambia el texto y quita pending).
export const FAQ = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Resolvemos tus dudas.',
  items: [
    {
      q: '¿Cuál línea es para mí?',
      a: 'Estándar (verde lima) es para el día a día, con la mejor relación calidad-precio. PRO (naranja) es para un uso urbano intensivo, con materiales técnicos y mayor durabilidad. XTREME (turquesa) es el tope de gama, con máxima protección frente al clima y el asfalto.',
    },
    {
      q: '¿Los accesorios son compatibles con mi moto?',
      a: 'Seleccionamos productos con buena compatibilidad para las motos más usadas en la ciudad. Escríbenos la marca y el modelo de tu moto y te confirmamos qué accesorios le quedan.',
    },
    {
      q: '¿Dónde puedo comprar productos Accexuri?',
      a: 'Escríbenos por WhatsApp o por el formulario y te indicamos el punto de venta más cercano a ti.',
    },
    {
      q: '¿Cómo me convierto en distribuidor?',
      a: 'Completa el formulario de contacto eligiendo "Distribuidor" y nuestro equipo comercial te contactará para explicarte los requisitos y condiciones.',
    },
    {
      q: '¿Hacen envíos?',
      a: 'Sí, coordinamos envíos según tu ciudad. Escríbenos por WhatsApp y te confirmamos tiempos de entrega y costos.',
    },
    {
      q: '¿Qué formas de pago aceptan?',
      a: 'Escríbenos por WhatsApp y te indicamos las formas de pago disponibles para tu pedido.',
    },
  ],
};

// ---------- Botón flotante de WhatsApp ----------
// Número tomado del sitio de Xuri (xurisa.com). Cambiar si Accexuri tiene uno propio.
export const WHATSAPP = {
  number: '593978786285',
  message: 'Hola Accexuri, quiero información sobre sus accesorios.',
  label: 'Escríbenos',
};

// ---------- Efectos de Inicio ----------
// Riel horizontal de productos (sección fijada que se desplaza de lado al hacer scroll).
export const RAIL = {
  eyebrow: 'Productos en movimiento',
  title: 'Lo más destacado.',
  items: [
    { src: 'img/empaque-premium.webp', title: 'Empaques premium', tag: 'Productos top', line: 'xtreme' },
    { src: 'img/empaque-grips.webp', title: 'Empaque universal', tag: 'Línea Estándar', line: 'estandar' },
    { src: 'img/caja-producto.webp', title: 'Caja de producto', tag: 'Línea PRO', line: 'pro' },
    { src: 'img/cubre-palanca.webp', title: 'Logo en producto', tag: 'Sello de calidad', line: 'estandar' },
    { src: 'img/manga.webp', title: 'Manga protectora', tag: 'Rider essentials', line: 'xtreme' },
    { src: 'img/canguro.webp', title: 'Bolsa canguro', tag: 'Rider essentials', line: 'pro' },
  ],
};

// Frase de la misión del manual que se ilumina palabra por palabra con el scroll.
export const STATEMENT = {
  text: 'El carácter de una moto no depende de su precio, sino de la esencia de quien la conduce.',
  sign: '— Misión Accexuri',
};

// Comparador de líneas (página Líneas). Basado en la descripción de cada línea del manual.
// type 'level': barras del 1 al 3 · type 'swatch': muestra el color de la línea.
export const COMPARE = {
  eyebrow: 'Compara las líneas',
  title: '¿Cuál va contigo?',
  text: 'Las tres líneas comparten el ADN Accexuri. Cambian el nivel de rendimiento, el enfoque técnico y el tipo de uso.',
  rows: [
    { label: 'Color de empaque', type: 'swatch', values: ['Verde lima', 'Naranja', 'Turquesa'] },
    { label: 'Enfoque', values: ['Día a día', 'Rendimiento superior', 'Tope de gama'] },
    { label: 'Ideal para', values: ['Uso diario urbano', 'Uso urbano intensivo', 'Clima y asfalto exigentes'] },
    { label: 'Materiales', values: ['Funcionales y cómodos', 'Técnicos', 'Máxima innovación técnica'] },
    { label: 'Rendimiento', type: 'level', values: [1, 2, 3] },
    { label: 'Durabilidad', type: 'level', values: [1, 2, 3] },
    { label: 'Protección', type: 'level', values: [1, 2, 3] },
  ],
};

// Página 404 (dirección que no existe).
export const NOT_FOUND = {
  eyebrow: 'Error 404',
  title: 'Te saliste de la ruta.',
  text: 'La página que buscas no existe o cambió de dirección. Vuelve a la vía principal y sigue rodando.',
};

// Configurador (página Líneas): eliges línea y accesorios, y lo pides por WhatsApp.
// Las fotos del rider por línea se recolorearon a partir de img/rider.webp.
export const CONFIG = {
  eyebrow: 'Configurador',
  title: 'Arma tu setup.',
  text: 'Elige tu línea, suma los accesorios que quieres y envíanos tu combinación por WhatsApp.',
  images: { estandar: 'img/rider.webp', pro: 'img/rider-pro.webp', xtreme: 'img/rider-xtreme.webp' },
  extras: ['Grips', 'Cubre palanca', 'Manga protectora', 'Bolsa canguro', 'Gorra', 'Tomatodo', 'Lanyard'],
};

// Página de Gracias (después de enviar el formulario).
export const THANKS = {
  eyebrow: 'Mensaje enviado',
  title: '¡Gracias por escribirnos!',
  text: 'Ya estás en la ruta. Recibimos tu mensaje y te responderemos al correo que nos dejaste.',
  demo: 'Modo demostración: el formulario aún no está conectado a un correo, así que no se envió nada.',
  steps: [
    { title: 'Revisamos tu mensaje', text: 'Vemos qué accesorios y qué línea te interesan.' },
    { title: 'Preparamos tu respuesta', text: 'Disponibilidad, precios y la línea que mejor va con tu moto.' },
    { title: 'Te escribimos', text: 'Te contactamos para resolver dudas y cerrar tu pedido.' },
  ],
};
