import { useState } from 'react'
import './VWForm.css'

const FORMSPREE_URL = 'https://formspree.io/f/xaqvbeky'

const themes = [
  'Intelligence Artificielle',
  'Cybersécurité',
  'Marketing Digital',
  'Développement & No-Code',
  'Data & Excel avancé',
  'Communication visuelle',
  'Outils collaboratifs',
  'Autre / Sur mesure',
]

export default function VWForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="demande-atelier" className="vw-form">
      <div className="vw-form__container">

        <div className="vw-form__header">
          <h2 className="vw-form__title">
            Demandez votre{' '}
            <span className="vw-form__accent">atelier</span>
          </h2>
          <p className="vw-form__subtitle">
            Remplissez ce formulaire en 2 minutes — nous vous recontactons
            sous 48h pour construire l'atelier idéal avec vous.
          </p>
        </div>

        {status === 'success' ? (
          <div className="vw-form__success">
            <span className="material-symbols-rounded vw-form__success-icon">check_circle</span>
            <p className="vw-form__success-title">Demande envoyée !</p>
            <p className="vw-form__success-desc">
              Merci pour votre message. Nous reviendrons vers vous dans les 48h
              pour discuter de votre projet d'atelier.
            </p>
          </div>
        ) : (
          <form className="vw-form__form" onSubmit={handleSubmit} noValidate>

            <div className="vw-form__row">
              <div className="vw-form__field">
                <label className="vw-form__label" htmlFor="vw-prenom">Prénom *</label>
                <input
                  id="vw-prenom"
                  className="vw-form__input"
                  type="text"
                  name="prenom"
                  placeholder="Votre prénom"
                  required
                />
              </div>
              <div className="vw-form__field">
                <label className="vw-form__label" htmlFor="vw-nom">Nom *</label>
                <input
                  id="vw-nom"
                  className="vw-form__input"
                  type="text"
                  name="nom"
                  placeholder="Votre nom"
                  required
                />
              </div>
            </div>

            <div className="vw-form__row">
              <div className="vw-form__field">
                <label className="vw-form__label" htmlFor="vw-email">Email professionnel *</label>
                <input
                  id="vw-email"
                  className="vw-form__input"
                  type="email"
                  name="email"
                  placeholder="vous@entreprise.be"
                  required
                />
              </div>
              <div className="vw-form__field">
                <label className="vw-form__label" htmlFor="vw-entreprise">Entreprise *</label>
                <input
                  id="vw-entreprise"
                  className="vw-form__input"
                  type="text"
                  name="entreprise"
                  placeholder="Nom de votre entreprise"
                  required
                />
              </div>
            </div>

            <div className="vw-form__row">
              <div className="vw-form__field">
                <label className="vw-form__label" htmlFor="vw-theme">Thème souhaité *</label>
                <select
                  id="vw-theme"
                  className="vw-form__input vw-form__select"
                  name="theme"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Choisir un thème…</option>
                  {themes.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="vw-form__field">
                <label className="vw-form__label" htmlFor="vw-participants">Nombre de participants</label>
                <input
                  id="vw-participants"
                  className="vw-form__input"
                  type="number"
                  name="participants"
                  placeholder="Ex. 12"
                  min="1"
                />
              </div>
            </div>

            <div className="vw-form__field">
              <label className="vw-form__label" htmlFor="vw-date">Date souhaitée (approximative)</label>
              <input
                id="vw-date"
                className="vw-form__input"
                type="text"
                name="date_souhaitee"
                placeholder="Ex. début juin, semaine du 9 septembre…"
              />
            </div>

            <div className="vw-form__field">
              <label className="vw-form__label" htmlFor="vw-message">Décrivez votre besoin</label>
              <textarea
                id="vw-message"
                className="vw-form__textarea"
                name="message"
                rows={5}
                placeholder="Contexte, objectifs, contraintes particulières, niveau des participants…"
              />
            </div>

            {status === 'error' && (
              <p className="vw-form__error">
                Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.
              </p>
            )}

            <button
              type="submit"
              className="vw-form__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'}
            </button>

          </form>
        )}

      </div>
    </section>
  )
}
