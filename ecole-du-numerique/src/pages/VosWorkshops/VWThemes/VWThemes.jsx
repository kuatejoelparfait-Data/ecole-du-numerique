import './VWThemes.css'

const themes = [
  {
    icon: 'smart_toy',
    title: 'Intelligence Artificielle',
    desc: 'ChatGPT, Copilot, automatisation — intégrer l\'IA dans les pratiques quotidiennes de vos équipes.',
  },
  {
    icon: 'shield',
    title: 'Cybersécurité',
    desc: 'Reconnaître les menaces, adopter les bons réflexes et protéger les données sensibles de l\'entreprise.',
  },
  {
    icon: 'trending_up',
    title: 'Marketing Digital',
    desc: 'Réseaux sociaux, SEO, e-mailing — maîtriser les leviers digitaux pour gagner en visibilité.',
  },
  {
    icon: 'code',
    title: 'Développement Web, Logiciel & No-Code',
    desc: 'Créer des outils internes, automatiser des tâches et gagner en autonomie sans coder.',
  },
  {
    icon: 'bar_chart',
    title: 'Data & Excel avancé',
    desc: 'Tableaux de bord, analyse de données, Power BI — transformer vos chiffres en décisions.',
  },
  {
    icon: 'palette',
    title: 'Communication visuelle',
    desc: 'Canva, présentation percutante, identité visuelle — soigner l\'image de votre entreprise.',
  },
  {
    icon: 'forum',
    title: 'Outils collaboratifs',
    desc: 'Teams, Notion, Slack, Trello — fluidifier la communication et le travail en équipe.',
  },
  {
    icon: 'add_circle',
    title: 'Thème sur mesure',
    desc: 'Vous avez un besoin spécifique ? Décrivez-le nous dans le formulaire — on crée l\'atelier avec vous.',
    highlight: true,
  },
]

export default function VWThemes() {
  return (
    <section className="vw-themes">
      <div className="vw-themes__container">

        <div className="vw-themes__header">
          <h2 className="vw-themes__title">
            Thèmes <span className="vw-themes__accent">proposés</span>
          </h2>
          <p className="vw-themes__subtitle">
            Choisissez un thème existant ou demandez un atelier entièrement personnalisé.
          </p>
        </div>

        <div className="vw-themes__grid">
          {themes.map(t =>
            t.highlight ? (
              <a
                key={t.title}
                href="#demande-atelier"
                className="vw-themes__card vw-themes__card--highlight"
              >
                <span className="material-symbols-rounded vw-themes__icon">{t.icon}</span>
                <h3 className="vw-themes__card-title">{t.title}</h3>
                <p className="vw-themes__card-desc">{t.desc}</p>
                <span className="vw-themes__card-cta">
                  Décrire mon besoin
                  <span className="material-symbols-rounded">arrow_downward</span>
                </span>
              </a>
            ) : (
              <div
                key={t.title}
                className="vw-themes__card"
              >
                <span className="material-symbols-rounded vw-themes__icon">{t.icon}</span>
                <h3 className="vw-themes__card-title">{t.title}</h3>
                <p className="vw-themes__card-desc">{t.desc}</p>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  )
}
