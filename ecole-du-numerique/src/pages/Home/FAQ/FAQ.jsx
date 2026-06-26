import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    question: "À qui s'adressent nos formations ?",
    answer: "Nos formations sont destinées aux entrepreneurs, salariés, indépendants et demandeurs d'emploi qui souhaitent acquérir des compétences concrètes en IA, en cybersécurité, en développement web, logiciel, no-code ou en marketing digital.",
  },
  {
    question: "Faut-il avoir des connaissances techniques pour suivre nos bootcamps ?",
    answer: "Non, nos programmes sont conçus pour être accessibles à tous les niveaux. Que vous soyez débutant ou déjà expérimenté, nous vous accompagnons étape par étape.",
  },
  {
    question: "Est-ce que les formations sont certifiantes ?",
    answer: "Oui, une attestation de participation ou un certificat peut être délivré à la fin du parcours, en fonction du programme suivi.",
  },
  {
    question: "Les formations sont-elles financées ?",
    answer: "Oui. Grâce au soutien de la Région de Bruxelles-Capitale, une partie importante des frais peut être couverte, notamment pour les PME et TPE. Contactez-nous pour vérifier votre éligibilité.",
  },
  {
    question: "Est-ce que je peux suivre la formation en ligne ?",
    answer: "Certaines formations sont proposées en présentiel, d'autres en ligne ou en format hybride. Consultez chaque programme pour les modalités.",
  },
  {
    question: "Puis-je appliquer les compétences acquises à mon entreprise ?",
    answer: "Absolument. Nos formations sont pensées pour que vous puissiez immédiatement appliquer ce que vous apprenez dans vos projets professionnels.",
  },
  {
    question: "Combien de temps durent les formations ?",
    answer: "La durée varie selon les programmes : de 6h à plusieurs jours, selon le niveau d'approfondissement choisi.",
  },
  {
    question: "Puis-je inscrire plusieurs membres de mon équipe ?",
    answer: "Oui, nous proposons des formules adaptées aux entreprises qui souhaitent former plusieurs collaborateurs simultanément.",
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq__item${open ? ' faq__item--open' : ''}`}>
      <button className="faq__question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <span className="faq__icon" aria-hidden="true">{open ? '×' : '+'}</span>
      </button>
      <div className="faq__answer">
        <div className="faq__answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="faq">
      <div className="faq__container">

        <div className="faq__left">
          <h2 className="faq__title">Les questions récurrentes</h2>
          <p className="faq__desc">
            Vous avez des questions ? Voici les réponses aux interrogations
            les plus fréquentes concernant nos formations Tech & IA.
          </p>
          <a href="/contact" className="faq__cta">
            Vous avez une autre question ?
          </a>
        </div>

        <div className="faq__list">
          {faqs.map(item => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>

      </div>
    </section>
  )
}
