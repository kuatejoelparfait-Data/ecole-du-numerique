import './PricingHero.css'

const badges = [
  { icon: 'euro', label: 'Financement jusqu\'à 80%' },
  { icon: 'verified', label: 'Attestation de formation' },
  { icon: 'lock_open', label: 'Sans engagement' },
]

export default function PricingHero() {
  return (
    <section className="pricing-hero">
      <div className="pricing-hero__container">
        <div className="pricing-hero__content">
          <h1 className="pricing-hero__title">
            Des tarifs adaptés à <span className="pricing-hero__accent">chaque besoin</span>
          </h1>
          <p className="pricing-hero__subtitle">
            Que vous soyez particulier, entreprise ou curieux d'un workshop, nous avons une formule pour vous. Financement possible jusqu'à 80% via Bruxelles-Formation.
          </p>
          <div className="pricing-hero__badges">
            {badges.map(b => (
              <span key={b.label} className="pricing-hero__badge">
                <span className="material-symbols-rounded">{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>
          <a href="#pricing-cards" className="pricing-hero__cta">
            Voir nos tarifs
          </a>
        </div>
        <div className="pricing-hero__img-wrapper">
          <img
            src="/assets/images/pricing/hero-pricing-ia.webp"
            alt="Tarifs École du Numérique"
            className="pricing-hero__img"
            width="600"
            height="440"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  )
}
