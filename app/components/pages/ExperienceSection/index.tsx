import styles from './styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import { DefaultButton } from '../../commons/DefaultButton'

export function ExperienceSection() {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.contentContainer}>
        <h2>
          Experiência profissional
        </h2>

        <p>
          Veja minha trajetória completa acessando meu LinkedIn.
        </p>

        <DefaultButton
          appendIcon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
          href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
          target='_blank'
          variant='blur'
          large
          link
        >
          Acessar LinkedIn
        </DefaultButton>
      </div>
    </section>
  )
}