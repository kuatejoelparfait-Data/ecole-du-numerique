import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formationsEntreprises } from '../../../data/formationsEntreprises'
import './FECategories.css'

const categoryMeta = [
  { id: 'Intelligence Artificielle & Data',  label: 'Intelligence Artificielle & Data',  icon: 'smart_toy', image: '/assets/images/formations-entreprises/ia-data/hero-ia.webp'                      },
  { id: 'Développement Web & No-Code',       label: 'Développement Web & No-Code',       icon: 'code',      image: '/assets/images/formations-entreprises/dev-no-code/laptop-freepik.webp'         },
  { id: 'Cybersécurité & Protection',        label: 'Cybersécurité & Protection',        icon: 'shield',    image: '/assets/images/formations-entreprises/cybersecurite/hero-pexels.webp'          },
  { id: 'Marketing Digital & Gestion de Projet', label: 'Marketing Digital & Gestion de Projet', icon: 'task_alt', image: '/assets/images/formations-entreprises/gestion-projet-methode/hero-pexels.webp' },
]

// Structure des groupes et sous-groupes par onglet
// Les groupes sont définis ici indépendamment des formations
// → la structure existe avant même d'ajouter les formations
const tabGroups = {
  'Intelligence Artificielle & Data': [
    {
      name: 'IA générative et pratiques métier',
      icon: 'psychology',
      totalCount: null, // sera calculé depuis les données
      subgroups: [
        'Déployer l\'IA dans votre organisation',
        'Certifications en Intelligence Artificielle',
        'Fondamentaux de l\'IA générative',
        'Prompt engineering et agents intelligents',
        'Maîtriser Microsoft Copilot',
        'Créer des contenus avec l\'IA générative',
        'IA pour le marketing et le commerce',
        'IA pour les RH et la formation',
        'IA et autres usages métier',
      ],
    },
    {
      name: 'Machine Learning, Deep Learning & Big Data',
      icon: 'hub',
      totalCount: null,
      subgroups: [
        'Vue d\'ensemble du Machine Learning',
        'Algorithmes et méthodes de Machine Learning',
        'Deep Learning et réseaux neuronaux profonds',
        'Développer des solutions IA avec Python',
        'IA avec Google Cloud',
        'IA avec Amazon Web Services',
        'IA avec Microsoft Azure',
        'Machine Learning et Big Data avec Apache Spark',
        'Parcours certifiants',
      ],
    },
  ],
  'Cybersécurité & Protection': [
    {
      name: 'Sensibilisation, certifications et conformité',
      icon: 'policy',
      totalCount: null,
      subgroups: [
        'Certifications en cybersécurité',
        'Modules de sensibilisation courts',
        'Sensibilisation à la sécurité du SI',
        'Séminaires de sécurité',
        'Protection des données et conformité réglementaire',
      ],
    },
    {
      name: 'Pentest, audit offensif et investigation numérique',
      icon: 'manage_search',
      totalCount: null,
      subgroups: [
        'Détection des vulnérabilités et intrusions',
        'Pentest et hacking éthique',
        'Analyse des logs et événements de sécurité',
      ],
    },
  ],
  'Développement Web & No-Code': [
    {
      name: 'Débuter dans la création web',
      icon: 'web',
      totalCount: null,
      subgroups: [
        'Construire un site web : mise en pratique',
        'IA et outils no-code',
        'Initiation à Dreamweaver',
      ],
    },
    {
      name: 'Développement front-end',
      icon: 'desktop_windows',
      totalCount: null,
      subgroups: [
        'Formations Actions Collectives ATLAS',
        'Accessibilité numérique web et mobile',
        'UX design et ergonomie web',
        'HTML et CSS',
        'JavaScript et interfaces web',
        'Référencement naturel et SEO',
        'Parcours certifiants',
      ],
    },
    {
      name: 'Développement back-end',
      icon: 'dns',
      totalCount: null,
      subgroups: [
        'Développement PHP côté serveur',
        'Node.js pour le développement serveur',
        'Développement web avec Python',
      ],
    },
    {
      name: 'Systèmes de gestion de contenu (CMS)',
      icon: 'article',
      totalCount: null,
      subgroups: [
        'Créer et administrer un site WordPress',
      ],
    },
    {
      name: 'Frameworks web',
      icon: 'layers',
      totalCount: null,
      subgroups: [
        'Symfony, Laravel et frameworks PHP',
        'Développement avec ReactJS',
        'Bootstrap, Tailwind et frameworks CSS',
      ],
    },
    {
      name: 'Serveurs web et applications',
      icon: 'storage',
      totalCount: null,
      subgroups: [
        'Administration et configuration de serveurs web',
      ],
    },
  ],
  'Marketing Digital & Gestion de Projet': [
    // à compléter
  ],
}

