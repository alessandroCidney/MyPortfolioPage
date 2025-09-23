import Image from 'next/image'
import styles from './styles.module.scss'

export function HardSkillsSection() {
  const skillsList = [
    { title: 'JavaScript', icon: '/images/logos/js-logo.svg' },
    { title: 'TypeScript', icon: '/images/logos/ts-logo.svg' },

    { title: 'React.js', icon: '/images/logos/react-logo.svg' },
    { title: 'Next.js', icon: '/images/logos/next-js-logo.svg' },
    { title: 'Vue.js', icon: '/images/logos/vue-logo.svg' },
    { title: 'Nuxt.js', icon: '/images/logos/react-logo.svg' },
    { title: 'Vuetify', icon: '/images/logos/react-logo.svg' },

    { title: 'HTML5', icon: '/images/logos/react-logo.svg' },
    { title: 'CSS3', icon: '/images/logos/react-logo.svg' },
    { title: 'Sass / Scss', icon: '/images/logos/react-logo.svg' },

    { title: 'Node.js', icon: '/images/logos/react-logo.svg' },
    { title: 'MongoDB', icon: '/images/logos/react-logo.svg' },
    { title: 'MySQL', icon: '/images/logos/react-logo.svg' },
    { title: 'Express', icon: '/images/logos/react-logo.svg' },
    { title: 'Docker', icon: '/images/logos/react-logo.svg' },
    { title: 'Webpack', icon: '/images/logos/react-logo.svg' },

    { title: 'Firebase', icon: '/images/logos/react-logo.svg' },
    { title: 'Google Cloud', icon: '/images/logos/react-logo.svg' },

    { title: 'WebSocket', icon: '/images/logos/react-logo.svg' },

    { title: 'Jest', icon: '/images/logos/react-logo.svg' },
    { title: 'Cypress', icon: '/images/logos/react-logo.svg' },
    { title: 'Selenium', icon: '/images/logos/react-logo.svg' },
    { title: 'Vitest', icon: '/images/logos/react-logo.svg' },

    { title: 'Git', icon: '/images/logos/react-logo.svg' },
    { title: 'Github', icon: '/images/logos/react-logo.svg' },
    { title: 'Bitbucket', icon: '/images/logos/react-logo.svg' },

    { title: 'Figma', icon: '/images/logos/react-logo.svg' },
    { title: 'Scrum', icon: '/images/logos/react-logo.svg' },
    { title: 'Kanban', icon: '/images/logos/react-logo.svg' },
    { title: 'Jira', icon: '/images/logos/react-logo.svg' },
  ]

  return (
    <section className={styles.hardSkillsSection}>
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
                width={48}
                height={48}
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