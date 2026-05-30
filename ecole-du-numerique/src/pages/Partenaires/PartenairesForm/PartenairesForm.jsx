import { useState } from 'react'
import './PartenairesForm.css'

export default function PartenairesForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    const results = await Promise.all([
      fetch('https://formspree.io/f/xaqvbeky', { method: 'POST', headers: { Accept: 'application/json' }, body: data }),
      fetch('https://formspree.io/f/mqenlqaz', { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(e.target) }),
    ])
    setStatus(results.every(r => r.ok) ? 'success' : 'error')
  }

  return (
    <section id="partenaires-form" className="partenaires-form">
      <div className="partenaires-form__container">
        <div className="partenaires-form__header">
          <h2 className="partenaires-form__title">Parlons de votre projet</h2>
          <p className="partenaires-form__subtitle">
            Remplissez ce formulaire et nous vous recontactons sous 48h.
          </p>
        </div>

        {status === 'success' ? (
          <div className="partenaires-form__success">
            <span className="material-symbols-rounded">check_circle</span>
            <p>Merci ! Nous vous recontacterons très prochainement.</p>
          </div>
        ) : (
          <form className="partenaires-form__form" onSubmit={handleSubmit}>
            <input type="hidden" name="sujet" value="Demande de partenariat" />

            <div className="partenaires-form__row">
              <div className="partenaires-form__field">
                <label className="partenaires-form__label">Nom et prénom</label>
                <input type="text" name="nom" required placeholder="Votre nom et prénom" className="partenaires-form__input" />
              </div>
              <div className="partenaires-form__field">
                <label className="partenaires-form__label">Organisation</label>
                <input type="text" name="organisation" required placeholder="Votre entreprise ou organisation" className="partenaires-form__input" />
              </div>
            </div>

            <div className="partenaires-form__field">
              <label className="partenaires-form__label">E-mail</label>
              <input type="email" name="email" required placeholder="Votre adresse e-mail" className="partenaires-form__input" />
            </div>

            <div className="partenaires-form__field">
              <label className="partenaires-form__label">Type de partenariat souhaité</label>
              <select name="type" className="partenaires-form__input partenaires-form__select">
                <option value="">Choisir un type</option>
                <option value="Institutionnel">Partenaire institutionnel</option>
                <option value="Entreprise">Partenaire entreprise</option>
                <option value="Pédagogique">Partenaire pédagogique</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div className="partenaires-form__field">
              <label className="partenaires-form__label">Message</label>
              <textarea name="message" required placeholder="Décrivez votre projet de partenariat..." className="partenaires-form__input partenaires-form__textarea" />
            </div>

            <button type="submit" className="partenaires-form__btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer la demande'}
            </button>

            {status === 'error' && (
              <p className="partenaires-form__error">Une erreur est survenue. Réessayez.</p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
