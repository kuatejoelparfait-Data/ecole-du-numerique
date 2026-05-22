import './ContactHero.css'

const badges = [
  { icon: 'schedule', label: 'Réponse sous 48h' },
  { icon: 'location_on', label: 'Bruxelles, Belgique' },
  { icon: 'support_agent', label: 'Équipe à votre écoute' },
]

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero__container">
        <div className="contact-hero__content">
          <p className="contact-hero__eyebrow">Contactez-nous</p>
          <h1 className="contact-hero__title">
            Questions ? <span className="contact-hero__accent">Parlons-en</span>
          </h1>
          <p className="contact-hero__desc">
            N'hésitez pas à nous contacter en utilisant les options ci-dessous,
            et notre équipe dédiée répondra rapidement à vos demandes.
          </p>
          <div className="contact-hero__badges">
            {badges.map(b => (
              <span key={b.label} className="contact-hero__badge">
                <span className="material-symbols-rounded">{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>
          <a href="#contact-form" className="contact-hero__cta">
            Nous écrire
          </a>
        </div>
        <div className="contact-hero__img-wrapper">
          <img
            src="/assets/images/contact/hero-contact-mart-production-pexels.webp"
            alt="Contactez École du Numérique"
            className="contact-hero__img"
            width="600"
            height="440"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  )
}
