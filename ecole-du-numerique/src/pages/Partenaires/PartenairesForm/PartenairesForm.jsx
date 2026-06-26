import { useEffect } from 'react'
import './PartenairesForm.css'

export default function PartenairesForm() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

  return (
    <section id="partenaires-form" className="partenaires-form">
      <div className="partenaires-form__container">
        <div className="partenaires-form__header">
          <h2 className="partenaires-form__title">Parlons de votre projet</h2>
          <p className="partenaires-form__subtitle">
            Remplissez ce formulaire et nous vous recontactons sous 48h.
          </p>
        </div>

        <div className="partenaires-form__form partenaires-form__tally-wrapper">
          <iframe
            data-tally-src="https://tally.so/embed/b5Dj2E?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Formulaire partenariat"
            className="partenaires-form__iframe"
          />
          <div className="partenaires-form__tally-mask" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
