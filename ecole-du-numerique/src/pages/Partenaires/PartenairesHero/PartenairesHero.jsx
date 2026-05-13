import './PartenairesHero.css'

export default function PartenairesHero() {
  return (
    <section className="partenaires-hero">
      <div className="partenaires-hero__container">
        <div className="partenaires-hero__content">
          <h1 className="partenaires-hero__title">
            Construisons ensemble <span className="partenaires-hero__accent">l'écosystème digital</span> belge
          </h1>
          <p className="partenaires-hero__subtitle">
            Rejoignez un réseau d'acteurs engagés pour la formation numérique en Belgique.
          </p>
        </div>
        <div className="partenaires-hero__img-wrapper">
          <img
            src="/assets/images/formations-entreprises/gestion-projet-methode/hero-pexels-2.webp"
            alt="Partenariat École du Numérique"
            className="partenaires-hero__img"
            width="600"
            height="440"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  )
}
