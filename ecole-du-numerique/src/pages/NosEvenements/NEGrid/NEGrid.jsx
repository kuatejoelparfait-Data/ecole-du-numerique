import { useState } from 'react'
import { Link } from 'react-router-dom'
import { evenements } from '../../../data/evenements'
import { workshops } from '../../../data/workshops'
import './NEGrid.css'

const today = new Date()

export default function NEGrid() {
  const [filter, setFilter] = useState('evenements')

  const items = filter === 'evenements' ? evenements : workshops
  const isEmpty = items.length === 0

  return (
    <section id="programme" className="ne-grid">
      <div className="ne-grid__container">

        {/* Header + toggle */}
        <div className="ne-grid__header">
          <h2 className="ne-grid__title">
            Notre <span className="ne-grid__accent">programme</span>
          </h2>
          <p className="ne-grid__subtitle">
            Conférences, masterclasses et ateliers pratiques — choisissez votre format.
          </p>
          <div className="ne-grid__toggle">
            <button
              className={`ne-grid__toggle-btn${filter === 'evenements' ? ' ne-grid__toggle-btn--active' : ''}`}
              onClick={() => setFilter('evenements')}
            >
              <span className="material-symbols-rounded">event</span>
              Événements
            </button>
            <button
              className={`ne-grid__toggle-btn${filter === 'ateliers' ? ' ne-grid__toggle-btn--active' : ''}`}
              onClick={() => setFilter('ateliers')}
            >
              <span className="material-symbols-rounded">build</span>
              Ateliers
            </button>
          </div>
        </div>

        {/* Empty state */}
        {isEmpty && (
          <div className="ne-grid__empty">
            <span className="material-symbols-rounded">event_busy</span>
            <p>
              {filter === 'evenements'
                ? 'Aucun événement prévu pour le moment.'
                : 'Aucun atelier prévu pour le moment.'}
            </p>
            <p>Revenez bientôt ou inscrivez-vous à notre newsletter.</p>
          </div>
        )}

        {/* Cards */}
        {!isEmpty && (
          <div className="ne-grid__list">
            {filter === 'evenements'
              ? evenements.map(evt => {
                  const isPast = new Date(evt.dateISO) < today
                  return (
                    <div
                      key={evt.slug}
                      className={`ne-card${isPast ? ' ne-card--past' : ''}`}
                      style={isPast ? { pointerEvents: 'none' } : {}}
                    >
                      {evt.image && (
                        <div className="ne-card__img-wrapper">
                          <img src={evt.image} alt={evt.title} className="ne-card__img" loading="lazy" />
                        </div>
                      )}
                      <div className="ne-card__inner">
                        {isPast && <span className="ne-card__past-badge">Passé</span>}

                        <div className="ne-card__aside">
                          <span className="material-symbols-rounded ne-card__icon">event</span>
                          <p className="ne-card__date">{evt.date}</p>
                          <p className="ne-card__time">{evt.heure}</p>
                          <span className="ne-card__info">
                            <span className="material-symbols-rounded">location_on</span>
                            {evt.lieu}
                          </span>
                          <div className="ne-card__actions">
                            <Link to={`/evenements/${evt.slug}`} className="ne-card__cta" style={{ pointerEvents: 'all' }}>
                              Voir plus
                            </Link>
                            {!isPast && (
                              <Link to="/contact" className="ne-card__cta ne-card__cta--primary">
                                S'inscrire
                              </Link>
                            )}
                          </div>
                        </div>

                        <div className="ne-card__body">
                          <div className="ne-card__tags">
                            <span className="ne-card__tag ne-card__tag--type">{evt.type}</span>
                          </div>
                          <h2 className="ne-card__title">{evt.title}</h2>
                          <p className="ne-card__desc">{evt.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              : workshops.map(ws => {
                  const isPast = new Date(ws.dateISO) < today
                  return (
                    <div
                      key={ws.slug}
                      className={`ne-card${isPast ? ' ne-card--past' : ''}`}
                      style={isPast ? { pointerEvents: 'none' } : {}}
                    >
                      {ws.image && (
                        <div className="ne-card__img-wrapper">
                          <img src={ws.image} alt={ws.title} className="ne-card__img" loading="lazy" />
                        </div>
                      )}
                      <div className="ne-card__inner">
                        {isPast && <span className="ne-card__past-badge">Passé</span>}

                        <div className="ne-card__aside">
                          <span className="material-symbols-rounded ne-card__icon">build</span>
                          <p className="ne-card__date">{ws.date}</p>
                          <p className="ne-card__time">{ws.heure}</p>
                          <span className="ne-card__info">
                            <span className="material-symbols-rounded">location_on</span>
                            {ws.lieu}
                          </span>
                          <span className="ne-card__info">
                            <span className="material-symbols-rounded">group</span>
                            {ws.places}
                          </span>
                          <div className="ne-card__actions">
                            <Link to={`/workshops/${ws.slug}`} className="ne-card__cta" style={{ pointerEvents: 'all' }}>
                              Voir plus
                            </Link>
                            {!isPast && (
                              <Link to="/contact" className="ne-card__cta ne-card__cta--primary">
                                S'inscrire
                              </Link>
                            )}
                          </div>
                        </div>

                        <div className="ne-card__body">
                          <div className="ne-card__tags">
                            <span className="ne-card__tag ne-card__tag--type">Atelier</span>
                            <span className="ne-card__tag ne-card__tag--price">Sur mesure</span>
                          </div>
                          <h2 className="ne-card__title">{ws.title}</h2>
                          <p className="ne-card__desc">{ws.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
          </div>
        )}

      </div>
    </section>
  )
}
