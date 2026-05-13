import { Link } from 'react-router-dom'
import { evenements } from '../../../data/evenements'
import './EvenementsGrid.css'

const today = new Date()

export default function EvenementsGrid() {
  if (evenements.length === 0) {
    return (
      <section className="evenements-grid">
        <div className="evenements-grid__container">
          <div className="evenements-grid__empty">
            <span className="material-symbols-rounded">event_busy</span>
            <p>Aucun événement prévu pour le moment.</p>
            <p>Revenez bientôt ou inscrivez-vous à notre newsletter.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="evenements-grid">
      <div className="evenements-grid__container">
        {evenements.map(evt => {
          const isPast = new Date(evt.dateISO) < today
          return (
            <div key={evt.slug} className={`evenement-card${isPast ? ' evenement-card--past' : ''}`} style={isPast ? { pointerEvents: 'none' } : {}}>
              {evt.image && (
                <div className="evenement-card__img-wrapper">
                  <img src={evt.image} alt={evt.title} className="evenement-card__img" loading="lazy" />
                </div>
              )}
              <div className="evenement-card__inner">
              {isPast && <span className="evenement-card__past-badge">Événement passé</span>}
              <div className="evenement-card__aside">
                <span className="material-symbols-rounded evenement-card__icon">event</span>
                <p className="evenement-card__date">{evt.date}</p>
                <p className="evenement-card__heure">{evt.heure}</p>
              </div>
              <div className="evenement-card__body">
                <span className="evenement-card__type">{evt.type}</span>
                <h2 className="evenement-card__title">{evt.title}</h2>
                <p className="evenement-card__desc">{evt.desc}</p>
                <div className="evenement-card__footer">
                  <span className="evenement-card__lieu">
                    <span className="material-symbols-rounded">location_on</span>
                    {evt.lieu}
                  </span>
                  <div className="evenement-card__actions">
                    <Link to={`/evenements/${evt.slug}`} className="evenement-card__cta" style={{ pointerEvents: 'all' }}>
                      Voir plus
                    </Link>
                    {!isPast && (
                      <Link to="/contact" className="evenement-card__cta evenement-card__cta--primary">
                        S'inscrire
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
