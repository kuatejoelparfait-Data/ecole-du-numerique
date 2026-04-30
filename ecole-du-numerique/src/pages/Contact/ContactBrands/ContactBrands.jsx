import './ContactBrands.css'

const brands = [
  { name: 'Région de Bruxelles-Capitale', logo: '/assets/images/logo-bruxelles-capital.webp' },
  { name: 'Partenaire 2' },
  { name: 'Partenaire 3' },
  { name: 'Partenaire 4' },
  { name: 'Partenaire 5' },
]

export default function ContactBrands() {
  return (
    <section className="contact-brands">
      <div className="contact-brands__container">
        <p className="contact-brands__title">Ils nous font confiance.</p>
        <div className="contact-brands__grid">
          {brands.map(brand => (
            <div key={brand.name} className="contact-brands__item">
              {brand.logo ? (
                <>
                  <img src={brand.logo} alt={brand.name} className="contact-brands__logo-img" />
                  <span className="contact-brands__name">{brand.name}</span>
                </>
              ) : (
                <>
                  <div className="contact-brands__logo-placeholder" />
                  <span className="contact-brands__name">{brand.name}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
