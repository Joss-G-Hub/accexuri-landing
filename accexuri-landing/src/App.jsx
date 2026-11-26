import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Ticker from './components/Ticker.jsx';
import Teasers from './components/Teasers.jsx';
import PageHero from './components/PageHero.jsx';
import About from './components/About.jsx';
import Lines from './components/Lines.jsx';
import Products from './components/Products.jsx';
import Rider from './components/Rider.jsx';
import Contact from './components/Contact.jsx';
import CtaBand from './components/CtaBand.jsx';
import Why from './components/Why.jsx';
import Faq from './components/Faq.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import FX from './components/FX.jsx';
import ProductRail from './components/ProductRail.jsx';
import Statement from './components/Statement.jsx';
import Footer from './components/Footer.jsx';
import { PAGES } from './data/content.js';
import { useRoute } from './lib/router.js';
import { useMotion } from './lib/motion.js';

// Qué secciones muestra cada página del menú.
const SECTIONS = {
  nosotros: [About, Why],
  lineas: [Lines],
  productos: [Products],
  rider: [Rider],
  contacto: [Contact, Faq],
};
const PAGE_IDS = ['inicio', ...Object.keys(SECTIONS)];

export default function App() {
  const route = useRoute(PAGE_IDS);
  useMotion(route);

  useEffect(() => {
    document.title = route === 'inicio'
      ? 'Accexuri — Accessories World | Accesorios para motos'
      : `${PAGES[route].title} | Accexuri`;
  }, [route]);

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <FX />
      <Header active={route} />
      <main id="contenido" key={route} className="page">
        {route === 'inicio' ? (
          <>
            <Hero />
            <Ticker />
            <Statement />
            <ProductRail />
            <Teasers />
            <Why />
            <CtaBand />
          </>
        ) : (
          <>
            <PageHero page={PAGES[route]} />
            {SECTIONS[route].map((S, i) => <S key={i} />)}
            {route !== 'contacto' && <CtaBand />}
          </>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
