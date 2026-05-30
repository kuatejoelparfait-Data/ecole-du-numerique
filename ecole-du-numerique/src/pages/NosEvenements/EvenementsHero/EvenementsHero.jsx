import './EvenementsHero.css'

export default function EvenementsHero() {
  return (
    <section className="evenements-hero">
      <div className="evenements-hero__container">
        <div className="evenements-hero__content">
          <h1 className="evenements-hero__title">
            Nos <span className="evenements-hero__accent">événements</span>
          </h1>
          <p className="evenements-hero__desc">
            Masterclass, conférences et ateliers animés par des experts du numérique.
            Venez apprendre, échanger et repartir avec des compétences concrètes et des contacts qui comptent.
          </p>
          <div className="evenements-hero__badges">
            <span className="evenements-hero__badge">✓ Masterclass & Conférences</span>
            <span className="evenements-hero__badge">✓ Ateliers pratiques</span>
            <span className="evenements-hero__badge">✓ Networking</span>
          </div>
          <a href="#programme" className="evenements-hero__cta">Voir nos prochains événements & ateliers</a>
        </div>
        <div className="evenements-hero__img-wrapper">
          <img
            src="/assets/images/evenements/hero-evenement-ia.webp"
            alt="Événements École du Numérique"
            className="evenements-hero__img"
            width="600"
            height="440"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  )
}
