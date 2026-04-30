export const formationsEntreprises = [
  // ── Intelligence Artificielle & Data ──────────────────────
  {
    slug: 'data-science-ia-entreprise',
    category: 'Intelligence Artificielle & Data',
    title: 'Data Science & IA pour les entreprises',
    level: 'Intermédiaire',
    desc: 'Exploitez vos données d\'entreprise grâce à l\'IA pour prendre de meilleures décisions stratégiques.',
  },
  {
    slug: 'ia-open-source-huggingface',
    category: 'Intelligence Artificielle & Data',
    title: 'IA open-source avancée avec Hugging Face',
    level: 'Avancé',
    desc: 'Maîtrisez les modèles open-source de Hugging Face pour déployer des solutions IA sur mesure.',
  },
  {
    slug: 'ia-generative-deploiement-local',
    category: 'Intelligence Artificielle & Data',
    title: 'Déploiement d\'IA générative en local',
    level: 'Avancé',
    desc: 'Installez et gérez des modèles d\'IA génératifs directement dans votre infrastructure sans dépendance cloud.',
  },
  {
    slug: 'optimisation-business-ia',
    category: 'Intelligence Artificielle & Data',
    title: 'Optimisation business via l\'IA',
    level: 'Intermédiaire',
    desc: 'Identifiez et automatisez les processus métiers grâce aux outils d\'intelligence artificielle.',
  },
  {
    slug: 'predictive-analytics-ecommerce',
    category: 'Intelligence Artificielle & Data',
    title: 'Analytique prédictive pour l\'e-commerce',
    level: 'Intermédiaire',
    desc: 'Anticipez les comportements d\'achat et optimisez vos stocks grâce aux modèles prédictifs.',
  },
  {
    slug: 'ia-monitoring-ethique',
    category: 'Intelligence Artificielle & Data',
    title: 'IA : monitoring & éthique en entreprise',
    level: 'Intermédiaire',
    desc: 'Mettez en place un cadre d\'utilisation responsable de l\'IA conforme aux réglementations européennes.',
  },
  {
    slug: 'chatbots-assistants-virtuels',
    category: 'Intelligence Artificielle & Data',
    title: 'Chatbots & assistants virtuels',
    level: 'Débutant',
    desc: 'Créez et déployez des chatbots intelligents pour automatiser votre service client et vos processus internes.',
  },

  // ── Développement Web & No-Code ───────────────────────────
  {
    slug: 'workflow-nocode-api-zapier',
    category: 'Développement Web & No-Code',
    title: 'Workflow no-code & intégrations (API / Zapier / Make)',
    level: 'Débutant',
    desc: 'Automatisez vos processus métiers en connectant vos outils sans écrire une ligne de code.',
  },
  {
    slug: 'bolt-new-ia-coding',
    category: 'Développement Web & No-Code',
    title: 'Bolt.new : développement assisté par IA',
    level: 'Intermédiaire',
    desc: 'Créez des applications web complètes en quelques heures grâce à l\'IA générative de Bolt.new.',
  },
  {
    slug: 'microservices-ia-leger',
    category: 'Développement Web & No-Code',
    title: 'Orchestration de microservices pour l\'IA légère',
    level: 'Avancé',
    desc: 'Architecturez des systèmes distribués optimisés pour l\'intégration de modèles IA légers.',
  },

  // ── Cybersécurité & Protection ────────────────────────────
  {
    slug: 'cybersecurite-quotidien-entreprise',
    category: 'Cybersécurité & Protection',
    title: 'Cybersécurité au quotidien',
    level: 'Débutant',
    desc: 'Les bonnes pratiques essentielles pour protéger votre entreprise des cyberattaques les plus courantes.',
  },
  {
    slug: 'sensibilisation-securite-informatique',
    category: 'Cybersécurité & Protection',
    title: 'Sensibilisation à la sécurité informatique',
    level: 'Débutant',
    desc: 'Formez vos équipes aux risques cyber et aux réflexes à adopter pour sécuriser votre environnement de travail.',
  },
  {
    slug: 'securiser-apis-services-web',
    category: 'Cybersécurité & Protection',
    title: 'Sécuriser ses APIs et services web',
    level: 'Avancé',
    desc: 'Auditez et renforcez la sécurité de vos APIs, services web et infrastructures exposées.',
  },

  // ── Gestion de Projet & Méthodologies ────────────────────
  {
    slug: 'gestion-projet-agile-ia',
    category: 'Gestion de Projet & Méthodologies',
    title: 'Gestion de projet tech agile + IA',
    level: 'Intermédiaire',
    desc: 'Combinez les méthodologies agiles et les outils IA pour piloter vos projets tech avec efficacité.',
  },
  {
    slug: 'formation-sur-mesure-entreprise',
    category: 'Gestion de Projet & Méthodologies',
    title: 'Formation sur mesure (adaptée à votre entreprise)',
    level: 'Tous niveaux',
    desc: 'Un programme entièrement personnalisé selon les besoins spécifiques de votre équipe et de votre secteur.',
  },
]

export function getFormationEntrepriseBySlug(slug) {
  return formationsEntreprises.find(f => f.slug === slug)
}
