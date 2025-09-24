import styles from './styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { DefaultButton } from '@/app/components/commons/DefaultButton'

export function DefaultFooter() {
  return (
    <footer className={styles.defaultFooter}>
      <div className={styles.letsWorkTogetherArea}>
        <h1>
          Vamos trabalhar <br/>
          juntos?
        </h1>

        <DefaultButton
          style={{
            backgroundColor: 'var(--theme-primary-color)',
            minWidth: '200px',
            fontSize: '5rem'
          }}
          variant='flat'
          icon
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{
              transform: 'rotate(-45deg)'
            }}
          />
        </DefaultButton>
      </div>

      <div className={styles.footerContent}>

      </div>
    </footer>
  )
}