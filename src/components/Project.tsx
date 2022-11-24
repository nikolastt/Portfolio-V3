import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { truncate } from "./assets/truncate";

interface IProjectComponent {
  image: string;
  description: string;
  title: string;
  link: string;
  gitLink: string;
  reverse?: boolean;
}

const Project: React.FC<IProjectComponent> = ({
  image,
  title,
  description,
  link,
  gitLink,
  reverse,
}) => {
  return (
    <>
      {/* <div
        className={`flex relative items-center ${
          reverse && "flex-row-reverse"
        }`}
      >
        <div className="md:w-3/5 relative h-72 flex-shrink-0  z-10">
          <Image
            src={image}
            alt="Foto"
            className=" object-cover  z-10 rounded-lg overflow-hidden scale-[97%]"
            fill
          />
          <div className="absolute bg-blur/[96%] w-full h-full top-0 left-0 z-20"></div>
        </div>

        <div
          className={`md:w-2/3   h-56   z-30 text-right  absolute  right-0 flex flex-col justify-center ${
            reverse && "left-0 !text-left"
          }`}
        >
          <h1 className=" font-inter font-semibold text-2xl mb-6 text-font-primary">
            {title}
          </h1>

          <div className="bg-menu-bg p-6 ">
            <p className="text-font-secondary text-md">{description}</p>
          </div>

          <div className="mt-6">
            <ul
              className={`flex text-sm text-font-secondary font-semibold justify-end ${
                reverse && "justify-start"
              } space-x-6 font-robotoMono`}
            >
              <li>Next Js</li>
              <li>Tailwind Css</li>
              <li>Reac JS</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div> */}

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        transition={{
          ease: "circOut",
          duration: 1,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.6, once: true }}
        className={`p-10 md:p-0 bg-primary-900 rounded-lg h-auto z-10 relative   overflow-hidden shadow-md hover:shadow-xl md:hover:shadow-none duration-300 md:flex  md:items-center md:shadow-none md:overflow-visible   ${
          reverse && "md:flex-row-reverse"
        }`}
      >
        <div className="md:hidden">
          <Image
            src={image}
            alt="Foto"
            className=" object-cover z-10 rounded-lg overflow-hidden scale-[97%] grayscale"
            fill
          />
          <div className="absolute bg-blur/[95%] w-full h-full top-0 left-0 z-20 "></div>
        </div>
        <div className="hidden md:flex md:w-3/5 relative md:h-72 rounded-lg overflow-hidden lg:h-96 md:flex-shrink-0  md:z-10">
          <Image
            src={image}
            alt="Foto"
            className=" object-cover z-10 rounded-lg overflow-hidden scale-[97%] grayscale"
            fill
          />
          <div className="absolute bg-blur/[80%] w-full h-full top-0 left-0 z-20 "></div>
        </div>

        <div
          className={`z-30 relative md:w-2/3   h-full  md:text-right  md:absolute  md:right-0 md:flex md:flex-col md:justify-center ${
            reverse && "md:left-0 md:!text-left"
          }`}
        >
          <h2 className="text-primary-300 font-robotoMono text-sm mb-2">
            Projeto Destaque
          </h2>
          <h1 className="font-inter font-semibold text-xl md:text-2xl md:mb-3 text-font-primary">
            {title}
          </h1>

          <p className="mt-12  text-[18px] font-inter md:mt-0 md:bg-menu-bg md:p-6 text-font-secondary md:text-base shadow-xl rounded-lg">
            {truncate(description, 500)}
          </p>

          <div className="mt-6 hidden md:block">
            <ul
              className={`flex text-sm text-font-secondary font-semibold justify-end ${
                reverse && "!justify-start"
              } space-x-6 font-robotoMono`}
            >
              <li>Next Js</li>
              <li>Tailwind Css</li>
              <li>Reac JS</li>
              <li>Git</li>
            </ul>
          </div>

          <div
            className={`flex gap-6 mt-6 text-font-primary text-right justify-end ${
              reverse && "!justify-start"
            }`}
          >
            <Link href={gitLink} target="_blank">
              <FiGithub
                size={25}
                className="cursor-pointer hover:scale-105 duration-300 hover:text-primary-300"
              />
            </Link>
            <Link href={link} target="_blank">
              <BiLinkExternal
                size={25}
                className="cursor-pointer hover:scale-105 duration-300 hover:text-primary-300"
              />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* <motion.div
        initial={{ y: 50, opacity: 0 }}
        transition={{
          ease: "circOut",
          duration: 1,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.6, once: true }}
        className="p-10 bg-primary-900 rounded-lg  z-10 relative   overflow-hidden shadow-md hover:shadow-xl duration-300"
      >
        <div className="md:w-1/2 relative">
          <Image
            src={image}
            alt="Foto"
            className=" object-cover  z-10 rounded-lg overflow-hidden scale-[97%]"
            fill
          />
          <div className="absolute bg-blur/[96%] w-full h-full top-0 left-0 z-20"></div>
        </div>

        <div className="z-30 relative">
          <h1 className="text-white font-inter font-semibold text-xl ">
            {title}
          </h1>

          <p className="mt-12 text-font-primary text-[18px] font-inter">
            {description}
          </p>

          <div className="flex gap-6 mt-6 text-white">
            <Link href={link} target="_blank">
              <BiLinkExternal
                size={30}
                className="cursor-pointer hover:scale-105 duration-300"
              />
            </Link>
            <Link href={gitLink} target="_blank">
              <FiGithub
                size={30}
                className="cursor-pointer hover:scale-105 duration-300"
              />
            </Link>
          </div>
        </div>
      </motion.div> */}
    </>
  );
};

export default Project;
