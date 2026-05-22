import './PartenairesTypes.css'

const types = [
  {
    icon: 'account_balance',
    title: 'Partenaire institutionnel',
    desc: 'Collectivités, organismes publics ou associations qui soutiennent notre mission de formation numérique et contribuent au financement ou à la reconnaissance de nos parcours.',
  },
  {
    icon: 'business',
    title: 'Partenaire entreprise',
    desc: 'Entreprises privées qui collaborent avec nous pour former leurs équipes, co-créer des contenus pédagogiques ou offrir des opportunités à nos apprenants.',
  },
  {
    icon: 'school',
    title: 'Partenaire pédagogique',
    desc: 'Établissements d\'enseignement qui souhaitent enrichir leurs programmes avec nos formations, mutualiser des ressources ou proposer des passerelles vers le monde professionnel.',
  },
]

export default function PartenairesTypes() {
  return (
    <section className="partenaires-types">
      <div className="partenaires-types__container">

        <div className="partenaires-types__header">
          <h2 className="partenaires-types__title">
            Types de <span className="partenaires-types__accent">partenariats</span>
          </h2>
          <p className="partenaires-types__subtitle">
            Chaque partenariat est unique. Voici les profils avec lesquels nous collaborons.
          </p>
        </div>

        <div className="partenaires-types__grid">
          {types.map(t => (
            <div key={t.title} className="partenaires-types__card">
              <span className="material-symbols-rounded partenaires-types__icon">{t.icon}</span>
              <h3 className="partenaires-types__card-title">{t.title}</h3>
              <p className="partenaires-types__card-desc">{t.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
