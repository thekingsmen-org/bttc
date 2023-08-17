import './styles.module.scss'
import React from 'react'
import classnames from 'classnames'

export default function FooterSection() {
  return (
    <footer className={classnames('w-full h-1/2 p-8 flex flex-col bg-black')}>
      <div className="grid md:grid-cols-3 grid-cols-1 h-full">
        <div className="text-white space-y-5">
          <h2 className=" md:text-2xl text-lg font-black text-center self-start">
            Get ready for an Encounter with <br /> The King of Kings
          </h2>
          <p className="text-sm md:text-base">
            Jesus Christ our risen Lord is our King. We believe Jesus Christ is
            the Son of God to be our Lord and Saviour. We believe He died and
            was raised from the dead on the third day for our redemption.
          </p>
        </div>
      </div>
      <p className="text-white md:text-base text-sm font-black text-center">
        Copyright © {new Date().getFullYear()} The kings men
      </p>
    </footer>
  )
}
