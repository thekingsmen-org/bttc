import { Icon as IconSet } from '@iconify/react'

namespace Icon {
  export interface Props {
    name?: string
    icon?: string | String
    className?: any
    size?: number | string
    width?: number | string
    height?: number | string
    alt?: string
  }
}

/**
 * Icon component helper. uses iconify
 *
 * @param props
 * @constructor
 */
export default function Icon(props: Icon.Props) {
  return (
    <IconSet
      icon={(props.name ? props.name : props.icon) as any}
      width={props.size ? props.size : props.width ? props.width : 20}
      height={props.size ? props.size : props.height ? props.height : 20}
      className={props.className}
    />
  )
}
