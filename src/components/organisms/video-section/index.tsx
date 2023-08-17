import './styles.module.scss'
import React, { useRef } from 'react'

export default function VideoSection() {
  return (
    <div className="bg-primary py-8">
      <div className=" bg-gray-500 md:h-[400px] h-56 rounded-xl md:mx-24 mx-2">
        <iframe
          className="h-full w-full rounded-xl"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  )
}
