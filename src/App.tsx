import { useRef } from 'react'
import './styles/index.css'

import { Skills } from './components/Skills'
import MainSection from './components/MainSection'
import ProjectsSection from './components/ProjectsSection'
import FooterSection from './layout/FooterSection'

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
    <div translate="no" className="min-h-screen w-screen  flex flex-col">
      <section
        className="box main-image xs:text-sm xs1:text-base bg-black/60 items-center w-screen flex flex-col"
        ref={mainRef}
      >
        <MainSection scrollRefs={scrollRefs} />
      </section>
      <section ref={skillsRef} className="box overflow-hidden">
        <Skills />
      </section>
      <section
        ref={projectRef}
        className="box xs:flex-col px-3 overflow-hidden md:flex-row second-image items-center flex md:gap-5 xs:gap-1 justify-center bg-black/60"
      >
        <ProjectsSection />
      </section>
      <section ref={contactsRef} className="box items-center justify-center">
        <a
          className="p-5 border rounded-md"
          href="mailto:vnelipovich63@gmail.com"
        >
          Say hello
        </a>
      </section>
      <section ref={socialsRef}>
        <FooterSection />
      </section>
    </div>
  )
}
