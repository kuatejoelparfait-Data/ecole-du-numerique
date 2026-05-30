import { useState } from 'react'
import './EvenementsFAQ.css'

const faqs = [
  {
    question: "Faut-il s'inscrire à l'avance ?",
    answer: "Oui, les places sont limitées pour garantir une expérience de qualité. Nous vous recommandons de vous inscrire dès que possible via le formulaire disponible sur chaque événement.",
  },
  {
    question: "Les événements sont-ils payants ?",
    answer: "Certains événements sont gratuits, d'autres sont payants selon le format et les intervenants. Le tarif est précisé sur chaque fiche événement.",
  },
  {
    question: "Les événements sont-ils en présentiel ou en ligne ?",
    answer: "Selon les événements, le format varie : présentiel à Bruxelles, en ligne ou hybride. Chaque fiche événement précise les modalités disponibles.",
  },
  {
    question: "Reçoit-on une attestation de participation ?",
    answer: "Oui, une attestation de participation peut être délivrée à l'issue de l'événement, en fonction du programme suivi.",
  },
  {
    question: "Les événements sont-ils accessibles aux débutants ?",
    answer: "Oui, nos événements sont ouverts à tous. Certains sont plus techniques, d'autres orientés business ou networking. La description de chaque événement précise le public visé.",
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`evenements-faq__item${open ? ' evenements-faq__item--open' : ''}`}>
      <button className="evenements-faq__question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <span className="evenements-faq__icon" aria-hidden="true">{open ? '×' : '+'}</span>
      </button>
      <div className="evenements-faq__answer">
        <div className="evenements-faq__answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function EvenementsFAQ() {
  return (
    <section className="evenements-faq">
      <div className="evenements-faq__container">
        <h2 className="evenements-faq__title">Questions fréquentes</h2>
        <div className="evenements-faq__list">
          {faqs.map(item => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
