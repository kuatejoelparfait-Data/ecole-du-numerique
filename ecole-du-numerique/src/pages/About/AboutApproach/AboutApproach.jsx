import './AboutApproach.css'

const pillars = [
  {
    icon: 'construction',
    title: 'Apprentissage par la pratique',
    desc: 'Chaque formation est construite autour de cas concrets et d\'exercices réels, pas de théorie sans application.',
  },
  {
    icon: 'groups',
    title: 'Petits groupes',
    desc: 'Nos sessions en petits groupes garantissent un suivi personnalisé et des échanges de qualité avec le formateur.',
  },
  {
    icon: 'bolt',
    title: 'Application immédiate',
    desc: 'Les compétences acquises sont directement utilisables dans votre activité dès le lendemain de la formation.',
  },
  {
    icon: 'support_agent',
    title: 'Suivi post-formation',
    desc: 'Notre équipe reste disponible après la formation pour répondre à vos questions et accompagner votre montée en compétences.',
  },
]

export default function AboutApproach() {
  return (
    <section className="about-approach">
      <div className="about-approach__container">

        <div className="about-approach__header">
          <h2 className="about-approach__title">
            Notre <span className="about-approach__accent">approche pédagogique</span>
          </h2>
          <p className="about-approach__subtitle">
            Une méthode conçue pour apprendre vite et bien, quel que soit votre niveau de départ.
          </p>
        </div>

        <div className="about-approach__grid">
          {pillars.map(p => (
            <div key={p.title} className="about-approach__card">
              <span className="material-symbols-rounded about-approach__icon">{p.icon}</span>
              <h3 className="about-approach__card-title">{p.title}</h3>
              <p className="about-approach__card-desc">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
