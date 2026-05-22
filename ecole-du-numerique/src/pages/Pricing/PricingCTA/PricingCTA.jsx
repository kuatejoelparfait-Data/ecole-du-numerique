import { Link } from 'react-router-dom'
import './PricingCTA.css'

export default function PricingCTA() {
  return (
    <section className="pricing-cta">
      <div className="pricing-cta__container">
        <p className="pricing-cta__eyebrow">Prêt à démarrer ?</p>
        <h2 className="pricing-cta__title">Trouvez la formule qui vous correspond</h2>
        <p className="pricing-cta__subtitle">
          Particulier, entreprise ou team lead — nous avons une solution pour chaque profil. Contactez-nous et obtenez un devis sous 48h.
        </p>
        <div className="pricing-cta__actions">
          <Link to="/contact" className="pricing-cta__btn pricing-cta__btn--primary">
            Nous contacter
          </Link>
          <Link to="/#nos-formations" className="pricing-cta__btn pricing-cta__btn--secondary">
            Voir nos formations
          </Link>
        </div>
      </div>
    </section>
  )
}
