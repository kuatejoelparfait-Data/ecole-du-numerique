import { useState } from 'react'
import { Link } from 'react-router-dom'
import { articles } from '../../../data/articles'
import './BlogGrid.css'

const categories = ['Tous', ...new Set(articles.map(a => a.category))]

export default function BlogGrid() {
  const [active, setActive] = useState('Tous')

  const filtered = active === 'Tous'
    ? articles
    : articles.filter(a => a.category === active)

  return (
    <section id="blog-articles" className="blog-grid">
      <div className="blog-grid__container">

        <div className="blog-grid__filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`blog-grid__filter${active === cat ? ' blog-grid__filter--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blog-grid__list">
          {filtered.map(article => (
            <Link key={article.slug} to={`/blog/${article.slug}`} className="blog-card">
              <img src={article.image} alt={article.title} className="blog-card__img" loading="lazy" />
              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <span className="blog-card__category">{article.category}</span>
                  <span className="blog-card__dot">·</span>
                  <span className="blog-card__date">{article.date}</span>
                </div>
                <h2 className="blog-card__title">{article.title}</h2>
                <p className="blog-card__excerpt">{article.excerpt}</p>
                <span className="blog-card__cta">Lire l'article →</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
