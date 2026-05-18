import './ContactBrands.css'

const partners = [
  { name: 'Région de Bruxelles-Capitale', logo: '/assets/images/logo-bruxelles-capital.webp' },
  null,
  null,
  null,
]

export default function ContactBrands() {
  return (
    <section className="contact-brands">
      <div className="contact-brands__container">

        <div className="contact-brands__header">
          <h2 className="contact-brands__title">Nos <span className="contact-brands__accent">partenaires</span></h2>
          <p className="contact-brands__subtitle">Ils soutiennent notre mission de formation numérique en Belgique.</p>
        </div>

        <div className="contact-brands__grid">
          {partners.map((partner, i) =>
            partner ? (
              <div key={i} className="contact-brands__card">
                <img src={partner.logo} alt={partner.name} className="contact-brands__logo" />
                <p className="contact-brands__name">{partner.name}</p>
              </div>
            ) : (
              <div key={i} className="contact-brands__card contact-brands__card--empty">
                <span className="material-symbols-rounded contact-brands__add">add_business</span>
                <p className="contact-brands__name contact-brands__name--muted">Partenaire à venir</p>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  )
}
