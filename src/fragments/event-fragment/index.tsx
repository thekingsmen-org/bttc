import EventSection from '@/components/organisms/event-section'
import './styles.scss'
import ContentSection from '@/components/organisms/content-section'

export default function EventFragment() {
  return (
    <div className="event-section">
      <EventSection />
      <ContentSection preset="primary">
        <h2 className="text-center md:text-2xl md:mt-16 my-10 italic text-base mx-5">
          Come and experience a total turn around with the King of Kings...{' '}
        </h2>
      </ContentSection>
    </div>
  )
}
