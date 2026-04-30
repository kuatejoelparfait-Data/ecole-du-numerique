import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formationsEntreprises } from '../../../data/formationsEntreprises'
import './FECategories.css'

const categoryMeta = [
  { id: 'Intelligence Artificielle & Data',  label: 'Intelligence Artificielle & Data',  icon: 'smart_toy'   },
  { id: 'Développement Web & No-Code',       label: 'Développement Web & No-Code',       icon: 'code'        },
  { id: 'Cybersécurité & Protection',        label: 'Cybersécurité & Protection',        icon: 'shield'      },
  { id: 'Gestion de Projet & Méthodologies', label: 'Gestion de Projet & Méthodologies', icon: 'task_alt'    },
]

export default function FECategories() {
  const [active, setActive] = useState(categoryMeta[0].id)
  const current = formationsEntreprises.filter(f => f.category === active)

  return (
    <section className="fe-categories">
      <div className="fe-categories__container">

        <div className="fe-categories__header">
          <h2 className="fe-categories__title">
            Nos <span className="fe-categories__accent">formations</span>
          </h2>
          <p className="fe-categories__subtitle">
            Choisissez votre domaine et découvrez les formations disponibles pour vos équipes.
          </p>
        </div>

        <div className="fe-categories__tabs">
          {categoryMeta.map(cat => (
            <button
              key={cat.id}
              className={`fe-categories__tab${active === cat.id ? ' fe-categories__tab--active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              <span className="material-symbols-rounded fe-categories__tab-icon">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="fe-categories__grid">
          {current.map(formation => (
            <div key={formation.slug} className="fe-categories__card">
              <span className="material-symbols-rounded fe-categories__card-icon">school</span>
              <div className="fe-categories__card-body">
                <p className="fe-categories__card-title">{formation.title}</p>
                <p className="fe-categories__card-desc">{formation.desc}</p>
              </div>
              <div className="fe-categories__card-footer">
                <Link to="/contact" className="fe-categories__card-cta">
                  Demander un devis
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
