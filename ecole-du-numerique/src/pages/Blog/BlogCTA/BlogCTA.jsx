import { Link } from 'react-router-dom'
import './BlogCTA.css'

export default function BlogCTA() {
  return (
    <section className="blog-cta">
      <div className="blog-cta__container">
        <h2 className="blog-cta__title">Prêt à passer à l'action ?</h2>
        <p className="blog-cta__subtitle">
          Découvrez nos formations et développez vos compétences digitales dès aujourd'hui.
        </p>
        <div className="blog-cta__buttons">
          <Link to="/formations-particuliers" className="blog-cta__btn blog-cta__btn--primary">
            Formations particuliers
          </Link>
          <Link to="/formations-entreprises" className="blog-cta__btn blog-cta__btn--secondary">
            Formations entreprises
          </Link>
        </div>
      </div>
    </section>
  )
}
