import styles from './styles.module.scss'

import { SkillCard } from './components/SkillCard'

export function SkillList() {
  return (
    <div className={styles.skillList}>
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
    </div>
  )
}