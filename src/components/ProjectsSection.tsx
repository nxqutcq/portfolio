const ProjectsSection = () => (
  <>
    <a
      href="https://free2play-games.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="project-container xs:mt-20 md:mt-0 md:max-w-[300px]"
    >
      <div className="project-picture">
        <img
          src="/src/assets/photos/2HvZEbLds4g.webp"
          alt="my-project-preview"
          loading="lazy"
        />
      </div>
      <div className="w-full">
        <h3 className="my-2 text-lg">FreeToGame</h3>
        <span className="text-sm">
          Track what you've played and search for what to play next!
        </span>
        <div className="flex flex-wrap gap-2 mt-3 text-sm">
          <div className="p-1 px-2 border rounded-lg">React</div>
          <div className="p-1 px-2 border rounded-lg">TS</div>
          <div className="p-1 px-2 border rounded-lg">TanStack Query</div>
          <div className="p-1 px-2 border rounded-lg">Firebase</div>
        </div>
      </div>
    </a>
    <a
      href="https://news-tracker-vladnel.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="project-container xs:mb-20 md:mt-0 md:max-w-[300px]"
    >
      <div className="project-picture">
        <img
          src="/src/assets/photos/ElYZKfLiuhM.webp"
          alt="my-project-preview"
          loading="lazy"
        />
      </div>
      <div className="w-full">
        <h3 className="my-2 text-lg">News Tracker</h3>
        <span className="text-sm">Stay informed with the latest news</span>
        <div className="flex flex-wrap gap-2 mt-3 text-sm">
          <div className="p-1 px-2 border rounded-lg">React</div>
          <div className="p-1 px-2 border rounded-lg">TS</div>
          <div className="p-1 px-2 border rounded-lg">RTK</div>
          <div className="p-1 px-2 border rounded-lg">RTK Query</div>
        </div>
      </div>
    </a>
  </>
)

export default ProjectsSection
