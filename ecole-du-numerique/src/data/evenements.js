export const evenements = [
  {
    slug: 'masterclass-ia-sport-nov-2025',
    image: '/assets/images/evenements/articles/masterclass-ia-sport-ia.webp',
    title: "Masterclass : L'IA qui révolutionne les événements sportifs",
    date: '11 novembre 2025',
    dateISO: '2025-11-11',
    heure: '10h00 - 13h00',
    lieu: 'Bruxelles',
    type: 'Masterclass',
    desc: "Découvrez comment l'intelligence artificielle transforme l'organisation et la diffusion des grands événements sportifs internationaux.",
    content: "Durant cette masterclass, vous découvrirez comment les outils d'intelligence artificielle sont utilisés par les professionnels du sport pour optimiser la logistique, améliorer l'expérience des spectateurs et analyser les performances en temps réel. À travers des cas concrets issus des grands événements sportifs internationaux (CAN, Jeux de la Francophonie...), vous repartirez avec des méthodes directement applicables.",
    programme: [
      "Introduction à l'IA dans le secteur sportif",
      "Outils IA pour la gestion logistique d'événements",
      "Analyse de données et performances en temps réel",
      "Cas pratiques : CAN et Jeux de la Francophonie",
      "Session Q&R avec les intervenants",
    ],
    intervenants: [
      { name: 'Joel Kuate Parfait', role: 'Fondateur — Ecole du Numérique' },
    ],
  },
  {
    slug: 'masterclass-marketing-digital-2026',
    image: '/assets/images/evenements/articles/masterclass-marketing-ia.webp',
    title: 'Masterclass : Stratégie Marketing Digital en 2026',
    date: '15 octobre 2026',
    dateISO: '2026-10-15',
    heure: '10h00 - 13h00',
    lieu: 'Bruxelles',
    type: 'Masterclass',
    desc: 'Apprenez à construire une stratégie marketing digitale complète et efficace pour développer votre activité en 2026.',
    content: 'Une masterclass intensive pour comprendre les leviers du marketing digital moderne : SEO, réseaux sociaux, email marketing et publicité en ligne. Repartez avec un plan d\'action concret pour votre activité.',
    programme: [
      'État des lieux du marketing digital en 2026',
      'Construire sa présence en ligne',
      'SEO et visibilité organique',
      'Réseaux sociaux et community management',
      'Plan d\'action personnalisé',
    ],
    intervenants: [
      { name: 'Joel Kuate Parfait', role: 'Fondateur — Ecole du Numérique' },
    ],
  },
]

export function getEvenementBySlug(slug) {
  return evenements.find(e => e.slug === slug)
}
