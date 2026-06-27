import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { formations } from '../../../data/formationsParticuliers'
import './FPCategories.css'

const categoryMeta = [
  { id: 'Intelligence Artificielle & Data',    label: 'Intelligence Artificielle & Data',    icon: 'smart_toy',   image: '/assets/images/formations-particuliers/ia-data/hero-ia.webp'                          },
  { id: 'Développement Web & No-Code',         label: 'Développement Web, Logiciel & No-Code',         icon: 'code',        image: '/assets/images/formations-particuliers/dev-no-code/developer-ia.webp'              },
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
  'Développement Web, Logiciel & No-Code': [
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

function MobileDropdown({ categories, active, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const activeCat = categories.find(c => c.id === active)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="fp-dropdown" ref={ref}>
      <button className="fp-dropdown__trigger" onClick={() => setOpen(!open)}>
        <span className="material-symbols-rounded fp-dropdown__trigger-icon">{activeCat?.icon}</span>
        <span className="fp-dropdown__trigger-label">{activeCat?.label}</span>
        <span className="material-symbols-rounded fp-dropdown__chevron">{open ? 'expand_less' : 'expand_more'}</span>
      </button>
      {open && (
        <ul className="fp-dropdown__list">
          {categories.map(cat => (
            <li key={cat.id}>
              <button
                className={`fp-dropdown__item${active === cat.id ? ' fp-dropdown__item--active' : ''}`}
                onClick={() => { onChange(cat.id); setOpen(false) }}
              >
                <span className="material-symbols-rounded fp-dropdown__item-icon">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function FPCategories() {
  const [active, setActive] = useState(
    () => sessionStorage.getItem('fp-tab') || categoryMeta[0].id
  )
  const [query, setQuery] = useState('')

  const isSearching = query.trim().length > 0
  const needle = query.toLowerCase()

  const searchResults = isSearching
    ? formations.filter(f =>
        f.title.toLowerCase().includes(needle) ||
        f.desc.toLowerCase().includes(needle) ||
        f.category.toLowerCase().includes(needle) ||
        (f.level || '').toLowerCase().includes(needle)
      )
    : null

  const current = formations.filter(f => f.category === active)

  return (
    <section id="nos-formations" className="fp-categories">
      <div className="fp-categories__container">

        <div className="fp-categories__header">
          <h2 className="fp-categories__title">
            Nos <span className="fp-categories__accent">formations</span>
          </h2>
          <p className="fp-categories__subtitle">
            Choisissez votre domaine et découvrez les formations disponibles.
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="fp-search">
          <span className="material-symbols-rounded fp-search__icon">search</span>
          <input
            type="search"
            className="fp-search__input"
            placeholder="Rechercher une formation (ex : Python, SEO, Photoshop…)"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {isSearching && (
            <button className="fp-search__clear" onClick={() => setQuery('')} aria-label="Effacer">
              <span className="material-symbols-rounded">close</span>
            </button>
          )}
        </div>

        {/* Mode recherche */}
        {isSearching ? (
          <>
            <p className="fp-search__count">
              {searchResults.length} formation{searchResults.length !== 1 ? 's' : ''} trouvée{searchResults.length !== 1 ? 's' : ''} pour «&nbsp;{query}&nbsp;»
            </p>
            {searchResults.length > 0 ? (
              <div className="fp-categories__grid">
                {searchResults.map(formation => (
                  <div key={formation.slug} className="fp-categories__card">
                    <span className="material-symbols-rounded fp-categories__card-icon">{categoryIcon[formation.category]}</span>
                    <div className="fp-categories__card-body">
                      <span className="fp-categories__card-cat">{formation.category}</span>
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
            ) : (
              <div className="fp-search__empty">
                <span className="material-symbols-rounded fp-search__empty-icon">search_off</span>
                <p className="fp-search__empty-title">Aucune formation trouvée</p>
                <p className="fp-search__empty-desc">Essayez d'autres mots-clés ou parcourez nos catégories.</p>
                <button className="fp-search__empty-btn" onClick={() => setQuery('')}>Voir toutes les formations</button>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Onglets — desktop */}
            <div className="fp-categories__tabs--desktop">
              {categoryMeta.map(cat => (
                <button
                  key={cat.id}
                  className={`fp-categories__tab${active === cat.id ? ' fp-categories__tab--active' : ''}`}
                  onClick={() => { sessionStorage.setItem('fp-tab', cat.id); setActive(cat.id) }}
                >
                  <img src={cat.image} alt={cat.label} className="fp-categories__tab-img" loading="lazy" />
                  <span className="material-symbols-rounded fp-categories__tab-icon">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Onglets — mobile (dropdown avec icônes) */}
            <div className="fp-categories__tabs--mobile">
              <MobileDropdown
                categories={categoryMeta}
                active={active}
                onChange={id => { sessionStorage.setItem('fp-tab', id); setActive(id) }}
              />
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
          </>
        )}

      </div>
    </section>
  )
}
