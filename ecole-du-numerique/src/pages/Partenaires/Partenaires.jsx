import PartenairesHero from './PartenairesHero/PartenairesHero'
import PartenairesAvantages from './PartenairesAvantages/PartenairesAvantages'
import PartenairesTypes from './PartenairesTypes/PartenairesTypes'
import PartenairesActuels from './PartenairesActuels/PartenairesActuels'
import PartenairesProcess from './PartenairesProcess/PartenairesProcess'
import PartenairesForm from './PartenairesForm/PartenairesForm'

export default function Partenaires() {
  return (
    <>
      <PartenairesHero />
      <PartenairesAvantages />
      <PartenairesTypes />
      <PartenairesActuels />
      <PartenairesProcess />
      <PartenairesForm />
    </>
  )
}
