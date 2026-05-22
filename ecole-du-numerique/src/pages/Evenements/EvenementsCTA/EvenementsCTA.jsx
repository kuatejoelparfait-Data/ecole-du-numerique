import { Link } from 'react-router-dom'
import './EvenementsCTA.css'

export default function EvenementsCTA() {
  return (
    <section className="evenements-cta">
      <div className="evenements-cta__container">
        <p className="evenements-cta__eyebrow">Ne manquez rien</p>
        <h2 className="evenements-cta__title">Soyez notifié des prochains événements</h2>
        <p className="evenements-cta__subtitle">
          Masterclass, conférences, ateliers… Contactez-nous pour être ajouté à notre liste et recevoir les invitations en priorité.
        </p>
        <div className="evenements-cta__actions">
          <Link to="/contact" className="evenements-cta__btn evenements-cta__btn--primary">
            Nous contacter
          </Link>
          <Link to="/#nos-formations" className="evenements-cta__btn evenements-cta__btn--secondary">
            Voir nos formations
          </Link>
        </div>
      </div>
    </section>
  )
}
