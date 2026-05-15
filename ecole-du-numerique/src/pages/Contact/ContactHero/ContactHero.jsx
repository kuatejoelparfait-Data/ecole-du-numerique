import './ContactHero.css'

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero__container">
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">
            Questions ? <span className="contact-hero__accent">Parlons-en</span>
          </h1>
          <p className="contact-hero__desc">
            N'hésitez pas à nous contacter en utilisant les options ci-dessous,
            et notre équipe dédiée répondra rapidement à vos demandes.
          </p>
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
