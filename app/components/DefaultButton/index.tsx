import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

interface DefaultButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'outlined' | 'flat' | 'text'
  large?: boolean
  primary?: boolean
}

export function DefaultButton({
  children,
  variant = 'outlined',
  large,
  primary,
  ...rest
}: DefaultButtonProps) {
  const classNameArr = [styles.defaultButton, styles[variant]]

  if (large) {
    classNameArr.push(styles.large)
  }

  if (primary) {
    classNameArr.push(styles.primary)
  }

  return (
    <button
      className={classNameArr.join(' ')}
      {...rest}
    >
      { children }
    </button>
  )
}