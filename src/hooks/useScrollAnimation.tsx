import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimation = (elementSelector: string) => {
  useEffect(() => {
    gsap.fromTo(
      elementSelector,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: elementSelector,
          start: 'top 80%',
          end: 'bottom top',
          once: true,
        },
      }
    )
  }, [elementSelector])
}
