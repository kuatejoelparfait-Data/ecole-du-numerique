import { useState } from 'react'
import './ContactFAQ.css'

const faqs = [
  {
    question: "Faut-il des connaissances techniques pour suivre une formation ?",
    answer: "Non, nos formations sont accessibles à tous les niveaux. Que vous soyez débutant ou déjà expérimenté, nous adaptons le contenu à votre profil.",
  },
  {
    question: "Comment s'inscrire à une formation ?",
    answer: "Remplissez le formulaire de contact ci-dessus en sélectionnant le sujet correspondant, ou envoyez-nous un email. Notre équipe vous recontacte sous 24h.",
  },
  {
    question: "Les formations sont-elles finançables ?",
    answer: "Oui, grâce au soutien de la Région de Bruxelles-Capitale, une grande partie des frais peut être couverte. Contactez-nous pour vérifier votre éligibilité.",
  },
  {
    question: "Proposez-vous des formations en ligne ?",
    answer: "Certaines formations sont disponibles en présentiel, en ligne ou en format hybride. Consultez chaque programme pour connaître les modalités.",
  },
  {
    question: "Quelle est votre politique d'annulation ?",
    answer: "En cas d'annulation plus de 7 jours avant le début de la formation, un remboursement intégral est possible. Passé ce délai, contactez-nous directement.",
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`contact-faq__item${open ? ' contact-faq__item--open' : ''}`}>
      <button className="contact-faq__question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <span className="contact-faq__icon" aria-hidden="true">{open ? '×' : '+'}</span>
      </button>
      <div className="contact-faq__answer">
        <div className="contact-faq__answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function ContactFAQ() {
  return (
    <section className="contact-faq">
      <div className="contact-faq__container">
        <h2 className="contact-faq__title">Questions fréquentes</h2>
        <div className="contact-faq__list">
          {faqs.map(item => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
