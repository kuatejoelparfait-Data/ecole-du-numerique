import './AboutHero.css'

const badges = [
  { icon: 'calendar_today', label: 'Fondée en 2024' },
  { icon: 'location_on', label: 'Bruxelles, Belgique' },
  { icon: 'groups', label: '600+ apprenants formés' },
]

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__container">
        <div className="about-hero__content">
          <p className="about-hero__eyebrow">Qui sommes-nous ?</p>
          <h1 className="about-hero__title">
            À propos de <span className="about-hero__accent">nous</span>
          </h1>
          <p className="about-hero__desc">
            Fondée en 2024 à Bruxelles, École du Numérique accompagne les professionnels
            et les entreprises dans leur montée en compétences Tech & IA.
          </p>
          <div className="about-hero__badges">
            {badges.map(b => (
              <span key={b.label} className="about-hero__badge">
                <span className="material-symbols-rounded">{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>
          <a href="#about-team" className="about-hero__cta">
            Notre équipe
          </a>
        </div>
        <div className="about-hero__img-wrapper">
          <img
            src="/assets/images/about/hero-about-ia.webp"
            alt="Équipe École du Numérique"
            className="about-hero__img"
            width="600"
            height="440"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  )
}
