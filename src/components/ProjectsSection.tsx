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
    loop={projects.length > 4}
    breakpoints={{
      640: {
        slidesPerView: 1.5,
        loop: projects.length >= 3,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 2,
        loop: projects.length >= 4,
        centeredSlides: projects.length === 2,
      },
      1024: {
        slidesPerView: 3,
        loop: projects.length >= 5,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3,
        loop: projects.length >= 6,
        spaceBetween: 40,
      },
    }}
    pagination={{ clickable: true }}
    modules={[Pagination]}
    className="max-w-[1140px] w-full px-4"
  >
    {projects.map((project) => (
      <SwiperSlide key={project.title} className="!flex justify-center">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block project-container w-full max-w-[350px] min-h-[300px]"
        >
          <div className="project-picture min-h-[150px] flex-grow">
            <ImageComponent src={project.image} loading="lazy" />
          </div>
          <div className="w-full p-2">
            <h3 className="my-2 text-lg">{project.title}</h3>
            <span className="text-sm">{project.description}</span>
            <div className="flex flex-wrap gap-2 mt-3 text-sm">
              {project.technologies.map((tech, i) => (
                <div key={i} className="p-1 px-2 tech rounded-lg">
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
