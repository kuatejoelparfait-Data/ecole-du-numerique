export const workshops = [
  {
    slug: 'workshop-chatgpt-productivite',
    image: '/assets/images/workshops/ateliers/chatgpt-sanketgraphy-pexels.webp',
    title: 'ChatGPT & Productivité : automatisez vos tâches quotidiennes',
    date: '15 mai 2026',
    dateISO: '2026-05-15',
    heure: '14h00 - 17h00',
    lieu: 'Bruxelles',
    places: '15 places max',
    prix: '97€',
    desc: 'Apprenez à utiliser ChatGPT pour gagner du temps sur vos tâches répétitives : rédaction, emails, résumés et bien plus.',
    content: 'Un workshop intensif de 3h pour maîtriser ChatGPT dans votre quotidien professionnel. Vous repartirez avec des prompts prêts à l\'emploi et une méthode claire pour intégrer l\'IA dans votre workflow.',
    programme: [
      'Les bases de ChatGPT et des LLMs',
      'Écrire des prompts efficaces',
      'Automatiser la rédaction de contenu',
      'Gérer ses emails avec l\'IA',
      'Exercices pratiques en groupe',
    ],
  },
  {
    slug: 'workshop-canva-design',
    image: '/assets/images/workshops/ateliers/canva-mutecevvil-pexels.webp',
    title: 'Canva Pro : créez des visuels professionnels sans être designer',
    date: '20 juin 2026',
    dateISO: '2026-06-20',
    heure: '10h00 - 13h00',
    lieu: 'Bruxelles',
    places: '15 places max',
    prix: '97€',
    desc: 'Maîtrisez Canva pour créer des posts réseaux sociaux, présentations et supports marketing impactants.',
    content: 'Un workshop pratique pour apprendre à utiliser Canva Pro de A à Z. Idéal pour les entrepreneurs et indépendants qui veulent créer leurs propres visuels sans faire appel à un graphiste.',
    programme: [
      'Prise en main de Canva Pro',
      'Créer une identité visuelle cohérente',
      'Templates pour réseaux sociaux',
      'Présentation et supports print',
      'Astuces et raccourcis Canva',
    ],
  },
]

export function getWorkshopBySlug(slug) {
  return workshops.find(w => w.slug === slug)
}
