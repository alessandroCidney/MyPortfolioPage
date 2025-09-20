import Image from "next/image";

import styles from './styles.module.scss'

import { InfiniteCarousel } from "./components/InfiniteCarousel"
import { DefaultButton } from "./components/DefaultButton";
import { ExperienceCard } from "./components/ExperienceCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const experienceCardsData = [
    {
      title: 'Desenvolvedor Front-end Pleno',
      date: '2024 - 2025',
      description: 'Atuei como desenvolvedor front-end pleno em diversos projetos, auxiliando no desenvolvimento de interfaces para softwares de análise de documentos, chatbots baseados em IA, CRUDs para salvamento de informações e muito mais. Por ter conhecimento sobre JavaScript/Node.js, também participei do desenvolvimento de bibliotecas NPM para facilitar a integração com softwares diversos e na resolução de problemas em APIs Node.js.',
      technologies: [
        'JavaScript',
        'TypeScript',
        'Vue.js',
        'Nuxt.js',
        'React.js',
        'Next.js',
        'HTML5',
        'CSS3',
        'Sass',
        'Firebase',
        'Google Cloud Platform',
        'Docker',
        'WebSocket',
        'Git',
        'Bitbucket',
        'Jest',
        'Cypress',
        'Selenium',
        'Scrum',
        'Kanban',
        'Figma',
      ]
    },
    {
      title: 'Desenvolvedor Front-end Júnior',
      date: '2022 - 2023',
      description: 'Também atuei como desenvolvedor front-end júnior, colaborando no desenvolvimento de interfaces para ferramentas de análise de documentos, na construção de CRUDs para salvamento de informações, na criação de features e interfaces solicitadas sob demanda para projetos diversos e muito mais.',
      technologies: [
        'JavaScript',
        'TypeScript',
        'Vue.js',
        'Nuxt.js',
        'React.js',
        'Next.js',
        'HTML5',
        'CSS3',
        'Sass',
        'Firebase',
        'Google Cloud Platform',
        'Docker',
        'Git',
        'Bitbucket',
        'Jest',
        'Cypress',
        'Scrum',
        'Figma',
      ],
    },
    {
      title: 'Estagiário Front-end',
      date: '2021 - 2022',
      description: 'Inicialmente, comecei a carreira como estagiário de desenvolvimento focado na área front-end, auxiliando principalmente no desenvolvimento de interfaces para ferramentas de análise de documentos da empresa.',
      technologies: [
        'JavaScript',
        'TypeScript',
        'Vue.js',
        'Nuxt.js',
        'React.js',
        'Next.js',
        'HTML5',
        'CSS3',
        'Sass',
        'Firebase',
        'Google Cloud Platform',
        'Git',
        'Bitbucket',
        'Jest',
        'Scrum',
        'Figma',
      ],
    }
  ]

  return (
    <div>
      <header className={styles.defaultHeader}>
        <Image
          src='/images/texts/ac.png'
          alt='Meu nome'
          width={61}
          height={40}
        />

        <nav className={styles.defaultNav}>
          <ul>
            <li>
              <a>
                Início
              </a>
            </li>

            <li>
              <a>
                Experiência
              </a>
            </li>

            <li>
              <a>
                Sobre mim
              </a>
            </li>

            <li>
              <a>
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <DefaultButton
          appendIcon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
          href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
          target='_blank'
          link
        >
          Falar
        </DefaultButton>
      </header>

      <main className={styles.defaultMain}>
        <section className={styles.firstSection}>
          <div className={styles.titleImageContainer} />

          <div className={styles.personImageContainer} />

          <div className={styles.introductionLeftText}>
            <p>
              Olá, bem vindo ao meu portfólio! Me chamo <strong>Alessandro Cídney</strong>, e sou um <strong>desenvolvedor web</strong> apaixonado por construir interfaces incríveis.
            </p>

            <DefaultButton
              variant="flat"
              appendIcon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
              target='_blank'
              link
            >
              Contratar
            </DefaultButton>
          </div>
        </section>

        <section className={styles.secondSection}>
          <div>
            <h2>
              O <span className={styles.highlightText}>desenvolvedor web</span> que você estava procurando.
            </h2>

            <p>
              Experiência com diversas tecnologias.
            </p>
          </div>

          <InfiniteCarousel
            items={[
              'JavaScript',
              'TypeScript',
              'Vue.js',
              'Nuxt.js',
              'React.js',
              'Next.js',
              'HTML5',
              'CSS3',
              'Sass',
              'Firebase',
              'Google Cloud Platform',
              'Docker',
              'WebSocket',
              'Git',
              'Bitbucket',
              'Jest',
              'Cypress',
              'Selenium',
              'Scrum',
              'Kanban',
              'Figma',
            ]}
          />

          <div className={styles.personArmsCrossed} />
        </section>

        <section className={styles.thirdSection}>
          <div className={styles.contentContainer}>
            <div className={styles.textContainer}>
              <h2>
                Sobre mim
              </h2>

              <p>
                Olá, Me chamo Alessandro Cídney! Sou um desenvolvedor web com quase 4 anos de experiência no desenvolvimento de websites.
              </p>

              <br />

              <p>
                Minha missão principal é fazer as empresas e clientes atingirem seus objetivos por meio da construção de softwares e interfaces incríveis!
              </p>

              <br />

              <p>
                Possuo experiência com a utilização de diversas tecnologias e ferramentas que são utilizadas desde as etapas de planejamento e organização até desenvolvimento e implantação de softwares.
              </p>

              <br />

              <p>
                Precisa de apoio na sua empresa?
              </p>

              <DefaultButton
                appendIcon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                target='_blank'
                link
              >
                Mande uma mensagem
              </DefaultButton>
            </div>

            <div className={styles.personAlbum} />
          </div>
        </section>

        <section className={styles.fourthSection}>
          <div className={styles.contentContainer}>
            <div className={styles.titleContainer}>
              <h2>
                Experiência profissional
              </h2>

              <p>
                Acompanhe minha trajetória!
              </p>
            </div>

            <div className={styles.companyTitle}>
              <h3>
                SantoDigital
              </h3>

              <div className={styles.companyDate}>
                2021 - 2025
              </div>

              <p>
                Empresa que atua no setor de Cloud, oferecendo serviços como modernização de estrutura, análise de dados, integração com o ecossistema Google e diversos produtos baseados em IA.
              </p>

              <DefaultButton
                appendIcon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
                href='https://santodigital.com.br'
                target='_blank'
                link
              >
                Acessar Website
              </DefaultButton>
            </div>

            <div className={styles.experienceCards}>
              {
                experienceCardsData.map((cardData, cardDataIndex) => (
                  <ExperienceCard
                    key={`cardDataIndex${cardDataIndex}`}
                    title={cardData.title}
                    date={cardData.date}
                    description={cardData.description}
                    technologies={cardData.technologies}
                  />
                ))
              }
            </div>
          </div>
        </section>

        <section className={styles.fifthSection}>

        </section>
      </main>

      <footer className={styles.defaultFooter}>
        <div className={styles.footerTitleArea}>
          <h2>
            Vamos trabalhar<br />juntos?
          </h2>

          <div>
            <DefaultButton
              variant="flat"
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
              target='_blank'
              link
              primary
              large
            >
              Mande uma mensagem
            </DefaultButton>
          </div>
        </div>

        <div className={styles.copyRightArea}>
          <span className={styles.copyRightText}>
            Copyright © 2025 Alessandro Cídney
          </span>

          <div className={styles.centerButtons}>
            <DefaultButton>
              Mandar e-mail
            </DefaultButton>

            <DefaultButton>
              Github
            </DefaultButton>

            <DefaultButton>
              Instagram
            </DefaultButton>
          </div>

          <div className={styles.backToTop}>
            <DefaultButton variant="text">
              Voltar ao início
            </DefaultButton>
          </div>
        </div>
      </footer>
    </div>
  );
}
