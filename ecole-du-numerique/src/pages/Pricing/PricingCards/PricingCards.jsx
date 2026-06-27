import { useState } from 'react'
import { Link } from 'react-router-dom'
import './PricingCards.css'

const simpleCards = [
  {
    icon: 'person',
    label: 'Particulier',
    price: '390 €',
    unit: '/ formation',
    tax: 'TTC',
    color: 'green',
    desc: 'Accédez à la formation de votre choix à votre rythme.',
    detail: 'Pack 2 formations : 700 € TTC (au lieu de 780 €)',
  },
  {
    icon: 'groups',
    label: 'Inter-entreprises',
    price: '490 €',
    unit: '/ participant',
    tax: 'HTVA',
    color: 'dark',
    desc: 'Envoyez un collaborateur dans une session ouverte avec d\'autres participants.',
    detail: 'Pack 2 formations : 880 € HTVA / participant',
  },
  {
    icon: 'corporate_fare',
    label: 'Intra-entreprise',
    price: '1 800 €',
    unit: '/ journée',
    tax: 'HTVA',
    color: 'slate',
    desc: 'Session privée pour votre groupe, jusqu\'à 8 personnes incluses.',
    detail: '+120 € HTVA par participant à partir du 9e',
  },
  {
    icon: 'tune',
    label: 'Sur mesure',
    price: 'À partir de 2 400 €',
    unit: '/ journée',
    tax: 'HTVA',
    color: 'white',
    desc: 'Adaptation à votre secteur, cas pratiques, supports personnalisés.',
    detail: 'Sur mesure avancé (IA métier, audit) : 3 500 € HTVA / journée',
  },
  {
    icon: 'star',
    label: 'Abonnement particulier',
    price: 'À partir de 49 €',
    unit: '/ mois',
    tax: 'TTC',
    color: 'green',
    desc: 'Ateliers collectifs, replays, ressources et veille IA inclus.',
    detail: 'Pro 149 €/mois · Intensif 290 €/mois (1 formation complète)',
  },
  {
    icon: 'domain',
    label: 'Abonnement entreprise',
    price: 'À partir de 590 €',
    unit: '/ mois',
    tax: 'HTVA',
    color: 'dark',
    desc: 'Jusqu\'à 3 collaborateurs, ateliers collectifs et ressources incluses.',
    detail: 'Team 1 200 € (8 collab.) · Growth 2 400 € (15 collab.)',
  },
]

const abonnementsPart = [
  {
    name: 'Découverte',
    price: '49 €',
    unit: '/ mois TTC',
    items: ['1 atelier collectif mensuel', 'Accès aux replays', 'Ressources & veille IA'],
  },
  {
    name: 'Pro',
    price: '149 €',
    unit: '/ mois TTC',
    highlight: true,
    items: ['1 atelier mensuel + exercices', 'Support léger inclus', 'Remise de 20 % sur formations', 'Accès aux replays'],
  },
  {
    name: 'Intensif',
    price: '290 €',
    unit: '/ mois TTC',
    note: 'Engagement 3 mois',
    items: ['1 formation complète par mois', 'Accès ressources & communauté', 'Q&R mensuelle dédiée'],
  },
]

const abonnementsEntr = [
  {
    name: 'Starter',
    price: '590 €',
    unit: '/ mois HTVA',
    items: ['Jusqu\'à 3 collaborateurs', '1 atelier collectif / mois', 'Veille IA & replays'],
  },
  {
    name: 'Team',
    price: '1 200 €',
    unit: '/ mois HTVA',
    highlight: true,
    items: ['Jusqu\'à 8 collaborateurs', '1 atelier privé de 2 h / mois', 'Support Q&R', 'Ressources internes'],
  },
  {
    name: 'Growth',
    price: '2 400 €',
    unit: '/ mois HTVA',
    items: ['Jusqu\'à 15 collaborateurs', '1 demi-journée privée / mois', 'Accompagnement cas d\'usage', 'Roadmap IA'],
  },
]

