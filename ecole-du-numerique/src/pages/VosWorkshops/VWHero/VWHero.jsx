import './VWHero.css'

export default function VWHero() {
  return (
    <section className="vw-hero">
      <div className="vw-hero__container">
        <div className="vw-hero__content">
          <p className="vw-hero__eyebrow">Sur mesure · En entreprise · À distance</p>
          <h1 className="vw-hero__title">
            Vos <span className="vw-hero__accent">workshops</span>{' '}
            en entreprise
          </h1>
          <p className="vw-hero__desc">
            Nous venons animer des ateliers pratiques directement dans vos locaux
            ou à distance. Contenu adapté à vos équipes, thème choisi par vous,
            résultats immédiatement applicables.
          </p>
          <div className="vw-hero__badges">
            <span className="vw-hero__badge">✓ Format sur mesure</span>
            <span className="vw-hero__badge">✓ En vos locaux ou en ligne</span>
            <span className="vw-hero__badge">✓ De 2h à une journée</span>
          </div>
          <a href="#demande-atelier" className="vw-hero__cta">
            Demander un atelier
          </a>
        </div>
        <div className="vw-hero__img-wrapper">
          <img
            src="/assets/images/workshops/hero-workshop.webp"
            alt="Workshop en entreprise – École du Numérique"
            className="vw-hero__img"
            width="600"
            height="440"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  )
}
