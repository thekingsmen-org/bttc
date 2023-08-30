import './styles.module.scss'
import React from 'react'
import classnames from 'classnames'

export default function ContentSection(props: {
  children: React.ReactNode
  title?: string
  withGradient?: boolean
  noPadding?: boolean
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
      className={classnames('w-full h-full ', bgColors, {
        'py-8': !props.noPadding,
      })}
    >
      <div
        style={{
          background: props.withGradient
            ? 'radial-gradient(20% 50% at 50% 50%,rgba(173, 37, 229,.376) 0,rgba(37,38,44,0) 100%)'
            : undefined,
        }}
        className={classnames('w-full h-full', {
          'flex items-center justify-center flex-col space-y-9': props.title,
        })}
      >
        {props?.title && (
          <p
            className={classnames(
              'text-xs font-extrabold text-gray-930 font-sans tracking-widest',
              colors
            )}
          >
            {props?.title.toUpperCase()}
          </p>
        )}
        <div>{props.children}</div>
      </div>
    </section>
  )
}
