import { useState } from 'react'
import './PricingFAQ.css'

const faqs = [
  {
    question: "Quelle est la différence entre « Formation à l'unité » et « Pack 2 / mois » ?",
    answer: "La formation à l'unité vous donne accès à une seule formation de votre choix : 400 € pour les particuliers, 600 € par groupe pour les entreprises. Le Pack 2 / mois vous permet de suivre 2 formations par mois avec une réduction de 10 % : 720 €/mois pour les particuliers (au lieu de 800 €) et 1 080 €/mois pour les entreprises (au lieu de 1 200 €).",
  },
  {
    question: "Comment est calculée la réduction de 10 % sur le Pack ?",
    answer: "Le pack regroupe 2 formations par mois. Le tarif de base serait de 2 × 400 € = 800 € pour les particuliers et 2 × 600 € = 1 200 € pour les entreprises. Avec la réduction de 10 %, vous payez respectivement 720 € et 1 080 € par mois, soit une économie de 80 € ou 120 € chaque mois.",
  },
  {
    question: "Qu'est-ce que le « minimum de participants » pour les entreprises ?",
    answer: "Les formations entreprises sont organisées en sessions de groupe avec un minimum de 5 participants par session. Ce format permet des échanges riches entre participants et une dynamique d'apprentissage collectif. Pour des effectifs plus importants ou des formats différents, contactez-nous pour un devis sur mesure.",
  },
  {
    question: "Puis-je choisir librement les formations dans un Pack ?",
    answer: "Oui, vous choisissez librement les formations dans notre catalogue chaque mois. Les formations peuvent être sélectionnées dans des domaines différents selon vos besoins du moment : IA, développement web, marketing, design, etc.",
  },
  {
    question: "Puis-je bénéficier d'un financement ?",
    answer: "Oui, selon votre profil et votre pays, une partie ou la totalité des frais peut être prise en charge par des dispositifs publics. Contactez-nous pour vérifier votre éligibilité gratuitement — nous vous accompagnons dans les démarches.",
  },
  {
    question: "Y a-t-il des frais cachés ?",
    answer: "Non. Nos tarifs incluent le support pédagogique, les supports de cours et l'attestation de formation. Aucun frais supplémentaire ne s'applique sans votre accord préalable.",
  },
  {
    question: "Comment obtenir un devis pour mon entreprise ?",
    answer: "Remplissez notre formulaire de contact en précisant vos besoins (nombre de participants, thématiques souhaitées, format). Nous vous revenons sous 48h avec une proposition adaptée à votre organisation.",
  },
  {
    question: "Les attestations sont-elles reconnues ?",
    answer: "Oui, une attestation de formation officielle est remise à chaque participant à l'issue de chaque parcours. Elle peut être valorisée auprès d'employeurs ou dans le cadre d'une reconversion professionnelle.",
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
