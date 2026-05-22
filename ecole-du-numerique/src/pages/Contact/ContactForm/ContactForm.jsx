import { useState } from 'react'
import './ContactForm.css'

const FORMSPREE_URLS = [
  'https://formspree.io/f/xaqvbeky',
  'https://formspree.io/f/mqenlqaz',
]

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const results = await Promise.all(
        FORMSPREE_URLS.map(url => fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        }))
      )
      if (results.every(r => r.ok)) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact-form" className="contact">
      <div className="contact__container">

        <div className="contact__form-wrapper">
          <h2 className="contact__form-title">Envoyer un message</h2>

          {status === 'success' ? (
            <div className="contact__success">
              <span className="material-symbols-rounded">check_circle</span>
              <p>Message envoyé ! Nous vous répondrons dans les 24h.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label" htmlFor="name">Nom complet</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="contact__input"
                    placeholder="Votre nom et prénom"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="contact__input"
                    placeholder="Votre e-mail"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="subject">Sujet</label>
                <select
                  id="subject"
                  name="subject"
                  className="contact__input contact__select"
                  value={form.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choisissez un sujet</option>
                  <option value="Formation particulier">Formation particulier</option>
                  <option value="Formation entreprise">Formation entreprise</option>
                  <option value="Événement">Événement</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Candidature">Candidature / Rejoindre l'équipe</option>
                  <option value="Partenariat">Partenariat</option>
                  <option value="Pricing">Pricing</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="Votre message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === 'error' && (
                <p className="contact__error">Une erreur est survenue. Veuillez réessayer.</p>
              )}

              <button type="submit" className="contact__submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
              </button>
            </form>
          )}
        </div>

        <aside className="contact__info">
          <h2 className="contact__info-title">Nos coordonnées</h2>

          <ul className="contact__info-list">
            <li className="contact__info-item">
              <span className="material-symbols-rounded contact__info-icon">location_on</span>
              <div>
                <p className="contact__info-label">Adresse</p>
                <p className="contact__info-value">Bruxelles-Capitale, Belgique</p>
              </div>
            </li>
            <li className="contact__info-item">
              <span className="material-symbols-rounded contact__info-icon">mail</span>
              <div>
                <p className="contact__info-label">Email</p>
                <a href="mailto:info@ecoledunumerique.be" className="contact__info-value contact__info-link">
                  info@ecoledunumerique.be
                </a>
              </div>
            </li>
            <li className="contact__info-item">
              <span className="material-symbols-rounded contact__info-icon">phone</span>
              <div>
                <p className="contact__info-label">Téléphone</p>
                <a href="tel:+32465557109" className="contact__info-value contact__info-link">
                  +32 465 55 71 09
                </a>
              </div>
            </li>
            <li className="contact__info-item">
              <span className="material-symbols-rounded contact__info-icon">schedule</span>
              <div>
                <p className="contact__info-label">Disponibilités</p>
                <p className="contact__info-value">Lun – Ven, 9h – 18h</p>
              </div>
            </li>
          </ul>
        </aside>

      </div>
    </section>
  )
}
