import { useState } from 'react'
import './FEFAQ.css'

const faqs = [
  {
    question: "Pouvez-vous adapter le programme à notre secteur d'activité ?",
    answer: "Oui, toutes nos formations en entreprise sont conçues sur mesure. Nous partons d'un échange sur vos besoins pour adapter les contenus, les exemples et les exercices à votre contexte métier.",
  },
  {
    question: "Combien de personnes peuvent participer à une session ?",
    answer: "Nos sessions en entreprise peuvent accueillir des groupes de 4 à 15 personnes. Pour les besoins plus spécifiques, des formations individuelles ou en très petit groupe sont également disponibles.",
  },
  {
    question: "Les formations sont-elles finançables ?",
    answer: "Oui, jusqu'à 80% des coûts peuvent être couverts via la Région de Bruxelles-Capitale (Bruxelles-Formation, Chèques-Formation, plan de formation). Notre équipe vous guide dans les démarches administratives.",
  },
  {
    question: "Quels formats proposez-vous pour les formations entreprise ?",
    answer: "Présentiel dans vos locaux ou chez nous, en ligne, ou format hybride. Nous nous adaptons à votre organisation et à la disponibilité de vos équipes.",
  },
  {
    question: "Délivrez-vous une attestation à la fin de la formation ?",
    answer: "Oui, chaque participant reçoit une attestation individuelle de formation, utilisable pour les bilans de compétences ou les audits internes.",
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`fe-faq__item${open ? ' fe-faq__item--open' : ''}`}>
      <button className="fe-faq__question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <span className="fe-faq__icon" aria-hidden="true">{open ? '×' : '+'}</span>
      </button>
      <div className="fe-faq__answer">
        <div className="fe-faq__answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FEFAQ() {
  return (
    <section className="fe-faq">
      <div className="fe-faq__container">
        <h2 className="fe-faq__title">Questions fréquentes</h2>
        <div className="fe-faq__list">
          {faqs.map(item => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
