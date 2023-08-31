'use client'

import './styles.module.scss'
import React from 'react'
import ContentSection from '@/components/organisms/content-section'
import classnames from 'classnames'

export default function BottomLastContent() {
  const items = [{}, {}, {}]
  const ItemComp = ({ item }: { item: any }) => (
    <div className="backdrop-blur-3xl p-8 bg-white border rounded shadow-sm">
      <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
        <span
          className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          aria-label="Category"
        >
          programming
        </span>{' '}
        <span className="text-gray-600">— 28 Dec 2020</span>
      </p>
      <div
        aria-label="Article"
        title="Why i love C++"
        className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
      >
        Why i love C++
      </div>
      <p className="mb-5 text-gray-700">
        Sportacus andrew weatherall goose Refined gentlemen super mario des
        lynam alpha trion zap rowsdower.
      </p>
    </div>
  )

  return (
    <ContentSection preset="primary">
      <div className="flex items-center justify-center flex-col space-y-9 my-5">
        <div className="flex items-center justify-center max-w-2xl">
          <p
            className={classnames(
              'text-xs font-extrabold text-gray-600 font-sans tracking-widest'
            )}
          >
            DITO
          </p>
        </div>
        <p className="text-lg text-center max-w-3xl">
          We live in precarious times, men and women deceiving others and being
          deceived, but God calls his remnant to be faithful and bold in faith
          proclaiming Christ and Him crucified to all men.
        </p>
        <p className="text-md text-center max-w-3xl">
          And that repentance and forgiveness of sins should be proclaimed in
          his name to all nations, beginning from Jerusalem. - Luke 24:47
        </p>
      </div>
      {/*<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">*/}
      {/*  <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">*/}
      {/*    {items.map((value, idx) => (*/}
      {/*      <ItemComp key={idx} item={value} />*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </ContentSection>
  )
}
