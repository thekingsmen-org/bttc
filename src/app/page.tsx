import HomeFragment from '@/fragments/home-fragment'
import { getGuests } from '@/clients/contentful'

export default async function Home() {
  const guests = await getGuests()

  console.log(guests)

  return (
    <main className="justify-between">
      <HomeFragment guests={guests} />
    </main>
  )
}
