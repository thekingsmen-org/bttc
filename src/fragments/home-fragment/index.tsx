import HeroSection from '@/components/organisms/hero-section'
import MidSection from '@/components/organisms/mid-section'
import GuestsSection from '@/components/organisms/guests-section'
import AboutSection from '@/components/organisms/about-section'

export default function HomeFragment(props: { guests: any[] }) {
  return (
    <div className="h-full w-full">
      <HeroSection />
      <AboutSection />
      <GuestsSection guests={props.guests} />
      <MidSection />
    </div>
  )
}
