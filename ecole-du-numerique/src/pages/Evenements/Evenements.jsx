import Wave from '../../components/Dividers/Wave'
import EvenementsHero from './EvenementsHero/EvenementsHero'
import EvenementsWhy from './EvenementsWhy/EvenementsWhy'
import EvenementsGrid from './EvenementsGrid/EvenementsGrid'
import EvenementsCTA from './EvenementsCTA/EvenementsCTA'

export default function Evenements() {
  return (
    <>
      <EvenementsHero />
      <EvenementsWhy />
      <EvenementsGrid />
      <Wave top="#F8F7FC" bottom="#4c1d95" />
      <EvenementsCTA />
    </>
  )
}
