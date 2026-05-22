import Wave from '../../components/Dividers/Wave'
import WorkshopsHero from './WorkshopsHero/WorkshopsHero'
import WorkshopsFormat from './WorkshopsFormat/WorkshopsFormat'
import WorkshopsGrid from './WorkshopsGrid/WorkshopsGrid'
import WorkshopsTestimonials from './WorkshopsTestimonials/WorkshopsTestimonials'
import WorkshopsFAQ from './WorkshopsFAQ/WorkshopsFAQ'
import WorkshopsCTA from './WorkshopsCTA/WorkshopsCTA'

export default function Workshops() {
  return (
    <>
      <WorkshopsHero />
      <WorkshopsFormat />
      <WorkshopsGrid />
      <WorkshopsTestimonials />
      <WorkshopsFAQ />
      <Wave top="#F8F7FC" bottom="#4c1d95" />
      <WorkshopsCTA />
    </>
  )
}
