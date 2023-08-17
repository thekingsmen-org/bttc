'use client'
import HamburgerMenu from '@/components/organisms/hamburger-menu'
import { useState } from 'react'
import Link from 'next/link'
import './styles.scss'

export default function TopNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full sticky top-0">
      <div className="navbar bg-primary">
        <div className="flex-none"></div>
        <div className="flex-1 space-x-4 items-center">
          <Link
            href="/"
            className="btn btn-ghost font-bold normal-case text-xl"
          >
            Work
          </Link>
          <div className='md:block hidden'>
          <Link href="/about" className="btn btn-ghost normal-case text-base">
            About
          </Link>
          </div>
        </div>
        <div className="flex-none">
          <Link
            href="/join"
            className="text-lg underline px-2 font-bold tracking-widest md:block hidden"
          >
            Join
          </Link>
          <HamburgerMenu open={open} setOpen={setOpen} />
          <div className="w-11/12 flex justify-end items-center">
            <div
              className="tkm-button-container group "
              onClick={() => {
                setOpen(!open)
              }}
            >
              {/* hamburger button */}
              <span
                className={`hamburger-icon-style ${
                  open && 'rotate-45 translate-y-2.5'
                }`}
              />
              <span
                className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${
                  open ? 'w-0' : 'w-full'
                }`}
              />
              <span
                className={`hamburger-icon-style ${
                  open && '-rotate-45 -translate-y-2.5'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
