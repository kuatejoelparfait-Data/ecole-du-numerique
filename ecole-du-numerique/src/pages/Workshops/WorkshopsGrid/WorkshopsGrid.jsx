import { Link } from 'react-router-dom'
import { workshops } from '../../../data/workshops'
import './WorkshopsGrid.css'

const today = new Date()

export default function WorkshopsGrid() {
  if (workshops.length === 0) {
    return (
      <section className="workshops-grid">
        <div className="workshops-grid__container">
          <div className="workshops-grid__empty">
            <span className="material-symbols-rounded">event_busy</span>
            <p>Aucun workshop prévu pour le moment.</p>
            <p>Revenez bientôt ou inscrivez-vous à notre newsletter.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="workshops-grid">
      <div className="workshops-grid__container">
        {workshops.map(ws => {
          const isPast = new Date(ws.dateISO) < today
          return (
            <div key={ws.slug} className={`workshop-card${isPast ? ' workshop-card--past' : ''}`} style={isPast ? { pointerEvents: 'none' } : {}}>
              {isPast && <span className="workshop-card__past-badge">Workshop passé</span>}
              <div className="workshop-card__aside">
                <span className="material-symbols-rounded workshop-card__icon">build</span>
                <p className="workshop-card__date">{ws.date}</p>
                <p className="workshop-card__heure">{ws.heure}</p>
              </div>
              <div className="workshop-card__body">
                <div className="workshop-card__tags">
                  <span className="workshop-card__type">Workshop</span>
                  <span className="workshop-card__prix">{ws.prix}</span>
                </div>
                <h2 className="workshop-card__title">{ws.title}</h2>
                <p className="workshop-card__desc">{ws.desc}</p>
                <div className="workshop-card__footer">
                  <div className="workshop-card__infos">
                    <span className="workshop-card__info">
                      <span className="material-symbols-rounded">location_on</span>
                      {ws.lieu}
                    </span>
                    <span className="workshop-card__info">
                      <span className="material-symbols-rounded">group</span>
                      {ws.places}
                    </span>
                  </div>
                  <div className="workshop-card__actions">
                    <Link to={`/workshops/${ws.slug}`} className="workshop-card__cta" style={{ pointerEvents: 'all' }}>
                      Voir plus
                    </Link>
                    {!isPast && (
                      <Link to="/contact" className="workshop-card__cta workshop-card__cta--primary">
                        S'inscrire
                      </Link>
                    )}
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
