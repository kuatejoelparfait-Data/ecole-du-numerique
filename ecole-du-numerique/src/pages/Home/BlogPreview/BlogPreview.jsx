import { Link } from 'react-router-dom'
import { articles } from '../../../data/articles'
import './BlogPreview.css'

export default function BlogPreview() {
  return (
    <section className="blog-preview">
      <div className="blog-preview__container">

        <div className="blog-preview__header">
          <h2 className="blog-preview__title">
            Notre <span className="blog-preview__title-accent">Blog</span>
          </h2>
          <Link to="/blog" className="blog-preview__see-all">
            Voir tous les articles →
          </Link>
        </div>

        <div className="blog-preview__grid">
          {articles.map(article => (
            <article key={article.slug} className="blog-preview__card">
              <Link to="/blog" className="blog-preview__card-img-wrapper">
                <img
                  src={article.image}
                  alt={article.title}
                  className="blog-preview__card-img"
                  width="800"
                  height="450"
                  loading="lazy"
                />
              </Link>
              <div className="blog-preview__card-body">
                <div className="blog-preview__card-meta">
                  <p className="blog-preview__card-category">{article.category}</p>
                  <p className="blog-preview__card-date">{article.date}</p>
                </div>
                <h3 className="blog-preview__card-title">
                  <Link to="/blog">{article.title}</Link>
                </h3>
                <p className="blog-preview__card-excerpt">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
