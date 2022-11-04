import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

import Geaan from "../../public/images/geaan.png";

const Project: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      transition={{
        ease: "circOut",
        duration: 1,
      }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 0.6, once: true }}
      className="p-10 bg-primary-900 rounded-lg  z-10 relative  overflow-hidden shadow-md hover:shadow-xl duration-300"
    >
      <Image
        src={Geaan}
        alt="Foto "
        className=" object-cover  z-10 rounded-lg overflow-hidden scale-[97%]"
        fill
      />
      <div className="absolute bg-blur/[96%] w-full h-full top-0 left-0 z-20"></div>

      <div className="z-30 relative">
        <h1 className="text-white font-inter font-semibold text-xl ">
          Event Geaan Leite
        </h1>

        <p className="mt-12 text-font-primary text-[18px] font-inter">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex
          pariatur culpa quibusdam eos nam repudiandae libero, dolorum eligendi
          aperiam quae, praesentium, voluptates nemo repellendus quas
          consectetur animi non odio?
        </p>

        <div className="flex gap-6 mt-6 text-white">
          <BiLinkExternal size={30} className="cursor-pointer" />
          <FiGithub size={30} className="cursor-pointer" />
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
