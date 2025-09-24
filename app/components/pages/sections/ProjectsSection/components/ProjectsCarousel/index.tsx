import { ProjectCard } from './components/ProjectCard'
import styles from './styles.module.scss'

interface ProjectCardProps {
  reversed?: boolean
}

export function ProjectsCarousel(props: ProjectCardProps) {
  const projectCardClassNames = [styles.projectsCarouselContainer]

  if (props.reversed) {
    projectCardClassNames.push(styles.reversed)
  }

  return (
    <div className={projectCardClassNames.join(' ')}>
      <div className={styles.projectsCarousel}>
        <ProjectCard />

        <ProjectCard />
      </div>
    </div>
  )
}