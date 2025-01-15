import { ImageComponent } from './ImageComponent'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import FloatingParticles from './FloatingParticles'

const MainSection: React.FC = () => {
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
        { opacity: 1, y: 0, duration: 1, stagger: 0.05, ease: 'power2.out' }
      )
      gsap.fromTo(
        textRefHello.current,
        { opacity: 0, filter: 'blur(10px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' }
      )
      gsap.fromTo(
        frontRef.current,
        { opacity: 0, x: -200 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power2.out' }
      )
    }
  }, [])

  return (
    <div className='flex w-full'>
      <div className="h-full w-full items-center flex flex-col justify-center">
        <div className="absolute inset-0 -z-10 particles-container">
          <FloatingParticles />
        </div>
        <div className="flex flex-row w-full xs1:gap-x-[15%] px-5 xs:gap-x-[5%] items-center container justify-center">
          <div className="h-fit flex gap-4 flex-col">
            <span ref={textRefHello} className="animate-pulse text-xl">
              Hi there!
            </span>
            <h1 ref={textRef}>I'm Vladislav Nelipovich</h1>
            <span className="text-2xl" ref={frontRef}>
              Frontend Developer
            </span>
          </div>
          <div className="md:max-w-[12rem] xs:max-w-[8rem] overflow-hidden rounded-full">
            <ImageComponent src="/photos/weqd.webp" alt="my-photo" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default MainSection
