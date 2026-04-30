import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Formations Particuliers', href: '/formations-particuliers' },
  { label: 'Formations Entreprises',  href: '/formations-entreprises' },
  { label: 'Évènements',              href: '/evenements' },
  { label: 'Workshops',               href: '/workshops' },
  { label: 'Devenir Partenaire',      href: '/partenaires' },
  { label: 'Pricing',                 href: '/pricing' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__container">

        <Link to="/" className="navbar__logo">
          <img
            src="/assets/images/logo.webp"
            alt="Ecole Du Numérique"
            className="navbar__logo-img"
            width="160"
            height="40"
          />
        </Link>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`} aria-label="Navigation principale">
          {navLinks.map(link => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  )
}
