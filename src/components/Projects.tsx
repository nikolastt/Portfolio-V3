import React from "react";
import Title from "./Title";

import { motion } from "framer-motion";
import Project from "./Project";

const Projects: React.FC = () => {
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
        once: true,
        amount: 0.4,
      }}
      className="px-6 mt-24"
    >
      <Title number="02" title="Some Things I've Built" />

      <Project />

      <h1>Projects</h1>
    </motion.div>
  );
};

export default Projects;
