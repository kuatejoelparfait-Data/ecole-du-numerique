import { Link } from 'react-router-dom'
import './PricingCards.css'

const plans = [
  {
    icon: 'person',
    label: 'Particulier',
    highlight: 'fp',
    price: '297',
    desc: 'Idéal pour les indépendants et entrepreneurs qui souhaitent monter en compétences à leur rythme.',
    features: [
      'Accès à la formation choisie',
      'Support pédagogique inclus',
      'Attestation de formation',
      'Accès à la communauté',
    ],
    ctaPrimary: 'Choisir ce pack',
    ctaSecondary: 'Voir les formations',
    hrefPrimary: '/contact',
    hrefSecondary: '/formations-particuliers',
  },
  {
    icon: 'business',
    label: 'Entreprise',
    highlight: 'fe',
    price: '497',
    desc: 'Pour les équipes et organisations qui souhaitent former leurs collaborateurs sur mesure.',
    features: [
      'Formation adaptée à votre secteur',
      'Sessions en groupe ou individuelles',
      'Suivi personnalisé',
      'Attestations pour chaque participant',
      'Facturation entreprise',
    ],
    ctaPrimary: 'Choisir ce pack',
    ctaSecondary: 'Voir les formations',
    hrefPrimary: '/contact',
    hrefSecondary: '/formations-entreprises',
  },
  {
    icon: 'event',
    label: 'Workshop',
    price: '97',
    desc: 'Des sessions courtes et intensives pour découvrir une thématique digitale en une demi-journée.',
    features: [
      'Session de 3h à 4h',
      'Exercices pratiques',
      'Supports de cours inclus',
      'Petit groupe (max 15 personnes)',
    ],
    ctaPrimary: 'Choisir ce pack',
    ctaSecondary: 'Voir les workshops',
    hrefPrimary: '/contact',
    hrefSecondary: '/workshops',
  },
]

export default function PricingCards() {
  return (
    <section id="pricing-cards" className="pricing-cards">
      <div className="pricing-cards__container">
        <div className="pricing-cards__grid">
          {plans.map(plan => (
            <div key={plan.label} className={`pricing-card${plan.highlight ? ` pricing-card--${plan.highlight}` : ''}`}>
              <div className="pricing-card__top">
                <span className="material-symbols-rounded pricing-card__icon">{plan.icon}</span>
                <p className="pricing-card__label">{plan.label}</p>
                <div className="pricing-card__price">
                  <span className="pricing-card__from">À partir de</span>
                  <span className="pricing-card__amount">{plan.price}€</span>
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
                <Link to={plan.hrefPrimary} className="pricing-card__cta">
                  {plan.ctaPrimary}
                </Link>
                <Link to={plan.hrefSecondary} className="pricing-card__cta pricing-card__cta--outline">
                  {plan.ctaSecondary}
                </Link>
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
