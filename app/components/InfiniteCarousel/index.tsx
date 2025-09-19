import styles from './styles.module.scss'

interface InfiniteCarouselProps {
  items: string[]
}

export function InfiniteCarousel(props: InfiniteCarouselProps) {
  function CarouselList() {
    const listItems = props.items.map((item, itemIndex) => (
      <li
        key={`itemIndex${itemIndex}`}
        className={styles.carouselItem}
      >
        { item }
      </li>
    ))

    return (
      <ul className={styles.carouselList}>
        {listItems}
      </ul>
    )
  }

  return (
    <div className={styles.infiniteCarouselContainer}>
      <div className={styles.infiniteCarousel}>
        <CarouselList />

        <CarouselList aria-hidden={true} />
      </div>
    </div>
  )
}
