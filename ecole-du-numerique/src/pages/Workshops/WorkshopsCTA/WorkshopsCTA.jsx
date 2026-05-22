import { Link } from 'react-router-dom'
import './WorkshopsCTA.css'

export default function WorkshopsCTA() {
  return (
    <section className="workshops-cta">
      <div className="workshops-cta__container">
        <p className="workshops-cta__eyebrow">Passez à l'action</p>
        <h2 className="workshops-cta__title">Un workshop qui vous intéresse ?</h2>
        <p className="workshops-cta__subtitle">
          Inscrivez-vous directement ou contactez-nous pour être informé des prochaines dates. Les places sont limitées.
        </p>
        <div className="workshops-cta__actions">
          <Link to="/contact" className="workshops-cta__btn workshops-cta__btn--primary">
            Nous contacter
          </Link>
          <Link to="/#nos-formations" className="workshops-cta__btn workshops-cta__btn--secondary">
            Voir nos formations
          </Link>
        </div>
      </div>
    </section>
  )
}
