import classnames from 'classnames'
import React from 'react'

import './styles.scss'
import Icon from '../icon'

namespace Button {
  export interface Props {
    type?: 'button' | 'submit' | 'reset'
    bordered?: boolean
    disabled?: boolean
    focusable?: boolean
    full?: boolean
    bounce?: boolean
    capitalize?: boolean
    color?: string
    textColor?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    raised?: boolean
    iconPlacement?: 'left' | 'right'
    loading?: boolean
    wide?: boolean
    renderIcon?: () => React.ReactNode
    children?: React.ReactNode
    preset?: 'primary' | 'secondary' | 'tertiary' | 'ghost'
    shape?: 'square' | 'rounded' | 'pill' | 'circle'
    size?: 'tiny' | 'small' | 'medium' | 'large'
    buttonType?: 'icon' | 'flat'
    style?: React.CSSProperties
    className?: string
  }
}

const defaultProps = {
  buttonType: 'flat',
  bordered: false,
  disabled: false,
  size: 'medium',
  focusable: false,
  loading: false,
  full: false,
  raised: false,
  capitalize: false,
  color: '',
  textColor: '',
  bounce: true,
  circle: false,
  primary: false,
  false: false,
  shape: 'rounded',
  type: 'button',
  preset: 'primary',
} as Button.Props

/**
 * Button component
 * @constructor
 * @param args
 */
export default function Button(args: Button.Props = defaultProps) {
  const props = { ...defaultProps, ...args }
  const classObject = classnames({
    'wak-button button-wrapper': true,
    'w-full':
      props.full && (props.buttonType !== 'icon' || props.shape !== 'circle'),
    'border-2 dark:border-gray-400': props.bordered,
    'rounded-lg': props.shape === 'rounded',
    'rounded-3xl': props.shape === 'pill',
    'rounded-full': props.shape === 'circle',
    'text-sm': true,
    'bg-danger': props.buttonType === 'icon',
    'focus:ring ring-inherit': !props.bounce,

    'shadow-lg': props.raised,
    'bg-primary': props.preset === 'primary' && props.color?.length === 0,
    'bg-secondary': props.preset === 'secondary' && props.color?.length === 0,
    'bg-tertiary': props.preset === 'tertiary' && props.color?.length === 0,
    'text-gray-500 dark:text-gray-200':
      props.preset === 'ghost' && props.textColor?.length === 0,
    'text-gray-50 dark:text-gray-300':
      props.preset !== 'ghost' && props.textColor?.length === 0,
    'uppercase font-semibold': props.capitalize,
    [props.color!]: props.preset !== 'ghost',
    [props.textColor!]: true,

    'h-8': props.size === 'tiny',
    'h-10': props.size === 'small',
    'h-12': props.size === 'medium',
    'h-14': props.size === 'large',

    'w-8 min-w-8':
      props.size === 'tiny' &&
      props.buttonType === 'icon' &&
      props.shape === 'circle',
    'w-10 min-w-10':
      props.size === 'small' &&
      (props.buttonType === 'icon' || props.shape === 'circle'),
    'w-12 min-w-12':
      props.size === 'medium' &&
      (props.buttonType === 'icon' || props.shape === 'circle'),
    'w-14 min-w-14':
      props.size === 'large' &&
      (props.buttonType === 'icon' || props.shape === 'circle'),

    'hover:scale-98 active:scale-96 transition-transform ease-in-out duration-200':
      props.bounce && !props.disabled,
    'scale-100': !props.bounce && !props.disabled,
  })

  const innerClassObject = classnames({
    'px-4': props.buttonType !== 'icon' && !props.wide,
    'px-12': props.wide,
    'inner-button-wrapper': true,
  })

  return (
    <button
      disabled={props.disabled || props.loading}
      className={classnames(classObject, props.className)}
      type={props.type}
      onClick={props.onClick}
      style={props.style}
    >
      {props.iconPlacement === 'left' &&
        props.shape !== 'circle' &&
        props.buttonType !== 'icon' && (
          <div className="pl-4">{props.renderIcon && props.renderIcon()}</div>
        )}
      <div className={innerClassObject}>
        {!props.loading && props.children}
        {props.loading && (
          <Icon
            className="items-center self-center"
            name="svg-spinners:270-ring"
          />
        )}
      </div>
      {props.iconPlacement === 'right' &&
        props.shape !== 'circle' &&
        props.buttonType !== 'icon' && (
          <div className="pr-4">{props.renderIcon && props.renderIcon()}</div>
        )}
    </button>
  )
}
