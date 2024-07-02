import { useRef } from 'react'
import './index.css'
import Navbar from './Navbar'

export const App = () => {
  const mainRef = useRef(null)
  const skillsRef = useRef(null)
  const projectRef = useRef(null)
  const contactsRef = useRef(null)
  const socialsRef = useRef(null)

  const scrollRefs = {
    mainRef,
    skillsRef,
    projectRef,
    contactsRef,
    socialsRef,
  }

  return (
    <div className="min-h-screen w-[1280px] max-w-[1280px] flex flex-col">
      <header
        ref={mainRef}
        className="box bg-red-600 flex flex-col items-center"
      >
        <Navbar scrollRefs={scrollRefs} />
        <div className="flex flex-row mt-40">
          <div className="bg-slate-800 h-fit flex flex-col">
            <div>Hi there!</div>
            <div>I'm Vladislav Nelipovich</div>
            <div>Frontend Developer</div>
          </div>
          <div>
            <div>Photo</div>
          </div>
        </div>
      </header>
      <div ref={skillsRef} className="box bg-blue-600 ">
        skills
      </div>
      <div ref={projectRef} className="box bg-green-800">
        projects
      </div>
      <div ref={contactsRef} className="box bg-purple-500">
        contacts
      </div>
      <footer ref={socialsRef} className="box bg-yellow-600">
        Socials
      </footer>
    </div>
  )
}
