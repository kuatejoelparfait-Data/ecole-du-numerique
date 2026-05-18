import './AboutMission.css'

const stats = [
  { value: '2024', label: 'Année de fondation' },
  { value: '600+', label: 'Apprenants formés' },
  { value: '10+', label: 'Formations disponibles' },
  { value: '95%', label: 'Taux de satisfaction' },
]

export default function AboutMission() {
  return (
    <section className="about-mission">
      <div className="about-mission__container">

        <div className="about-mission__content">
          <h2 className="about-mission__title">Notre mission</h2>
          <p className="about-mission__text">
            Nous proposons des formations sur mesure, spécialement conçues pour les indépendants
            et les professionnels désireux d'améliorer leurs compétences et de se démarquer dans
            un monde en constante évolution technologique.
          </p>
          <p className="about-mission__text">
            Ces programmes personnalisés couvrent une large gamme de thématiques, allant de la
            maîtrise des outils numériques avancés à l'adoption des dernières innovations.
            En mettant l'accent sur des approches pratiques, nos formations permettent d'acquérir
            des connaissances directement applicables dans votre domaine d'activité.
          </p>
          <p className="about-mission__text">
            Que vous soyez entrepreneur, consultant ou salarié, nous vous aidons à rester
            compétitif et à exploiter pleinement le potentiel des nouvelles technologies.
          </p>
        </div>

        <div className="about-mission__stats">
          {stats.map(stat => (
            <div key={stat.label} className="about-mission__stat">
              <p className="about-mission__stat-value">{stat.value}</p>
              <p className="about-mission__stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
