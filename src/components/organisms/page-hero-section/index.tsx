'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import classnames from 'classnames'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface PageHeroSectionProps {}

const data = {
  location: {
    subtitle: 'THE CROSS CONFERENCE 2023',
    title: 'Location & Date',
    background: 'bg-primary border-gray-300',
    color: 'text-black',
    fromBg: 'from-primary',
    desc: 'How to get to the venue',
  },
  about: {
    subtitle: 'Our Creed',
    title: 'About Us',
    background: 'bg-primary border-gray-300',
    color: 'text-black',
    fromBg: 'from-primary',
    desc: 'Called to serve, called to live a Holy Life',
  },
  people: {
    subtitle: 'Get to know the members',
    title: 'Who We Are',
    background: 'bg-black border-gray-300',
    fromBg: 'from-black',
    color: 'text-white',
    desc: 'Event is sponsored and support by God. We just submit to His Sovereign will',
  },
  join: {
    subtitle: 'Touched by God',
    title: 'Become A Member',
    background: 'bg-primary border-gray-300',
    color: 'text-black',
    fromBg: 'from-primary',
    desc: 'A Christian and have a burden for the true Gospel of Christ',
  },
  attend: {
    subtitle: 'The Cross Conference 2023',
    title: 'Attending',
    background: 'bg-primary border-gray-300',
    color: 'text-black',
    fromBg: 'from-primary',
    desc: 'Get your seats and email updates on the event',
  },
}

function PageHeroSection(props: PageHeroSectionProps) {
  const pathname = usePathname().replace('/', '')
  //@ts-ignore
  const info = data[`${pathname}`]

  return (
    <section
      className={classnames(
        'relative w-full pt-32 pb-20 p-8 md:px-24 overflow-hidden',
        ' flex items-center justify-center flex-col space-y-9 border-b',
        info.background
      )}
    >
      <div className="absolute right-0 opacity-50 bottom-0 h-full w-1/2 z-0">
        <img
          src="https://cdn.devdojo.com/images/january2023/blurry-gradient-top-right.png"
          className="absolute right-0 top-0 z-10 h-full w-auto translate-x-1/2 -translate-y-40 opacity-100"
          alt=""
        />
        <div
          className={classnames(
            'absolute inset-0 z-20 bg-gradient-to-t dark:hidden',
            {
              [info.fromBg]: true,
            }
          )}
        />
      </div>

      <div className="absolute left-0 opacity-50 top-0 h-full w-1/2">
        <img
          src="https://cdn.devdojo.com/images/january2023/blurry-gradient-bottom-left.png"
          className="absolute left-0 bottom-0 z-10 h-full w-auto translate-y-32 -translate-x-1/2 opacity-100"
          alt=""
        />
        <div
          className={classnames(
            'absolute inset-0 z-20 bg-gradient-to-b dark:hidden',
            {
              [info.fromBg]: true,
            }
          )}
        />
      </div>

      <div className="flex items-center justify-center flex-col space-y-9">
        <div className="flex items-center justify-center max-w-2xl">
          <p
            className={classnames(
              'text-lg text-center',
              inter.className,
              info.color
            )}
          >
            {info.subtitle.toUpperCase()}
          </p>
        </div>
        <h1
          className={classnames(
            "md:leading-3 font-['Inter'] mt-32 text-5xl md:text-5xl lg:text-7xl",
            'font-black max-w-7xl text-center tracking-widest main-header-text',
            info.color,
            inter.className
          )}
        >
          {info.title}
        </h1>
        <div className="flex items-center justify-center max-w-2xl">
          <p className={classnames('text-lg text-center', info.color)}>
            {info.desc}
          </p>
        </div>
      </div>
    </section>
  )
}

PageHeroSection.propTypes = {}
export default PageHeroSection
