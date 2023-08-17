'use client'

import './styles.module.scss'
import React, { useState } from 'react'
import { Guest } from '@/contracts'
import Image from 'next/image'
import { Cross1Icon, PlusIcon } from '@radix-ui/react-icons'

export default function GuestItem(props: { guest: Guest }) {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <Image
        src={`${props.guest.photo}`}
        alt={`${props.guest.full_name}`}
        width={400}
        height={400}
        className="object-cover"
      />
      <div>
        <h1 className="text-lg font-bold tracking-wide text-center">
          {props.guest.full_name}
        </h1>
        <h3 className="text-md font-medium tracking-wide text-center">
          {props.guest.ministry}
        </h3>
      </div>
      {show && <p className="text-sm">{props.guest.bio}</p>}

      <div
        onClick={() => setShow(!show)}
        className="flex flex-col justify-center items-center cursor-pointer"
      >
        <p className="text-md font-black">
          {!show ? <PlusIcon /> : <Cross1Icon />}
        </p>
        <p className="text-xs font-light">
          {!show && props.guest.kind === 'speaker'
            ? 'ABOUT SPEAKER'
            : props.guest.kind === 'singer'
            ? 'ABOUT SINGER'
            : 'CLOSE'}
        </p>
      </div>
    </div>
  )
}
