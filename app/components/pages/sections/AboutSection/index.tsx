import Image from 'next/image'
import styles from './styles.module.scss'
import { DefaultButton } from '@/app/components/commons/DefaultButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export function AboutSection() {
  return (
    <section
      id='about'
      className={styles.aboutSection}
    >
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h2>
            Sobre <br />

            <span className={styles.highlight}>
              mim
            </span>
          </h2>

          <p>
            Olá, me chamo Alessandro Cídney! Sou um desenvolvedor web com quase 4 anos de experiência na criação de websites e interfaces.
          </p>

          <p>
            Comecei minha carreira no ano de 2021, onde comecei a desenvolver e melhorar websites como estagiário front-end.
          </p>

          <p>
            Desde então, participei de diversos projetos, atuando na construção de interfaces, criação de sistemas de cadastro, demonstrações para empresas,
            manutenção de APIs e desenvolvimento de pacotes para utilização em aplicações.
          </p>

          <p>
            Minha missão é fazer as empresas e clientes atingirem seus objetivos e sonhos por meio da construção de interfaces incríveis
            que sejam úteis e eficientes para seu negócio.
          </p>

          <p>
            Que tal trabalharmos juntos para levarmos a sua empresa ou ferramenta ao próximo nível?
          </p>

          <div>
            <DefaultButton
              appendIcon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
              target='_blank'
              variant='flat'
              style={{
                minWidth: '300px'
              }}
              link
            >
              Mande uma mensagem
            </DefaultButton>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src='/images/photos/selfie.png'
            alt='Uma fotografia minha.'
            objectFit='cover'
            fill
          />
        </div>
      </div>
      
      <div className={styles.secondBackground} />
    </section>
  )
}