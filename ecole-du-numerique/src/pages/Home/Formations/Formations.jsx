import { useState } from 'react'
import './Formations.css'

const particuliers = [
  {
    icon:  'smart_toy',
    title: 'Intelligence Artificielle & Data',
    count: 12,
    image: '/assets/images/formations-particuliers/ia-data/hero-ia.webp',
  },
  {
    icon:  'code',
    title: 'Développement Web, Logiciel & No-Code',
    count: 8,
    image: '/assets/images/formations-particuliers/dev-no-code/developer-ia.webp',
  },
  {
    icon:  'trending_up',
    title: 'Marketing Digital & SEO',
    count: 7,
    image: '/assets/images/formations-particuliers/marketing-digital-seo/hero-rawpixel.webp',
  },
  {
    icon:  'share',
    title: 'Réseaux Sociaux & Communication',
    count: 6,
    image: '/assets/images/formations-particuliers/reseau-communication/hero-freepik-1.webp',
  },
  {
    icon:  'palette',
    title: 'Design & Expérience Utilisateur',
    count: 5,
    image: '/assets/images/formations-particuliers/design-ux/wireframe-pexels.webp',
  },
]

const entreprises = [
  {
    icon:  'smart_toy',
    title: 'Intelligence Artificielle & Data',
    count: 7,
    image: '/assets/images/formations-entreprises/ia-data/hero-ia.webp',
  },
  {
    icon:  'code',
    title: 'Développement Web, Logiciel & No-Code',
    count: 3,
    image: '/assets/images/formations-entreprises/dev-no-code/laptop-freepik.webp',
  },
  {
    icon:  'shield',
    title: 'Cybersécurité & Protection',
    count: 3,
    image: '/assets/images/formations-entreprises/cybersecurite/hero-pexels.webp',
  },
  {
    icon:  'task_alt',
    title: 'Gestion de Projet & Méthodologies',
    count: 2,
    image: '/assets/images/formations-entreprises/gestion-projet-methode/hero-pexels.webp',
  },
]

export default function Formations() {
  const [audience, setAudience] = useState('particuliers')
  const categories = audience === 'particuliers' ? particuliers : entreprises
  const href = audience === 'particuliers' ? '/formations-particuliers' : '/formations-entreprises'

  return (
    <section id="nos-formations" className="formations">
      <div className="formations__container">

        <div className="formations__header">
          <h2 className="formations__title">
            Nos domaines de <span className="formations__title-accent">formation</span>
          </h2>
          <p className="formations__subtitle">
            Des programmes couvrant tous les métiers du numérique, du débutant à l'expert.
          </p>
          <div className="formations__toggle">
            <button
              className={`formations__toggle-btn${audience === 'particuliers' ? ' formations__toggle-btn--active' : ''}`}
              onClick={() => setAudience('particuliers')}
            >
              Particuliers
            </button>
            <button
              className={`formations__toggle-btn${audience === 'entreprises' ? ' formations__toggle-btn--active' : ''}`}
              onClick={() => setAudience('entreprises')}
            >
              Entreprises
            </button>
          </div>
        </div>

        <div className="formations__grid">
          {categories.map(cat => (
            <a key={cat.title} href={href} className="formations__card">
              <div className="formations__card-img-wrapper">
                <img src={cat.image} alt={cat.title} className="formations__card-img" loading="lazy" />
              </div>
              <div className="formations__card-body">
                <span className="material-symbols-rounded formations__card-icon" aria-hidden="true">
                  {cat.icon}
                </span>
                <h3 className="formations__card-title">{cat.title}</h3>
                <p className="formations__card-count">{cat.count} formations</p>
                <span className="formations__card-link">Voir plus</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
