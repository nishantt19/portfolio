import { PROJECTS } from "@/constants";
import Image from "next/image";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="bg-black" id="projects">
      <div className="body-padding-x body-padding-y">
        <div className="flex flex-col gap-y-5">
          <h1 className="flex items-center justify-center py-5 h1-heading gap-x-4 text-white">
            <span className="font-medium">My</span>
            <span className="font-black">Projects</span>
          </h1>
          <div className="flex flex-col gap-y-5">
            {PROJECTS.map((project, index) => (
              <React.Fragment key={index}>
                <ProjectCard
                  link={project.link}
                  image={project.image}
                  description={project.description}
                  index={index}
                  project_name={project.name}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
