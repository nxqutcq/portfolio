import React, { useEffect, useState, useMemo } from 'react'
import { ScrollRefs } from '../types/types'

const Navbar: React.FC<{ scrollRefs: ScrollRefs }> = ({ scrollRefs }) => {
  const [activeSection, setActiveSection] = useState<string>('Main')

  const navLinks = useMemo(
    () => [
      { label: 'Main', ref: scrollRefs.mainRef },
      { label: 'Skills', ref: scrollRefs.skillsRef },
      { label: 'Projects', ref: scrollRefs.projectRef },
      { label: 'Contacts', ref: scrollRefs.contactsRef },
    ],
    [scrollRefs]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleSection = navLinks.find(
              (link) => link.ref.current === entry.target
            )
            if (visibleSection) {
              setActiveSection(visibleSection.label)
            }
          }
        })
      },
      {
        root: null,
        threshold: 0.6,
      }
    )

    navLinks.forEach((link) => {
      if (link.ref.current) {
        observer.observe(link.ref.current)
      }
    })

    return () => {
      navLinks.forEach((link) => {
        if (link.ref.current) {
          observer.unobserve(link.ref.current)
        }
      })
    }
  }, [navLinks])

  return (
    <nav className="flex h-full items-center">
      {navLinks.map((link) => (
        <a
          key={link.label}
          onClick={() =>
            link.ref.current?.scrollIntoView()
          }
          className={`text-sm py-3.5 mx-0.5 px-3 cursor-pointer hover:bg-white/10 rounded-md ${
            activeSection === link.label ? 'bg-white/20 nav-links' : ''
          }`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default Navbar
