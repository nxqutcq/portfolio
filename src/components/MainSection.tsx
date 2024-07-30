import Navbar from './Navbar'
import { ScrollRefs } from '../types/types'

const MainSection: React.FC<{ scrollRefs: ScrollRefs }> = ({ scrollRefs }) => (
  <>
    <header className="z-50 bg-black/60 py-2 fixed flex flex-col w-screen items-center">
      <Navbar scrollRefs={scrollRefs} />
    </header>
    <div className="h-full w-full items-center flex flex-col justify-center">
      <div className="flex flex-row w-full xs1:gap-x-[20%] px-5 xs:gap-x-[5%] items-center container justify-center">
        <div className="h-fit flex gap-4 animate-float-up flex-col">
          <span className="animate-pulse">Hi there!</span>
          <h1 className="text-2xl">I'm Vladislav Nelipovich</h1>
          <span>Frontend Developer</span>
        </div>
        <div>
          <div className="max-w-[13rem] animate-float-up overflow-hidden rounded-full">
            <img
              draggable={false}
              src="src/assets/photos/oAT8xJ6LLDQ.webp"
              alt="my-photo"
            />
          </div>
        </div>
      </div>
    </div>
  </>
)
export default MainSection
