'use client'

import './styles.module.scss'
import React, { useEffect, useState } from 'react'
import ContentSection from '@/components/organisms/content-section'
import GuestItem from '@/components/molecules/guest-item'
import classnames from 'classnames'
import { databases } from '@/clients/appwrite'
import { Guest } from '@/contracts'

export default function GuestsSection() {
  const [guests, setGuests] = useState<Guest[]>([])

  const categories = [
    {
      id: 'speaker',
      title: 'Speaker',
    },
    {
      id: 'divider',
      title: 'Divider',
    },
    {
      id: 'singer',
      title: 'Worship',
    },
  ]

  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = async () => {
    const response = await databases.listDocuments(
      `${process.env.NEXT_PUBLIC_DATABASE_ID}`,
      `${process.env.NEXT_PUBLIC_GUEST_COLLECTION_ID}`
    )
    setGuests(response.documents)
  }

  return (
    <ContentSection preset="black" withGradient>
      <div>
        <div className="flex items-center justify-center flex-col space-y-9 my-32">
          <div className="flex items-center justify-center max-w-2xl">
            <p
              className={classnames(
                'text-xs font-extrabold text-gray-100 font-sans tracking-widest'
              )}
            >
              OUR SPEAKERS, GOSPEL ARTIST AND CHOIR
            </p>
          </div>
          <h1
            className={classnames(
              "leading-3 font-['Inter'] text-white text-5xl md:text-5xl lg:text-7xl",
              'font-black max-w-7xl text-center tracking-widest main-header-text'
            )}
          >
            SPECIAL GUEST
          </h1>
        </div>
        <div className={classnames('min-w-full w-full')}>
          {guests.map((guest, index) => (
            <GuestItem key={guest.$id} index={index} guest={{ ...guest }} />
          ))}
        </div>
      </div>
    </ContentSection>
  )
}
