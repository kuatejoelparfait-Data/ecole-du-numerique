import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">

        <div className="hero__content">
          <p className="hero__tag">Formations intensives et pratiques</p>

          <h1 className="hero__title">
            Formez-vous ou votre entreprise
            <span className="hero__title-accent"> à la Tech & l'IA.</span>
          </h1>

          <p className="hero__desc">
            Bootcamps en développement web, no-code, data et IA,
            cybersécurité et marketing digital.
          </p>

          <Link to="/formations-particuliers" className="hero__cta">
            Choisir votre formation
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"/>
            </svg>
          </Link>

          <div className="hero__social-proof">
            <div className="hero__avatars">
              <div className="hero__avatar" style={{ background: '#a78bfa' }}>A</div>
              <div className="hero__avatar" style={{ background: '#818cf8' }}>M</div>
              <div className="hero__avatar" style={{ background: '#02AF84' }}>J</div>
              <div className="hero__avatar" style={{ background: '#6d28d9' }}>S</div>
            </div>
            <p className="hero__social-text">
              Rejoignez <strong>+500 apprenants</strong> formés à la Tech & l'IA
            </p>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <img
              src="/assets/images/home/classroom-ia-3.webp"
              alt="Apprenants en formation Tech & IA"
              className="hero__image"
              width="600"
              height="480"
              fetchpriority="high"
            />
            <div className="hero__badge">
              <span className="hero__badge-dot" aria-hidden="true" />
              <p>Financement jusqu'à <strong>80%</strong> via Bruxelles-Capitale</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
