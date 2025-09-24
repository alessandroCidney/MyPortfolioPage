'use client'

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faShareNodes } from "@fortawesome/free-solid-svg-icons";

import { DefaultButton } from "../DefaultButton";

import { wait } from "@/app/utils";

export function ShareButton() {
  const [currentText, setCurrentText] = useState('Compartilhar')
  const [currentIcon, setCurrentIcon] = useState(faShareNodes)

  async function navigatorShare() {
    const shareData = {
      title: 'Portfólio - Alessandro Cídney',
      text: 'O desenvolvedor web que você estava procurando!',
      url: window.location.origin,
    }

    await navigator.share(shareData)
  }

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.origin)

    setCurrentText('Link copiado!')
    setCurrentIcon(faCheckCircle)

    await wait(2000)

    setCurrentText('Compartilhar')
    setCurrentIcon(faShareNodes)
  }
  
  async function handleShare() {
    try {
      await navigatorShare()
    } catch {
      await copyLink()
    }
  }

  return (
    <DefaultButton
      appendIcon={<FontAwesomeIcon icon={currentIcon} />}
      style={{
        width: '100%',
      }}
      persistentIcon
      onClick={handleShare}
    >
      { currentText }
    </DefaultButton>
  )
}