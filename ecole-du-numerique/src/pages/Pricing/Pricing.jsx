import Wave from '../../components/Dividers/Wave'
import PricingHero from './PricingHero/PricingHero'
import PricingCards from './PricingCards/PricingCards'
import PricingFinancement from './PricingFinancement/PricingFinancement'
import PricingFAQ from './PricingFAQ/PricingFAQ'
import PricingCTA from './PricingCTA/PricingCTA'

export default function Pricing() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <PricingFinancement />
      <PricingFAQ />
      <Wave top="#F8F7FC" bottom="#4c1d95" />
      <PricingCTA />
    </>
  )
}
