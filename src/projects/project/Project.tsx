import style from "../project/Project.module.css"
import React from "react";

type ProjectPropsType = {
    title: string
    description: string
    img: string
}

export const Project: React.FC<ProjectPropsType> = ({title, description, img}) => {
    return (
        <div className={style.projectContainer}>
            <div className={style.imgContainer}>
                <img src={img} alt="project_photo"/>
            </div>
            <div className={style.titleDescriptionBlock}>
                <span>{title}</span>
                <span>{description}</span>
            </div>

        </div>
    )
}