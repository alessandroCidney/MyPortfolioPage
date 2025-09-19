import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

interface DefaultButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'outlined' | 'flat'
}

export function DefaultButton({ children, variant = 'outlined', ...rest }: DefaultButtonProps) {
  return <button
    className={[styles.defaultButton, styles[variant]].join(' ')}
    {...rest}
  >
    { children }
  </button>
}