import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";


export const Skills = () => {
    const skills = [
        {
            title: "React",
            description: "Lorem ipsum dolor sit amet. Et asperiores dignissimos aut dolores ducimus ut consequatur doloribus."
        },
        {
            title: "БЭМ",
            description: "Ut laudantium enim et nihil rerum a autem deleniti sit reprehenderit eaque id consequatur."
        },
        {
            title: "CSS++",
            description: "Vel consectetur ipsa est tenetur aliquid ad numquam ipsam et voluptas sapiente."
        }
    ]
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    {
                        skills.map((skill) => (
                            <Skill title={skill.title} description={skill.description}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}