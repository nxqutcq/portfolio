import { useRef } from 'react'
import './styles/index.css'

import { Skills } from './components/Skills'
import MainSection from './components/MainSection'
import ProjectsSection from './components/ProjectsSection'
import Contacts from './components/Contacts'
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
    <div translate="no">
      <Header scrollRefs={scrollRefs} />
      <MainSection mainRef={mainRef} />
      <Skills skillsRef={skillsRef} />
      <ProjectsSection projectRef={projectRef} />
      <Contacts contactsRef={contactsRef} />
    </div>
  )
}
