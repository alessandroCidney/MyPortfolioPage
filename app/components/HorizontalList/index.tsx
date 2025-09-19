import styles from './styles.module.scss'

interface HorizontalListProps {
  items: string[]
}

export function HorizontalList({ items }: HorizontalListProps) {
  return <div className={styles.horizontalList}>
    {
      items.map((itemStr, itemIndex) => (
        <div
          className={styles.horizontalListItem}
          key={`itemIndex${itemIndex}`}
        >
          { itemStr }
        </div>
      ))
    }
  </div>
}
