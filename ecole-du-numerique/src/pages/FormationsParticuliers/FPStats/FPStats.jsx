import './FPStats.css'

const stats = [
  { value: '600+', label: 'Entrepreneurs formés en Belgique' },
  { value: '17',   label: 'Formations disponibles' },
  { value: '95%',  label: 'Taux de satisfaction' },
]

export default function FPStats() {
  return (
    <section className="fp-stats">
      <div className="fp-stats__container">
        <p className="fp-stats__text">
          Plus de <strong>600 entrepreneurs</strong> formés en Belgique en Marketing,
          Intelligence Artificielle et Cybersécurité.
        </p>

        <div className="fp-stats__grid">
          {stats.map(stat => (
            <div key={stat.label} className="fp-stats__item">
              <p className="fp-stats__value">{stat.value}</p>
              <p className="fp-stats__label">{stat.label}</p>
            </div>
          ))}
        </div>

        <a href="/contact" className="fp-stats__cta">Rejoindre la communauté</a>
      </div>
    </section>
  )
}
