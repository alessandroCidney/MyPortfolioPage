import Image from 'next/image'
import styles from './styles.module.scss'

export function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h2>
            Sobre <br />

            <span className={styles.highlight}>
              mim
            </span>
          </h2>

          <p>
            Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet.
          </p>

          <p>
            Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet Lorem inpsum dolor sir amet .
          </p>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src='/images/photos/selfie.png'
            alt='Uma fotografia minha.'
            fill
          />
        </div>
      </div>
      
      <div className={styles.secondBackground} />
    </section>
  )
}