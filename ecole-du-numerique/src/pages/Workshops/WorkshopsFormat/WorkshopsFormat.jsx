import './WorkshopsFormat.css'

const points = [
  {
    icon: 'schedule',
    title: 'Sessions de 2 à 4h',
    desc: 'Pas besoin de bloquer une semaine. Nos workshops sont conçus pour être courts, denses et efficaces.',
  },
  {
    icon: 'groups',
    title: 'Petits groupes',
    desc: 'Maximum 12 participants par session pour garantir un suivi personnalisé et des échanges de qualité.',
  },
  {
    icon: 'construction',
    title: '100% pratique',
    desc: 'On ne parle pas, on fait. Chaque workshop est basé sur des exercices concrets que vous pouvez reproduire seul dès le lendemain.',
  },
  {
    icon: 'verified',
    title: 'Tous niveaux acceptés',
    desc: 'Chaque workshop précise son niveau. Débutant ou confirmé, il y a toujours une session adaptée à là où vous en êtes.',
  },
]

export default function WorkshopsFormat() {
  return (
    <section className="workshops-format">
      <div className="workshops-format__container">

        <div className="workshops-format__header">
          <h2 className="workshops-format__title">
            Le format <span className="workshops-format__accent">workshop</span>
          </h2>
          <p className="workshops-format__subtitle">
            Une formule pensée pour les gens occupés qui veulent progresser vite, sans compromis sur la qualité.
          </p>
        </div>

        <div className="workshops-format__grid">
          {points.map(p => (
            <div key={p.title} className="workshops-format__card">
              <span className="material-symbols-rounded workshops-format__icon">{p.icon}</span>
              <h3 className="workshops-format__card-title">{p.title}</h3>
              <p className="workshops-format__card-desc">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
