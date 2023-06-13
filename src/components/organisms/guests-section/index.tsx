'use client'

import './styles.module.scss'
import React from 'react'
import ContentSection from '@/components/organisms/content-section'
import { EntrySkeletonType } from 'contentful'
import { Tab } from '@headlessui/react'
import GuestItem from '@/components/molecules/guest-item'
import classnames from 'classnames'

export default function GuestsSection(props: {
  guests: (EntrySkeletonType & { sys: any })[]
}) {
  const categories = [
    {
      id: 'speaker',
      title: 'Speaker',
    },
    {
      id: 'singer',
      title: 'Worship',
    },
  ]
  return (
    <ContentSection title="SPECIAL GUESTS" preset="primary">
      <Tab.Group>
        <div className="flex justify-center w-full">
          <Tab.List className="flex max-w-md space-x-1 rounded-xl bg-primary p-1">
            {Object.values(categories).map((category) => (
              <Tab
                key={category.id}
                className={({ selected }) =>
                  classnames(
                    'w-full rounded-lg px-8 py-2.5 text-sm font-medium leading-5 text-gray-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-gray-930'
                  )
                }
              >
                {category.title}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels className="mt-2 min-w-full w-screen max-h-fit">
          {Object.values(categories).map((cat, idx) => (
            <Tab.Panel
              key={idx}
              className={classnames(
                'rounded-xl p-3 grid grid-cols-3 grid-flow-col gap-4',
                'min-w-full w-full px-24'
              )}
            >
              {props.guests
                .filter((value) => value.fields.kind === cat.id)
                .map((value) => (
                  <GuestItem
                    key={value.sys.id}
                    guest={{ ...value.fields, id: value.sys.id } as any}
                  />
                ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </ContentSection>
  )
}
