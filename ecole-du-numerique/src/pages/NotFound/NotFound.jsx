import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="notfound">
      <p className="notfound__code">404</p>
      <h1 className="notfound__title">Page introuvable</h1>
      <p className="notfound__desc">
        Cette page n'existe pas ou a été déplacée.<br />
        Voici quelques liens pour vous aider à trouver votre chemin.
      </p>
      <div className="notfound__links">
        <Link to="/formations-particuliers" className="notfound__link">
          <span className="material-symbols-rounded">school</span>
          Formations particuliers
        </Link>
        <Link to="/formations-entreprises" className="notfound__link">
          <span className="material-symbols-rounded">business</span>
          Formations entreprises
        </Link>
        <Link to="/contact" className="notfound__link">
          <span className="material-symbols-rounded">mail</span>
          Nous contacter
        </Link>
      </div>
      <Link to="/" className="notfound__cta">
        Retour à l'accueil
      </Link>
    </section>
  )
}
