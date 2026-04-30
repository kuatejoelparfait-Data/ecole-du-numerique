import { Link } from 'react-router-dom'
import './FPHero.css'

export default function FPHero() {
  return (
    <section className="fp-hero">
      <div className="fp-hero__container">
        <h1 className="fp-hero__title">
          Formations intensives <span className="fp-hero__accent">et pratiques</span>
        </h1>
        <p className="fp-hero__desc">
          Boostez votre avenir digital ! Des formations conçues pour les esprits libres
          et ambitieux à la Tech & l'IA.
        </p>
        <Link to="/contact" className="fp-hero__cta">Choisir votre formation</Link>
      </div>
    </section>
  )
}
