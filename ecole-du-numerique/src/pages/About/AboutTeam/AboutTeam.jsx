import { Link } from 'react-router-dom'
import './AboutTeam.css'

const members = [
  { name: 'Joel Kuate Parfait', role: 'Fondateur & Directeur', initials: 'JK' },
  { name: 'Edouard Renard', role: 'Business Partner', initials: 'ER' },
  { name: 'Meriton Askaj', role: 'Stagiaire Front-end Développeur', initials: 'MA' },
]

export default function AboutTeam() {
  return (
    <section className="about-team">
      <div className="about-team__container">
        <div className="about-team__header">
          <h2 className="about-team__title">
            Notre <span className="about-team__accent">équipe</span>
          </h2>
          <p className="about-team__subtitle">
            Des experts passionnés par la transmission des savoirs numériques.
          </p>
        </div>

        <div className="about-team__grid">
          {members.map((member, i) => (
            <div key={i} className="about-team__card">
              <div className="about-team__avatar">{member.initials}</div>
              <div className="about-team__info">
                <p className="about-team__name">{member.name}</p>
                <p className="about-team__role">{member.role}</p>
              </div>
            </div>
          ))}
          <Link to="/contact" className="about-team__card about-team__card--join">
            <div className="about-team__join-icon">
              <span className="material-symbols-rounded">add</span>
            </div>
            <div className="about-team__info">
              <p className="about-team__name">Rejoignez-nous</p>
              <p className="about-team__role">Vous faites la différence ?</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
