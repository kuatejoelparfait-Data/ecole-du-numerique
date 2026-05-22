import './BlogHero.css'

const badges = [
  { icon: 'article', label: 'Articles & ressources' },
  { icon: 'update', label: 'Mis à jour régulièrement' },
  { icon: 'volunteer_activism', label: 'Gratuit' },
]

export default function BlogHero() {
  return (
    <section className="blog-hero">
      <div className="blog-hero__container">
        <div className="blog-hero__content">
          <h1 className="blog-hero__title">
            Ressources & <span className="blog-hero__accent">actualités</span>
          </h1>
          <p className="blog-hero__subtitle">
            Conseils pratiques, tendances digitales et guides pour développer vos compétences numériques.
          </p>
          <div className="blog-hero__badges">
            {badges.map(b => (
              <span key={b.label} className="blog-hero__badge">
                <span className="material-symbols-rounded">{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>
          <a href="#blog-articles" className="blog-hero__cta">
            Lire les articles
          </a>
        </div>
        <div className="blog-hero__img-wrapper">
          <img
            src="/assets/images/blog/hero-blog-markus-winkler-pexels.webp"
            alt="Blog École du Numérique"
            className="blog-hero__img"
            width="600"
            height="440"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  )
}
