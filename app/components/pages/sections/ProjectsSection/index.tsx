import styles from './styles.module.scss'
import { ProjectsCarousel } from './components/ProjectsCarousel'

export function ProjectsSection() {
  return (
    <section
      id='projects'
      className={styles.projectsSection}
    >
      <div className={styles.contentContainer}>
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
      </div>

      <div className={`${styles.contentContainer} ${styles.reversed}`}>
        <div className={styles.titleContainer}>
          <h2>
            Projetos pessoais
          </h2>

          <p>
            Acompanhe meus projetos pessoais mais recentes.
          </p>
        </div>

        <div className={styles.projectsCarousel}>
          <ProjectsCarousel reversed />
        </div>
      </div>
    </section>
  )
}