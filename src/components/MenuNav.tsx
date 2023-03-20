import React, { useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import { motion } from "framer-motion";
import Image from "next/image";

import logo from "../../public/images/NBPng.png";
import Link from "next/link";

// import resume from "./resume.pdf";

interface IMenuNav {
  changeColor: boolean;
}

const MenuNav: React.FC<IMenuNav> = ({ changeColor }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 250 },
  };

  const variants2 = {
    open: { opacity: 1 },
  };

  return (
    <>
      <div
        className={`bg-primary-900 h-20 flex items-center px-6 md:px-24 sticky top-0 z-30 ${
          changeColor && "drop-shadow-lg "
        } `}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.3,
          }}
          className=" w-16 h-8  relative"
        >
          <Image src={logo} alt="Logo" fill />
        </motion.div>

        <motion.ul className="ml-auto  text-font-primary font-robotoMono space-x-6 items-center hidden md:flex">
          <motion.li
            initial={{
              opacity: 0,

              y: -30,
            }}
            transition={{
              delay: 0.2,
              duration: 0.3,

              ease: "easeIn",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="cursor-pointer hover:scale-105 ease-in duration-75 hover:text-primary-500"
          >
            <Link href="#home">
              <span className="text-primary-500 ">01.</span>Home
            </Link>
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              delay: 0.3,
              duration: 0.3,

              ease: "easeIn",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="cursor-pointer hover:scale-105 ease-in duration-75 hover:text-primary-500"
          >
            <Link href="#about">
              <span className="text-primary-500 ">02.</span>About
            </Link>
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              delay: 0.4,
              duration: 0.3,

              ease: "easeIn",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="cursor-pointer hover:scale-105 ease-in duration-75 hover:text-primary-500"
          >
            <Link href="#projects">
              <span className="text-primary-500 ">03.</span>Projects
            </Link>
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              delay: 0.5,
              duration: 0.3,

              ease: "easeIn",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="cursor-pointer hover:scale-105 ease-in duration-75 hover:text-primary-500"
          >
            <Link href="#contact">
              <span className="text-primary-500 ">04.</span>Contact
            </Link>
          </motion.li>

          <Link href="/resume.pdf" target="_blank">
            <motion.button
              initial={{
                opacity: 0,
                y: -30,
              }}
              transition={{
                delay: 0.5,
                duration: 0.3,

                ease: "easeIn",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="border-2 border-primary-500 px-3 py-2 rounded-md text-primary-500 hover:scale-105 duration-300"
            >
              Resume
            </motion.button>
          </Link>
        </motion.ul>

        <BiMenuAltRight
          size={40}
          className="text-primary-500 ml-auto cursor-pointer md:hidden "
          onClick={handleMenu}
        />
      </div>

      <motion.div
        initial={{
          x: 250,
          opacity: 0,
        }}
        animate={menuIsOpen ? "open" : "closed"}
        variants={variants}
        transition={{
          type: "just",
        }}
        className="fixed right-0 top-0 bottom-0 bg-menu-bg h-screen w-[250px] z-50 "
      >
        <div className="h-20 flex items-center px-6 ">
          <AiOutlineClose
            size={40}
            className="text-primary-500 ml-auto cursor-pointer"
            onClick={handleMenu}
          />
        </div>

        <ul className="text-white h-full flex flex-col items-center mt-44 space-y-9 text-lg tracking-wide">
          <Link href="#home">
            <li className="liSideBar " onClick={handleMenu}>
              <span className="text-primary-500 mr-2">01.</span>Home
            </li>
          </Link>
          <Link href="#about">
            <li className="liSideBar " onClick={handleMenu}>
              <span className="text-primary-500 mr-2">02.</span>About
            </li>
          </Link>
          <Link href="#projects">
            <li className="liSideBar " onClick={handleMenu}>
              <span className="text-primary-500 mr-2">03.</span>Projects
            </li>
          </Link>
          <Link href="#contact">
            <li className="liSideBar " onClick={handleMenu}>
              <span className="text-primary-500 mr-2">04.</span>Contact
            </li>
          </Link>
        </ul>
      </motion.div>

      {menuIsOpen && (
        <motion.div
          animate={menuIsOpen ? "open" : "closed"}
          variants={variants2}
          className="w-full bg-black/90 fixed left-0  bottom-0 top-0  z-40"
          onClick={handleMenu}
        ></motion.div>
      )}
    </>
  );
};

export default MenuNav;
