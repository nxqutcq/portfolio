import style from './Projects.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {v1} from "uuid";


export const Projects = () => {
    const projects = [
        {
            id: v1(),
            name: "Project1",
            description: "Lorem ipsum dolor sit amet. Et asperiores dignissimos aut dolores ducimus ut consequatur doloribus.",
            imageLink: "https://media.licdn.com/dms/image/C4E12AQG2pj4JkZG0Yw/article-cover_image-shrink_600_2000/0/1520115601955?e=2147483647&v=beta&t=15dJ3ErnJfshcaCF1pn0x_PZO4-UeIeYayT1JR_1HY8"
        },
        {
            id: v1(),
            name: "Project2",
            description: "Ut laudantium enim et nihil rerum a autem deleniti sit reprehenderit eaque id consequatur.",
            imageLink: "https://thumbs.dreamstime.com/b/complejo-de-proyectos-como-un-rompecabezas-retratado-la-palabra-proyecto-en-piezas-para-mostrar-que-project-puede-ser-dif%C3%ADcil-y-164219955.jpg"
        },
        {
            id: v1(),
            name: "Project4",
            description: "Sit reprehenderit eaque id consequatur ut laudantium enim et nihil rerum a autem deleniti",
            imageLink: "https://www.projectaccelerator.co.uk/wp-content/uploads/2016/08/Project-Management.jpg"
        }
    ];


    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    {projects.map((project) => (
                        <Project
                            key={project.id}
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