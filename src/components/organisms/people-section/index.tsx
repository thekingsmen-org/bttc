'use client'

import './styles.module.scss'
import React from 'react'
import ContentSection from '@/components/organisms/content-section'
import MemberItem from '@/components/molecules/member-item'
import { Inter } from 'next/font/google'
import classnames from 'classnames'

const inter = Inter({ subsets: ['latin'] })

const people = [{}, {}, {}, {}, {}, {}]

export default function PeopleSection() {
  return (
    <ContentSection preset="primary">
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <div>
            <h2
              className={classnames(
                'text-xl font-bold text-gray-900 sm:text-3xl',
                inter.className
              )}
            >
              Official Members
            </h2>

            <p className="max-w-lg mt-4 text-gray-500">
              <b>The Cross Conference</b> by the Grace of God is put together by
              Christians from different denominations with the sole aim of
              exalting God through calling the nations to <b>repentance</b> and
              faith in Jesus Christ.
            </p>
          </div>

          <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {people.map((p, i) => (
              <li key={i}>
                <MemberItem />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </ContentSection>
  )
}
