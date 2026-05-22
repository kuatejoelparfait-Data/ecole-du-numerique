import './EvenementsWhy.css'

const reasons = [
  {
    icon: 'groups',
    title: 'Networking actif',
    desc: 'Rencontrez d\'autres professionnels, partagez vos expériences et créez des liens durables dans l\'écosystème numérique belge.',
  },
  {
    icon: 'school',
    title: 'Apprenez des meilleurs',
    desc: 'Nos événements sont animés par des experts terrain. Vous repartez avec des insights concrets, directement applicables.',
  },
  {
    icon: 'bolt',
    title: 'Restez à la pointe',
    desc: 'IA, cybersécurité, marketing digital… Nos événements couvrent les sujets les plus actuels pour vous garder en avance sur votre secteur.',
  },
]

export default function EvenementsWhy() {
  return (
    <section className="evenements-why">
      <div className="evenements-why__container">

        <div className="evenements-why__header">
          <h2 className="evenements-why__title">
            Pourquoi <span className="evenements-why__accent">participer ?</span>
          </h2>
          <p className="evenements-why__subtitle">
            Chaque événement est une occasion de grandir, d'échanger et de vous connecter à la communauté du numérique.
          </p>
        </div>

        <div className="evenements-why__grid">
          {reasons.map(r => (
            <div key={r.title} className="evenements-why__card">
              <span className="material-symbols-rounded evenements-why__icon">{r.icon}</span>
              <h3 className="evenements-why__card-title">{r.title}</h3>
              <p className="evenements-why__card-desc">{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
