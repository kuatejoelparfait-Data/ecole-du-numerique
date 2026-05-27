import './WorkshopsTestimonials.css'
import { workshopsTestimonials as testimonials } from '../../../data/testimonials'

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
