import './PartenairesAvantages.css'

const avantages = [
  {
    icon: 'visibility',
    title: 'Visibilité accrue',
    desc: 'Votre logo et votre marque mis en avant sur notre site, nos supports de communication et lors de nos événements.',
  },
  {
    icon: 'groups',
    title: 'Accès à notre réseau',
    desc: 'Connectez-vous avec plus de 600 entrepreneurs et professionnels du numérique formés par Ecole du Numérique.',
  },
  {
    icon: 'school',
    title: 'Co-formation',
    desc: 'Participez à la création de contenus pédagogiques et intervenez en tant qu\'expert lors de nos formations.',
  },
  {
    icon: 'handshake',
    title: 'Impact concret',
    desc: 'Contribuez activement au développement des compétences numériques auprès d\'apprenants partout en Europe.',
  },
  {
    icon: 'person_play',
    title: 'Être formateur',
    desc: 'Partagez votre expertise en devenant formateur à Ecole du Numérique et transmettez vos compétences à nos apprenants.',
  },
]

export default function PartenairesAvantages() {
  return (
    <section className="partenaires-avantages">
      <div className="partenaires-avantages__container">
        <div className="partenaires-avantages__header">
          <h2 className="partenaires-avantages__title">
            Pourquoi <span className="partenaires-avantages__accent">nous rejoindre ?</span>
          </h2>
          <p className="partenaires-avantages__subtitle">
            Un partenariat avec Ecole du Numérique, c'est bien plus qu'un logo sur un site.
          </p>
        </div>

        <div className="partenaires-avantages__grid">
          {avantages.map(a => (
            <div key={a.title} className="partenaires-avantages__card">
              <span className="material-symbols-rounded partenaires-avantages__icon">{a.icon}</span>
              <h3 className="partenaires-avantages__card-title">{a.title}</h3>
              <p className="partenaires-avantages__card-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