function AbonnementSection({ title, plans }) {
  return (
    <div className="pricing-abo">
      <h3 className="pricing-abo__title">{title}</h3>
      <div className="pricing-abo__grid">
        {plans.map(p => (
          <div key={p.name} className={`pricing-abo__card${p.highlight ? ' pricing-abo__card--highlight' : ''}`}>
            <p className="pricing-abo__name">{p.name}</p>
            <div className="pricing-abo__price-block">
              <span className="pricing-abo__price">{p.price}</span>
              <span className="pricing-abo__unit">{p.unit}</span>
            </div>
            {p.note && <span className="pricing-abo__note">{p.note}</span>}
            <ul className="pricing-abo__items">
              {p.items.map(i => (
                <li key={i} className="pricing-abo__item">
                  <span className="material-symbols-rounded pricing-abo__check">check_circle</span>
                  {i}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="pricing-abo__cta">Démarrer</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PricingCards() {
  const [tab, setTab] = useState('particuliers')

  return (
    <section id="pricing-cards" className="pricing-cards">
      <div className="pricing-cards__container">

        {/* ── 6 cartes simples ───────────────── */}
        <div className="pricing-simple__grid">
          {simpleCards.map(card => (
            <div key={card.label} className={`pricing-simple__card pricing-simple__card--${card.color}`}>
              <div className="pricing-simple__top">
                <span className="material-symbols-rounded pricing-simple__icon">{card.icon}</span>
                <p className="pricing-simple__label">{card.label}</p>
              </div>
              <div className="pricing-simple__price-block">
                <span className="pricing-simple__price">{card.price}</span>
                <span className="pricing-simple__unit">{card.unit} · <strong>{card.tax}</strong></span>
              </div>
              <p className="pricing-simple__desc">{card.desc}</p>
              <p className="pricing-simple__detail">{card.detail}</p>
              <Link to="/contact" className="pricing-simple__cta">Nous contacter</Link>
            </div>
          ))}
        </div>

        {/* ── Séparateur abonnements ─────────── */}
        <div className="pricing-abo-section">
          <div className="pricing-abo-section__header">
            <h2 className="pricing-abo-section__title">Abonnements mensuels</h2>
            <p className="pricing-abo-section__sub">Progressez en continu avec un accès régulier à nos formations et ressources.</p>
            <div className="pricing-abo-section__toggle">
              <button
                className={`pricing-abo-section__btn${tab === 'particuliers' ? ' pricing-abo-section__btn--active' : ''}`}
                onClick={() => setTab('particuliers')}
              >
                Particuliers
              </button>
              <button
                className={`pricing-abo-section__btn${tab === 'entreprises' ? ' pricing-abo-section__btn--active' : ''}`}
                onClick={() => setTab('entreprises')}
              >
                Entreprises
              </button>
            </div>
          </div>

          {tab === 'particuliers'
            ? <AbonnementSection title="" plans={abonnementsPart} />
            : <AbonnementSection title="" plans={abonnementsEntr} />
          }
        </div>

        {/* ── Coaching ──────────────────────── */}
        <div className="pricing-coaching">
          <span className="material-symbols-rounded pricing-coaching__icon">support_agent</span>
          <div className="pricing-coaching__body">
            <p className="pricing-coaching__label">Coaching individuel / dirigeant</p>
            <p className="pricing-coaching__price">150 € HTVA / heure <span className="pricing-coaching__note">· minimum 2 heures</span></p>
            <p className="pricing-coaching__desc">Accompagnement personnalisé sur votre stratégie, vos outils ou votre transformation digitale.</p>
          </div>
          <Link to="/contact" className="pricing-coaching__cta">Réserver</Link>
        </div>

        <p className="pricing-cards__note">
          Tous les prix HTVA s'entendent hors taxe sur la valeur ajoutée. Contactez-nous pour un devis personnalisé sous 48 h.
        </p>

      </div>
    </section>
  )
}
