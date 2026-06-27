import { useState } from 'react'
import { Link } from 'react-router-dom'
import './PricingCards.css'

// ── Données abonnements ───────────────────────────────────────────────────────

const abonnementsPart = [
  {
    name: 'Découverte',
    price: '49 €',
    unit: '/ mois TTC',
    items: [
      '1 atelier collectif mensuel (2 h)',
      'Accès aux replays des ateliers passés',
      'Ressources & veille IA chaque semaine',
    ],
  },
  {
    name: 'Pro',
    price: '149 €',
    unit: '/ mois TTC',
    highlight: true,
    items: [
      'Ateliers mensuels thématiques + exercices',
      'Support léger par messagerie',
      'Réduction de 20 % sur les formations complètes',
      'Accès aux replays de tous les ateliers',
    ],
  },
  {
    name: 'Intensif',
    price: '290 €',
    unit: '/ mois TTC',
    note: 'Engagement 3 mois',
    items: [
      '1 formation complète incluse par mois',
      'Ateliers collectifs + communauté',
      'Session Q/R mensuelle dédiée (1 h)',
    ],
  },
]

const abonnementsEntr = [
  {
    name: 'Starter',
    price: '590 €',
    unit: '/ mois HTVA',
    items: [
      "Jusqu'à 3 collaborateurs",
      '1 atelier collectif mensuel (2 h)',
      'Replays & veille IA',
    ],
  },
  {
    name: 'Team',
    price: '1 200 €',
    unit: '/ mois HTVA',
    highlight: true,
    items: [
      "Jusqu'à 8 collaborateurs",
      '1 atelier privé de 2 h / mois',
      'Support Q/R dédié',
      'Ressources internes partagées',
    ],
  },
  {
    name: 'Growth',
    price: '2 400 €',
    unit: '/ mois HTVA',
    items: [
      "Jusqu'à 15 collaborateurs",
      '1 demi-journée d\'atelier privé / mois',
      "Accompagnement cas d'usage métier",
      'Roadmap IA personnalisée',
    ],
  },
]

function AboGrid({ plans }) {
  return (
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
  )
}

