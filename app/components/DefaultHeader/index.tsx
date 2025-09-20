import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { getScrollPercent, scrollToTop } from "@/app/utils/scroll";
import { debounce } from "@/app/utils";

import { DefaultButton } from "../DefaultButton";

import styles from './styles.module.scss'

export function DefaultHeader() {
  const [fixedHeader, setFixedHeader] = useState(false)

  function checkScroll() {
    console.log('checkScroll')

    setFixedHeader(getScrollPercent() > 15)
  }

  const debouncedCheckScroll = debounce(checkScroll, 50)

  useEffect(() => {
    console.log('start render')
    window.addEventListener('scroll', debouncedCheckScroll)

    return () => {
      console.log('end render')
      window.removeEventListener('scroll', debouncedCheckScroll)
    }
  }, [checkScroll])
  return (
    <header
      className={[
        styles.defaultHeader,
        fixedHeader ? styles.fixedHeader : ''
      ].join(' ')}
    >
      <Link href='#'>
        <Image
          src='/images/texts/ac.png'
          alt='Meu nome'
          width={61}
          height={40}
          onClick={scrollToTop}
        />
      </Link>

      <nav className={styles.defaultNav}>
        <ul>
          <li>
            <Link href='#'>
              <span>Início</span>
            </Link>
          </li>

          <li>
            <Link href='#about'>
              <span>Sobre mim</span>
            </Link>
          </li>

          <li>
            <Link href='#experience'>
              <span>Experiência</span>
            </Link>
          </li>

          <li>
            <Link href='#contact'>
              <span>Contato</span>
            </Link>
          </li>
        </ul>
      </nav>

      <DefaultButton
        appendIcon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
        href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
        target='_blank'
        link
      >
        Falar
      </DefaultButton>
    </header>
  )
}
