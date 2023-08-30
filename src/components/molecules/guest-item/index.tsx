'use client'

import './styles.module.scss'
import React, { useState } from 'react'
import { Guest } from '@/contracts'
import Image from 'next/image'
import { Cross1Icon, PlusIcon } from '@radix-ui/react-icons'
import classnames from 'classnames'

export default function GuestItem(props: { guest: Guest; index: number }) {
  const [show, setShow] = useState(false)

  const even = isEven(props.index)
  const csLeft = even ? '' : ''
  const csRight = even ? '' : ''
  const imageCs = even ? 'rounded-tr-[120px]' : 'rounded-tl-[120px]'
  const imageWrapperCs = even
    ? 'pl-3 md:pl-20 lg:pl-40'
    : 'pr-3 md:pr-20 lg:pr-40'
  // min-w-lg max-w-lg
  const UserImage = () => (
    <div className={imageWrapperCs}>
      <Image
        src={`${props.guest.photo}`}
        alt={`${props.guest.full_name}`}
        width={600}
        height={600}
        className={classnames(
          'drop-shadow-2xl backdrop-blur-lg shadow-2xl min-h-[80vh] w-full object-cover',
          'border-8 border-primary/30 border-solid',
          imageCs
        )}
      />
    </div>
  )

  const UserInfo = () => (
    <div>
      <div>
        <h1 className="text-lg text-white font-bold tracking-wide text-center">
          {props.guest.full_name}
        </h1>
        <h3 className="text-md text-white font-medium tracking-wide text-center">
          {props.guest.ministry}
        </h3>
      </div>
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

  return (
    <div className="w-full min-h-[90vh] grid md:grid-cols-2 grid-cols-1 grid-flow-col gap-0">
      <div
        className={classnames(
          'w-full min-h-full flex flex-col justify-center items-center space-y-4',
          csLeft
        )}
      >
        {even ? <UserImage /> : <UserInfo />}
      </div>
      <div
        className={classnames(
          'w-full min-h-full flex flex-col justify-center items-center space-y-4',
          csRight
        )}
      >
        {!even ? <UserImage /> : <UserInfo />}
      </div>
    </div>
  )
}

function isEven(n: number) {
  return n % 2 == 0
}

function isOdd(n: number) {
  return Math.abs(n % 2) == 1
}
