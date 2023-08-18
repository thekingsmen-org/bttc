import './styles.scss'
import RegistrationForm from '@/components/organisms/registration-form'

export default function AttendFragment() {
  return (
    <div className="join-section">
      <div className="md:space-y-9 space-y-4 w-full">
        <RegistrationForm />
      </div>
    </div>
  )
}
