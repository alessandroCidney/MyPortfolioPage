import { ProjectCard } from './components/ProjectCard'
import styles from './styles.module.scss'

export function ProjectsCarousel() {
  return (
    <div className={styles.projectsCarouselContainer}>
      <div className={styles.projectsCarousel}>
        <ProjectCard />

        <ProjectCard />
      </div>
    </div>
  )
}