import { useEffect } from 'react'
import './VWForm.css'

export default function VWForm() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

  return (
    <section id="demande-atelier" className="vw-form">
      <div className="vw-form__container">

        <div className="vw-form__header">
          <h2 className="vw-form__title">
            Demandez votre{' '}
            <span className="vw-form__accent">atelier</span>
          </h2>
          <p className="vw-form__subtitle">
            Remplissez ce formulaire en 2 minutes — nous vous recontactons
            sous 48h pour construire l'atelier idéal avec vous.
          </p>
        </div>

        <div className="vw-form__tally-wrapper">
          <iframe
            data-tally-src="https://tally.so/embed/44qJGr?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&fontColor=FFFFFF"
            loading="lazy"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Formulaire atelier"
            className="vw-form__iframe"
          />
          <div className="vw-form__tally-mask" aria-hidden="true" />
        </div>

      </div>
    </section>
  )
}
