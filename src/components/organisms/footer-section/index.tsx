import './styles.module.scss'
import React from 'react'
import classnames from 'classnames'

export default function FooterSection() {
  return (
    <footer className={classnames('w-full h-1/2 p-8 flex flex-col bg-black')}>
      <div className="flex items-center justify-evenly h-full">
        {/* <h2 className='text-white md:text-2xl text-lg font-black text-center self-start'>
          Get ready for an Encounter with <br /> The King of Kings
        </h2> */}
        <p className="text-white md:text-base text-sm font-black text-center self-end">
          Copyright © {new Date().getFullYear()} The kings men
        </p>
      </div>
    </footer>
  )
}
