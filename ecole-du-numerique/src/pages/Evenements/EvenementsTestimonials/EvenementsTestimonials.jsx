import './EvenementsTestimonials.css'

const testimonials = [
  {
    quote: "La masterclass sur l'IA générative m'a ouvert les yeux sur ce qu'il est possible de faire sans coder. En 3 heures, j'avais des outils concrets à appliquer dès le lendemain.",
    name: "Sophie M.",
    role: "Directrice Marketing",
    initials: "SM",
  },
  {
    quote: "Au-delà du contenu, c'est le networking qui m'a surpris. J'ai rencontré deux futurs clients lors de cet événement. Une soirée vraiment bien investie.",
    name: "Thomas B.",
    role: "Consultant digital indépendant",
    initials: "TB",
  },
  {
    quote: "Format dynamique, intervenants de qualité et une ambiance vraiment bienveillante. Je recommande à toute mon équipe.",
    name: "Amina K.",
    role: "Responsable formation RH",
    initials: "AK",
  },
]

export default function EvenementsTestimonials() {
  return (
    <section className="evenements-testimonials">
      <div className="evenements-testimonials__container">

        <div className="evenements-testimonials__header">
          <h2 className="evenements-testimonials__title">
            Ce qu'ils ont <span className="evenements-testimonials__accent">vécu</span>
          </h2>
          <p className="evenements-testimonials__subtitle">
            Des participants qui ont franchi le pas et repartent avec bien plus qu'un savoir.
          </p>
        </div>

        <div className="evenements-testimonials__grid">
          {testimonials.map(t => (
            <div key={t.name} className="evenements-testimonials__card">
              <span className="material-symbols-rounded evenements-testimonials__quote-icon">format_quote</span>
              <p className="evenements-testimonials__text">{t.quote}</p>
              <div className="evenements-testimonials__author">
                <div className="evenements-testimonials__avatar">{t.initials}</div>
                <div>
                  <p className="evenements-testimonials__name">{t.name}</p>
                  <p className="evenements-testimonials__role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
