import { useRef } from 'react'
import './styles/index.css'

import { Skills } from './components/Skills'
import MainSection from './components/MainSection'
import ProjectsSection from './components/ProjectsSection'
import Contacts from './components/Contacts'
import FooterSection from './layout/FooterSection'
import Header from './layout/Header'

export const App = () => {
  const mainRef = useRef(null)
  const skillsRef = useRef(null)
  const projectRef = useRef(null)
  const contactsRef = useRef(null)

  const scrollRefs = {
    mainRef,
    skillsRef,
    projectRef,
    contactsRef,
  }

  return (
    <div translate="no" className="min-h-screen w-full flex flex-col">
      <Header scrollRefs={scrollRefs} />
      <div>
        <section className="main-section" ref={mainRef}>
          <MainSection />
        </section>
        <section ref={skillsRef} className="box overflow-hidden">
          <Skills />
        </section>
        <section ref={projectRef} className="projects-section-main">
          <ProjectsSection />
        </section>
        <section
          ref={contactsRef}
          className="box relative items-center justify-center"
        >
          <Contacts />
          <FooterSection />
        </section>
      </div>
    </div>
  )
}
