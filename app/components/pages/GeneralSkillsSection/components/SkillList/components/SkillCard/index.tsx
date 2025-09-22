import styles from './styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFigma } from '@fortawesome/free-brands-svg-icons'

export function SkillCard() {
  return (
    <article className={styles.skillCard}>
      <header>
        <div className={styles.skillIcon}>
          <FontAwesomeIcon icon={faFigma} size='2x' />
        </div>

        <h3>
          Lorem ipsum
        </h3>
      </header>

      <p>
        lorem ipsum dolor si amet lorem ipsum dolor si amet lorem ipsum dolor si amet lorem ipsum dolor si amet lorem ipsum dolor si amet lorem ipsum dolor si amet lorem ipsum dolor si amet 
      </p>
    </article>
  )
}