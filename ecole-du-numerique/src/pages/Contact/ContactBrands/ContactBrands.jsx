import { Link } from 'react-router-dom'
import './ContactBrands.css'

export default function ContactBrands() {
  return (
    <section className="contact-brands">
      <div className="contact-brands__container">

        <div className="contact-brands__header">
          <h2 className="contact-brands__title">
            Ils nous font <span className="contact-brands__accent">confiance</span>
          </h2>
          <p className="contact-brands__subtitle">
            Un réseau qui grandit. Rejoignez les organisations qui construisent l'écosystème numérique belge avec nous.
          </p>
        </div>

        <div className="contact-brands__grid">

          <div className="contact-brands__card">
            <div className="contact-brands__logo-wrapper">
              <img
                src="/assets/images/logo-bruxelles-capital.webp"
                alt="Région de Bruxelles-Capitale"
                className="contact-brands__logo"
              />
            </div>
            <div className="contact-brands__info">
              <p className="contact-brands__name">Région de Bruxelles-Capitale</p>
              <p className="contact-brands__role">Partenaire institutionnel</p>
            </div>
          </div>

          <div className="contact-brands__card contact-brands__card--soon">
            <div className="contact-brands__placeholder-icon">
              <span className="material-symbols-rounded">hourglass_empty</span>
            </div>
            <div className="contact-brands__info">
              <p className="contact-brands__name">Partenaire à venir</p>
              <p className="contact-brands__role">Bientôt annoncé</p>
            </div>
          </div>

          <div className="contact-brands__card contact-brands__card--soon">
            <div className="contact-brands__placeholder-icon">
              <span className="material-symbols-rounded">hourglass_empty</span>
            </div>
            <div className="contact-brands__info">
              <p className="contact-brands__name">Partenaire à venir</p>
              <p className="contact-brands__role">Bientôt annoncé</p>
            </div>
          </div>

          <Link to="/partenaires" className="contact-brands__card contact-brands__card--join">
            <div className="contact-brands__join-icon">
              <span className="material-symbols-rounded">add_business</span>
            </div>
            <div className="contact-brands__info">
              <p className="contact-brands__name">Devenez partenaire</p>
              <p className="contact-brands__role">Rejoignez notre réseau</p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  )
}
