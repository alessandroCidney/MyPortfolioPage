import Image from 'next/image'

import styles from './styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export interface ProjectCardProps {
  title: string
  description: string

  imageSrc: string
  projectUrl: string
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <article className={styles.projectCard}>
      <header>
        <div className={styles.imageBackgroundContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={props.imageSrc}
              alt=''
              fill
            />
          </div>
        </div>

        <h3>
          { props.title }
        </h3>
      </header>

      <div className={styles.contentContainer}>
        <p>
          { props.description }
        </p>
      </div>

      <Link
        href={props.projectUrl}
        target='_blank'
        className={styles.actionsContainer}
      >
        <div>
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{
              transform: 'rotate(-45deg)'
            }}
          />
        </div>
      </Link>
    </article>
  )
}
