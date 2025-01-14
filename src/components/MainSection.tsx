import Navbar from './Navbar'
import { ScrollRefs } from '../types/types'
import { ImageComponent } from './ImageComponent'
import FloatingParticles from './FloatingParticles'

const MainSection: React.FC<{ scrollRefs: ScrollRefs }> = ({ scrollRefs }) => {
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
            <span className="animate-pulse">Hi there!</span>
            <h1 className="text-2xl">I'm Vladislav Nelipovich</h1>
            <span>Frontend Developer</span>
          </div>
          <div className="max-w-[12rem] overflow-hidden rounded-full">
            <ImageComponent src="/photos/weqd.webp" alt="my-photo" />
          </div>
        </div>
      </div>
    </>
  )
}
export default MainSection
