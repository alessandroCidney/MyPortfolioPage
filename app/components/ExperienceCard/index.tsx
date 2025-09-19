import { HorizontalList } from '../HorizontalList'

import styles from './styles.module.scss'

interface ExperienceCardProps {
  title: string
  date: string
  description: string
  technologies: string[]
}

export function ExperienceCard({ title, date, description, technologies }: ExperienceCardProps) {
  return (
    <div className={styles.experienceCard}>
      <div className={styles.experienceCardTitleArea}>
        <h4>
          { title }
        </h4>

        <div className={styles.dateText}>
          { date }
        </div>
      </div>

      <p>
        { description }
      </p>

      <HorizontalList
        items={technologies}
      />
    </div>
  )
}