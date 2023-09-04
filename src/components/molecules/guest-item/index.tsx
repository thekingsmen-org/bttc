'use client'

import React from 'react'
import { Guest } from '@/contracts'
import classnames from 'classnames'
import { Inter } from 'next/font/google'
import './styles.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function GuestItem(props: { guest: Guest; index: number }) {
  const even = isEven(props.index)
  const csLeft = even
    ? 'sm:order-first xs:order-first'
    : 'xs:order-last sm:order-last'
  const csRight = even
    ? 'order-last md:order-first'
    : 'order-first md:order-last'
  const imageCs = even ? 'rounded-tr-[120px]' : 'rounded-tl-[120px]'
  const imageWrapperCs = even
    ? 'pl-0 md:pl-10 lg:pl-40'
    : 'pr-0 md:pr-10 lg:pr-40'
  const imageWrapperInvertedCs = !even
    ? 'pl-0 md:pl-10 lg:pl-40'
    : 'pr-0 md:pr-10 lg:pr-40'

  const ItemLink = ({ name, link }: { name: string; link: string }) => (
    <a
      href={link}
      target="_blank"
      className="btn btn-sm group btn-outline hover:bg-white border-white transition-all duration-500 ease-in-out"
    >
      <span className="text-white group-hover:text-black">{name}</span>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        className="text-white group-hover:text-black hidden group-hover:block  scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  )

  // min-w-lg max-w-lg
  const UserImage = () => (
    <div className={imageWrapperCs}>
      <img
        src={props.guest.photo ?? ''}
        alt={`${props.guest.full_name}`}
        className={classnames(
          'drop-shadow-2xl backdrop-blur-lg shadow-2xl min-h-[80vh] min-w-[100%] md:w-full object-cover',
          'border-8 border-primary/20 border-solid',
          imageCs,
          inter.className
        )}
      />
    </div>
  )

  const UserInfo = () => (
    <div
      className={classnames(imageWrapperInvertedCs, 'text-gray-100 space-y-7')}
    >
      <div className="">
        <h3
          className={classnames(
            'text-sm uppercase bg-white w-fit px-10 font-semibold text-black tracking-wide',
            {
              'text-right float-right': !even,
              'text-left': even,
            }
          )}
        >
          {props.guest.ministry}
        </h3>
      </div>
      <div>
        <h1
          className={classnames(
            'md:leading-3 text-5xl md:text-5xl lg:text-7xl',
            'font-black max-w-7xl tracking-widest main-header-text',
            inter.className,
            {
              'text-right': !even,
              'text-left': even,
            }
          )}
        >
          {props.guest.full_name}
        </h1>
      </div>
      <div
        className={classnames('flex flex-row space-x-2 items-center', {
          'justify-end': !even,
        })}
      >
        {props.guest.facebook_url && (
          <ItemLink name="Facebook" link={props.guest.facebook_url} />
        )}
        {props.guest.instagram_url && (
          <ItemLink name="Instagram" link={props.guest.instagram_url} />
        )}
        {props.guest.website && (
          <ItemLink name="Website" link={props.guest.website} />
        )}
      </div>
      <article className="prose flex flex-col justify-center items-center">
        <p className="text-white font-light">{props.guest.bio}</p>
      </article>
    </div>
  )

  return (
    <div className="w-full min-h-[90vh] py-10 grid md:grid-cols-2 grid-cols-1 gap-4 px-5 md:p-0">
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
