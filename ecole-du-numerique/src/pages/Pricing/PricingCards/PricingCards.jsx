import { Link } from 'react-router-dom'
import './PricingCards.css'

const plans = [
  {
    icon: 'person',
    label: 'Particulier',
    theme: 'violet',
    price: '400',
    currency: '€',
    pricePrefix: 'À partir de',
    desc: 'Idéal pour les indépendants et entrepreneurs qui souhaitent monter en compétences à leur rythme.',
    features: [
      'Accès à la formation choisie',
      'Support pédagogique inclus',
      'Attestation de formation',
      'Accès à la communauté',
    ],
    actions: [
      { label: 'Nous contacter directement', href: '/contact', primary: true },
    ],
  },
  {
    icon: 'business',
    label: 'Entreprise',
    theme: 'blue',
    badge: 'Recommandé',
    price: '1 500',
    currency: '€',
    pricePrefix: 'À partir de',
    desc: 'Pour les équipes et organisations qui souhaitent former leurs collaborateurs sur mesure.',
    features: [
      'Sessions illimitées',
      'Suivi personnalisé illimité',
      'Formation adaptée à votre secteur',
      'Sessions en groupe ou individuelles',
      'Attestations pour chaque participant',
      'Facturation entreprise',
    ],
    actions: [
      { label: 'Nous contacter directement', href: '/contact', primary: true },
    ],
  },
  {
    icon: 'tune',
    label: 'Sur Mesure',
    theme: 'white',
    price: null,
    priceLabel: 'Tarif sur demande',
    desc: 'Une solution entièrement personnalisée pour des besoins spécifiques ou des projets d\'envergure.',
    features: [
      'Programme entièrement personnalisé',
      'Formateur dédié à vos équipes',
      'Accompagnement de A à Z',
      'Flexibilité totale sur le format',
      'Devis détaillé fourni',
    ],
    actions: [
      { label: 'Nous contacter directement', href: '/contact', primary: true },
    ],
  },
]

export default function PricingCards() {
  return (
    <section id="pricing-cards" className="pricing-cards">
      <div className="pricing-cards__container">
        <div className="pricing-cards__grid">
          {plans.map(plan => (
            <div key={plan.label} className={`pricing-card pricing-card--${plan.theme}`}>

              {plan.badge && (
                <span className="pricing-card__badge">{plan.badge}</span>
              )}

              <div className="pricing-card__top">
                <span className="material-symbols-rounded pricing-card__icon">{plan.icon}</span>
                <p className="pricing-card__label">{plan.label}</p>

                <div className="pricing-card__price">
                  {plan.price ? (
                    <>
                      <span className="pricing-card__prefix">{plan.pricePrefix}</span>
                      <span className="pricing-card__amount">
                        {plan.price}<span className="pricing-card__currency">{plan.currency}</span>
                      </span>
                    </>
                  ) : (
                    <span className="pricing-card__on-demand">{plan.priceLabel}</span>
                  )}
                </div>

                <p className="pricing-card__desc">{plan.desc}</p>
              </div>

              <ul className="pricing-card__features">
                {plan.features.map(f => (
                  <li key={f} className="pricing-card__feature">
                    <span className="material-symbols-rounded pricing-card__check">check</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="pricing-card__actions">
                {plan.actions.map(a => (
                  <Link
                    key={a.label}
                    to={a.href}
                    className={`pricing-card__cta${a.primary ? '' : ' pricing-card__cta--outline'}`}
                  >
                    {a.label}
                  </Link>
                ))}
              </div>

            </div>
          ))}
        </div>

        <p className="pricing-cards__note">
          Les tarifs peuvent varier selon la formation choisie. Contactez-nous pour un devis personnalisé.
        </p>
      </div>
    </section>
  )
}
