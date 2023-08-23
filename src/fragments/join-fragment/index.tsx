import JoinForm from '@/components/organisms/join-form'
import './styles.scss'

export default function JoinFragment() {
  return (
    <div className="join-section">
      <div className="md:space-y-9 space-y-4 w-full">
        <JoinForm />
      </div>
    </div>
  )
}
