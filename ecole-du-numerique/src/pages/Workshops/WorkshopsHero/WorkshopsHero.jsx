import './WorkshopsHero.css'

export default function WorkshopsHero() {
  return (
    <section className="workshops-hero">
      <div className="workshops-hero__container">
        <div className="workshops-hero__content">
          <h1 className="workshops-hero__title">
            Nos <span className="workshops-hero__accent">workshops</span>
          </h1>
          <p className="workshops-hero__desc">
            Des sessions courtes, intensives et 100% pratiques. En 2 à 4h,
            vous repartez avec une compétence directement applicable — sans vous engager sur plusieurs semaines.
          </p>
          <div className="workshops-hero__badges">
            <span className="workshops-hero__badge">✓ Sessions de 2 à 4h</span>
            <span className="workshops-hero__badge">✓ Petits groupes</span>
            <span className="workshops-hero__badge">✓ Pratique immédiate</span>
          </div>
          <a href="#nos-workshops" className="workshops-hero__cta">Voir les prochains workshops</a>
        </div>
        <div className="workshops-hero__img-wrapper">
          <img
            src="/assets/images/workshops/hero-workshop.webp"
            alt="Workshop École du Numérique"
            className="workshops-hero__img"
            width="600"
            height="440"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  )
}
