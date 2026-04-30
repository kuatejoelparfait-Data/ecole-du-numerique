import './EvenementsHero.css'

export default function EvenementsHero() {
  return (
    <section className="evenements-hero">
      <div className="evenements-hero__container">
        <h1 className="evenements-hero__title">
          Nos <span className="evenements-hero__accent">événements</span>
        </h1>
        <p className="evenements-hero__subtitle">
          Masterclass, conférences et ateliers pour rester à la pointe du numérique.
        </p>
      </div>
    </section>
  )
}
