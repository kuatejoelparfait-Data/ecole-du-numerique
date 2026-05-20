import { Link } from 'react-router-dom'
import './FECTA.css'

export default function FECTA() {
  return (
    <section className="fe-cta">
      <div className="fe-cta__container">
        <p className="fe-cta__eyebrow">Passez à l'action</p>
        <h2 className="fe-cta__title">Formez vos équipes aux compétences de demain</h2>
        <p className="fe-cta__subtitle">
          Un devis gratuit, une formation sur mesure, un financement jusqu'à 80%. On s'occupe de tout.
        </p>
        <div className="fe-cta__actions">
          <Link to="/contact" className="fe-cta__btn fe-cta__btn--primary">
            Demander un devis
          </Link>
          <a href="#nos-formations" className="fe-cta__btn fe-cta__btn--secondary">
            Voir nos formations
          </a>
        </div>
      </div>
    </section>
  )
}
