'use client'

import React from 'react'
import { Member } from '@/contracts'
import classNames from 'classnames'
import { getBucketID, storage } from '@/clients/appwrite'

export default function MemberItem(props: { member: Member }) {
  const result = !props.member.photo?.startsWith('https://')
    ? storage.getFileView(getBucketID(), props.member.photo ?? '')
    : undefined

  return (
    <div
      className={classNames(
        'group cursor-pointer relative flex-1 block bg-black max-h-[490px] md:min-h-[490px]'
      )}
    >
      <img
        alt={`${props.member.first_name}`}
        src={result?.toString() ?? `${props.member.photo}`}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
          {props.member.title}
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">
          {props.member.first_name} {props.member.last_name}
        </p>
        <p className="text-sm font-medium text-white">
          {props.member.denomination}
        </p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{props.member.bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
