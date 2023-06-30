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
                <img className={style.projectPicture} src={img} alt="project_photo"/>
                <a className={style.viewButton}>View</a>
            </div>
            <div className={style.titleDescriptionBlock}>
                <span className={style.title}>{title}</span>
                <span className={style.description}>{description}</span>
            </div>
        </div>
    )
}