import styles from './styles.module.scss'
import { ProjectsCarousel } from './components/ProjectsCarousel'

export function ProjectsSection() {
  const mainProjectsArr = [
    {
      title: 'Document Analyzer',
      description: `Plataforma para análise e validação de documentos utilizando inteligência artificial.`,

      imageSrc: '/images/illustrations/document-analysis.svg',
      projectUrl: 'https://santodigital.com.br/santoid/',
    },
    
    {
      title: 'AI Assistant',
      description: 'Assistente baseado em IA generativa, com funções diversas como geração de texto, imagens e código.',

      imageSrc: '/images/illustrations/ai-assistant.svg',
      projectUrl: 'https://santodigital.com.br/santoai/',
    }
  ]

  const personalProjectsArr = [
    {
      title: 'MoneySpy',
      description: 'Plataforma para organização e análise de gastos pessoais, com relatórios diversos e sistema de gamificação embutido.',

      imageSrc: '/images/illustrations/blue-money-spy.svg',
      projectUrl: 'http://localhost:3000'
    }
  ]

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
          <ProjectsCarousel
            items={mainProjectsArr}
          />
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
          <ProjectsCarousel
            items={personalProjectsArr}
            reversed
          />
        </div>
      </div>
    </section>
  )
}