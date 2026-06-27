import { useState } from 'react'
import { Link } from 'react-router-dom'
import './PricingCards.css'

// ── Abonnements ──────────────────────────────────────────────────────────────

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
    items: ['Ateliers mensuels + exercices', 'Support léger inclus', 'Réduction de 20 % sur les formations', 'Accès aux replays'],
  },
  {
    name: 'Intensif',
    price: '290 €',
    unit: '/ mois TTC',
    note: 'Engagement 3 mois',
    items: ['1 formation complète par mois', 'Accès communauté & ressources', 'Session Q/R mensuelle dédiée'],
  },
]

const abonnementsEntr = [
  {
    name: 'Starter',
    price: '590 €',
    unit: '/ mois HTVA',
    items: ["Jusqu'à 3 collaborateurs", '1 atelier collectif / mois', 'Replays & veille IA'],
  },
  {
    name: 'Team',
    price: '1 200 €',
    unit: '/ mois HTVA',
    highlight: true,
    items: ["Jusqu'à 8 collaborateurs", '1 atelier privé de 2 h / mois', 'Support Q/R', 'Ressources internes'],
  },
  {
    name: 'Growth',
    price: '2 400 €',
    unit: '/ mois HTVA',
    items: ["Jusqu'à 15 collaborateurs", '1 demi-journée privée / mois', "Accompagnement cas d'usage", 'Roadmap IA'],
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
  const [aboTab, setAboTab] = useState('particuliers')

  return (
    <section id="pricing-cards" className="pricing-cards">
      <div className="pricing-cards__container">

        {/* ── 1. PARTICULIERS ──────────────────────────────────── */}
        <div className="pricing-block" id="particuliers">
          <div className="pricing-block__header">
            <span className="pricing-block__tag">Particuliers</span>
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
              <p className="pricing-offer__unit">Formation complète 2 jours</p>
            </div>
            <div className="pricing-offer pricing-offer--accent">
              <div className="pricing-offer__top">
                <span className="material-symbols-rounded pricing-offer__icon">location_on</span>
                <p className="pricing-offer__label">Présentiel</p>
              </div>
              <p className="pricing-offer__price">690 € <span className="pricing-offer__tax">TTC</span></p>
              <p className="pricing-offer__unit">Formation complète 2 jours</p>
            </div>
          </div>
          <p className="pricing-block__note">
            <span className="material-symbols-rounded">info</span>
            Le prix comprend la formation complète de 2 jours, les supports pédagogiques, les exercices pratiques et l'accompagnement pendant la session.
          </p>
          <Link to="/formations-particuliers" className="pricing-block__cta">S'inscrire à une formation</Link>
        </div>

        {/* ── 2. INTER-ENTREPRISES ─────────────────────────────── */}
        <div className="pricing-block pricing-block--dark" id="inter-entreprises">
          <div className="pricing-block__header">
            <span className="pricing-block__tag pricing-block__tag--light">Inter-entreprises</span>
            <h2 className="pricing-block__title pricing-block__title--light">Formations inter-entreprises</h2>
            <p className="pricing-block__sub pricing-block__sub--light">
              Inscrivez un ou plusieurs collaborateurs à une session ouverte avec d'autres professionnels. Idéal pour former rapidement une personne ou une petite équipe sans organiser une session privée.
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

        {/* ── 3. INTRA-ENTREPRISE ──────────────────────────────── */}
        <div className="pricing-block pricing-block--slate" id="intra-entreprise">
          <div className="pricing-block__header">
            <span className="pricing-block__tag pricing-block__tag--light">Intra-entreprise</span>
            <h2 className="pricing-block__title pricing-block__title--light">Formations intra-entreprise</h2>
            <p className="pricing-block__sub pricing-block__sub--light">
              Une formation privée pour votre entreprise, adaptée au niveau de vos équipes, à vos outils et à vos objectifs opérationnels.
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
            <li><span className="material-symbols-rounded">check</span>Formation complète de 2 jours</li>
          </ul>
          <Link to="/contact" className="pricing-block__cta pricing-block__cta--white">Demander un devis entreprise</Link>
        </div>

        {/* ── 4. SUR MESURE ────────────────────────────────────── */}
        <div className="pricing-block" id="sur-mesure">
          <div className="pricing-block__header">
            <span className="pricing-block__tag">Sur mesure</span>
            <h2 className="pricing-block__title">Formations sur mesure</h2>
            <p className="pricing-block__sub">
              Pour les entreprises qui souhaitent une formation construite autour de leurs cas d'usage réels : automatisation interne, IA métier, analyse de données, productivité, marketing, cybersécurité ou transformation digitale.
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

        {/* ── 5. TABLEAU RÉCAPITULATIF ─────────────────────────── */}
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

        {/* ── 6. ABONNEMENTS ───────────────────────────────────── */}
        <div className="pricing-abo-section">
          <div className="pricing-abo-section__header">
            <h2 className="pricing-abo-section__title">Abonnements mensuels</h2>
            <p className="pricing-abo-section__sub">
              Un accompagnement continu pour progresser chaque mois, accéder à des ateliers, poser vos questions et rester à jour sur les outils Tech & IA. Les abonnements complètent les formations — ils ne les remplacent pas.
            </p>
            <div className="pricing-abo-section__toggle">
              <button
                className={`pricing-abo-section__btn${aboTab === 'particuliers' ? ' pricing-abo-section__btn--active' : ''}`}
                onClick={() => setAboTab('particuliers')}
              >Particuliers</button>
              <button
                className={`pricing-abo-section__btn${aboTab === 'entreprises' ? ' pricing-abo-section__btn--active' : ''}`}
                onClick={() => setAboTab('entreprises')}
              >Entreprises</button>
            </div>
          </div>
          <AboGrid plans={aboTab === 'particuliers' ? abonnementsPart : abonnementsEntr} />
        </div>

        {/* ── COACHING ─────────────────────────────────────────── */}
        <div className="pricing-coaching">
          <span className="material-symbols-rounded pricing-coaching__icon">support_agent</span>
          <div className="pricing-coaching__body">
            <p className="pricing-coaching__label">Coaching individuel / dirigeant</p>
            <p className="pricing-coaching__price">150 € HTVA <span className="pricing-coaching__note">/ heure · minimum 2 heures</span></p>
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
