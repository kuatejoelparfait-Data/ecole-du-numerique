import { Link } from 'react-router-dom'
import './AboutFinancement.css'

const aides = [
  { icon: 'account_balance', label: 'Bruxelles-Formation', desc: 'Prise en charge pour les demandeurs d\'emploi et salariés bruxellois.' },
  { icon: 'business_center', label: 'Chèques-formation', desc: 'Aide régionale pour les travailleurs indépendants et PME.' },
  { icon: 'domain', label: 'Plan de formation entreprise', desc: 'Financement via le budget formation de votre employeur.' },
]

export default function AboutFinancement() {
  return (
    <section className="about-financement">
      <div className="about-financement__container">

        <div className="about-financement__content">
          <h2 className="about-financement__title">
            Financez votre <span className="about-financement__accent">formation</span>
          </h2>
          <p className="about-financement__text">
            La majorité de nos formations sont éligibles aux aides de la Région de Bruxelles-Capitale.
            Selon votre profil, vous pouvez bénéficier d'une prise en charge allant jusqu'à <strong>80%</strong> du coût de la formation.
          </p>
          <Link to="/contact" className="about-financement__cta">Renseignez-vous</Link>
        </div>

        <div className="about-financement__list">
          {aides.map(a => (
            <div key={a.label} className="about-financement__item">
              <span className="material-symbols-rounded about-financement__item-icon">{a.icon}</span>
              <div>
                <p className="about-financement__item-label">{a.label}</p>
                <p className="about-financement__item-desc">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
