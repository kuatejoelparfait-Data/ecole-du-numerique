import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Choisissez votre formation',
    desc: "Parcourez notre catalogue et sélectionnez le programme adapté à votre profil et vos objectifs, que vous soyez particulier ou entreprise.",
  },
  {
    number: '02',
    title: 'Rejoignez les sessions pratiques',
    desc: "Participez à des bootcamps intensifs en présentiel, en ligne ou en format hybride. Nos formateurs vous accompagnent pas à pas.",
  },
  {
    number: '03',
    title: 'Appliquez immédiatement',
    desc: "Chaque formation est conçue pour être directement applicable à vos projets professionnels, dès la première session.",
  },
  {
    number: '04',
    title: 'Obtenez votre certification',
    desc: "À l'issue de votre parcours, recevez une attestation ou un certificat reconnu pour valoriser vos nouvelles compétences.",
  },
]

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="how__container">

        <div className="how__header">
          <h2 className="how__title">
            Comment ça <span className="how__title-accent">se passe ?</span>
          </h2>
          <p className="how__subtitle">
            Un parcours simple et efficace, du choix de la formation à la certification.
          </p>
        </div>

        <div className="how__steps">
          {steps.map(step => (
            <div key={step.number} className="how__step">
              <p className="how__step-number">{step.number}</p>
              <div className="how__step-content">
                <h3 className="how__step-title">{step.title}</h3>
                <p className="how__step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
