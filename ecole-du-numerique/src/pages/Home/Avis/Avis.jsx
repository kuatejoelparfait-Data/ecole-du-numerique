import './Avis.css'

const avis = [
  {
    nom: 'Sophie Martin',
    role: 'Responsable marketing',
    texte: "Formation IA vraiment accessible, même sans background technique. J'ai pu automatiser une bonne partie de mon travail dès la semaine suivante. Je recommande sans hésiter.",
  },
  {
    nom: 'Karim Benali',
    role: 'Consultant freelance',
    texte: "Le workshop ChatGPT m'a ouvert les yeux sur ce qu'on peut faire avec l'IA au quotidien. Formateur à l'écoute, exemples concrets, on repart avec des outils directement utilisables.",
  },
  {
    nom: 'Laura Thomas',
    role: 'En reconversion professionnelle',
    texte: "J'avais peur de ne pas suivre, mais le rythme est bien adapté. En quelques semaines j'ai acquis des bases solides en développement web. Une belle expérience humaine aussi.",
  },
]

function ThumbUp() {
  return (
    <svg className="avis-card__thumb" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
    </svg>
  )
}

export default function Avis() {
  return (
    <section className="avis">
      <div className="avis__container">
        <h2 className="avis__title">
          Ce que disent nos <span className="avis__accent">apprenants</span>
        </h2>
        <p className="avis__subtitle">
          Des retours d'expérience réels de personnes qui ont franchi le pas.
        </p>
        <div className="avis__grid">
          {avis.map((a) => (
            <div key={a.nom} className="avis-card">
              <ThumbUp />
              <p className="avis-card__texte">"{a.texte}"</p>
              <div className="avis-card__footer">
                <p className="avis-card__nom">{a.nom}</p>
                <p className="avis-card__role">{a.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
