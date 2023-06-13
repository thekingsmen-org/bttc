'use client'

import './styles.module.scss'
import React, { useState } from 'react'
import { Guest } from '@/contracts'
import Image from 'next/image'
import { Cross1Icon, PlusIcon } from '@radix-ui/react-icons'

export default function GuestItem(props: { guest: Guest }) {
  console.log(props.guest.photo)
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <Image
        src={`https:${props.guest.photo.fields.file?.url}`}
        alt={props.guest.name}
        width={400}
        height={400}
        className="object-cover"
      />
      <div>
        <h1 className="text-lg font-bold tracking-wide">{props.guest.name}</h1>
        <h3 className="text-md font-medium tracking-wide">
          {props.guest.ministry}
        </h3>
      </div>
      {show && <p className="text-sm">{props.guest.biography}</p>}

      <div
        onClick={() => setShow(!show)}
        className="flex flex-col justify-center items-center cursor-pointer"
      >
        <p className="text-md font-black">
          {!show ? <PlusIcon /> : <Cross1Icon />}
        </p>
        <p className="text-xs font-light">
          {!show ? 'ABOUT SPEAKER' : 'CLOSE'}
        </p>
      </div>
    </div>
  )
}
