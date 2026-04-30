import './AboutValues.css'

const values = [
  {
    icon: 'rocket_launch',
    title: 'Innovation',
    desc: 'Nous intégrons les dernières avancées technologiques dans nos programmes pour vous préparer aux métiers de demain.',
  },
  {
    icon: 'diversity_3',
    title: 'Accessibilité',
    desc: "Nos formations sont conçues pour tous les niveaux. Aucune connaissance technique préalable n'est requise pour commencer.",
  },
  {
    icon: 'build',
    title: 'Pratique',
    desc: 'Chaque formation est orientée vers la mise en application immédiate des compétences acquises dans votre quotidien professionnel.',
  },
  {
    icon: 'handshake',
    title: 'Accompagnement',
    desc: 'Notre équipe vous suit avant, pendant et après la formation pour garantir votre réussite et votre progression.',
  },
]

export default function AboutValues() {
  return (
    <section className="about-values">
      <div className="about-values__container">
        <div className="about-values__header">
          <h2 className="about-values__title">
            Nos <span className="about-values__accent">valeurs</span>
          </h2>
          <p className="about-values__subtitle">
            Ce qui guide notre approche pédagogique au quotidien.
          </p>
        </div>

        <div className="about-values__grid">
          {values.map(value => (
            <div key={value.title} className="about-values__card">
              <span className="material-symbols-rounded about-values__icon">{value.icon}</span>
              <h3 className="about-values__card-title">{value.title}</h3>
              <p className="about-values__card-desc">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
