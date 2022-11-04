import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { motion } from "framer-motion";

// import { Container } from './styles';

const Main: React.FC = () => {
  const [text, count] = useTypewriter({
    words: ["React JS", "Next Js", "Javascript", "Tailwind Css"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <main className=" h-[calc(100vh-5rem)] px-6 flex flex-col justify-center">
      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        transition={{
          delay: 0.5,
          duration: 0.3,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="font-robotoMono text-primary-500 "
      >
        Olá, meu nome é
      </motion.h2>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        transition={{
          delay: 0.6,
          duration: 0.3,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="text-font-primary text-[40px] font-lateef font-bold leading-none mt-3"
      >
        Nikolas Bitencourt.
      </motion.h1>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        transition={{
          delay: 0.7,
          duration: 0.3,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="text-font-secondary text-[40px] font-lateef  leading-none"
      >
        Desenvolvedor front-end.
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        transition={{
          delay: 0.8,
          duration: 0.3,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="text-font-secondary mt-6  font-inter"
      >
        Sou um engenheiro de software especializado em construir aplicativos
        digitais. Atualmente estou focado em tecnologias atuais como{" "}
        <span className="text-primary-300">{text}</span>
        <Cursor cursorColor="#2AFA93" />
      </motion.p>

      <div>
        <motion.button
          initial={{
            opacity: 0,
            y: 20,
          }}
          transition={{
            delay: 0.9,
            duration: 0.3,
          }}
          animate={{
            opacity: 0.9,
            y: 0,
          }}
          className="border px-6 py-2 w-1/3 rounded-sm mt-12 text-primary-500 font-robotoMono border-primary-500 cursor-pointer hover:scale-105 duration-300"
        >
          Projetos
        </motion.button>
      </div>
    </main>
  );
};

export default Main;
