import { useRef } from 'react'
import './styles/index.css'

import { Skills } from './components/Skills'
import MainSection from './components/MainSection'
import ProjectsSection from './components/ProjectsSection'
import FooterSection from './layout/FooterSection'
import Contacts from './components/Contacts'

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
    <div translate="no" className="min-h-screen w-screen flex flex-col">
      <section className="main-section" ref={mainRef}>
        <MainSection scrollRefs={scrollRefs} />
      </section>
      <section ref={skillsRef} className="box overflow-hidden">
        <Skills />
      </section>
      <section ref={projectRef} className="projects-section-main">
        <ProjectsSection />
      </section>
      <section ref={contactsRef} className="box items-center justify-center">
        <Contacts />
      </section>
      <section ref={socialsRef}>
        <FooterSection />
      </section>
    </div>
  )
}
