import style from './Skill.module.css'
import React from "react";

type SkillPropsType = {
    title: string
    description: string
    img: string
}

export const Skill: React.FC<SkillPropsType> = ({title, description, img}) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}><img className={style.iconImg} src={img} alt="skill_icon"/></div>
            <h3>{title}</h3>
            <span className={style.description}>{description}</span>
        </div>
    )
}