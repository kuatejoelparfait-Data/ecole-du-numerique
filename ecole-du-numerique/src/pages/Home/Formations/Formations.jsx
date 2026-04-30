import './Formations.css'

const categories = [
  {
    icon:  'smart_toy',
    title: 'Intelligence Artificielle & Data',
    count: 12,
    href:  '/formations-particuliers',
  },
  {
    icon:  'code',
    title: 'Développement Web & No-code',
    count: 8,
    href:  '/formations-particuliers',
  },
  {
    icon:  'trending_up',
    title: 'Marketing Digital & SEO',
    count: 7,
    href:  '/formations-particuliers',
  },
  {
    icon:  'share',
    title: 'Réseaux Sociaux & Communication',
    count: 6,
    href:  '/formations-particuliers',
  },
  {
    icon:  'palette',
    title: 'Design & Expérience Utilisateur',
    count: 5,
    href:  '/formations-particuliers',
  },
  {
    icon:  'security',
    title: 'Cybersécurité & Protection',
    count: 4,
    href:  '/formations-entreprises',
  },
]

export default function Formations() {
  return (
    <section className="formations">
      <div className="formations__container">

        <div className="formations__header">
          <h2 className="formations__title">
            Nos domaines de <span className="formations__title-accent">formation</span>
          </h2>
          <p className="formations__subtitle">
            Des programmes couvrant tous les métiers du numérique, du débutant à l'expert.
          </p>
        </div>

        <div className="formations__grid">
          {categories.map(cat => (
            <a key={cat.title} href={cat.href} className="formations__card">
              <span className="material-symbols-rounded formations__card-icon" aria-hidden="true">
                {cat.icon}
              </span>
              <h3 className="formations__card-title">{cat.title}</h3>
              <p className="formations__card-count">{cat.count} formations</p>
              <span className="formations__card-link">Voir plus</span>
            </a>
          ))}
        </div>

        <div className="formations__cta-wrapper">
          <a href="/formations-particuliers" className="formations__cta">
            Voir toutes les formations
          </a>
        </div>

      </div>
    </section>
  )
}
