import { Link } from 'react-router-dom'
import './FPHero.css'

export default function FPHero() {
  return (
    <section className="fp-hero">
      <div className="fp-hero__container">
        <div className="fp-hero__content">
          <h1 className="fp-hero__title">
            Formations intensives <span className="fp-hero__accent">et pratiques</span>
          </h1>
          <p className="fp-hero__desc">
            Boostez votre avenir digital ! Des formations conçues pour les esprits libres
            et ambitieux à la Tech & l'IA.
          </p>
          <div className="fp-hero__badges">
            <span className="fp-hero__badge">✓ Financement Bruxelles-Capitale</span>
            <span className="fp-hero__badge">✓ Tous niveaux acceptés</span>
            <span className="fp-hero__badge">✓ Attestation de formation</span>
          </div>
          <Link to="/contact" className="fp-hero__cta">Choisir votre formation</Link>
        </div>
        <div className="fp-hero__img-wrapper">
          <img
            src="/assets/images/formations-particuliers/hero-pexels-2.webp"
            alt="Apprenants en formation"
            className="fp-hero__img"
            width="600"
            height="440"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  )
}
