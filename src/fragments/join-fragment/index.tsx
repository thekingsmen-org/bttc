import JoinForm from '@/components/organisms/join-form'
import './styles.scss'
import ContentSection from '@/components/organisms/content-section'

export default function JoinFragment() {
  return (
    <ContentSection preset="primary">
      <div className="md:space-y-9 space-y-4 w-full">
        <JoinForm />
      </div>
    </ContentSection>
  )
}
