import React from 'react'
import toast, { ToastBar, Toaster as ReactToast } from 'react-hot-toast'

import './style.scss'
import Icon from '../icon'

namespace Toaster {
  export interface Props {}
}

const defaultProps = {} as Toaster.Props

export default function Toaster(args: Toaster.Props) {
  const props = { ...defaultProps, ...args }

  return (
    <ReactToast position="top-right" containerClassName="z-999">
      {(t) => (
        <ToastBar
          toast={t}
          style={{
            background: 'white',
            marginTop: '0.8rem',
            padding: '1rem',
          }}
        >
          {({ icon, message }) => (
            <div className="z-999 flex w-70 p-1 rounded-sm justify-between items-start dark:bg-black">
              {icon}
              <span className="text-xs dark:text-gray-300">{message}</span>
              {t.type !== 'loading' && (
                <button
                  onClick={() => {
                    toast.dismiss(t.id)
                  }}
                >
                  <Icon
                    name="ic:sharp-close"
                    className="text-sm dark:text-gray-100"
                  />
                </button>
              )}
            </div>
          )}
        </ToastBar>
      )}
    </ReactToast>
  )
}
