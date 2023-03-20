import React from "react";
import Title from "./Title";

import { motion } from "framer-motion";
import Project from "./Project";
import { IProjects } from "../pages";

interface IProjectsComponent {
  projects: IProjects[];
}

const Projects: React.FC<IProjectsComponent> = ({ projects }) => {
  return (
    <motion.div
      initial={{
        y: 20,
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{
        once: false,
        amount: 0.1,
      }}
      className=" mt-24  container lg:mt-48"
    >
      <Title number="02" title="Some Things I've Built" />

      <div className="space-y-32 mt-12">
        {projects.map((project, i) => (
          <Project
            reverse={i % 2 === 0 ? false : true}
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            gitLink={project.gitLink}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
