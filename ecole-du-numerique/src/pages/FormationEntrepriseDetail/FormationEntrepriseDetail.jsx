import { useParams, Link } from 'react-router-dom'
import { getFormationEntrepriseBySlug } from '../../data/formationsEntreprises'
import './FormationEntrepriseDetail.css'

const categoryImages = {
  'Intelligence Artificielle & Data':    '/assets/images/formations-entreprises/ia-data/hero-dc-studio.webp',
  'Développement Web & No-Code':         '/assets/images/formations-entreprises/dev-no-code/laptop-freepik.webp',
  'Cybersécurité & Protection':          '/assets/images/formations-entreprises/cybersecurite/hero-pexels.webp',
  'Gestion de Projet & Méthodologies':   '/assets/images/formations-entreprises/gestion-projet-methode/hero-pexels.webp',
}

export default function FormationEntrepriseDetail() {
  const { slug } = useParams()
  const formation = getFormationEntrepriseBySlug(slug)

  if (!formation) {
    return (
      <section className="fed-notfound">
        <p>Formation introuvable.</p>
        <Link to="/formations-entreprises">← Retour aux formations</Link>
      </section>
    )
  }

  return (
    <>
      <section className="fed-hero">
        <div className="fed-hero__container">
          <div className="fed-hero__content">
            <Link to="/formations-entreprises" className="fed-hero__back">
              ← Retour aux formations
            </Link>
            <p className="fed-hero__category">{formation.category}</p>
            <h1 className="fed-hero__title">{formation.title}</h1>
            <span className="fed-hero__level">{formation.level}</span>
          </div>
          {categoryImages[formation.category] && (
            <div className="fed-hero__img-wrapper">
              <img
                src={categoryImages[formation.category]}
                alt={formation.category}
                className="fed-hero__img"
                fetchpriority="high"
              />
            </div>
          )}
        </div>
      </section>

      <section className="fed-content">
        <div className="fed-content__container">

          <div className="fed-content__main">
            <div className="fed-content__block">
              <h2 className="fed-content__block-title">À propos de cette formation</h2>
              <p className="fed-content__text">{formation.about}</p>
            </div>

            <div className="fed-content__block">
              <h2 className="fed-content__block-title">{formation.outcomesTitle || 'Ce que vous apprendrez'}</h2>
              <ul className="fed-content__outcomes">
                {formation.outcomes.map((item, i) => (
                  <li key={i} className="fed-content__outcome">
                    <span className="material-symbols-rounded fed-content__outcome-icon">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {formation.programme && formation.programme.length > 0 && (
              <div className="fed-content__block">
                <h2 className="fed-content__block-title">Programme détaillé</h2>
                <div className="fed-content__programme">
                  {formation.programme.map((module, i) => (
                    <div key={i} className="fed-content__module">
                      <p className="fed-content__module-title">{module.title}</p>
                      <ul className="fed-content__module-points">
                        {module.points.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="fed-content__block">
              <h2 className="fed-content__block-title">Prérequis</h2>
              <p className="fed-content__text" style={{ whiteSpace: 'pre-line' }}>{formation.prerequisites}</p>
            </div>
          </div>

          <aside className="fed-content__aside">
            <div className="fed-content__card">

              {formation.duration && (
                <>
                  <p className="fed-content__card-label">Durée</p>
                  <p className="fed-content__card-value">{formation.duration}</p>
                </>
              )}

              {formation.price && (
                <>
                  <p className="fed-content__card-label">Tarif</p>
                  <p className="fed-content__card-price">{formation.price}</p>
                </>
              )}

              {formation.options && formation.options.length > 0 && (
                <>
                  <p className="fed-content__card-label">Modalités</p>
                  <div className="fed-content__card-options">
                    {formation.options.map((opt, i) => (
                      <span key={i} className="fed-content__card-option">{opt}</span>
                    ))}
                  </div>
                </>
              )}

              {formation.level && (
                <>
                  <p className="fed-content__card-label">Niveau</p>
                  <p className="fed-content__card-value">{formation.level}</p>
                </>
              )}

              <p className="fed-content__card-label">Catégorie</p>
              <p className="fed-content__card-value">{formation.category}</p>

              <Link to="/contact" className="fed-content__cta">Demander un devis</Link>
              <Link to="/contact" className="fed-content__cta-secondary">Demander des infos</Link>
            </div>
          </aside>

        </div>
      </section>
    </>
  )
}
