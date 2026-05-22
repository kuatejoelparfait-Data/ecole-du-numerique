import { useState } from 'react'
import './PricingFAQ.css'

const faqs = [
  {
    question: "Comment sont calculés vos tarifs ?",
    answer: "Les tarifs affichés sont des prix de départ. Le coût final dépend de la formation choisie, de sa durée et du nombre de participants. Contactez-nous pour recevoir un devis personnalisé sous 48h.",
  },
  {
    question: "Puis-je bénéficier d'un financement ?",
    answer: "Oui, selon votre profil et votre région, jusqu'à 80% des frais peuvent être pris en charge. Les dispositifs Bruxelles-Formation et Chèques-Formation sont notamment disponibles. Contactez-nous pour vérifier votre éligibilité gratuitement.",
  },
  {
    question: "Y a-t-il des frais cachés ?",
    answer: "Non. Nos tarifs incluent le support pédagogique, les supports de cours et l'attestation de formation. Aucun frais supplémentaire ne s'applique sans votre accord préalable.",
  },
  {
    question: "Comment obtenir un devis pour mon entreprise ?",
    answer: "Remplissez notre formulaire de contact en précisant vos besoins (nombre de participants, thématiques, format souhaité). Nous vous revenons sous 48h avec une proposition adaptée à votre organisation.",
  },
  {
    question: "Quelle est la politique d'annulation ?",
    answer: "Toute annulation doit être notifiée au moins 7 jours ouvrables avant la date de début. Passé ce délai, un report de session peut être proposé selon les disponibilités.",
  },
  {
    question: "Les attestations sont-elles reconnues ?",
    answer: "Oui, une attestation de formation officielle vous est remise à l'issue de chaque parcours. Elle peut être valorisée auprès d'employeurs ou dans le cadre d'une reconversion professionnelle.",
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
