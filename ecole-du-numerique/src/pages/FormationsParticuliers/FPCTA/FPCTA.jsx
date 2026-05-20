import { Link } from 'react-router-dom'
import './FPCTA.css'

export default function FPCTA() {
  return (
    <section className="fp-cta">
      <div className="fp-cta__container">
        <p className="fp-cta__eyebrow">Prêt à vous lancer ?</p>
        <h2 className="fp-cta__title">Choisissez votre formation et passez à l'action</h2>
        <p className="fp-cta__subtitle">
          Rejoignez les 600+ personnes déjà formées en Belgique. Financement possible jusqu'à 80%.
        </p>
        <div className="fp-cta__actions">
          <Link to="/contact" className="fp-cta__btn fp-cta__btn--primary">
            Nous contacter
          </Link>
          <a href="#nos-formations" className="fp-cta__btn fp-cta__btn--secondary">
            Voir nos formations
          </a>
        </div>
      </div>
    </section>
  )
}
