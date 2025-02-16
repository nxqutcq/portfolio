import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimation = (elementSelector: string) => {
  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(elementSelector)

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        scrollTrigger: {
          trigger: elements[0].parentElement,
          start: 'top 80%',
          end: 'bottom top',
          once: true,
        },
      }
    )
  }, [elementSelector])
}
