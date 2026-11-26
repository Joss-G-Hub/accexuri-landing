import { useRef, useState } from 'react';
import { CONTACT, FORM_ENDPOINT, WHATSAPP } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

const EMPTY = { nombre: '', perfil: '', ciudad: '', correo: '', mensaje: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v) {
  const e = {};
  if (!v.nombre.trim()) e.nombre = 'Escribe tu nombre.';
  if (!v.perfil) e.perfil = 'Elige una opción.';
  if (!v.ciudad.trim()) e.ciudad = 'Indica tu ciudad.';
  if (!v.correo.trim()) e.correo = 'Escribe tu correo.';
  else if (!EMAIL_RE.test(v.correo.trim())) e.correo = 'Revisa el formato del correo (ej. nombre@empresa.com).';
  if (v.mensaje.trim().length < 10) e.mensaje = 'Cuéntanos un poco más (mínimo 10 caracteres).';
  return e;
}

function Field({ id, label, error, as = 'input', children, ...rest }) {
  const Tag = as;
  return (
    <div className={`field${as === 'textarea' ? ' field--full' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <Tag
        id={id}
        name={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      >{children}</Tag>
      {error && <p id={`${id}-error`} className="field__error">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const formRef = useRef(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus('sending');
    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        // Modo demostración: sin endpoint configurado no se envía nada.
        await new Promise((r) => setTimeout(r, 700));
      }
      setStatus('sent');
      setValues(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="section section--contact">
      <div className="container">
        <div className="contact">
          <div className="contact__info reveal">
            <Eyebrow>{CONTACT.eyebrow}</Eyebrow>
            <h2 className="h2 h2--sm">{CONTACT.title}</h2>
            <p className="lead">{CONTACT.text}</p>
            <ul className="contact__list">
              <li><strong>Correo:</strong> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li><strong>Teléfono:</strong> <a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
              <li>
                <strong>WhatsApp:</strong>{' '}
                <a href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`} target="_blank" rel="noopener noreferrer">
                  Escríbenos ahora <span aria-hidden="true">→</span>
                </a>
              </li>
              <li><strong>País:</strong> {CONTACT.country}</li>
            </ul>
          </div>

          {status === 'sent' ? (
            <div className="contact__done" role="status">
              <img src="marca/isotipo-x.svg" alt="" width="64" height="48" />
              <h3>¡Listo! Recibimos tu mensaje.</h3>
              <p>Te escribiremos pronto con la información que pediste.</p>
              {!FORM_ENDPOINT && (
                <p className="contact__demo">Modo demostración: el formulario aún no está conectado a un correo, así que no se envió nada.</p>
              )}
              <button type="button" className="btn btn--ghost" onClick={() => setStatus('idle')}>Enviar otro mensaje</button>
            </div>
          ) : (
            <form ref={formRef} className="form" onSubmit={onSubmit} noValidate>
              <Field id="nombre" label="Nombre" autoComplete="name" value={values.nombre} onChange={onChange} error={errors.nombre} />
              <Field id="perfil" label="Soy…" as="select" value={values.perfil} onChange={onChange} error={errors.perfil}>
                <option value="">Elige una opción</option>
                <option>Motociclista</option>
                <option>Tienda o taller</option>
                <option>Distribuidor</option>
              </Field>
              <Field id="ciudad" label="Ciudad" autoComplete="address-level2" value={values.ciudad} onChange={onChange} error={errors.ciudad} />
              <Field id="correo" label="Correo" type="email" autoComplete="email" value={values.correo} onChange={onChange} error={errors.correo} />
              <Field id="mensaje" label="¿Qué accesorios te interesan?" as="textarea" rows={4} value={values.mensaje} onChange={onChange} error={errors.mensaje} />
              {status === 'error' && (
                <p className="form__alert" role="alert">No pudimos enviar tu mensaje. Inténtalo de nuevo en unos minutos.</p>
              )}
              <button type="submit" className="btn btn--neon btn--lg" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
