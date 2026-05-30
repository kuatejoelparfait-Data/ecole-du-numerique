import { useParams, Link } from 'react-router-dom'
import { getFormationBySlug } from '../../data/formationsParticuliers'
import './FormationParticulierDetail.css'

const categoryImages = {
  'Intelligence Artificielle & Data':    '/assets/images/formations-particuliers/ia-data/hero-dc-studio.webp',
  'Développement Web & No-Code':         '/assets/images/formations-particuliers/dev-no-code/laptop-freepik.webp',
  'Marketing Digital & SEO':             '/assets/images/formations-particuliers/marketing-digital-seo/hero-rawpixel.webp',
  'Réseaux Sociaux & Communication':     '/assets/images/formations-particuliers/reseau-communication/hero-freepik-1.webp',
  'Design & Expérience Utilisateur':     '/assets/images/formations-particuliers/design-ux/wireframe-freepik.webp',
}

export default function FormationParticulierDetail() {
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
          <div className="fd-hero__content">
            <Link to="/formations-particuliers" className="fd-hero__back">
              ← Retour aux formations
            </Link>
            <p className="fd-hero__category">{formation.category}</p>
            <h1 className="fd-hero__title">{formation.title}</h1>
            <span className="fd-hero__level">{formation.level}</span>
          </div>
          {categoryImages[formation.category] && (
            <div className="fd-hero__img-wrapper">
              <img
                src={categoryImages[formation.category]}
                alt={formation.category}
                className="fd-hero__img"
                fetchpriority="high"
              />
            </div>
          )}
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
              <p className="fd-content__text" style={{ whiteSpace: 'pre-line' }}>{formation.prerequisites}</p>
            </div>
          </div>

          <aside className="fd-content__aside">
            <div className="fd-content__card">
              <p className="fd-content__card-label">Tarif</p>
              <p className="fd-content__card-price">à partir de 400 €</p>
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
