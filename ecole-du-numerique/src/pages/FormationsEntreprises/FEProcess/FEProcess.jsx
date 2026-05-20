import './FEProcess.css'

const steps = [
  {
    number: '01',
    icon: 'manage_search',
    title: 'Analyse de vos besoins',
    desc: 'Un échange avec notre équipe pour identifier les compétences à développer, votre secteur et vos contraintes opérationnelles.',
  },
  {
    number: '02',
    icon: 'edit_note',
    title: 'Programme sur mesure',
    desc: 'Nous adaptons le contenu, le format et le calendrier à vos équipes — en groupe ou en individuel, en présentiel ou en ligne.',
  },
  {
    number: '03',
    icon: 'groups',
    title: 'Formation & mise en pratique',
    desc: 'Sessions animées par des formateurs terrain. Chaque exercice est directement lié à votre activité pour une application immédiate.',
  },
  {
    number: '04',
    icon: 'support_agent',
    title: 'Suivi post-formation',
    desc: 'Notre équipe reste disponible après la formation pour répondre aux questions et accompagner la montée en compétences.',
  },
]

export default function FEProcess() {
  return (
    <section className="fe-process">
      <div className="fe-process__container">

        <div className="fe-process__header">
          <h2 className="fe-process__title">
            Comment ça <span className="fe-process__accent">se passe ?</span>
          </h2>
          <p className="fe-process__subtitle">
            Un accompagnement de A à Z, de la définition des besoins au suivi post-formation.
          </p>
        </div>

        <div className="fe-process__steps">
          {steps.map(step => (
            <div key={step.number} className="fe-process__step">
              <div className="fe-process__step-left">
                <p className="fe-process__step-number">{step.number}</p>
                <div className="fe-process__step-line" aria-hidden="true" />
              </div>
              <div className="fe-process__step-body">
                <span className="material-symbols-rounded fe-process__step-icon">{step.icon}</span>
                <div>
                  <h3 className="fe-process__step-title">{step.title}</h3>
                  <p className="fe-process__step-desc">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
