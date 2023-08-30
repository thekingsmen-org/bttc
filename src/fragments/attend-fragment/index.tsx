import './styles.scss'
import RegistrationForm from '@/components/organisms/registration-form'
import ContentSection from '@/components/organisms/content-section'

export default function AttendFragment() {
  return (
    <ContentSection preset="primary">
      <div className="md:space-y-9 py-40 space-y-4 w-full">
        <RegistrationForm />
      </div>
    </ContentSection>
  )
}
