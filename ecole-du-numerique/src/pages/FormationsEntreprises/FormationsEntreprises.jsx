import Arc    from '../../components/Dividers/Arc'
import Wave   from '../../components/Dividers/Wave'
import FEHero       from './FEHero/FEHero'
import FECategories from './FECategories/FECategories'
import FEStats      from './FEStats/FEStats'
import FEWhy        from './FEWhy/FEWhy'
import FEProcess    from './FEProcess/FEProcess'
import FEFAQ        from './FEFAQ/FEFAQ'
import FECTA        from './FECTA/FECTA'

export default function FormationsEntreprises() {
  return (
    <>
      <FEHero />
      <Arc top="#0D0B1A" bottom="#F8F7FC" />
      <FECategories />
      <FEStats />
      <FEWhy />
      <FEProcess />
      <FEFAQ />
      <Wave top="#FFFFFF" bottom="#3b1fa3" />
      <FECTA />
    </>
  )
}
