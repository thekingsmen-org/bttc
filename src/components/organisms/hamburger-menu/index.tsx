'use client'
import Link from 'next/link'
import './styles.scss'
import React from 'react'
import { usePathname } from 'next/navigation'
import { mobileNavigationLinks } from '@/constants/navigation-data'
import { Inter } from 'next/font/google'
import classnames from 'classnames'

const inter = Inter({ subsets: ['latin'] })

interface HamburgerProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function HamburgerMenu(props: HamburgerProps) {
  const pathname = usePathname()

  if (!props.open) return <div></div>

  return (
    <div
      className={`absolute top-0 bottom-0 left-0 right-0 overflow-hidden h-screen w-screen bg-primary transform ${
        props.open ? '-translate-y-0' : '-translate-y-full'
      } transition-all duration-500 ease-in-out filter`}
    >
      <div
        className="h-screen max-h-screen overflow-hidden justify-center w-full flex flex-col items-center space-y-10"
        onClick={() => props.setOpen(false)}
      >
        {mobileNavigationLinks.map((link, index) => (
          <Link
            key={index}
            className={classnames(
              'text-5xl relative transition-all ease-in-out delay-300 font-black uppercase tracking-widest flex',
              inter.className,
              {
                'after:h-2 after:bg-black after:w-full after:absolute after:top-12':
                  pathname === link.path,
              }
            )}
            href={`${link.path}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
