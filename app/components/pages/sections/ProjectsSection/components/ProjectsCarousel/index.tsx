import styles from './styles.module.scss'

import { ProjectCard, ProjectCardProps } from './components/ProjectCard'

interface ProjectsCarouselProps {
  items: ProjectCardProps[]

  reversed?: boolean
}

export function ProjectsCarousel(props: ProjectsCarouselProps) {
  const projectCardClassNames = [styles.projectsCarouselContainer]

  if (props.reversed) {
    projectCardClassNames.push(styles.reversed)
  }

  return (
    <div className={projectCardClassNames.join(' ')}>
      <div className={styles.projectsCarousel}>
        {
          props.items.map((itemData, itemIndex) => (
            <ProjectCard
              key={`itemIndex${itemIndex}`}
              {...itemData}
            />
          ))
        }
      </div>
    </div>
  )
}