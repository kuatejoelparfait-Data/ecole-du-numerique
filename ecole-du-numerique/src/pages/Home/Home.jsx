import Hero        from './Hero/Hero'
import Audiences   from './Audiences/Audiences'
import Formations  from './Formations/Formations'
import HowItWorks  from './HowItWorks/HowItWorks'
import FAQ         from './FAQ/FAQ'
import BlogPreview from './BlogPreview/BlogPreview'

export default function Home() {
  return (
    <>
      <Hero />
      <Audiences />
      <Formations />
      <HowItWorks />
      <FAQ />
      <BlogPreview />
    </>
  )
}
