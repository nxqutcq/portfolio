import { skills } from "../data/skillsData";

export const Skills = () => (
  <div className="flex w-full items-center mt-5 h-full justify-center">
    <div className="flex items-center gap-x-1 gap-y-3 flex-wrap justify-center container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-container">
          <div className="skill-icon">{skill.icon}</div>
          <span className="mt-2">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
)
