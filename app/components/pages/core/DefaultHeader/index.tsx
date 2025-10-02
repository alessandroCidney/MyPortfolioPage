'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { getScrollPosition, scrollToTop } from "@/app/utils/scroll";
import { debounce } from "@/app/utils";

import { DefaultButton } from "../../../commons/DefaultButton";

import styles from './styles.module.scss'

export function DefaultHeader() {
  const [userScrolledDown, setUserScrolledDown] = useState(false)

  function checkScroll() {
    setUserScrolledDown(getScrollPosition() > 20)
  }

  const debouncedCheckScroll = debounce(checkScroll, 50)

  useEffect(() => {
    window.addEventListener('scroll', debouncedCheckScroll)

    return () => {
      window.removeEventListener('scroll', debouncedCheckScroll)
    }
  }, [checkScroll])
  return (
    <header
      className={[
        styles.defaultHeader,
        userScrolledDown ? styles.userScrolledDown : ''
      ].join(' ')}
    >
      <h1>
        <Link href='#'>
          <Image
            src='/images/texts/ac.png'
            alt='Portfólio - Alessandro Cídney'
            width={55}
            height={34}
            onClick={scrollToTop}
          />
        </Link>
      </h1>

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
            <Link href='#projects'>
              <span>Projetos</span>
            </Link>
          </li>

          <li>
            <Link href='#skills'>
              <span>Skills</span>
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
        Contratar
      </DefaultButton>
    </header>
  )
}
