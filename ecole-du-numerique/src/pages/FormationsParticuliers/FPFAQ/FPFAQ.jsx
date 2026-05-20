import { useState } from 'react'
import './FPFAQ.css'

const faqs = [
  {
    question: "Faut-il des connaissances préalables pour suivre une formation ?",
    answer: "Non, toutes nos formations sont accessibles aux débutants. Nous partons de zéro et adaptons le rythme à votre niveau de départ.",
  },
  {
    question: "Les formations sont-elles certifiantes ?",
    answer: "Oui, une attestation de formation vous est remise à l'issue de chaque parcours. Elle peut être valorisée auprès d'employeurs ou dans le cadre d'une reconversion.",
  },
  {
    question: "Comment financer ma formation ?",
    answer: "Jusqu'à 80% des frais peuvent être couverts via Bruxelles-Formation ou les Chèques-Formation pour les habitants de la Région de Bruxelles-Capitale. Contactez-nous pour vérifier votre éligibilité.",
  },
  {
    question: "Quels formats de formation sont disponibles ?",
    answer: "Selon les programmes, les formations sont proposées en présentiel, en ligne ou en format hybride. Chaque fiche de formation précise les modalités disponibles.",
  },
  {
    question: "Quelle est la durée d'une formation ?",
    answer: "La durée varie selon le programme : de quelques heures pour une initiation, à plusieurs journées pour un parcours complet. Le détail est disponible sur chaque fiche formation.",
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`fp-faq__item${open ? ' fp-faq__item--open' : ''}`}>
      <button className="fp-faq__question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <span className="fp-faq__icon" aria-hidden="true">{open ? '×' : '+'}</span>
      </button>
      <div className="fp-faq__answer">
        <div className="fp-faq__answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FPFAQ() {
  return (
    <section className="fp-faq">
      <div className="fp-faq__container">
        <h2 className="fp-faq__title">Questions fréquentes</h2>
        <div className="fp-faq__list">
          {faqs.map(item => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
