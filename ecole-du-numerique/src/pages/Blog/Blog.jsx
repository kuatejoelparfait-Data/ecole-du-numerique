import BlogHero        from './BlogHero/BlogHero'
import BlogGrid        from './BlogGrid/BlogGrid'
import BlogNewsletter  from './BlogNewsletter/BlogNewsletter'
import BlogCTA         from './BlogCTA/BlogCTA'
import Wave            from '../../components/Dividers/Wave'

export default function Blog() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
      <Wave top="#F8F7FC" bottom="#3b1fa3" />
      <BlogNewsletter />
      <Wave top="#7b2fff" bottom="#FFFFFF" />
      <BlogCTA />
    </>
  )
}
