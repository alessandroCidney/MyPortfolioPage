import styles from './styles.module.scss'
import { ProjectsCarousel } from './components/ProjectsCarousel'


export function ProjectsSection() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.titleContainer}>
        <h2>
          Projetos principais
        </h2>

        <p>
          Veja alguns dos websites em que trabalhei.
        </p>
      </div>

      <div className={styles.projectsCarousel}>
        <ProjectsCarousel />
      </div>
    </section>
  )
}