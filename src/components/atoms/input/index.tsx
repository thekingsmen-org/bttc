'use client'
import classnames from 'classnames'
import React, { useState } from 'react'

import './styles.scss'

export namespace InputNamespace {
  export interface Props {
    id?: string
    placeholder?: string
    label?: string
    prefix?: () => React.ReactNode
    suffix?: () => React.ReactNode
    type?:
      | 'checkbox'
      | 'color'
      | 'date'
      | 'button'
      | 'datetime-local'
      | 'email'
      | 'file'
      | 'hidden'
      | 'image'
      | 'month'
      | 'number'
      | 'password'
      | 'radio'
      | 'range'
      | 'reset'
      | 'search'
      | 'submit'
      | 'tel'
      | 'text'
      | 'time'
      | 'url'
      | 'week'
    bordered?: boolean
    autofocus?: boolean
    disabled?: boolean
    focusable?: boolean
    full?: boolean
    bounce?: boolean
    ghost?: boolean
    hidden?: boolean
    primary?: boolean
    readOnly?: boolean
    color?: string
    textColor?: string
    className?: string
    labelClassName?: string
    raised?: boolean
    loading?: boolean
    value?: any
    defaultValue?: any
    autocomplete?: any
    name?: string
    required?: boolean
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onFocus?: React.FocusEventHandler<HTMLInputElement>
    onBlur?: React.FocusEventHandler<HTMLInputElement>
    shape?: 'square' | 'rounded' | 'pill' | 'circle'
    size?: 'tiny' | 'small' | 'medium' | 'large'
    max?: number
    min?: number
  }
}

const defaultProps = {
  bordered: true,
  disabled: false,
  size: 'medium',
  ghost: false,
  focusable: false,
  loading: false,
  full: false,
  raised: false,
  color: 'bg-white dark:bg-gray-900',
  textColor: 'dark:text-gray-50 text-gray-800',
  bounce: true,
  primary: false,
  shape: 'rounded',
  type: 'text',
} as InputNamespace.Props

const Input = React.forwardRef<InputNamespace.Props, InputNamespace.Props>(
  (args, forwardedRef) => {
    const props = { ...defaultProps, ...args }

    const classObject = classnames({
      'w-full': props.full,
      'border dark:border-gray-800': props.bordered,
      'rounded-md': props.shape === 'rounded',
      'rounded-3xl': props.shape === 'pill',
      'rounded-full': props.shape === 'circle',
      'focus:ring ring-inherit': !props.bounce,

      'shadow-lg': props.raised,
      [props.color!]: !props.ghost,
      [props.textColor!]: props.ghost === false,
      'uppercase font-semibold': props.primary,

      'h-8': props.size === 'tiny',
      'h-10': props.size === 'small',
      'h-12': props.size === 'medium',
      'h-14': props.size === 'large',

      // 'flex items-center justify-between dark:text-gray-900': true,
      'input-wrapper': true,
    })

    const shouldAddLeftCurve = !props.prefix
    const shouldAddRightCurve = !props.suffix && props.type !== 'password'
    const innerClassObject = classnames({
      'pr-4': shouldAddLeftCurve,
      'pl-4': shouldAddLeftCurve,
      'rounded-l-lg': props.shape === 'rounded' && shouldAddLeftCurve,
      'rounded-l-3xl': props.shape === 'pill' && shouldAddLeftCurve,
      'rounded-l-full': props.shape === 'circle' && shouldAddLeftCurve,
      'rounded-r-lg': props.shape === 'rounded' && shouldAddRightCurve,
      'rounded-r-3xl': props.shape === 'pill' && shouldAddRightCurve,
      'rounded-r-full': props.shape === 'circle' && shouldAddRightCurve,
      'h-7 text-xs': props.size === 'tiny',
      'h-9 text-sm': props.size === 'small',
      'h-11 text-md': props.size === 'medium',
      'h-13 text-lg': props.size === 'large',

      'inner-input-wrapper': true,
      'focus:border-gray-600': true,
      // 'w-full px-0 border-transparent focus:border-transparent focus:ring-0':
      //   true,
    })

    const labelClassObject = classnames({
      'h-7 text-xs': props.size === 'tiny',
      'h-9 text-sm': props.size === 'small',
      'h-11 text-md': props.size === 'medium',
      'h-13 text-lg': props.size === 'large',
      'mb-12 font-medium': true,
    })

    return (
      <div className="tkm-input" id={props.id} hidden={props.hidden}>
        {props.label && (
          <label
            className={classnames(
              'my-2',
              labelClassObject,
              props.labelClassName
            )}
          >
            {props.label}
          </label>
        )}
        <div className={classnames(classObject, props.className)}>
          {props.prefix && <div className="p-2">{props.prefix()}</div>}

          <input
            ref={forwardedRef as any}
            readOnly={props.readOnly}
            autoComplete={
              props.type === 'password'
                ? 'current-password'
                : props.type === 'email'
                ? 'email'
                : props.autocomplete
            }
            placeholder={props.placeholder}
            disabled={props.disabled}
            className={innerClassObject}
            autoFocus={props.autofocus}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            defaultValue={props.defaultValue}
            value={props.value}
            required={props.required}
            name={props.name}
            onChange={props.onChange}
            min={props.min}
            max={props.max}
          />
          {props.suffix && props.type !== 'password' && (
            <div className="p-2">{props.suffix()}</div>
          )}
        </div>
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
