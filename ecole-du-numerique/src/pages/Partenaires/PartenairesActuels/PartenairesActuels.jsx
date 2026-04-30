import './PartenairesActuels.css'

const partenaires = [
  { name: 'Région de Bruxelles-Capitale', logo: '/assets/images/logo-bruxelles-capital.webp' },
]

export default function PartenairesActuels() {
  return (
    <section className="partenaires-actuels">
      <div className="partenaires-actuels__container">
        <h2 className="partenaires-actuels__title">Ils nous font confiance</h2>
        <div className="partenaires-actuels__grid">
          {partenaires.map(p => (
            <div key={p.name} className="partenaires-actuels__item">
              <img src={p.logo} alt={p.name} className="partenaires-actuels__logo" />
              <p className="partenaires-actuels__name">{p.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
