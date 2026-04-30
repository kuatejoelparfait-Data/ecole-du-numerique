import { Link } from 'react-router-dom'
import './FEStats.css'

const stats = [
  { value: '600+', label: 'Professionnels formés en Belgique' },
  { value: '80%',  label: 'Financement possible via Bruxelles-Capitale' },
  { value: '95%',  label: 'Taux de satisfaction' },
]

export default function FEStats() {
  return (
    <section className="fe-stats">
      <div className="fe-stats__container">
        <p className="fe-stats__text">
          Des formations <strong>100% orientées terrain</strong>, conçues pour des résultats immédiats dans votre entreprise.
        </p>

        <div className="fe-stats__grid">
          {stats.map(stat => (
            <div key={stat.label} className="fe-stats__item">
              <p className="fe-stats__value">{stat.value}</p>
              <p className="fe-stats__label">{stat.label}</p>
            </div>
          ))}
        </div>

        <Link to="/contact" className="fe-stats__cta">Demander un devis</Link>
      </div>
    </section>
  )
}
