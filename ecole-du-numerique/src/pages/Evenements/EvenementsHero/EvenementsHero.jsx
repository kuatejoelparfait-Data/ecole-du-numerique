import './EvenementsHero.css'

export default function EvenementsHero() {
  return (
    <section className="evenements-hero">
      <div className="evenements-hero__container">
        <div className="evenements-hero__content">
          <h1 className="evenements-hero__title">
            Nos <span className="evenements-hero__accent">événements</span>
          </h1>
          <p className="evenements-hero__subtitle">
            Masterclass, conférences et ateliers pour rester à la pointe du numérique.
          </p>
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
