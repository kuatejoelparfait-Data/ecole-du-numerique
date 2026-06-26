import EvenementsHero from './EvenementsHero/EvenementsHero'
import EvenementsWhy from './EvenementsWhy/EvenementsWhy'
import NEGrid from './NEGrid/NEGrid'
import EvenementsTestimonials from './EvenementsTestimonials/EvenementsTestimonials'
import EvenementsFAQ from './EvenementsFAQ/EvenementsFAQ'
import EvenementsCTA from './EvenementsCTA/EvenementsCTA'

export default function NosEvenements() {
  return (
    <>
      <EvenementsHero />
      <EvenementsWhy />
      <NEGrid />
      <EvenementsTestimonials />
      <EvenementsFAQ />
      <EvenementsCTA />
    </>
  )
}
