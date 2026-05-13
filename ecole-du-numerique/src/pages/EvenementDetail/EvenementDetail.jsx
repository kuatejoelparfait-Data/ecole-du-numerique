import { useParams, Link } from 'react-router-dom'
import { getEvenementBySlug } from '../../data/evenements'
import './EvenementDetail.css'

export default function EvenementDetail() {
  const { slug } = useParams()
  const evt = getEvenementBySlug(slug)

  if (!evt) {
    return (
      <div className="ed-notfound">
        <p>Événement introuvable.</p>
        <Link to="/evenements">← Retour aux événements</Link>
      </div>
    )
  }

  return (
    <>
      <section className="ed-hero">
        <div className="ed-hero__container">
          <div className="ed-hero__content">
            <Link to="/evenements" className="ed-hero__back">← Retour aux événements</Link>
            <span className="ed-hero__type">{evt.type}</span>
            <h1 className="ed-hero__title">{evt.title}</h1>
            <div className="ed-hero__meta">
              <span className="material-symbols-rounded">event</span>
              {evt.date} — {evt.heure}
              <span className="material-symbols-rounded">location_on</span>
              {evt.lieu}
            </div>
          </div>
          {evt.image && (
            <div className="ed-hero__img-wrapper">
              <img
                src={evt.image}
                alt={evt.title}
                className="ed-hero__img"
                width="600"
                height="440"
                fetchpriority="high"
              />
            </div>
          )}
        </div>
      </section>

      <section className="ed-content">
        <div className="ed-content__container">
          <div className="ed-content__main">

            <div className="ed-content__block">
              <h2 className="ed-content__block-title">À propos de cet événement</h2>
              <p className="ed-content__text">{evt.content}</p>
            </div>

            <div className="ed-content__block">
              <h2 className="ed-content__block-title">Programme</h2>
              <ul className="ed-content__programme">
                {evt.programme.map((item, i) => (
                  <li key={i} className="ed-content__programme-item">
                    <span className="material-symbols-rounded ed-content__check">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {evt.intervenants?.length > 0 && (
              <div className="ed-content__block">
                <h2 className="ed-content__block-title">Intervenants</h2>
                <div className="ed-content__intervenants">
                  {evt.intervenants.map(i => (
                    <div key={i.name} className="ed-content__intervenant">
                      <div className="ed-content__intervenant-avatar">
                        {i.name.charAt(0)}
                      </div>
                      <div>
                        <p className="ed-content__intervenant-name">{i.name}</p>
                        <p className="ed-content__intervenant-role">{i.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          <aside className="ed-content__aside">
            <div className="ed-content__card">
              <p className="ed-content__card-label">Date</p>
              <p className="ed-content__card-value">{evt.date}</p>
              <p className="ed-content__card-label">Heure</p>
              <p className="ed-content__card-value">{evt.heure}</p>
              <p className="ed-content__card-label">Lieu</p>
              <p className="ed-content__card-value">{evt.lieu}</p>
              <p className="ed-content__card-label">Type</p>
              <p className="ed-content__card-value">{evt.type}</p>
              <Link to="/contact" className="ed-content__cta">S'inscrire à l'événement</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
