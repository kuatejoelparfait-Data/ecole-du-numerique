import { useParams, Link } from 'react-router-dom'
import { getArticleBySlug, articles } from '../../data/articles'
import './BlogDetail.css'

function SectionList({ label, items, icon = 'check_circle' }) {
  return (
    <>
      {label && <p className="bd-list-label">{label}</p>}
      <ul className="bd-list">
        {items.map((item, i) => (
          <li key={i} className="bd-list__item">
            <span className="material-symbols-rounded bd-list__icon">{icon}</span>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

function Section({ s }) {
  return (
    <div className="bd-block">
      {s.heading && <h2 className="bd-block__title">{s.heading}</h2>}
      {s.body && <p className="bd-block__body">{s.body}</p>}

      {s.list && <SectionList items={s.list} />}
      {s.list2 && <SectionList label={s.list2Label} items={s.list2} />}
      {s.points && <SectionList label={s.pointsLabel} items={s.points} icon="arrow_forward" />}

      {s.table && (
        <div className="bd-table-wrap">
          <table className="bd-table">
            <thead>
              <tr>{s.table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {s.table.rows.map((row, i) => (
                <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {s.subsections && s.subsections.map((sub, i) => (
        <div key={i} className="bd-subsection">
          <h3 className="bd-subsection__title">{sub.heading}</h3>
          {sub.body && <p className="bd-block__body">{sub.body}</p>}
          {sub.list && <SectionList label={sub.listLabel} items={sub.list} />}
          {sub.points && <SectionList label={sub.pointsLabel} items={sub.points} icon="arrow_forward" />}
        </div>
      ))}
    </div>
  )
}

export default function BlogDetail() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <section className="bd-notfound">
        <p>Article introuvable.</p>
        <Link to="/blog">← Retour au blog</Link>
      </section>
    )
  }

  const others = articles.filter(a => a.slug !== slug).slice(0, 2)

  return (
    <>
      <section className="bd-hero">
        <div className="bd-hero__container">
          <div className="bd-hero__content">
            <Link to="/blog" className="bd-hero__back">← Retour au blog</Link>
            <span className="bd-hero__category">{article.category}</span>
            <h1 className="bd-hero__title">{article.title}</h1>
            <div className="bd-hero__meta">
              <span className="material-symbols-rounded">calendar_today</span>
              {article.date}
              <span className="bd-hero__dot">·</span>
              <span className="material-symbols-rounded">schedule</span>
              {article.readTime} de lecture
            </div>
          </div>
          <div className="bd-hero__img-wrapper">
            <img
              src={article.image}
              alt={article.title}
              className="bd-hero__img"
              fetchpriority="high"
            />
          </div>
        </div>
      </section>

      <section className="bd-content">
        <div className="bd-content__container">

          <div className="bd-content__main">
            <div className="bd-block">
              <p className="bd-intro">{article.intro}</p>
              {article.leadin && <p className="bd-leadin">{article.leadin}</p>}
              {article.infoBlock && (
                <div className="bd-info-block">
                  <div className="bd-info-block__row">
                    <span className="material-symbols-rounded">event</span>
                    <span>{article.infoBlock.date}</span>
                  </div>
                  <div className="bd-info-block__row">
                    <span className="material-symbols-rounded">schedule</span>
                    <span>{article.infoBlock.time}</span>
                  </div>
                  <div className="bd-info-block__row">
                    <span className="material-symbols-rounded">videocam</span>
                    <span>{article.infoBlock.format}</span>
                  </div>
                </div>
              )}
            </div>

            {article.sections.map((s, i) => <Section key={i} s={s} />)}

            {(article.conclusion || article.ctaLine) && (
              <div className="bd-block bd-block--conclusion">
                {article.conclusion && <p className="bd-block__body">{article.conclusion}</p>}
                {article.ctaLine && <p className="bd-cta-line">{article.ctaLine}</p>}
              </div>
            )}
          </div>

          <aside className="bd-aside">
            <div className="bd-aside__card">
              <p className="bd-aside__label">Catégorie</p>
              <p className="bd-aside__value">{article.category}</p>
              <p className="bd-aside__label">Date de publication</p>
              <p className="bd-aside__value">{article.date}</p>
              <p className="bd-aside__label">Temps de lecture</p>
              <p className="bd-aside__value">{article.readTime}</p>
              {article.tags?.length > 0 && (
                <>
                  <p className="bd-aside__label">Tags</p>
                  <div className="bd-aside__tags">
                    {article.tags.map(tag => (
                      <span key={tag} className="bd-aside__tag">{tag}</span>
                    ))}
                  </div>
                </>
              )}
              <Link to="/contact" className="bd-aside__cta">Nous contacter</Link>
            </div>

            {others.length > 0 && (
              <div className="bd-aside__related">
                <p className="bd-aside__related-title">Autres articles</p>
                {others.map(a => (
                  <Link key={a.slug} to={`/blog/${a.slug}`} className="bd-aside__related-item">
                    <img src={a.image} alt={a.title} className="bd-aside__related-img" loading="lazy" />
                    <div>
                      <p className="bd-aside__related-cat">{a.category}</p>
                      <p className="bd-aside__related-name">{a.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </aside>

        </div>
      </section>
    </>
  )
}
