import { useState } from 'react'
import './BlogNewsletter.css'

export default function BlogNewsletter() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const res = await fetch('https://formspree.io/f/meevwvjj', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(e.target),
    })
    setStatus(res.ok ? 'success' : 'error')
  }

  return (
    <section className="blog-newsletter">
      <div className="blog-newsletter__container">
        <p className="blog-newsletter__label">Restez informé</p>
        <h2 className="blog-newsletter__title">Ne manquez aucune actualité digitale</h2>
        <p className="blog-newsletter__subtitle">
          Rejoignez plus de 600 entrepreneurs belges qui reçoivent chaque mois nos meilleures ressources sur l'IA, le marketing et le développement web.
        </p>

        {status === 'success' ? (
          <p className="blog-newsletter__success">Merci ! Vous êtes bien inscrit.</p>
        ) : (
          <form className="blog-newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              required
              placeholder="Votre adresse e-mail"
              className="blog-newsletter__input"
            />
            <input type="hidden" name="sujet" value="Newsletter Blog" />
            <button
              type="submit"
              className="blog-newsletter__btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Envoi...' : "S'inscrire"}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="blog-newsletter__error">Une erreur est survenue. Réessayez.</p>
        )}
      </div>
    </section>
  )
}
