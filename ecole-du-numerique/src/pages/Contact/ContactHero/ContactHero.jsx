import './ContactHero.css'

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero__container">
        <h1 className="contact-hero__title">
          Questions ? <span className="contact-hero__accent">Parlons-en</span>
        </h1>
        <p className="contact-hero__desc">
          N'hésitez pas à nous contacter en utilisant les options ci-dessous,
          et notre équipe dédiée répondra rapidement à vos demandes.
        </p>
      </div>
    </section>
  )
}
