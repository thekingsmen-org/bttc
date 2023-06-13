import './styles.module.scss'
import React from 'react'
import classnames from 'classnames'

export default function ContentSection(props: {
  children: React.ReactNode
  title: string
  preset:
    | 'black'
    | 'yellow'
    | 'cyan'
    | 'white'
    | 'none'
    | 'primary'
    | 'secondary'
}) {
  const bgColors = {
    'bg-black': props.preset === 'black',
    'bg-secondary': props.preset === 'secondary',
    'bg-primary': props.preset === 'primary',
    'bg-white': props.preset === 'white',
    'bg-cyan-100': props.preset === 'cyan',
    'bg-gradient-yellow': props.preset === 'yellow',
  }
  const colors = {
    'text-white': props.preset === 'black',
  }

  return (
    <section
      className={classnames(
        'w-full h-full py-8 flex items-center justify-center flex-col space-y-9',
        bgColors
      )}
    >
      <p
        className={classnames(
          'text-xs font-extrabold text-gray-930 font-sans tracking-widest',
          colors
        )}
      >
        {props.title.toUpperCase()}
      </p>
      <div>{props.children}</div>
    </section>
  )
}
