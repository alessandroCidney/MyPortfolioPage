import styles from './styles.module.scss'

export function HardSkillsSection() {
  const skillsList = [
    'JavaScript',
    'TypeScript',

    'React.js',
    'Next.js',
    'Vue.js',
    'Nuxt.js',
    'Vuetify',

    'HTML5',
    'CSS3',
    'Sass / Scss',

    'Node.js',
    'MongoDB',
    'MySQL',
    'Express',
    'Docker',
    'Webpack',

    'Firebase',
    'Google Cloud',

    'WebSocket',

    'Jest',
    'Cypress',
    'Selenium',
    'Vitest',

    'Git',
    'Github',
    'Bitbucket',

    'Figma',
    'Scrum',
    'Kanban',
    'Jira',
  ]

  return (
    <section className={styles.hardSkillsSection}>
      <h2>
        Skills
      </h2>

      <p>
        Precisando de alguma habilidade específica? Veja minhas skills.
      </p>

      <div className={styles.skillsGrid}>
        { skillsList.map((item, itemIndex) => (
          <article key={`itemIndex${itemIndex}`}>
            <header>
              <h3>
                { item }
              </h3>
            </header>
          </article>
        )) }
      </div>
    </section>
  )
}