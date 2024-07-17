import Navbar from './Navbar'
import { ScrollRefs } from '../types/types'

const MainSection: React.FC<{ scrollRefs: ScrollRefs }> = ({ scrollRefs }) => (
  <>
    <header className="z-50 bg-black/60 py-2 fixed flex flex-col w-screen items-center">
      <Navbar scrollRefs={scrollRefs} />
    </header>
    <div className="flex flex-row w-full xs1:gap-x-[20%] px-5 xs:gap-x-[5%] items-center container justify-center mt-[13rem]">
      <div className="h-fit flex gap-4 animate-float-up flex-col">
        <span className="animate-pulse">Hi there!</span>
        <h1 className="text-2xl">I'm Vladislav Nelipovich</h1>
        <span>Frontend Developer</span>
      </div>
      <div>
        <div className="max-w-[13rem] animate-float-up overflow-hidden rounded-full">
          <img
            draggable={false}
            src="https://psv4.userapi.com/c909518/u250373309/docs/d4/80f94469ed72/oAT8xJ6LLDQ.webp?extra=wxxKHPTqLHKRZU2NkkvQx2MwjFw_od7GDUBXFPpy2prbut3GDG-WgF636dowadwcYTAAVKCJ8DhS_sm2mEcD7M5dCWD-NsyXBP7TBtpsyyWyj8kXFiGudlV_917agbgUQVUFAwEHxaMJvueIJ6kZBRe1kA"
            alt="my-photo"
          />
        </div>
      </div>
    </div>
  </>
)
export default MainSection
