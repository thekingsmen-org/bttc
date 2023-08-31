import './styles.module.scss'
import React from 'react'
import ContentSection from '@/components/organisms/content-section'

export default function VideoSection() {
  return (
    <ContentSection preset="primary">
      <div className=" bg-gray-500 md:h-[600px] h-72 rounded-xl md:mx-24 mx-2">
        <iframe
          className="h-full w-full rounded-xl"
          src="https://www.youtube.com/embed/LGTufX9cfPM?autoplay=1"
          allow="autoplay"
        ></iframe>
      </div>
    </ContentSection>
  )
}
