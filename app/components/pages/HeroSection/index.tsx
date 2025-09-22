import Image from 'next/image'

import styles from './styles.module.scss'

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textContainer}>
        <div className={styles.developerImageContainer}>
          <Image
            alt='Developer'
            src='/images/texts/developer.png'
            fill
          />
        </div>

        <p>
          Olá, bem vindo ao meu portfólio! Me chamo <strong>Alessandro Cídney</strong>, e sou um <strong>desenvolvedor web</strong> apaixonado por construir interfaces incríveis.
        </p>
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