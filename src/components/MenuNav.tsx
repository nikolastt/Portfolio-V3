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
      <div className="bg-primary-900 h-20 flex items-center px-6">
        <div className="bg-primary-500 w-10 h-10 rounded-full"></div>
        <BiMenuAltRight
          size={40}
          className="text-primary-500 ml-auto cursor-pointer "
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
