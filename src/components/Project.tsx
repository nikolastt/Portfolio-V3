import React from "react";

// import { Container } from './styles';

import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

const Project: React.FC = () => {
  return (
    <div className="p-10 bg-primary-900 rounded-lg">
      <h1 className="text-white font-inter font-semibold text-xl">
        Event Geaan Leite
      </h1>

      <p className="mt-12 text-font-primary text-[18px] font-inter">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex
        pariatur culpa quibusdam eos nam repudiandae libero, dolorum eligendi
        aperiam quae, praesentium, voluptates nemo repellendus quas consectetur
        animi non odio?
      </p>

      <div className="flex gap-6 mt-6 text-font-primary">
        <BiLinkExternal size={35} className="cursor-pointer" />
        <FiGithub size={35} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Project;
