import { Link } from 'react-router-dom'
import './Financement.css'

export default function Financement() {
  return (
    <div className="financement">
      <div className="financement__inner">
        <div className="financement__left">
          <span className="material-symbols-rounded financement__icon">euro</span>
          <div className="financement__text">
            <p className="financement__title">Jusqu'à 80% de prise en charge</p>
            <p className="financement__sub">
              Vos formations peuvent être financées via Bruxelles-Formation et les aides de la Région de Bruxelles-Capitale.
            </p>
          </div>
        </div>
        <Link to="/contact" className="financement__cta">En savoir plus</Link>
      </div>
    </div>
  )
}
