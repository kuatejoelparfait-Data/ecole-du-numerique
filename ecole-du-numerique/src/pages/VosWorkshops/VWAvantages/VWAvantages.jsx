import './VWAvantages.css'

const avantages = [
  {
    icon: 'location_on',
    title: 'Nous venons chez vous',
    desc: 'Pas de déplacement ni de logistique pour vos équipes. On s\'adapte à votre environnement de travail, en présentiel ou à distance.',
  },
  {
    icon: 'tune',
    title: 'Contenu 100 % adapté',
    desc: 'Chaque atelier est conçu autour de vos besoins réels. Thème, exemples, exercices — tout est calibré sur votre secteur et vos équipes.',
  },
  {
    icon: 'groups',
    title: 'Vos équipes, ensemble',
    desc: 'Apprendre en groupe, dans son propre contexte professionnel, renforce la cohésion et l\'adoption des nouvelles pratiques.',
  },
  {
    icon: 'bolt',
    title: 'Résultats immédiats',
    desc: 'Format court et intensif : 2h à une journée. Vos collaborateurs repartent avec des compétences applicables dès le lendemain.',
  },
]

export default function VWAvantages() {
  return (
    <section className="vw-avantages">
      <div className="vw-avantages__container">

        <div className="vw-avantages__header">
          <h2 className="vw-avantages__title">
            Pourquoi un atelier{' '}
            <span className="vw-avantages__accent">chez vous&nbsp;?</span>
          </h2>
          <p className="vw-avantages__subtitle">
            Plus engageant qu'une formation classique, plus flexible qu'un séminaire.
            Le workshop en entreprise allie efficacité et proximité.
          </p>
        </div>

        <div className="vw-avantages__grid">
          {avantages.map(a => (
            <div key={a.title} className="vw-avantages__card">
              <span className="material-symbols-rounded vw-avantages__icon">{a.icon}</span>
              <h3 className="vw-avantages__card-title">{a.title}</h3>
              <p className="vw-avantages__card-desc">{a.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
