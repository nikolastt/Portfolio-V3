import React, { useState, useEffect } from "react";
import Head from "next/head";
import Main from "../components/Main";
import MenuNav from "../components/MenuNav";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { GetStaticProps } from "next";
import { collection, getDocs } from "firebase/firestore";

import { FiGithub, FiLinkedin } from "react-icons/fi";

import { db } from "../services/firebase";
import Link from "next/link";

import { motion } from "framer-motion";

export interface IProjects {
  title: string;
  description: string;
  image: string;
  link: string;
  gitLink: string;
}

interface IHome {
  arrayProjects: string;
}

import SVG from "../../public/images/NB.svg";
import Image from "next/image";
import SvgNb from "../components/SvgNb";
import ArrowScroll from "../components/ArrowScroll/ArrowScroll";

export default function Home({ arrayProjects }: IHome) {
  const projects = JSON.parse(arrayProjects);

  const [active, setActive] = useState(false);
  const [logoView, setlogoView] = useState(true);

  const [changeColor, setChangeColor] = useState(false);

  useEffect(() => {
    function positionScroll() {
      if (window.scrollY > 20) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    }

    window.addEventListener("scroll", positionScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 1000);

    setTimeout(() => {
      setlogoView(false);
    }, 4800);
  }, []);

  return (
    <>
      {logoView ? (
        <div className=" z-50 w-screen h-screen absolute top-0 bg-primary-900 ">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <SvgNb isActive={active} />
          </div>
        </div>
      ) : (
        <div className="bg-primary-900 ">
          <MenuNav changeColor={changeColor} />

          <section id="home">
            <Main />

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 2.6,
                duration: 0.3,
              }}
              className="lg:hidden"
            >
              <ArrowScroll />
            </motion.div>
          </section>

          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects projects={projects} />
          </section>

          <section id="contact">
            <Contact />
          </section>

          <section>
            <Footer />
          </section>

          {/* Lateral bars */}
          {/* Right */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2.6,
              duration: 0.3,
            }}
            className="right-auto lg:left-[95px] w-[40px] fixed bottom-0 hidden md:block  "
          >
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 2.7,
                duration: 0.3,
              }}
              className="flex flex-col space-y-6 items-center relative boxCenter after:w-[1px] after:flex after:justify-center after:items-center after:h-24 after:bg-font-primary  after:mt-6"
            >
              <Link href="https://github.com/nikolastt" target="_blank">
                <FiGithub className="text-font-primary icon" size={20} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/nikolas-bitencourt/"
                target="_blank"
              >
                <FiLinkedin className="text-font-primary icon" size={20} />
              </Link>

              {/* <a className="flex items-center  mx-auto  w-[40px] leading-4 text-font-primary  writingVertical after:w-[1px] after:flex after:justify-center after:items-center after:h-24 after:bg-font-primary  after:mt-6">
          nikolasbitencourtt@gmail.com
        </a> */}
            </motion.div>
          </motion.div>

          {/* Left */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2.8,
              duration: 0.3,
            }}
            className="left-auto right-[20px] lg:right-[95px] w-[40px] fixed bottom-0  hidden md:block  "
          >
            <div className="flex flex-col items-center relative boxCenter cursor-pointer ">
              <Link
                href="#contact"
                className="flex items-center  mx-auto  w-[40px] leading-4 text-font-primary hover:text-primary-500 duration-300  writingVertical after:w-[1px] after:flex after:justify-center after:items-center after:h-24 after:bg-font-primary  after:mt-6"
              >
                nikolasbitencourtt@gmail.com
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects: IProjects[] = [];

  const response = await getDocs(collection(db, "projects"));
  response.forEach((project) => {
    projects.push(project.data() as IProjects);
  });

  const arrayProjects = JSON.stringify(projects);

  return {
    props: { arrayProjects },
    revalidate: 60 * 60,
  };
};
