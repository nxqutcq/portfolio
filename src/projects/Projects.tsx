import style from './Projects.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";


export const Projects = () => {
    const projects = [
        {
            name: "Project1",
            description: "description 1",
            imageLink: "https://media.licdn.com/dms/image/C4E12AQG2pj4JkZG0Yw/article-cover_image-shrink_600_2000/0/1520115601955?e=2147483647&v=beta&t=15dJ3ErnJfshcaCF1pn0x_PZO4-UeIeYayT1JR_1HY8"
        },
        {
            name: "Project2",
            description: "description 2",
            imageLink: "https://thumbs.dreamstime.com/b/complejo-de-proyectos-como-un-rompecabezas-retratado-la-palabra-proyecto-en-piezas-para-mostrar-que-project-puede-ser-dif%C3%ADcil-y-164219955.jpg"
        },
        {
            name: "Project3",
            description: "description 3",
            imageLink: "https://kantata.marketing/wp-content/uploads/2023/01/project.jpg"
        },
        {
            name: "Project4",
            description: "description 4",
            imageLink: "https://www.projectaccelerator.co.uk/wp-content/uploads/2016/08/Project-Management.jpg"
        }
    ];


    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div><h2 className={style.title}>Projects</h2></div>
                <div className={style.projects}>
                    {projects.map((project) => (
                        <Project
                            key={project.name}
                            img={project.imageLink}
                            title={project.name}
                            description={project.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}