import { useState } from 'react'
import './WorkshopsFAQ.css'

const faqs = [
  {
    question: "Faut-il des connaissances préalables pour participer ?",
    answer: "Non, nos workshops sont accessibles à tous. Ils sont conçus pour être directement applicables, quel que soit votre point de départ.",
  },
  {
    question: "Combien de temps dure un workshop ?",
    answer: "La durée varie selon les ateliers : de 2 à 4 heures pour la majorité, jusqu'à une journée complète pour les formats approfondis. Le détail est précisé sur chaque fiche workshop.",
  },
  {
    question: "Les workshops sont-ils en présentiel ou en ligne ?",
    answer: "Certains ateliers se tiennent en présentiel à Bruxelles, d'autres sont proposés en ligne ou en format hybride. Chaque fiche workshop précise les modalités disponibles.",
  },
  {
    question: "Reçoit-on une attestation après un workshop ?",
    answer: "Oui, une attestation de participation vous est remise à l'issue de l'atelier. Elle peut être valorisée auprès d'un employeur ou dans le cadre d'un dossier de compétences.",
  },
  {
    question: "Puis-je inscrire plusieurs membres de mon équipe ?",
    answer: "Oui, nous proposons des formules adaptées aux entreprises qui souhaitent former plusieurs collaborateurs simultanément. Contactez-nous pour un devis personnalisé.",
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`workshops-faq__item${open ? ' workshops-faq__item--open' : ''}`}>
      <button className="workshops-faq__question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <span className="workshops-faq__icon" aria-hidden="true">{open ? '×' : '+'}</span>
      </button>
      <div className="workshops-faq__answer">
        <div className="workshops-faq__answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function WorkshopsFAQ() {
  return (
    <section className="workshops-faq">
      <div className="workshops-faq__container">
        <h2 className="workshops-faq__title">Questions fréquentes</h2>
        <div className="workshops-faq__list">
          {faqs.map(item => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
