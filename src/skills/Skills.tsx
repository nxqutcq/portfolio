import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title="React"
                           description={"Lorem ipsum dolor sit amet. Et asperiores dignissimos aut dolores ducimus ut consequatur doloribus."}/>
                    <Skill title="БЭМ"
                           description={"Ut laudantium enim et nihil rerum a autem deleniti sit reprehenderit eaque id consequatur."}/>
                    <Skill title="CSS"
                           description={"Vel consectetur ipsa est tenetur aliquid ad numquam ipsam et voluptas sapiente."}/>
                </div>
            </div>
        </div>
    )
}