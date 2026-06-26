import Hero        from './Hero/Hero'
import Audiences   from './Audiences/Audiences'
import Formations  from './Formations/Formations'
import HowItWorks  from './HowItWorks/HowItWorks'
import Avis        from './Avis/Avis'
import FAQ         from './FAQ/FAQ'
import BlogPreview from './BlogPreview/BlogPreview'
import Financement from './Financement/Financement'

export default function Home() {
  return (
    <>
      <Hero />
      <Audiences />
      <Formations />
      <Financement />
      <HowItWorks />

      <FAQ />
      <Avis />
      <BlogPreview />
    </>
  )
}
