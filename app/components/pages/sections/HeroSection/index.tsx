import Image from 'next/image'

import styles from './styles.module.scss'

import { DefaultButton } from '../../../commons/DefaultButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentContainer}>
        <div className={styles.developerImageContainer}>
          <Image
            alt='Developer'
            src='/images/texts/developer.png'
            fill
          />
        </div>

        <div className={styles.textContainer}>
          <p>
            Olá, bem vindo ao meu portfólio! Me chamo <strong>Alessandro Cídney</strong>, e sou um <strong>desenvolvedor web</strong> apaixonado por construir interfaces incríveis.
          </p>

          <DefaultButton
            appendIcon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
            href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
            target='_blank'
            variant='flat'
            link
          >
            Contratar
          </DefaultButton>
        </div>
      </div>

      <div className={styles.personImageContainer}>
        <Image
          alt='Pessoa acenando com a mão'
          src='/images/illustrations/person-hello.png'
          fill
        />
      </div>
    </section>
  )
}