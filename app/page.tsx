import Image from "next/image";

import styles from './index.module.scss'

export default function Home() {
  console.log('Object.keys', Object.keys(styles))

  return (
    <div>
      <header className={styles.defaultHeader}>
        <h1>AC</h1>

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

        <button className={styles.testButton}>
          Falar
        </button>
      </header>

      <main className={styles.defaultMain}>
        <section className={styles.firstSection}>
          <div className={styles.titleImageContainer} />

          <div className={styles.personImageContainer} />

          <div>
            Teste teste tetse teste teste teste
          </div>
        </section>

        <section className={styles.secondSection}>
          <div>
            <h1>
              O <span className={styles.highlightText}>desenvolvedor</span> que você estava procurando.
            </h1>

            <p>
              Experiência com diversas tecnologias.
            </p>
          </div>

          <div className={styles.animationArea}>
            <div>
              <h2>JavaScript</h2>

              <h2>Typescript</h2>

              <h2>Docker</h2>

              <h2>Git</h2>
            </div>

            <div aria-hidden={true}>
              <h2>JavaScript</h2>

              <h2>Typescript</h2>

              <h2>Docker</h2>

              <h2>Git</h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
