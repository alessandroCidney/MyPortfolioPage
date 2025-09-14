import styles from './styles.module.scss'

interface InfiniteCarouselProps {
  items: string[]
}

export function InfiniteCarousel(props: InfiniteCarouselProps) {
  function CarouselList() {
    const listItems = props.items.map((item, itemIndex) => (
      <h2
        key={`itemIndex${itemIndex}`}
        className={styles.carouselItem}
      >
        { item }
      </h2>
    ))

    return <div className={styles.carouselList}>{listItems}</div>
  }

  return (
    <div className={styles.infiniteCarousel}>
      <CarouselList />

      <CarouselList aria-hidden={true} />
    </div>
  )
}
