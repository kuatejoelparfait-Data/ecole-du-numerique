import './BlogHero.css'

export default function BlogHero() {
  return (
    <section className="blog-hero">
      <div className="blog-hero__container">
        <h1 className="blog-hero__title">
          Ressources & <span className="blog-hero__accent">actualités</span>
        </h1>
        <p className="blog-hero__subtitle">
          Conseils pratiques, tendances digitales et guides pour développer vos compétences.
        </p>
      </div>
    </section>
  )
}
