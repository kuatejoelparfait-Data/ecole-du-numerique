import { Link } from 'react-router-dom'
import './BlogCTA.css'

export default function BlogCTA() {
  return (
    <section className="blog-cta">
      <div className="blog-cta__container">
        <p className="blog-cta__eyebrow">Passez à l'action</p>
        <h2 className="blog-cta__title">Prêt à développer vos compétences ?</h2>
        <p className="blog-cta__subtitle">
          Découvrez nos formations et transformez vos connaissances en compétences concrètes dès aujourd'hui.
        </p>
        <div className="blog-cta__buttons">
          <Link to="/#nos-formations" className="blog-cta__btn blog-cta__btn--primary">
            Voir nos formations
          </Link>
          <Link to="/contact" className="blog-cta__btn blog-cta__btn--secondary">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  )
}
