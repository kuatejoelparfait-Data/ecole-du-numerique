import './PricingFinancement.css'

const options = [
  {
    icon: 'account_balance',
    title: 'Bruxelles-Formation',
    desc: 'Pour les demandeurs d\'emploi et salariés de la Région de Bruxelles-Capitale. Jusqu\'à 80% des frais de formation couverts.',
    tag: 'Jusqu\'à 80%',
  },
  {
    icon: 'confirmation_number',
    title: 'Chèques-Formation',
    desc: 'Dispositif wallon et bruxellois permettant à votre employeur de prendre en charge une partie des frais via des chèques subventionnés.',
    tag: 'Via l\'employeur',
  },
  {
    icon: 'credit_card',
    title: 'Autofinancement',
    desc: 'Vous ne bénéficiez d\'aucun dispositif de financement ? Contactez-nous pour convenir d\'un plan de paiement adapté à votre situation.',
    tag: 'Toujours possible',
  },
]

export default function PricingFinancement() {
  return (
    <section className="pricing-fin">
      <div className="pricing-fin__container">

        <div className="pricing-fin__header">
          <p className="pricing-fin__eyebrow">Financement</p>
          <h2 className="pricing-fin__title">
            Formez-vous sans <span className="pricing-fin__accent">vous ruiner</span>
          </h2>
          <p className="pricing-fin__subtitle">
            De nombreux dispositifs permettent de réduire le coût de votre formation. Nous vous aidons à identifier celui qui correspond à votre situation.
          </p>
        </div>

        <div className="pricing-fin__grid">
          {options.map(o => (
            <div key={o.title} className="pricing-fin__card">
              <div className="pricing-fin__card-top">
                <span className="material-symbols-rounded pricing-fin__icon">{o.icon}</span>
                <span className="pricing-fin__tag">{o.tag}</span>
              </div>
              <h3 className="pricing-fin__card-title">{o.title}</h3>
              <p className="pricing-fin__card-desc">{o.desc}</p>
            </div>
          ))}
        </div>

        <p className="pricing-fin__note">
          Contactez-nous avec votre situation et nous vérifions votre éligibilité aux aides disponibles.
        </p>

      </div>
    </section>
  )
}
