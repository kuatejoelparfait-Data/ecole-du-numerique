import { useState } from 'react'
import './PricingFAQ.css'

const faqs = [
  {
    question: "Combien coûte une formation pour un particulier ?",
    answer: "Chaque formation est une session complète de 2 jours. Le tarif est de 590 € TTC en ligne et 690 € TTC en présentiel. Ce prix comprend les supports pédagogiques, les exercices pratiques et l'accompagnement pendant toute la session.",
  },
  {
    question: "Quelle est la différence entre inter-entreprises et intra-entreprise ?",
    answer: "L'inter-entreprises est une session ouverte où vos collaborateurs rejoignent d'autres professionnels : 690 € HTVA/participant en ligne, 790 € HTVA/participant en présentiel. L'intra-entreprise est une session privée organisée pour votre équipe uniquement : 2 400 € HTVA/groupe en ligne, 2 900 € HTVA/groupe en présentiel (jusqu'à 8 participants).",
  },
  {
    question: "Que comprend le tarif intra-entreprise ? Y a-t-il un supplément pour plus de 8 participants ?",
    answer: "Le tarif intra couvre une formation de 2 jours pour un groupe de 1 à 8 participants, avec adaptation légère des exemples à votre secteur. À partir du 9e participant, un supplément de 150 € HTVA par personne est appliqué.",
  },
  {
    question: "Qu'est-ce qu'une formation sur mesure et à partir de quel tarif ?",
    answer: "La formation sur mesure est construite autour de vos cas d'usage réels : automatisation interne, IA métier, data, cybersécurité ou transformation digitale. Elle inclut une analyse du besoin, l'adaptation du programme, des cas pratiques liés à votre métier et des supports personnalisés. Le tarif démarre à partir de 3 500 € HTVA.",
  },
  {
    question: "À quoi servent les abonnements mensuels ?",
    answer: "Les abonnements sont un accompagnement continu — ateliers collectifs, replays, ressources, veille IA, support Q/R. Ils complètent les formations complètes mais ne les remplacent pas (sauf l'abonnement Intensif particulier à 290 €/mois TTC qui inclut 1 formation complète par mois). Les abonnements entreprises vont de 590 € à 2 400 € HTVA/mois selon la taille de l'équipe.",
  },
  {
    question: "Puis-je bénéficier d'un financement ou d'une prise en charge ?",
    answer: "Oui, selon votre profil et votre pays, une partie ou la totalité des frais peut être prise en charge par des dispositifs publics (Bruxelles-Formation, OPCO, Fonds sectoriels…). Contactez-nous pour vérifier votre éligibilité gratuitement — nous vous accompagnons dans les démarches.",
  },
  {
    question: "Les prix affichés sont-ils TTC ou HTVA ?",
    answer: "Les prix destinés aux particuliers sont toujours affichés TTC (toutes taxes comprises). Les prix destinés aux entreprises sont affichés HTVA (hors TVA). La TVA applicable sera précisée dans votre devis.",
  },
  {
    question: "Comment obtenir un devis pour mon entreprise ?",
    answer: "Remplissez notre formulaire de contact en précisant vos besoins : nombre de participants, format souhaité (inter, intra, sur mesure), thématiques et niveau de votre équipe. Nous vous revenons sous 48h avec une proposition adaptée.",
  },
  {
    question: "Les attestations de formation sont-elles reconnues ?",
    answer: "Oui, une attestation officielle est remise à chaque participant à l'issue de chaque parcours. Elle peut être valorisée auprès d'employeurs, dans le cadre d'une reconversion ou pour justifier une formation continue.",
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`pricing-faq__item${open ? ' pricing-faq__item--open' : ''}`}>
      <button className="pricing-faq__question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <span className="pricing-faq__icon" aria-hidden="true">{open ? '×' : '+'}</span>
      </button>
      <div className="pricing-faq__answer">
        <div className="pricing-faq__answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function PricingFAQ() {
  return (
    <section className="pricing-faq">
      <div className="pricing-faq__container">
        <h2 className="pricing-faq__title">Questions fréquentes sur les tarifs</h2>
        <div className="pricing-faq__list">
          {faqs.map(item => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
