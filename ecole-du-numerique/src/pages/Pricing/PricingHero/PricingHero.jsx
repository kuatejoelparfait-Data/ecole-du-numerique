import './PricingHero.css'

export default function PricingHero() {
  return (
    <section className="pricing-hero">
      <div className="pricing-hero__container">
        <h1 className="pricing-hero__title">
          Des tarifs adaptés à <span className="pricing-hero__accent">chaque besoin</span>
        </h1>
        <p className="pricing-hero__subtitle">
          Que vous soyez particulier, entreprise ou curieux d'un workshop, nous avons une formule pour vous.
        </p>
      </div>
    </section>
  )
}
