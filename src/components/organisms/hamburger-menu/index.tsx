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
      className={`absolute top-0 bottom-0 left-0 h-screen w-screen bg-primary transform ${
        props.open ? '-translate-y-0' : '-translate-y-full'
      } transition-transform duration-500 ease-in-out filter`}
    >
      <div
        className="h-screen w-full flex flex-col items-center mt-64 space-y-10"
        onClick={() => props.setOpen(false)}
      >
        {mobileNavigationLinks.map((link, index) => (
          <Link
            key={index}
            className={classnames(
              'text-5xl font-bold uppercase tracking-widest',
              inter.className,
              {
                'border-b-8 border-black': pathname === link.path,
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
