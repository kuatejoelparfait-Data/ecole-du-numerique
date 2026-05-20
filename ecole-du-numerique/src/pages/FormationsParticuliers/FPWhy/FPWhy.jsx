import './FPWhy.css'

const reasons = [
  {
    icon: 'school',
    title: 'Accessible à tous',
    desc: 'Aucune connaissance préalable requise. Nos formations démarrent de zéro et s\'adaptent à votre rythme.',
  },
  {
    icon: 'bolt',
    title: 'Pratique dès le premier jour',
    desc: 'Pas de théorie sans application. Chaque session est construite autour de cas concrets que vous pouvez réutiliser immédiatement.',
  },
  {
    icon: 'euro',
    title: 'Finançable jusqu\'à 80%',
    desc: 'Grâce au soutien de la Région de Bruxelles-Capitale, une grande partie des frais peut être prise en charge via Bruxelles-Formation.',
  },
  {
    icon: 'verified',
    title: 'Attestation de formation',
    desc: 'À l\'issue de chaque parcours, vous recevez une attestation officielle reconnue pour valoriser vos nouvelles compétences.',
  },
]

export default function FPWhy() {
  return (
    <section className="fp-why">
      <div className="fp-why__container">

        <div className="fp-why__header">
          <h2 className="fp-why__title">
            Pourquoi se former <span className="fp-why__accent">avec nous ?</span>
          </h2>
          <p className="fp-why__subtitle">
            Des formations conçues pour les curieux, les ambitieux et ceux qui veulent changer de trajectoire.
          </p>
        </div>

        <div className="fp-why__grid">
          {reasons.map(r => (
            <div key={r.title} className="fp-why__card">
              <span className="material-symbols-rounded fp-why__icon">{r.icon}</span>
              <h3 className="fp-why__card-title">{r.title}</h3>
              <p className="fp-why__card-desc">{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
