import styles from './styles.module.scss'

import { SkillList } from './components/SkillList'

export function GeneralSkillsSection() {
  return (
    <section className={styles.generalSkillsSection}>
      <header>
        <h2>
          <span>
            O <span className={styles.highlight}>desenvolvedor web</span>
          </span>
          
          <br />

          <span>que você estava procurando.</span>
        </h2>
      </header>

      <SkillList />
    </section>
  )
}