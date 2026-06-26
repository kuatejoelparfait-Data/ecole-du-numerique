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
      <PricingCTA />
    </>
  )
}
