import Image from 'next/image'
import styles from './styles.module.scss'

export function HardSkillsSection() {
  const skillsList = [
    { title: 'JavaScript', icon: '/images/logos/js-logo.svg' },
    { title: 'TypeScript', icon: '/images/logos/ts-logo.svg' },

    { title: 'React.js', icon: '/images/logos/react-logo.svg' },
    { title: 'Next.js', icon: '/images/logos/next-js-logo.svg' },
    { title: 'Vue.js', icon: '/images/logos/vue-logo.svg' },
    { title: 'Nuxt.js', icon: '/images/logos/nuxt-logo.svg' },
    { title: 'Vuetify', icon: '/images/logos/vuetify-logo.png' },

    { title: 'HTML5', icon: '/images/logos/html-logo.svg' },
    { title: 'CSS3', icon: '/images/logos/css-logo.svg' },
    { title: 'Sass / Scss', icon: '/images/logos/sass-logo.svg' },

    { title: 'Node.js', icon: '/images/logos/node-logo.svg' },
    { title: 'MongoDB', icon: '/images/logos/mongo-db-logo.svg' },
    { title: 'MySQL', icon: '/images/logos/mysql-logo.svg' },
    { title: 'Express', icon: '/images/logos/express-logo.svg' },
    { title: 'Docker', icon: '/images/logos/docker-logo.svg' },
    { title: 'Webpack', icon: '/images/logos/webpack-logo.svg' },

    { title: 'Firebase', icon: '/images/logos/firebase-logo.svg' },
    { title: 'Google Cloud', icon: '/images/logos/gcp-logo.svg' },

    { title: 'REST', icon: '/images/logos/rest-logo.svg' },
    { title: 'WebSocket', icon: '/images/logos/websocket-logo.svg' },

    { title: 'Jest', icon: '/images/logos/jest-logo.png' },
    { title: 'Cypress', icon: '/images/logos/cypress-logo.png' },
    { title: 'Selenium', icon: '/images/logos/selenium-logo.svg' },
    { title: 'Vitest', icon: '/images/logos/vitest-logo.svg' },

    { title: 'Git', icon: '/images/logos/git-logo.svg' },
    { title: 'Github', icon: '/images/logos/github-logo.svg' },
    { title: 'Bitbucket', icon: '/images/logos/bitbucket-logo.svg' },
    { title: 'Jira', icon: '/images/logos/jira-logo.svg' },

    { title: 'Figma', icon: '/images/logos/figma-logo.svg' },
    { title: 'Scrum', icon: '/images/logos/scrum-logo.svg' },
    { title: 'Kanban', icon: '/images/logos/kanban-logo.svg' },
  ]

  return (
    <section
      id='skills'
      className={styles.hardSkillsSection}
    >
      <h2>
        Skills
      </h2>

      <p>
        Precisando de uma habilidade específica? <br /> Veja algumas de minhas skills.
      </p>

      <div className={styles.skillsGrid}>
        { skillsList.map((itemData, itemIndex) => (
          <article key={`itemIndex${itemIndex}`}>
            <header>
              <Image
                src={itemData.icon}
                alt=''
                width={64}
                height={64}
              />

              <h3>
                { itemData.title }
              </h3>
            </header>
          </article>
        )) }
      </div>
    </section>
  )
}