import Arc    from '../../components/Dividers/Arc'
import Wave   from '../../components/Dividers/Wave'
import FPHero       from './FPHero/FPHero'
import FPCategories from './FPCategories/FPCategories'
import FPStats      from './FPStats/FPStats'
import FPWhy        from './FPWhy/FPWhy'
import FPFAQ        from './FPFAQ/FPFAQ'
import FPCTA        from './FPCTA/FPCTA'

export default function FormationsParticuliers() {
  return (
    <>
      <FPHero />
      <Arc top="#0D0B1A" bottom="#F8F7FC" />
      <FPCategories />
      <FPStats />
      <FPWhy />
      <FPFAQ />
      <Wave top="#F8F7FC" bottom="#4c1d95" />
      <FPCTA />
    </>
  )
}
