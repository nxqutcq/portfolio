import { ImageComponent } from './ImageComponent'
import { gsap } from 'gsap'
import { RefObject, useLayoutEffect, useRef } from 'react'

const MainSection: React.FC<{ mainRef: RefObject<HTMLDivElement> }> = ({
  mainRef,
}) => {
  const textRef = useRef<HTMLDivElement>(null)
  const textRefHello = useRef<HTMLDivElement>(null)
  const frontRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
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
    <section ref={mainRef}>
      <div className="w-full h-screen justify-center flex max-w-[1140px]">
        <div className="w-full h-full items-center flex flex-col justify-center">
          <div className="flex h-full flex-row w-full xs1:gap-x-[15%] md:px-0 xs:gap-x-[5%] items-center container justify-center">
            <div className="h-full flex items-center">
              <div className="gap-4 flex flex-col items-center justify-center sticky top-[64.8px]">
                <span className="animate-pulse text-xl">Hi there!</span>
                <h1 ref={textRef} className="w-full text-center">
                  I'm Vladislav Nelipovich
                </h1>
                <span className="text-2xl text-center" ref={frontRef}>
                  Frontend Developer
                </span>
              </div>
            </div>
            <div className="flex h-full items-center">
              <div className="md:max-w-[12rem] xs:max-w-[12rem] overflow-hidden rounded-full sticky top-[64.8px]">
                <ImageComponent src="/photos/weqd.webp" alt="my-photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSection
