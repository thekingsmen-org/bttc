import './styles.module.scss'
import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'

export default function FooterSection() {
  return (
    <footer
      className={classnames(
        'w-full px-8 pt-20 pb-8 flex border-t border-gray-300 flex-col bg-black justify-center z-999'
      )}
    >
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-50 sm:text-5xl">
          Further Information
        </h2>

        <p className="mx-auto mt-4 max-w-sm text-gray-300">
          You can write us an email by using the link below and someone will get
          back to you in 48hrs
        </p>

        <Link
          href="/contact/write"
          className="mt-8 inline-block rounded-full border text-primary border-primary-600 px-12 py-3 text-sm font-medium text-border-primary-600-600 hover:bg-primary-600 hover:text-white focus:outline-none focus:ring active:bg-primary-500"
        >
          Write US
        </Link>
      </div>

      <div className="mt-16 border-t border-gray-600 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
        <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Terms & Conditions
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Privacy Policy
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Cookies
            </a>
          </li>
        </ul>

        <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end"></ul>
      </div>
    </footer>
  )
}