export default function FECategories() {
  const [active, setActive] = useState(
    () => sessionStorage.getItem('fe-tab') || categoryMeta[0].id
  )
  const [activeGroup, setActiveGroup] = useState(
    () => sessionStorage.getItem('fe-group') || null
  )
  const [openSubgroups, setOpenSubgroups] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem('fe-subgroups')) || {} }
    catch { return {} }
  })

  const tabFormations = formationsEntreprises.filter(f => f.category === active)

  // Groupes depuis la config (priorité) ou dérivés des formations (Archives)
  const configGroups = tabGroups[active] || []
  const hasGroups = configGroups.length > 0

  // Formations du groupe sélectionné
  const groupFormations = activeGroup
    ? tabFormations.filter(f => f.group === activeGroup)
    : []

  // Config du groupe actif
  const activeGroupConfig = configGroups.find(g => g.name === activeGroup)
  // Tous les sous-groupes depuis la config (affichés même si vides)
  const subgroups = activeGroupConfig?.subgroups || []
  // Formations sans sous-groupe
  const ungroupedFormations = groupFormations.filter(f => !f.subgroup)

  function handleTabChange(id) {
    sessionStorage.setItem('fe-tab', id)
    sessionStorage.removeItem('fe-group')
    sessionStorage.removeItem('fe-subgroups')
    setActive(id)
    setActiveGroup(null)
    setOpenSubgroups({})
  }

  function handleGroupChange(name) {
    sessionStorage.setItem('fe-group', name)
    sessionStorage.removeItem('fe-subgroups')
    setActiveGroup(name)
    setOpenSubgroups({})
  }

  function toggleSubgroup(name) {
    setOpenSubgroups(prev => {
      const next = { ...prev, [name]: !prev[name] }
      sessionStorage.setItem('fe-subgroups', JSON.stringify(next))
      return next
    })
  }

  return (
    <section id="nos-formations" className="fe-categories">
      <div className="fe-categories__container">

        <div className="fe-categories__header">
          <h2 className="fe-categories__title">
            Nos <span className="fe-categories__accent">formations</span>
          </h2>
          <p className="fe-categories__subtitle">
            Choisissez votre domaine et découvrez les formations disponibles pour vos équipes.
          </p>
        </div>

        {/* Onglets */}
        <div className="fe-categories__tabs">
          {categoryMeta.map(cat => (
            <button
              key={cat.id}
              className={`fe-categories__tab${active === cat.id ? ' fe-categories__tab--active' : ''}`}
              onClick={() => handleTabChange(cat.id)}
            >
              <img src={cat.image} alt={cat.label} className="fe-categories__tab-img" loading="lazy" />
              <span className="material-symbols-rounded fe-categories__tab-icon">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Vue groupes */}
        {hasGroups && !activeGroup && (
          <div className="fe-categories__groups">
            {configGroups.map(group => {
              const count = tabFormations.filter(f => f.group === group.name).length
              const displayCount = count > 0 ? count : group.totalCount
              return (
                <button
                  key={group.name}
                  className="fe-categories__group-card"
                  onClick={() => handleGroupChange(group.name)}
                >
                  <div className="fe-categories__group-icon-wrap">
                    <span className="material-symbols-rounded">{group.icon}</span>
                  </div>
                  <div className="fe-categories__group-info">
                    <p className="fe-categories__group-name">{group.name}</p>
                    <p className="fe-categories__group-count">
                      {displayCount ? `${displayCount} formation${displayCount > 1 ? 's' : ''}` : ''}
                    </p>
                  </div>
                  <span className="material-symbols-rounded fe-categories__group-arrow">arrow_forward</span>
                </button>
              )
            })}
          </div>
        )}

        {/* Vue détail groupe */}
        {activeGroup && (
          <div className="fe-categories__group-detail">
            <button className="fe-categories__back" onClick={() => { sessionStorage.removeItem('fe-group'); sessionStorage.removeItem('fe-subgroups'); setActiveGroup(null); setOpenSubgroups({}) }}>
              <span className="material-symbols-rounded">arrow_back</span>
              Retour
            </button>

            <h3 className="fe-categories__group-heading">{activeGroup}</h3>

            {subgroups.length > 0 ? (
              <>
                {subgroups.map(subgroup => {
                  const subFormations = groupFormations.filter(f => f.subgroup === subgroup)
                  const isOpen = !!openSubgroups[subgroup]
                  const hasFormations = subFormations.length > 0
                  return (
                    <div key={subgroup} className="fe-categories__subgroup">
                      <button
                        className={`fe-categories__subgroup-title${isOpen ? ' fe-categories__subgroup-title--open' : ''}`}
                        onClick={() => toggleSubgroup(subgroup)}
                      >
                        <span>{subgroup}</span>
                        <span className="fe-categories__subgroup-meta">
                          {hasFormations && (
                            <span className="fe-categories__subgroup-count">
                              {subFormations.length} formation{subFormations.length > 1 ? 's' : ''}
                            </span>
                          )}
                          <span className="material-symbols-rounded fe-categories__subgroup-chevron">expand_more</span>
                        </span>
                      </button>
                      {isOpen && (
                        hasFormations ? (
                          <div className="fe-categories__grid">
                            {subFormations.map(formation => (
                              <FormationCard key={formation.slug} formation={formation} />
                            ))}
                          </div>
                        ) : (
                          <p className="fe-categories__subgroup-soon">Formations bientôt disponibles</p>
                        )
                      )}
                    </div>
                  )
                })}

                {ungroupedFormations.length > 0 && (
                  <div className="fe-categories__grid">
                    {ungroupedFormations.map(formation => (
                      <FormationCard key={formation.slug} formation={formation} />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="fe-categories__empty">
                <span className="material-symbols-rounded fe-categories__empty-icon">schedule</span>
                <p className="fe-categories__empty-title">Formations bientôt disponibles</p>
                <p className="fe-categories__empty-desc">
                  Nous finalisons le programme pour ce domaine. Contactez-nous pour être informé dès l'ouverture des inscriptions.
                </p>
                <a href="/contact" className="fe-categories__empty-cta">Nous contacter</a>
              </div>
            )}
          </div>
        )}

        {/* Vue plate (Archives) */}
        {!hasGroups && tabFormations.length > 0 && (
          <div className="fe-categories__grid">
            {tabFormations.map(formation => (
              <FormationCard key={formation.slug} formation={formation} />
            ))}
          </div>
        )}

        {/* Onglet vide sans config de groupes */}
        {!hasGroups && tabFormations.length === 0 && (
          <div className="fe-categories__empty">
            <span className="material-symbols-rounded fe-categories__empty-icon">schedule</span>
            <p className="fe-categories__empty-title">Formations bientôt disponibles</p>
            <p className="fe-categories__empty-desc">
              Nous finalisons le programme pour cette catégorie. Contactez-nous pour connaître les prochaines sessions ou être informé dès leur ouverture.
            </p>
            <a href="/contact" className="fe-categories__empty-cta">Nous contacter</a>
          </div>
        )}

      </div>
    </section>
  )
}

function FormationCard({ formation }) {
  return (
    <div className="fe-categories__card">
      <span className="material-symbols-rounded fe-categories__card-icon">school</span>
      <div className="fe-categories__card-body">
        <p className="fe-categories__card-title">{formation.title}</p>
        <p className="fe-categories__card-desc">{formation.desc}</p>
      </div>
      {formation.duration && (
        <div className="fe-categories__card-meta">
          <span className="material-symbols-rounded fe-categories__card-meta-icon">schedule</span>
          <span>{formation.duration}</span>
        </div>
      )}
      <div className="fe-categories__card-footer">
        <Link
          to={`/formations-entreprises/${formation.slug}`}
          className="fe-categories__card-cta fe-categories__card-cta--outline"
        >
          En savoir plus
        </Link>
        <Link to="/contact" className="fe-categories__card-cta">
          Demander un devis
        </Link>
      </div>
    </div>
  )
}
