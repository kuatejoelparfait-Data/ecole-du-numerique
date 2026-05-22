import './PartenairesActuels.css'

export default function PartenairesActuels() {
  return (
    <section className="partenaires-actuels">
      <div className="partenaires-actuels__container">

        <div className="partenaires-actuels__header">
          <h2 className="partenaires-actuels__title">
            Ils nous font <span className="partenaires-actuels__accent">confiance</span>
          </h2>
          <p className="partenaires-actuels__subtitle">
            Un réseau qui grandit. Rejoignez les organisations qui construisent l'écosystème numérique belge avec nous.
          </p>
        </div>

        <div className="partenaires-actuels__grid">

          <div className="partenaires-actuels__card">
            <div className="partenaires-actuels__logo-wrapper">
              <img
                src="/assets/images/logo-bruxelles-capital.webp"
                alt="Région de Bruxelles-Capitale"
                className="partenaires-actuels__logo"
              />
            </div>
            <div className="partenaires-actuels__info">
              <p className="partenaires-actuels__name">Région de Bruxelles-Capitale</p>
              <p className="partenaires-actuels__role">Partenaire institutionnel</p>
            </div>
          </div>

          <div className="partenaires-actuels__card partenaires-actuels__card--soon">
            <div className="partenaires-actuels__placeholder-icon">
              <span className="material-symbols-rounded">hourglass_empty</span>
            </div>
            <div className="partenaires-actuels__info">
              <p className="partenaires-actuels__name">Partenaire à venir</p>
              <p className="partenaires-actuels__role">Bientôt annoncé</p>
            </div>
          </div>

          <div className="partenaires-actuels__card partenaires-actuels__card--soon">
            <div className="partenaires-actuels__placeholder-icon">
              <span className="material-symbols-rounded">hourglass_empty</span>
            </div>
            <div className="partenaires-actuels__info">
              <p className="partenaires-actuels__name">Partenaire à venir</p>
              <p className="partenaires-actuels__role">Bientôt annoncé</p>
            </div>
          </div>

          <a href="#partenaires-form" className="partenaires-actuels__card partenaires-actuels__card--join">
            <div className="partenaires-actuels__join-icon">
              <span className="material-symbols-rounded">add_business</span>
            </div>
            <div className="partenaires-actuels__info">
              <p className="partenaires-actuels__name">Devenez partenaire</p>
              <p className="partenaires-actuels__role">Rejoignez notre réseau</p>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}
