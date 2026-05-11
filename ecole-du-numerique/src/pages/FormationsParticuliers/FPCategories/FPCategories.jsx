import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formations } from '../../../data/formations'
import './FPCategories.css'

const categoryMeta = [
  { id: 'Intelligence Artificielle & Data',    label: 'Intelligence Artificielle & Data',    icon: 'smart_toy'   },
  { id: 'Développement Web & No-Code',         label: 'Développement Web & No-Code',         icon: 'code'        },
  { id: 'Marketing Digital & SEO',             label: 'Marketing Digital & SEO',             icon: 'trending_up' },
  { id: 'Réseaux Sociaux & Communication',     label: 'Réseaux Sociaux & Communication',     icon: 'share'       },
  { id: 'Design & Expérience Utilisateur',     label: 'Design & Expérience Utilisateur',     icon: 'palette'     },
]

const categoryIcon = Object.fromEntries(categoryMeta.map(c => [c.id, c.icon]))

export default function FPCategories() {
  const [active, setActive] = useState(categoryMeta[0].id)

  const current = formations.filter(f => f.category === active)

  return (
    <section className="fp-categories">
      <div className="fp-categories__container">

        <div className="fp-categories__header">
          <h2 className="fp-categories__title">
            Nos <span className="fp-categories__accent">formations</span>
          </h2>
          <p className="fp-categories__subtitle">
            Choisissez votre domaine et découvrez les formations disponibles.
          </p>
        </div>

        <div className="fp-categories__tabs">
          {categoryMeta.map(cat => (
            <button
              key={cat.id}
              className={`fp-categories__tab${active === cat.id ? ' fp-categories__tab--active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              <span className="material-symbols-rounded fp-categories__tab-icon">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="fp-categories__grid">
          {current.map(formation => (
            <div key={formation.slug} className="fp-categories__card">
              <span className="material-symbols-rounded fp-categories__card-icon">{categoryIcon[formation.category]}</span>
              <div className="fp-categories__card-body">
                <Link to={`/formations/${formation.slug}`} className="fp-categories__card-title">
                  {formation.title}
                </Link>
                <p className="fp-categories__card-desc">{formation.desc}</p>
              </div>
              <div className="fp-categories__card-footer">
                <span className="fp-categories__card-level">{formation.level}</span>
                <Link to={`/formations/${formation.slug}`} className="fp-categories__card-cta">
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
