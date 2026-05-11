import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formations } from '../../../data/formations'
import './FPCategories.css'

const categoryMeta = [
  { id: 'Intelligence Artificielle & Data',    label: 'Intelligence Artificielle & Data',    icon: 'smart_toy',   image: '/assets/images/formations-particuliers/ia-data/hero-ia.webp'                          },
  { id: 'Développement Web & No-Code',         label: 'Développement Web & No-Code',         icon: 'code',        image: '/assets/images/formations-particuliers/dev-no-code/developer-ia.webp'              },
  { id: 'Marketing Digital & SEO',             label: 'Marketing Digital & SEO',             icon: 'trending_up', image: '/assets/images/formations-particuliers/marketing-digital-seo/hero-ia.webp'          },
  { id: 'Réseaux Sociaux & Communication',     label: 'Réseaux Sociaux & Communication',     icon: 'share',       image: '/assets/images/formations-particuliers/reseau-communication/hero-freepik.webp'     },
  { id: 'Design & Expérience Utilisateur',     label: 'Design & Expérience Utilisateur',     icon: 'palette',     image: '/assets/images/formations-particuliers/design-ux/wireframe-pexels.webp'             },
]

const categoryIcon   = Object.fromEntries(categoryMeta.map(c => [c.id, c.icon]))

const categoryImages = {
  'Intelligence Artificielle & Data': [
    '/assets/images/formations-particuliers/ia-data/hero-ia.webp',
    '/assets/images/formations-particuliers/ia-data/hero-dc-studio.webp',
  ],
  'Développement Web & No-Code': [
    '/assets/images/formations-particuliers/dev-no-code/laptop-freepik.webp',
    '/assets/images/formations-particuliers/dev-no-code/developer-ia.webp',
  ],
  'Marketing Digital & SEO': [
    '/assets/images/formations-particuliers/marketing-digital-seo/hero-ia.webp',
    '/assets/images/formations-particuliers/marketing-digital-seo/hero-ia-1.webp',
    '/assets/images/formations-particuliers/marketing-digital-seo/hero-rawpixel.webp',
  ],
  'Réseaux Sociaux & Communication': [
    '/assets/images/formations-particuliers/reseau-communication/hero-freepik.webp',
    '/assets/images/formations-particuliers/reseau-communication/hero-freepik-1.webp',
    '/assets/images/formations-particuliers/reseau-communication/hero-ia.webp',
    '/assets/images/formations-particuliers/reseau-communication/hero-ia-1.webp',
  ],
  'Design & Expérience Utilisateur': [
    '/assets/images/formations-particuliers/design-ux/wireframe-freepik.webp',
    '/assets/images/formations-particuliers/design-ux/wireframe-pexels.webp',
  ],
}

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
              <img src={cat.image} alt={cat.label} className="fp-categories__tab-img" loading="lazy" />
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
