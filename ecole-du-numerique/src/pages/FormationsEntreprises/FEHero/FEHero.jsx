import { Link } from 'react-router-dom'
import './FEHero.css'

export default function FEHero() {
  return (
    <section className="fe-hero">
      <div className="fe-hero__container">
        <div className="fe-hero__content">
          <h1 className="fe-hero__title">
            Formez vos équipes aux <span className="fe-hero__accent">compétences digitales</span> de demain
          </h1>
          <p className="fe-hero__subtitle">
            Des formations sur mesure en IA, cybersécurité, développement logiciel, web, no-code et gestion de projet — adaptées à votre secteur et finançables jusqu'à 80%.
          </p>
          <div className="fe-hero__badges">
            <span className="fe-hero__badge">✓ Financement Bruxelles-Capitale</span>
            <span className="fe-hero__badge">✓ Sessions en groupe ou individuelles</span>
            <span className="fe-hero__badge">✓ Attestation de formation</span>
          </div>
          <Link to="/contact" className="fe-hero__cta">Choisir votre formation</Link>
        </div>
        <div className="fe-hero__img-wrapper">
          <img
            src="/assets/images/formations-entreprises/hero-dc-studio.webp"
            alt="Équipe en formation"
            className="fe-hero__img"
            width="600"
            height="440"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  )
}
