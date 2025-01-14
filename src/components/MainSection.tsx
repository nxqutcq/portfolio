import Navbar from './Navbar'
import { ScrollRefs } from '../types/types'
import { ImageComponent } from './ImageComponent'
import FloatingParticles from './FloatingParticles'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

const MainSection: React.FC<{ scrollRefs: ScrollRefs }> = ({ scrollRefs }) => {
  const textRef = useRef<HTMLDivElement>(null)
  const textRefHello = useRef<HTMLDivElement>(null)
  const frontRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (textRef.current) {
      const chars = textRef.current.textContent?.split('') || []
      textRef.current.innerHTML = chars
        .map((char: string) => `<span>${char}</span>`)
        .join('')
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.05, ease: 'power2.out' },
      )
      gsap.fromTo(
        textRefHello.current,
        { opacity: 0, filter: 'blur(10px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' }
      )
      gsap.fromTo(
        frontRef.current,
        { opacity: 0, x: -200 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }
      )
    }
  }, [])

  return (
    <>
      <header className="z-50 bg-black/60 py-2 fixed flex flex-col w-screen items-center">
        <Navbar scrollRefs={scrollRefs} />
      </header>
      <div className="h-full w-full items-center flex flex-col justify-center">
        <div className="flex flex-row w-full xs1:gap-x-[15%] px-5 xs:gap-x-[5%] items-center container justify-center">
          <div className="absolute inset-0 -z-10 particles-container">
            <FloatingParticles />
          </div>
          <div className="h-fit flex gap-4 flex-col">
            <span ref={textRefHello} className="animate-pulse">
              Hi there!
            </span>
            <h1 ref={textRef} className="text-2xl">
              I'm Vladislav Nelipovich
            </h1>
            <span ref={frontRef}>Frontend Developer</span>
          </div>
          <div className="md:max-w-[12rem] xs:max-w-[8rem] overflow-hidden rounded-full">
            <ImageComponent src="/photos/weqd.webp" alt="my-photo" />
          </div>
        </div>
      </div>
    </>
  )
}
export default MainSection
