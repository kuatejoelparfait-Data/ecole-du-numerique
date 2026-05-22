import './WorkshopsTestimonials.css'

const testimonials = [
  {
    quote: "Workshop ChatGPT ultra pratique. En 2h30, j'ai automatisé des tâches qui me prenaient une heure par jour. Le formateur répond à toutes les questions sans jargon.",
    name: "Julie D.",
    role: "Entrepreneur e-commerce",
    initials: "JD",
  },
  {
    quote: "J'avais des bases en no-code mais ce workshop m'a appris à structurer mes projets autrement. Beaucoup de valeur dans un temps vraiment court.",
    name: "Marc V.",
    role: "Développeur freelance",
    initials: "MV",
  },
  {
    quote: "Parfait pour quelqu'un comme moi qui n'est pas tech. J'ai créé ma première automatisation en direct, devant tout le groupe. Formateur très pédagogue.",
    name: "Nora H.",
    role: "Chargée de communication",
    initials: "NH",
  },
]

export default function WorkshopsTestimonials() {
  return (
    <section className="workshops-testimonials">
      <div className="workshops-testimonials__container">

        <div className="workshops-testimonials__header">
          <h2 className="workshops-testimonials__title">
            Ce qu'ils ont <span className="workshops-testimonials__accent">appris</span>
          </h2>
          <p className="workshops-testimonials__subtitle">
            Des participants qui sont repartis avec des compétences concrètes, applicables dès le lendemain.
          </p>
        </div>

        <div className="workshops-testimonials__grid">
          {testimonials.map(t => (
            <div key={t.name} className="workshops-testimonials__card">
              <span className="material-symbols-rounded workshops-testimonials__quote-icon">format_quote</span>
              <p className="workshops-testimonials__text">{t.quote}</p>
              <div className="workshops-testimonials__author">
                <div className="workshops-testimonials__avatar">{t.initials}</div>
                <div>
                  <p className="workshops-testimonials__name">{t.name}</p>
                  <p className="workshops-testimonials__role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
