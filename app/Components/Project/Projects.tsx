import ProjectCard from "./ProjectCard";
import { projectsData } from "../../assets/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="mt-24">
      <h2 className="text-lg font-bold tracking-widest uppercase text-black mb-10">
        Projects
      </h2>

      <div className="flex flex-col gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;