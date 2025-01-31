import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { ImageComponent } from './ImageComponent'
import { projects } from '../data/projectsData'

const ProjectsSection = () => (
  <Swiper
    spaceBetween={20}
    slidesPerView={1}
    loop={true}
    breakpoints={{
      640: { slidesPerView: 1.5 },
      768: { slidesPerView: 2 },
    }}
    pagination={{ clickable: true }}
    modules={[Pagination]}
    className='max-w-[1140px] w-full'
  >
    {projects.map((project, index) => (
      <SwiperSlide key={index}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block project-container border border-dotted border-zinc-800 max-w-[300px] mx-auto"
        >
          <div className="project-picture">
            <ImageComponent
              src={project.image}
              alt={project.title}
              loading="lazy"
            />
          </div>
          <div className="w-full p-2">
            <h3 className="my-2 text-lg">{project.title}</h3>
            <span className="text-sm">{project.description}</span>
            <div className="flex flex-wrap gap-2 mt-3 text-sm">
              {project.technologies.map((tech, i) => (
                <div key={i} className="p-1 px-2 border rounded-lg">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </a>
      </SwiperSlide>
    ))}
  </Swiper>
)

export default ProjectsSection
