import { useEffect } from 'react'
import './ContactForm.css'

export default function ContactForm() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

  return (
    <section id="contact-form" className="contact">
      <div className="contact__container">

        <div className="contact__form-wrapper contact__tally-wrapper">
          <h2 className="contact__form-title">Envoyer un message</h2>
          <iframe
            data-tally-src="https://tally.so/embed/A702yl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Formulaire de contact"
            className="contact__tally-iframe"
          />
          <div className="contact__tally-mask" aria-hidden="true" />
        </div>

        <aside className="contact__info">
          <h2 className="contact__info-title">Nos coordonnées</h2>

          <ul className="contact__info-list">
            <li className="contact__info-item">
              <span className="material-symbols-rounded contact__info-icon">location_on</span>
              <div>
                <p className="contact__info-label">Adresse</p>
                <p className="contact__info-value">Bruxelles-Capitale, Belgique</p>
              </div>
            </li>
            <li className="contact__info-item">
              <span className="material-symbols-rounded contact__info-icon">mail</span>
              <div>
                <p className="contact__info-label">Email</p>
                <a href="mailto:info@ecoledunumerique.be" className="contact__info-value contact__info-link">
                  info@ecoledunumerique.be
                </a>
              </div>
            </li>
            <li className="contact__info-item">
              <span className="material-symbols-rounded contact__info-icon">phone</span>
              <div>
                <p className="contact__info-label">Téléphone</p>
                <a href="tel:+32465557109" className="contact__info-value contact__info-link">
                  +32 465 55 71 09
                </a>
              </div>
            </li>
            <li className="contact__info-item">
              <span className="material-symbols-rounded contact__info-icon">schedule</span>
              <div>
                <p className="contact__info-label">Disponibilités</p>
                <p className="contact__info-value">Lun – Ven, 9h – 18h</p>
              </div>
            </li>
          </ul>
        </aside>

      </div>
    </section>
  )
}
