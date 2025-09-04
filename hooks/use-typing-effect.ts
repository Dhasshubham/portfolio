"use client"

import { useEffect, useState } from "react"

interface UseTypingEffectProps {
  text: string
  speed?: number
  delay?: number
}

export function useTypingEffect({ text, speed = 100, delay = 0 }: UseTypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const startTyping = () => {
      let currentIndex = 0

      const typeNextCharacter = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
          timeoutId = setTimeout(typeNextCharacter, speed)
        } else {
          setIsComplete(true)
        }
      }

      typeNextCharacter()
    }

    timeoutId = setTimeout(startTyping, delay)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [text, speed, delay])

  return { displayedText, isComplete }
}
