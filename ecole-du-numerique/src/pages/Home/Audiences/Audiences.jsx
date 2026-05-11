import './Audiences.css'

const audiences = [
  {
    image:   '/assets/images/formations-particuliers/hero-zinkevych.webp',
    tag:     'Particuliers',
    title:   'Vous formez, à votre rythme',
    desc:    "Des formations simples, concrètes et motivantes pour découvrir l'IA, le digital et le no-code. Que vous soyez étudiant, indépendant ou en reconversion, vous apprendrez à utiliser les bons outils, développer de nouvelles compétences et gagner en autonomie dans votre vie professionnelle.",
    cta:     'Voir les formations particuliers',
    href:    '/formations-particuliers',
  },
  {
    image:   '/assets/images/formations-entreprises/hero-pexels-1.webp',
    tag:     'Entreprises',
    title:   'Boostez votre équipe avec l\'IA',
    desc:    "Des formations pratiques et stratégiques pour intégrer l'IA, la data et les outils digitaux au cœur de vos activités. Conçues pour les équipes et décideurs, elles visent à améliorer la performance, automatiser les processus et renforcer la maîtrise des nouvelles technologies.",
    cta:     'Voir les formations entreprises',
    href:    '/formations-entreprises',
  },
]

export default function Audiences() {
  return (
    <section className="audiences">
      <div className="audiences__container">

        <div className="audiences__header">
          <h2 className="audiences__title">
            Une formation pour <span className="audiences__title-accent">chaque profil</span>
          </h2>
          <p className="audiences__subtitle">
            Particulier ou entreprise, nos programmes s'adaptent à vos objectifs.
          </p>
        </div>

        <div className="audiences__grid">
          {audiences.map(item => (
            <article key={item.href} className="audiences__card">
              <div className="audiences__card-img-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="audiences__card-img"
                />
                <p className="audiences__card-tag">{item.tag}</p>
              </div>
              <div className="audiences__card-body">
                <h3 className="audiences__card-title">{item.title}</h3>
                <p className="audiences__card-desc">{item.desc}</p>
                <a href={item.href} className="audiences__card-cta">
                  {item.cta}
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
