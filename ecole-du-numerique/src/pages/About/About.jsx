import AboutHero        from './AboutHero/AboutHero'
import AboutMission     from './AboutMission/AboutMission'
import AboutApproach    from './AboutApproach/AboutApproach'
import AboutValues      from './AboutValues/AboutValues'
import AboutTeam        from './AboutTeam/AboutTeam'
import AboutFinancement from './AboutFinancement/AboutFinancement'
import Wave             from '../../components/Dividers/Wave'

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutApproach />
      <Wave top="#F8F7FC" bottom="#0D0B1A" />
      <AboutValues />
      <Wave top="#0D0B1A" bottom="#F8F7FC" />
      <AboutTeam />
      <AboutFinancement />
    </>
  )
}
