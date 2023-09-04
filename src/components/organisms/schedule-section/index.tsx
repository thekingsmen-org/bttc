'use client'

import './styles.module.scss'
import React from 'react'
import ContentSection from '@/components/organisms/content-section'
import classnames from 'classnames'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function ScheduleContent() {
  const items = [
    {
      subtitle: 'Day 1',
      datetime: '28 Dec 2023',
      speaker: 'Brother Victor Howells',
      desc: 'A call to holiness and devotion to God',
    },
  ]
  const ItemComp = ({ item }: { item: any }) => (
    <div className="grid py-8 sm:grid-cols-4">
      <div className="mb-4 sm:mb-0">
        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
          <div className="w-fit transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            {item.subtitle}
          </div>
          <p className="text-gray-600">{item.datetime}</p>
        </div>
      </div>
      <div className="sm:col-span-3 lg:col-span-2">
        <div className="mb-3">
          <a
            aria-label={item.speaker}
            className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
              {item.speaker}
            </p>
          </a>
        </div>
        <p className="text-gray-700">{item.desc}</p>
      </div>
    </div>
  )

  return (
    <ContentSection preset="white">
      <div className="flex items-center justify-center flex-col space-y-9 my-5">
        <div className="flex items-center justify-center max-w-2xl">
          <p
            className={classnames(
              'text-xs font-extrabold text-gray-600 font-sans tracking-widest'
            )}
          >
            PROGRAM ORDER
          </p>
        </div>
        <h1
          className={classnames(
            'leading-3 text-5xl md:text-2xl lg:text-5xl',
            'font-black max-w-5xl text-center tracking-widest main-header-text',
            inter.className
          )}
        >
          SCHEDULE
        </h1>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mb-10 border-t border-b divide-y">
          {items.map((value, idx) => (
            <ItemComp key={idx} item={value} />
          ))}
        </div>
        {/*<div className="text-center">*/}
        {/*  <a*/}
        {/*    href="/"*/}
        {/*    aria-label=""*/}
        {/*    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"*/}
        {/*  >*/}
        {/*    See all articles*/}
        {/*    <svg*/}
        {/*      className="inline-block w-3 ml-2"*/}
        {/*      fill="currentColor"*/}
        {/*      viewBox="0 0 12 12"*/}
        {/*    >*/}
        {/*      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />*/}
        {/*    </svg>*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>
    </ContentSection>
  )
}
