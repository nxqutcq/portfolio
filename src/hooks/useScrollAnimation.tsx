import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimation = (elementSelector: string) => {
  useEffect(() => {
    gsap.fromTo(
      elementSelector,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.1,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.skill-container',
          start: 'top 80%',
          once: true,
        },
      }
    )
  }, [elementSelector])
}
