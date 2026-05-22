import './PartenairesProcess.css'

const steps = [
  {
    number: '01',
    title: 'Vous nous contactez',
    desc: 'Remplissez le formulaire en bas de page en quelques minutes. Dites-nous qui vous êtes et ce que vous souhaitez construire avec nous.',
  },
  {
    number: '02',
    title: 'On échange sur votre projet',
    desc: 'Nous vous recontactons sous 48h pour un premier échange. On définit ensemble les contours du partenariat qui correspond à vos objectifs.',
  },
  {
    number: '03',
    title: 'On collabore ensemble',
    desc: 'Une fois l\'accord établi, on construit la relation : visibilité, co-formation, accès au réseau… Le partenariat prend vie concrètement.',
  },
]

export default function PartenairesProcess() {
  return (
    <section className="partenaires-process">
      <div className="partenaires-process__container">

        <div className="partenaires-process__header">
          <h2 className="partenaires-process__title">
            Comment ça <span className="partenaires-process__accent">marche ?</span>
          </h2>
          <p className="partenaires-process__subtitle">
            Devenir partenaire, c'est simple et rapide. Voici les 3 étapes.
          </p>
        </div>

        <div className="partenaires-process__steps">
          {steps.map((step, i) => (
            <div key={i} className="partenaires-process__step">
              <div className="partenaires-process__number">{step.number}</div>
              <div className="partenaires-process__body">
                <h3 className="partenaires-process__step-title">{step.title}</h3>
                <p className="partenaires-process__step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
