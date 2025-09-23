import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

interface BaseProps {
  children: ReactNode
  appendIcon?: ReactNode
  
  variant?: 'outlined' | 'flat' | 'blur'

  large?: boolean
}

type ActionButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  link?: false
}

type LinkButtonProps = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  link: true
}

function ButtonContent({ children, appendIcon }: BaseProps) {
  return <>
    { children }

    {
      !!appendIcon && <span className={styles.appendIcon}>{ appendIcon }</span>
    }
  </>
}

// Next.js doesn't accept "BaseProps" as properties of HTML elements in this case, so we need to separate them
export function DefaultButton({
  children,
  appendIcon,
  
  variant,

  large,
  link,

  ...rest
}: (ActionButtonProps | LinkButtonProps) & BaseProps) {
  const classNameArr = [styles.defaultButton, styles[variant || 'outlined']]

  if (large) {
    classNameArr.push(styles.large)
  }

  const nodeItems = { children, appendIcon }

  return link
    ? <a
        className={classNameArr.join(' ')}
        {...rest as LinkButtonProps}
      >
        <ButtonContent {...rest} {...nodeItems} />
      </a>

    : <button
        className={classNameArr.join(' ')}
        {...rest as ActionButtonProps}
      >
        <ButtonContent {...rest} {...nodeItems} />
      </button>
}
