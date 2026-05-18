import Hero        from './Hero/Hero'
import Audiences   from './Audiences/Audiences'
import Formations  from './Formations/Formations'
import HowItWorks  from './HowItWorks/HowItWorks'
import Avis        from './Avis/Avis'
import FAQ         from './FAQ/FAQ'
import BlogPreview from './BlogPreview/BlogPreview'
import Wave        from '../../components/Dividers/Wave'
import Arc         from '../../components/Dividers/Arc'
import Financement from './Financement/Financement'

export default function Home() {
  return (
    <>
      <Hero />
      <Arc top="#0D0B1A" bottom="#FFFFFF" />
      <Audiences />
      <Formations />
      <Financement />
      <HowItWorks />

      <FAQ />
      <Wave top="#FFFFFF" bottom="#3b1fa3" />
      <Avis />
      <Wave top="#7b2fff" bottom="#F8F7FC" />
      <BlogPreview />
    </>
  )
}
