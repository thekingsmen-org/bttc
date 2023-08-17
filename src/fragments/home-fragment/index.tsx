import HeroSection from '@/components/organisms/hero-section'
import MidSection from '@/components/organisms/mid-section'
import GuestsSection from '@/components/organisms/guests-section'
import VideoSection from '@/components/organisms/video-section'

export default function HomeFragment() {
  return (
    <div className="h-full w-full">
      <HeroSection />
      <VideoSection />
      <GuestsSection />
      <MidSection />
    </div>
  )
}
