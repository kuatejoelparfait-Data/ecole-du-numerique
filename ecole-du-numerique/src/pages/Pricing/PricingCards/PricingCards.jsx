import { useState } from 'react'
import { Link } from 'react-router-dom'
import './PricingCards.css'

const plans = [
  {
    icon: 'person',
    label: 'Particulier',
    theme: 'green',
    unite: {
      price: '400',
      suffix: '/ formation',
      desc: 'Accédez à une formation de votre choix, à votre rythme. Idéal pour tester ou cibler une compétence précise.',
    },
    pack: {
      price: '720',
      priceOld: '800',
      suffix: '/ mois · 2 formations',
      saving: 'Économie de 80 €/mois',
      desc: 'Accédez à 2 formations par mois avec 10 % de réduction. Le rythme idéal pour progresser régulièrement.',
    },
    features: [
      'Accès à la formation choisie',
      'Support pédagogique inclus',
      'Attestation de formation',
      'Accès à la communauté apprenante',
    ],
    packFeatures: [
      '2 formations au choix par mois',
      'Support pédagogique inclus',
      'Attestations de formation',
      'Accès à la communauté apprenante',
      '10 % de réduction appliquée',
    ],
    actions: [{ label: 'Nous contacter', href: '/contact', primary: true }],
  },
  {
    icon: 'business',
    label: 'Entreprise',
    theme: 'dark',
    badge: 'Recommandé',
    unite: {
      price: '600',
      suffix: '/ formation · groupe',
      note: 'Minimum 5 participants',
      desc: 'Formez votre équipe sur une thématique ciblée. Tarif par groupe avec un minimum de participants requis.',
    },
    pack: {
      price: '1 080',
      priceOld: '1 200',
      suffix: '/ mois · 2 formations',
      saving: 'Économie de 120 €/mois',
      note: 'Minimum 5 participants par session',
      desc: '2 formations par mois pour vos équipes avec 10 % de réduction. La solution idéale pour un plan de formation continu.',
    },
    features: [
      'Session pour votre groupe (min. 5 pers.)',
      'Formation adaptée à votre secteur',
      'Suivi pédagogique personnalisé',
      'Attestations pour chaque participant',
      'Facturation entreprise',
    ],
    packFeatures: [
      '2 formations/mois pour votre groupe',
      'Minimum 5 participants par session',
      'Formations adaptées à votre secteur',
      'Suivi pédagogique personnalisé',
      'Attestations pour chaque participant',
      'Facturation entreprise · 10 % de réduction',
    ],
    actions: [{ label: 'Demander un devis', href: '/contact', primary: true }],
  },
  {
    icon: 'tune',
    label: 'Sur Mesure',
    theme: 'white',
    unite: {
      price: null,
      priceLabel: 'Tarif sur demande',
      desc: 'Un programme entièrement personnalisé pour des besoins spécifiques ou des projets d\'envergure.',
    },
    pack: {
      price: null,
      priceLabel: 'Tarif sur demande',
      desc: 'Un abonnement sur mesure conçu pour vos volumes et vos objectifs de formation spécifiques.',
    },
    features: [
      'Programme entièrement personnalisé',
      'Formateur dédié à vos équipes',
      'Accompagnement de A à Z',
      'Flexibilité totale sur le format',
      'Devis détaillé fourni sous 48h',
    ],
    packFeatures: [
      'Volume de formations selon vos besoins',
      'Formateur(s) dédié(s)',
      'Accompagnement continu',
      'Flexibilité totale sur le format',
      'Devis détaillé fourni sous 48h',
    ],
    actions: [{ label: 'Obtenir un devis', href: '/contact', primary: true }],
  },
]

export default function PricingCards() {
  const [mode, setMode] = useState('unite') // 'unite' | 'pack'

  return (
    <section id="pricing-cards" className="pricing-cards">
      <div className="pricing-cards__container">

        {/* Toggle */}
        <div className="pricing-toggle">
          <button
            className={`pricing-toggle__btn${mode === 'unite' ? ' pricing-toggle__btn--active' : ''}`}
            onClick={() => setMode('unite')}
          >
            Formation à l'unité
          </button>
          <button
            className={`pricing-toggle__btn${mode === 'pack' ? ' pricing-toggle__btn--active' : ''}`}
            onClick={() => setMode('pack')}
          >
            Pack 2 / mois
            <span className="pricing-toggle__badge">−10 %</span>
          </button>
        </div>

        <div className="pricing-cards__grid">
          {plans.map(plan => {
            const info = mode === 'pack' ? plan.pack : plan.unite
            const features = mode === 'pack' ? plan.packFeatures : plan.features
            return (
              <div key={plan.label} className={`pricing-card pricing-card--${plan.theme}`}>

                {plan.badge && (
                  <span className="pricing-card__badge">{plan.badge}</span>
                )}

                <div className="pricing-card__top">
                  <span className="material-symbols-rounded pricing-card__icon">{plan.icon}</span>
                  <p className="pricing-card__label">{plan.label}</p>

                  <div className="pricing-card__price">
                    {info.price ? (
                      <>
                        {mode === 'pack' && info.priceOld && (
                          <span className="pricing-card__old">{info.priceOld} €</span>
                        )}
                        <div className="pricing-card__amount-row">
                          <span className="pricing-card__amount">{info.price}</span>
                          <span className="pricing-card__currency">€</span>
                        </div>
                        <span className="pricing-card__suffix">{info.suffix}</span>
                        {info.note && (
                          <span className="pricing-card__note">{info.note}</span>
                        )}
                        {mode === 'pack' && info.saving && (
                          <span className="pricing-card__saving">{info.saving}</span>
                        )}
                      </>
                    ) : (
                      <span className="pricing-card__on-demand">{info.priceLabel}</span>
                    )}
                  </div>

                  <p className="pricing-card__desc">{info.desc}</p>
                </div>

                <ul className="pricing-card__features">
                  {features.map(f => (
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
            )
          })}
        </div>

        <p className="pricing-cards__note">
          Les tarifs s'entendent hors taxes. Contactez-nous pour un devis personnalisé selon votre projet.
        </p>
      </div>
    </section>
  )
}
