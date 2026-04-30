import './AboutHero.css'

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__container">
        <h1 className="about-hero__title">
          À propos de <span className="about-hero__accent">nous</span>
        </h1>
        <p className="about-hero__desc">
          Fondée en 2024 à Bruxelles, École du Numérique accompagne les professionnels
          et les entreprises dans leur montée en compétences Tech & IA.
        </p>
      </div>
    </section>
  )
}
