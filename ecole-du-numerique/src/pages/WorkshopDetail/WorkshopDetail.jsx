import { useParams, Link } from 'react-router-dom'
import { getWorkshopBySlug } from '../../data/workshops'
import './WorkshopDetail.css'

export default function WorkshopDetail() {
  const { slug } = useParams()
  const ws = getWorkshopBySlug(slug)

  if (!ws) {
    return (
      <div className="wd-notfound">
        <p>Workshop introuvable.</p>
        <Link to="/workshops">← Retour aux workshops</Link>
      </div>
    )
  }

  return (
    <>
      <section className="wd-hero">
        <div className="wd-hero__container">
          <Link to="/workshops" className="wd-hero__back">← Retour aux workshops</Link>
          <span className="wd-hero__type">Workshop</span>
          <h1 className="wd-hero__title">{ws.title}</h1>
          <div className="wd-hero__meta">
            <span className="material-symbols-rounded">event</span>
            {ws.date} — {ws.heure}
            <span className="material-symbols-rounded">location_on</span>
            {ws.lieu}
            <span className="material-symbols-rounded">group</span>
            {ws.places}
          </div>
        </div>
      </section>

      <section className="wd-content">
        <div className="wd-content__container">
          <div className="wd-content__main">

            <div className="wd-content__block">
              <h2 className="wd-content__block-title">À propos de ce workshop</h2>
              <p className="wd-content__text">{ws.content}</p>
            </div>

            <div className="wd-content__block">
              <h2 className="wd-content__block-title">Programme</h2>
              <ul className="wd-content__programme">
                {ws.programme.map((item, i) => (
                  <li key={i} className="wd-content__programme-item">
                    <span className="material-symbols-rounded wd-content__check">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <aside className="wd-content__aside">
            <div className="wd-content__card">
              <p className="wd-content__card-label">Date</p>
              <p className="wd-content__card-value">{ws.date}</p>
              <p className="wd-content__card-label">Heure</p>
              <p className="wd-content__card-value">{ws.heure}</p>
              <p className="wd-content__card-label">Lieu</p>
              <p className="wd-content__card-value">{ws.lieu}</p>
              <p className="wd-content__card-label">Places</p>
              <p className="wd-content__card-value">{ws.places}</p>
              <p className="wd-content__card-label">Tarif</p>
              <p className="wd-content__card-value">{ws.prix}</p>
              <Link to="/contact" className="wd-content__cta">S'inscrire au workshop</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
