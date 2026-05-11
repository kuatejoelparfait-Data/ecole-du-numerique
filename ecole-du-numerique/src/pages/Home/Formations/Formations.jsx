import './Formations.css'

const categories = [
  {
    icon:  'smart_toy',
    title: 'Intelligence Artificielle & Data',
    count: 12,
    href:  '/formations-particuliers',
    image: '/assets/images/formations-particuliers/ia-data/hero-ia.webp',
  },
  {
    icon:  'code',
    title: 'Développement Web & No-code',
    count: 8,
    href:  '/formations-particuliers',
    image: '/assets/images/formations-particuliers/dev-no-code/developer-ia.webp',
  },
  {
    icon:  'trending_up',
    title: 'Marketing Digital & SEO',
    count: 7,
    href:  '/formations-particuliers',
    image: '/assets/images/formations-particuliers/marketing-digital-seo/hero-rawpixel.webp',
  },
  {
    icon:  'share',
    title: 'Réseaux Sociaux & Communication',
    count: 6,
    href:  '/formations-particuliers',
    image: '/assets/images/formations-particuliers/reseau-communication/hero-freepik-1.webp',
  },
  {
    icon:  'palette',
    title: 'Design & Expérience Utilisateur',
    count: 5,
    href:  '/formations-particuliers',
    image: '/assets/images/formations-particuliers/design-ux/wireframe-pexels.webp',
  },
  {
    icon:  'security',
    title: 'Cybersécurité & Protection',
    count: 4,
    href:  '/formations-entreprises',
    image: '/assets/images/formations-entreprises/cybersecurite/hero-pexels.webp',
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
              <div className="formations__card-img-wrapper">
                <img src={cat.image} alt={cat.title} className="formations__card-img" loading="lazy" />
              </div>
              <div className="formations__card-body">
                <span className="material-symbols-rounded formations__card-icon" aria-hidden="true">
                  {cat.icon}
                </span>
                <h3 className="formations__card-title">{cat.title}</h3>
                <p className="formations__card-count">{cat.count} formations</p>
                <span className="formations__card-link">Voir plus</span>
              </div>
            </a>
          ))}
        </div>

        <div className="formations__cta-wrapper">
          <a href="/formations-particuliers" className="formations__cta">
            Formations particuliers
          </a>
          <a href="/formations-entreprises" className="formations__cta">
            Formations entreprises
          </a>
        </div>

      </div>
    </section>
  )
}
