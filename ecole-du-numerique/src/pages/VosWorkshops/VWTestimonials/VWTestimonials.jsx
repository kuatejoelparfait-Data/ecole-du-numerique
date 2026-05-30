import { workshopsTestimonials } from '../../../data/testimonials'
import './VWTestimonials.css'

export default function VWTestimonials() {
  return (
    <section className="vw-testimonials">
      <div className="vw-testimonials__container">

        <div className="vw-testimonials__header">
          <h2 className="vw-testimonials__title">
            Ce qu'ils en <span className="vw-testimonials__accent">disent</span>
          </h2>
          <p className="vw-testimonials__subtitle">
            Des équipes qui ont vécu l'expérience atelier avec nous.
          </p>
        </div>

        <div className="vw-testimonials__grid">
          {workshopsTestimonials.map(t => (
            <div key={t.name} className="vw-testimonials__card">
              <span className="material-symbols-rounded vw-testimonials__quote-icon">format_quote</span>
              <p className="vw-testimonials__quote">{t.quote}</p>
              <div className="vw-testimonials__author">
                <div className="vw-testimonials__avatar">{t.initials}</div>
                <div>
                  <p className="vw-testimonials__name">{t.name}</p>
                  <p className="vw-testimonials__role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
