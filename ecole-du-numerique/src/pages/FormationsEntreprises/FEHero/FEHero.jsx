import './FEHero.css'

export default function FEHero() {
  return (
    <section className="fe-hero">
      <div className="fe-hero__container">
        <h1 className="fe-hero__title">
          Formez vos équipes aux <span className="fe-hero__accent">compétences digitales</span> de demain
        </h1>
        <p className="fe-hero__subtitle">
          Des formations sur mesure en IA, cybersécurité, no-code et gestion de projet — adaptées à votre secteur et finançables jusqu'à 80%.
        </p>
        <div className="fe-hero__badges">
          <span className="fe-hero__badge">✓ Financement Bruxelles-Capitale</span>
          <span className="fe-hero__badge">✓ Sessions en groupe ou individuelles</span>
          <span className="fe-hero__badge">✓ Attestation de formation</span>
        </div>
      </div>
    </section>
  )
}
