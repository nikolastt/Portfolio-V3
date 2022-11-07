import React, { useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import { motion } from "framer-motion";

const MenuNav: React.FC = () => {
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
      <div className="bg-primary-900 h-20 flex items-center px-6 md:px-24 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.3,
          }}
          className="bg-primary-500 w-10 h-10 rounded-full"
        ></motion.div>

        <ul className="ml-auto  text-font-primary font-robotoMono space-x-6 items-center hidden md:flex">
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
            className="cursor-pointer hover:scale-105 ease-in duration-75 hover:text-primary-500"
          >
            <span className="text-primary-500 ">01.</span>About
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
            className="cursor-pointer hover:scale-105 ease-in duration-75 hover:text-primary-500"
          >
            <span className="text-primary-500 ">02.</span>Experience
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
            className="cursor-pointer hover:scale-105 ease-in duration-75 hover:text-primary-500"
          >
            <span className="text-primary-500 ">03.</span>Work
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
            className="cursor-pointer hover:scale-105 ease-in duration-75 hover:text-primary-500"
          >
            <span className="text-primary-500 ">04.</span>Contact
          </motion.li>

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
            className="border-2 border-primary-500 px-3 py-2 rounded-md text-primary-500 hover:scale-105 duration-300"
          >
            Resume
          </motion.button>
        </ul>

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
        className="fixed right-0 top-0 bottom-0 bg-menu-bg h-screen w-[250px] z-20 "
      >
        <div className="h-20 flex items-center px-6 ">
          <AiOutlineClose
            size={40}
            className="text-primary-500 ml-auto cursor-pointer"
            onClick={handleMenu}
          />
        </div>
      </motion.div>

      {menuIsOpen && (
        <motion.div
          animate={menuIsOpen ? "open" : "closed"}
          variants={variants2}
          className="w-full bg-black/90 fixed left-0  bottom-0 h-[calc(100vh-80px)] "
        ></motion.div>
      )}
    </>
  );
};

export default MenuNav;
