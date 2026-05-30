import Wave from '../../components/Dividers/Wave'
import VWHero from './VWHero/VWHero'
import VWAvantages from './VWAvantages/VWAvantages'
import VWThemes from './VWThemes/VWThemes'
import VWForm from './VWForm/VWForm'
import VWTestimonials from './VWTestimonials/VWTestimonials'

export default function VosWorkshops() {
  return (
    <>
      <VWHero />
      <VWAvantages />
      <Wave top="#fff" bottom="#F8F7FC" />
      <VWThemes />
      <Wave top="#F8F7FC" bottom="#0D0B1A" />
      <VWForm />
      <Wave top="#0D0B1A" bottom="#F8F7FC" />
      <VWTestimonials />
    </>
  )
}
