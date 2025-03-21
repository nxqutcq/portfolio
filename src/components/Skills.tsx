import { RefObject } from 'react'
import { skills } from '../data/skillsData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export const Skills: React.FC<{ skillsRef: RefObject<HTMLDivElement> }> = ({
  skillsRef,
}) => {
  useScrollAnimation('.skill-container')

  return (
    <section ref={skillsRef} className="box overflow-hidden">
      <div className="flex w-full items-center justify-center max-w-[1140px]">
        <div className="skills-animation flex items-center gap-x-1 gap-y-3 flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="skill-container">
              <div className="skill-icon">{skill.icon}</div>
              <span className="mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
