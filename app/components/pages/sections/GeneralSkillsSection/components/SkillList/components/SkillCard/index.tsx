import styles from './styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IconDefinition } from '@fortawesome/free-brands-svg-icons'

interface SkillCardProps {
  title: string
  description: string
  icon: IconDefinition
}

export function SkillCard(props: SkillCardProps) {
  return (
    <article className={styles.skillCard}>
      <header>
        <div className={styles.skillIcon}>
          <FontAwesomeIcon icon={props.icon} size='2x' />
        </div>

        <h3>
          { props.title }
        </h3>
      </header>

      <p>
        { props.description }
      </p>
    </article>
  )
}