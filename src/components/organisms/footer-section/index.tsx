import './styles.module.scss'
import React from 'react'
import classnames from 'classnames'

export default function FooterSection() {
  return (
    <footer
      className={classnames(
        'w-full h-1/2 py-8 flex items-center justify-center flex-col space-y-9 bg-black'
      )}
    >
      <div>Footer</div>
    </footer>
  )
}
