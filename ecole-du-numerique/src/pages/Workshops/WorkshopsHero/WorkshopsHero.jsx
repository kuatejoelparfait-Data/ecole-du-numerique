import './WorkshopsHero.css'

export default function WorkshopsHero() {
  return (
    <section className="workshops-hero">
      <div className="workshops-hero__container">
        <div className="workshops-hero__content">
          <h1 className="workshops-hero__title">
            Nos <span className="workshops-hero__accent">workshops</span>
          </h1>
          <p className="workshops-hero__subtitle">
            Sessions courtes et pratiques pour monter en compétences rapidement.
          </p>
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
