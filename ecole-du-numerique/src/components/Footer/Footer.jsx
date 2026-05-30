import { Link } from 'react-router-dom'
import './Footer.css'

const footerLinks = [
  { label: 'Formations Particuliers',      href: '/formations-particuliers' },
  { label: 'Formations Entreprises',       href: '/formations-entreprises' },
  { label: 'Nos Évènements',               href: '/evenements' },
  { label: 'Vos Workshops',               href: '/workshops' },
  { label: 'Devenir Partenaire',           href: '/partenaires' },
  { label: 'Blog',                         href: '/blog' },
  { label: 'Pricing',                      href: '/pricing' },
  { label: 'À propos de nous',             href: '/a-propos' },
  { label: 'Contact',                      href: '/contact' },
  { label: 'Politique de remboursements',  href: '/remboursements' },
  { label: 'Politique de confidentialité', href: '/confidentialite' },
]

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img
              src="/assets/images/logo-footer.webp"
              alt="Ecole Du Numérique"
              className="footer__logo-img"
              width="240"
              height="120"
              loading="lazy"
            />
          </Link>

          <p className="footer__desc">
            Nous proposons des formations sur mesure, spécialement conçues pour les
            indépendants et les professionnels désireux d'améliorer leurs compétences
            et de se démarquer dans un monde en constante évolution technologique.
          </p>

          <a
            href="https://www.linkedin.com/company/ecole-du-num%C3%A9rique/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social"
            aria-label="LinkedIn — Ecole Du Numérique"
          >
            <LinkedInIcon />
          </a>
        </div>

        <nav className="footer__nav" aria-label="Liens du footer">
          <h3 className="footer__nav-title">Navigation</h3>
          <ul>
            {footerLinks.map(link => (
              <li key={link.href}>
                <Link to={link.href} className="footer__nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p>Digital House Company © 2026</p>
        </div>
      </div>
    </footer>
  )
}
