import { useParams, Link } from 'react-router-dom'
import { getFormationBySlug } from '../../data/formations'
import './FormationDetail.css'

export default function FormationDetail() {
  const { slug } = useParams()
  const formation = getFormationBySlug(slug)

  if (!formation) {
    return (
      <section className="fd-notfound">
        <p>Formation introuvable.</p>
        <Link to="/formations-particuliers">← Retour aux formations</Link>
      </section>
    )
  }

  return (
    <>
      <section className="fd-hero">
        <div className="fd-hero__container">
          <Link to="/formations-particuliers" className="fd-hero__back">
            ← Retour aux formations
          </Link>
          <p className="fd-hero__category">{formation.category}</p>
          <h1 className="fd-hero__title">{formation.title}</h1>
          <span className="fd-hero__level">{formation.level}</span>
        </div>
      </section>

      <section className="fd-content">
        <div className="fd-content__container">

          <div className="fd-content__main">
            <div className="fd-content__block">
              <h2 className="fd-content__block-title">À propos de cette formation</h2>
              <p className="fd-content__text">{formation.about}</p>
            </div>

            <div className="fd-content__block">
              <h2 className="fd-content__block-title">Ce que vous apprendrez</h2>
              <ul className="fd-content__outcomes">
                {formation.outcomes.map((item, i) => (
                  <li key={i} className="fd-content__outcome">
                    <span className="material-symbols-rounded fd-content__outcome-icon">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fd-content__block">
              <h2 className="fd-content__block-title">Prérequis</h2>
              <p className="fd-content__text">{formation.prerequisites}</p>
            </div>
          </div>

          <aside className="fd-content__aside">
            <div className="fd-content__card">
              <p className="fd-content__card-label">Niveau</p>
              <p className="fd-content__card-value">{formation.level}</p>
              <p className="fd-content__card-label">Catégorie</p>
              <p className="fd-content__card-value">{formation.category}</p>
              <a href="/contact" className="fd-content__cta">S'inscrire à cette formation</a>
              <a href="/contact" className="fd-content__cta-secondary">Demander des infos</a>
            </div>
          </aside>

        </div>
      </section>
    </>
  )
}
