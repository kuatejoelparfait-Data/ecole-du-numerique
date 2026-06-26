import './PartenairesHero.css'

export default function PartenairesHero() {
  return (
    <section className="partenaires-hero">
      <div className="partenaires-hero__container">
        <div className="partenaires-hero__content">
          <h1 className="partenaires-hero__title">
            Construisons ensemble <span className="partenaires-hero__accent">l'écosystème digital</span> de demain
          </h1>
          <p className="partenaires-hero__desc">
            Rejoignez un réseau d'acteurs engagés pour la formation numérique en Europe.
            Ensemble, donnons à chacun les compétences pour réussir dans un monde digital.
          </p>
          <div className="partenaires-hero__badges">
            <span className="partenaires-hero__badge">✓ Réseau de +600 formés</span>
            <span className="partenaires-hero__badge">✓ Visibilité digitale</span>
            <span className="partenaires-hero__badge">✓ Impact concret</span>
          </div>
          <a href="#partenaires-form" className="partenaires-hero__cta">Devenir partenaire</a>
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
