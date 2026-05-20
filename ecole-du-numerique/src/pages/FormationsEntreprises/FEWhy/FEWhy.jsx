import './FEWhy.css'

const reasons = [
  {
    icon: 'trending_up',
    title: 'Améliorez la performance',
    desc: 'Vos équipes maîtrisent les outils digitaux qui accélèrent leur travail au quotidien et boostent la productivité de l\'entreprise.',
  },
  {
    icon: 'autorenew',
    title: 'Automatisez vos processus',
    desc: 'Identifiez et automatisez les tâches répétitives grâce à l\'IA et aux outils no-code, pour libérer du temps sur ce qui compte.',
  },
  {
    icon: 'event_available',
    title: 'Format flexible',
    desc: 'Sessions en groupe ou individuelles, en présentiel, en ligne ou hybride — adaptées à votre secteur et à votre calendrier.',
  },
  {
    icon: 'savings',
    title: 'Finançable jusqu\'à 80%',
    desc: 'Via les dispositifs de la Région de Bruxelles-Capitale, une large part des coûts peut être prise en charge. Nous vous guidons dans les démarches.',
  },
]

export default function FEWhy() {
  return (
    <section className="fe-why">
      <div className="fe-why__container">

        <div className="fe-why__header">
          <h2 className="fe-why__title">
            Pourquoi <span className="fe-why__accent">former vos équipes ?</span>
          </h2>
          <p className="fe-why__subtitle">
            Des formations pratiques et stratégiques pour intégrer l'IA, la data et les outils digitaux au cœur de votre activité.
          </p>
        </div>

        <div className="fe-why__grid">
          {reasons.map(r => (
            <div key={r.title} className="fe-why__card">
              <span className="material-symbols-rounded fe-why__icon">{r.icon}</span>
              <h3 className="fe-why__card-title">{r.title}</h3>
              <p className="fe-why__card-desc">{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