export default function PricingCards() {
  const [tab, setTab] = useState('particuliers')

  return (
    <section id="pricing-cards" className="pricing-cards">
      <div className="pricing-cards__container">

        {/* ── Filtre principal ─────────────────────────────────── */}
        <div className="pricing-tabs">
          <button
            className={`pricing-tabs__btn${tab === 'particuliers' ? ' pricing-tabs__btn--active' : ''}`}
            onClick={() => setTab('particuliers')}
          >
            <span className="material-symbols-rounded">person</span>
            Particuliers
          </button>
          <button
            className={`pricing-tabs__btn${tab === 'entreprises' ? ' pricing-tabs__btn--active' : ''}`}
            onClick={() => setTab('entreprises')}
          >
            <span className="material-symbols-rounded">business</span>
            Entreprises
          </button>
        </div>

        {/* ══════════════════════════════════════════════════════ */}
        {/* VUE PARTICULIERS                                       */}
        {/* ══════════════════════════════════════════════════════ */}
        {tab === 'particuliers' && (
          <>
            {/* 1. Abonnements ateliers EN PREMIER */}
            <div className="pricing-abo-section">
              <div className="pricing-abo-section__header">
                <span className="pricing-abo-section__pretitle">Abonnements mensuels</span>
                <h2 className="pricing-abo-section__title">Des ateliers pratiques chaque mois</h2>
                <p className="pricing-abo-section__sub">
                  Les abonnements donnent accès à des <strong>ateliers collectifs thématiques</strong>, pas à des formations complètes. Chaque atelier dure 2 heures et porte sur un outil ou une pratique concrète : IA, automatisation, marketing, création de contenu…
                </p>
                <div className="pricing-abo-section__disclaimer">
                  <span className="material-symbols-rounded">info</span>
                  Les abonnements <strong>ne remplacent pas</strong> les formations complètes de 2 jours. Ils s'y ajoutent pour maintenir une progression régulière.
                </div>
              </div>
              <AboGrid plans={abonnementsPart} />
            </div>

            {/* 2. Formation complète particulier */}
            <div className="pricing-block" id="particuliers-formation">
              <div className="pricing-block__header">
                <span className="pricing-block__tag">Formation complète</span>
                <h2 className="pricing-block__title">Formations pour particuliers</h2>
                <p className="pricing-block__sub">
                  Des formations complètes de 2 jours pour apprendre concrètement les compétences Tech & IA : intelligence artificielle, automatisation, data, création de site web, cybersécurité ou marketing digital.
                </p>
              </div>
              <div className="pricing-row">
                <div className="pricing-offer">
                  <div className="pricing-offer__top">
                    <span className="material-symbols-rounded pricing-offer__icon">laptop</span>
                    <p className="pricing-offer__label">En ligne</p>
                  </div>
                  <p className="pricing-offer__price">590 € <span className="pricing-offer__tax">TTC</span></p>
                  <p className="pricing-offer__unit">Formation complète · 2 jours</p>
                </div>
                <div className="pricing-offer pricing-offer--accent">
                  <div className="pricing-offer__top">
                    <span className="material-symbols-rounded pricing-offer__icon">location_on</span>
                    <p className="pricing-offer__label">Présentiel</p>
                  </div>
                  <p className="pricing-offer__price">690 € <span className="pricing-offer__tax">TTC</span></p>
                  <p className="pricing-offer__unit">Formation complète · 2 jours</p>
                </div>
              </div>
              <p className="pricing-block__note">
                <span className="material-symbols-rounded">info</span>
                Inclus : supports pédagogiques, exercices pratiques, accompagnement pendant la session et attestation de formation.
              </p>
              <Link to="/formations-particuliers" className="pricing-block__cta">Voir les formations disponibles</Link>
            </div>

            {/* 3. Coaching */}
            <div className="pricing-coaching">
              <span className="material-symbols-rounded pricing-coaching__icon">support_agent</span>
              <div className="pricing-coaching__body">
                <p className="pricing-coaching__label">Coaching individuel</p>
                <p className="pricing-coaching__price">150 € <span className="pricing-coaching__note">TTC / heure · minimum 2 heures</span></p>
                <p className="pricing-coaching__desc">Accompagnement personnalisé sur votre projet, vos outils ou votre reconversion.</p>
              </div>
              <Link to="/contact" className="pricing-coaching__cta">Réserver</Link>
            </div>
          </>
        )}

        {/* ══════════════════════════════════════════════════════ */}
        {/* VUE ENTREPRISES                                        */}
        {/* ══════════════════════════════════════════════════════ */}
        {tab === 'entreprises' && (
          <>
            {/* 1. Abonnements ateliers EN PREMIER */}
            <div className="pricing-abo-section">
              <div className="pricing-abo-section__header">
                <span className="pricing-abo-section__pretitle">Abonnements mensuels</span>
                <h2 className="pricing-abo-section__title">Des ateliers privés pour vos équipes</h2>
                <p className="pricing-abo-section__sub">
                  Les abonnements donnent accès à des <strong>ateliers collectifs ou privés</strong>, pas à des formations complètes. Chaque atelier porte sur un outil ou un cas d'usage métier : automatisation, IA, data, marketing digital, productivité…
                </p>
                <div className="pricing-abo-section__disclaimer">
                  <span className="material-symbols-rounded">info</span>
                  Les abonnements <strong>ne remplacent pas</strong> les formations inter ou intra-entreprise. Ils permettent un accompagnement continu entre les sessions.
                </div>
              </div>
              <AboGrid plans={abonnementsEntr} />
            </div>

            {/* 2. Inter-entreprises */}
            <div className="pricing-block pricing-block--dark" id="inter-entreprises">
              <div className="pricing-block__header">
                <span className="pricing-block__tag pricing-block__tag--light">Formation complète</span>
                <h2 className="pricing-block__title pricing-block__title--light">Inter-entreprises</h2>
                <p className="pricing-block__sub pricing-block__sub--light">
                  Inscrivez un ou plusieurs collaborateurs à une session ouverte avec d'autres professionnels. Idéal pour former rapidement une personne ou une petite équipe.
                </p>
              </div>
              <div className="pricing-row">
                <div className="pricing-offer pricing-offer--glass">
                  <div className="pricing-offer__top">
                    <span className="material-symbols-rounded pricing-offer__icon">laptop</span>
                    <p className="pricing-offer__label pricing-offer__label--light">En ligne</p>
                  </div>
                  <p className="pricing-offer__price pricing-offer__price--light">690 € <span className="pricing-offer__tax pricing-offer__tax--dim">HTVA</span></p>
                  <p className="pricing-offer__unit pricing-offer__unit--light">par participant · 2 jours</p>
                </div>
                <div className="pricing-offer pricing-offer--glass pricing-offer--glass-accent">
                  <div className="pricing-offer__top">
                    <span className="material-symbols-rounded pricing-offer__icon">location_on</span>
                    <p className="pricing-offer__label pricing-offer__label--light">Présentiel</p>
                  </div>
                  <p className="pricing-offer__price pricing-offer__price--light">790 € <span className="pricing-offer__tax pricing-offer__tax--dim">HTVA</span></p>
                  <p className="pricing-offer__unit pricing-offer__unit--light">par participant · 2 jours</p>
                </div>
              </div>
              <p className="pricing-block__note pricing-block__note--light">
                <span className="material-symbols-rounded">info</span>
                Tarif par participant pour une formation complète de 2 jours.
              </p>
              <Link to="/contact" className="pricing-block__cta pricing-block__cta--white">Demander les prochaines dates</Link>
            </div>

            {/* 3. Intra-entreprise */}
            <div className="pricing-block pricing-block--slate" id="intra-entreprise">
              <div className="pricing-block__header">
                <span className="pricing-block__tag pricing-block__tag--light">Formation complète</span>
                <h2 className="pricing-block__title pricing-block__title--light">Intra-entreprise</h2>
                <p className="pricing-block__sub pricing-block__sub--light">
                  Une session privée pour votre équipe, adaptée à votre niveau, vos outils et vos objectifs opérationnels.
                </p>
              </div>
              <div className="pricing-row">
                <div className="pricing-offer pricing-offer--glass">
                  <div className="pricing-offer__top">
                    <span className="material-symbols-rounded pricing-offer__icon">laptop</span>
                    <p className="pricing-offer__label pricing-offer__label--light">En ligne</p>
                  </div>
                  <p className="pricing-offer__price pricing-offer__price--light">2 400 € <span className="pricing-offer__tax pricing-offer__tax--dim">HTVA</span></p>
                  <p className="pricing-offer__unit pricing-offer__unit--light">par groupe · 2 jours</p>
                </div>
                <div className="pricing-offer pricing-offer--glass pricing-offer--glass-accent">
                  <div className="pricing-offer__top">
                    <span className="material-symbols-rounded pricing-offer__icon">location_on</span>
                    <p className="pricing-offer__label pricing-offer__label--light">Présentiel</p>
                  </div>
                  <p className="pricing-offer__price pricing-offer__price--light">2 900 € <span className="pricing-offer__tax pricing-offer__tax--dim">HTVA</span></p>
                  <p className="pricing-offer__unit pricing-offer__unit--light">par groupe · 2 jours</p>
                </div>
              </div>
              <ul className="pricing-block__conditions">
                <li><span className="material-symbols-rounded">check</span>Jusqu'à 8 participants inclus</li>
                <li><span className="material-symbols-rounded">check</span>+150 € HTVA / participant à partir du 9e</li>
                <li><span className="material-symbols-rounded">check</span>Adaptation légère des exemples au secteur incluse</li>
              </ul>
              <Link to="/contact" className="pricing-block__cta pricing-block__cta--white">Demander un devis</Link>
            </div>

            {/* 4. Sur mesure */}
            <div className="pricing-block" id="sur-mesure">
              <div className="pricing-block__header">
                <span className="pricing-block__tag">Sur mesure</span>
                <h2 className="pricing-block__title">Formation sur mesure</h2>
                <p className="pricing-block__sub">
                  Construite autour de vos cas d'usage réels : automatisation interne, IA métier, data, cybersécurité ou transformation digitale.
                </p>
              </div>
              <div className="pricing-surmesure">
                <div className="pricing-surmesure__price-block">
                  <p className="pricing-surmesure__from">À partir de</p>
                  <p className="pricing-surmesure__price">3 500 € <span className="pricing-surmesure__tax">HTVA</span></p>
                  <p className="pricing-surmesure__unit">/ journée</p>
                </div>
                <ul className="pricing-surmesure__includes">
                  <li><span className="material-symbols-rounded">check_circle</span>Analyse du besoin</li>
                  <li><span className="material-symbols-rounded">check_circle</span>Adaptation du programme</li>
                  <li><span className="material-symbols-rounded">check_circle</span>Cas pratiques liés au métier</li>
                  <li><span className="material-symbols-rounded">check_circle</span>Supports personnalisés</li>
                  <li><span className="material-symbols-rounded">check_circle</span>Recommandations opérationnelles</li>
                </ul>
              </div>
              <p className="pricing-block__note">
                <span className="material-symbols-rounded">info</span>
                Un cadrage pédagogique peut être proposé avant la formation pour définir les objectifs, le niveau des participants et les livrables attendus.
              </p>
              <Link to="/contact" className="pricing-block__cta">Construire une formation sur mesure</Link>
            </div>

            {/* 5. Coaching dirigeant */}
            <div className="pricing-coaching">
              <span className="material-symbols-rounded pricing-coaching__icon">support_agent</span>
              <div className="pricing-coaching__body">
                <p className="pricing-coaching__label">Coaching individuel / dirigeant</p>
                <p className="pricing-coaching__price">150 € <span className="pricing-coaching__note">HTVA / heure · minimum 2 heures</span></p>
                <p className="pricing-coaching__desc">Accompagnement personnalisé sur votre stratégie, vos outils ou votre transformation digitale.</p>
              </div>
              <Link to="/contact" className="pricing-coaching__cta">Réserver</Link>
            </div>
          </>
        )}

        {/* ── Tableau récap (commun) ───────────────────────────── */}
        <div className="pricing-table-wrap">
          <h2 className="pricing-table-wrap__title">Récapitulatif des tarifs</h2>
          <div className="pricing-table-scroll">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Format</th>
                  <th>En ligne</th>
                  <th>Présentiel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Particulier</strong> — 2 jours</td>
                  <td>590 € TTC</td>
                  <td>690 € TTC</td>
                </tr>
                <tr className="pricing-table__row--alt">
                  <td><strong>Inter-entreprises</strong> — 2 jours</td>
                  <td>690 € HTVA / participant</td>
                  <td>790 € HTVA / participant</td>
                </tr>
                <tr>
                  <td><strong>Intra-entreprise</strong> — 2 jours</td>
                  <td>2 400 € HTVA / groupe</td>
                  <td>2 900 € HTVA / groupe</td>
                </tr>
                <tr className="pricing-table__row--alt">
                  <td><strong>Sur mesure</strong></td>
                  <td colSpan="2" className="pricing-table__center">À partir de 3 500 € HTVA / journée</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="pricing-table-wrap__note">
            Les tarifs intra-entreprise sont valables jusqu'à 8 participants. Au-delà, un supplément de 150 € HTVA par participant est appliqué.
          </p>
        </div>

        <p className="pricing-cards__note">
          Tous les prix HTVA s'entendent hors taxe sur la valeur ajoutée. Contactez-nous pour un devis personnalisé sous 48 h.
        </p>

      </div>
    </section>
  )
}
