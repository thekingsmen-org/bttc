'use client'
import Link from 'next/link'
import './styles.scss'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { mobileNavigationLinks } from '@/constants/navigation-data'
import classNames from 'classnames'

interface HamburgerProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function HamburgerMenu(props: HamburgerProps) {
  const pathname = usePathname()

  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-primary transform ${
        props.open ? '-translate-y-0' : '-translate-y-full'
      } transition-transform duration-500 ease-in-out filter  `}
    >
      <div
        className="flex flex-col justify-center items-center mt-28  space-y-4"
        onClick={() => props.setOpen(false)}
      >
        {mobileNavigationLinks.map((link, index) => (
          <Link
            key={index}
            className={`text-2xl font-bold ${
              pathname == link.path && ' border-b-4 border-black'
            }`}
            href={`${link.path}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
