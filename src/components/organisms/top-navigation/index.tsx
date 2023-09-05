'use client'
import HamburgerMenu from '@/components/organisms/hamburger-menu'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { navigationLinks } from '@/constants/navigation-data'
import { usePathname } from 'next/navigation'
import classnames from 'classnames'
import { Squeeze as Hamburger } from 'hamburger-react'
import { Monoton } from 'next/font/google'

import './styles.scss'

const monoton = Monoton({ weight: '400', subsets: ['latin'] })

function useScrollListener() {
  const [scrolled, setScrolled] = useState(false)

  // The scroll listener
  const handleScroll = useCallback(
    (ev: Event) => {
      const y = (ev.target as HTMLDivElement).scrollTop
      if (y > 40 && !scrolled) {
        setScrolled(true)
      } else if (y < 1 && scrolled) {
        setScrolled(false)
      }
    },
    [scrolled]
  )

  useEffect(() => {
    const elems = document.getElementById('app-root')
    console.log(elems)
    elems?.addEventListener('scroll', handleScroll)

    return () => {
      // elems?.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return { scrolled }
}

const animTrans = 'transition-all ease-in-out duration-800'

const data = {
  home: {
    background: 'bg-primary',
    blurBg: 'bg-primary/30',
    color: 'text-black border-black',
    border: 'border-black',
  },
  location: {
    background: 'bg-primary',
    blurBg: 'bg-primary/30',
    color: 'text-black border-black',
    border: 'border-black',
  },
  about: {
    background: 'bg-primary',
    blurBg: 'bg-primary/30',
    color: 'text-black border-black',
    border: 'border-black',
  },
  people: {
    background: 'bg-black',
    blurBg: 'bg-black/30',
    color: 'text-white border-white',
    border: 'border-white',
  },
}

export default function TopNavigation() {
  const [open, setOpen] = useState(false)
  const scroll = useScrollListener()
  const pathname = usePathname()
  const info =
    pathname === '/'
      ? data.home
      : // @ts-ignore
        data[`${pathname.replace('/', '')}`] ?? data.home

  const dynBg = {
    [info.blur]: scroll.scrolled,
  }

  return (
    <>
      <header
        className={classnames(
          'w-full border-gray-950 absolute top-0 z-50',
          animTrans,
          info.border,
          {
            'backdrop-blur-3xl': scroll.scrolled,
            [info.blur]: scroll.scrolled,
            [info.blurBg]: scroll.scrolled,
            'border-b': scroll.scrolled,
            'max-h-[50px]': scroll.scrolled,
          }
        )}
      >
        <div
          className={classnames('navbar px-5', animTrans, {
            'py-0': scroll.scrolled,
            'min-h-[50px]': scroll.scrolled,
          })}
        >
          <div className="flex-none"></div>
          <div className="flex-1 space-x-4 items-center">
            <Link
              href="/"
              className={classnames(
                'font-medium normal-case ',
                animTrans,
                info.color,
                monoton.className,
                {
                  'text-sm': scroll.scrolled,
                  'text-xl': !scroll.scrolled,
                }
              )}
            >
              <img
                src="/logo.png"
                alt="logo"
                height={scroll.scrolled ? 60 : 80}
                width={scroll.scrolled ? 160 : 180}
              />
            </Link>
            <div className="md:block hidden">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  className={classnames(
                    'mx-3 normal-case font-medium text-base hover:border-b-4',
                    animTrans,
                    info.color,
                    {
                      'border-b-4': pathname == link.path,
                      'text-sm': scroll.scrolled,
                    }
                  )}
                  href={`${link.path}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <HamburgerMenu open={open} setOpen={setOpen} />
          <div className="flex-none space-x-5">
            <Link
              href="/join"
              className={classnames(
                'underline px-2 font-bold tracking-widest md:block hidden',
                animTrans,
                info.color,
                {
                  'text-sm': scroll.scrolled,
                  'text-lg': !scroll.scrolled,
                }
              )}
            >
              Join
            </Link>
            <div className="w-11/12 flex justify-end items-center">
              <Hamburger
                toggled={open}
                onToggle={setOpen}
                color={info.background === 'bg-black' ? '#ffffff' : undefined}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
