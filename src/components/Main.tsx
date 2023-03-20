import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { motion } from "framer-motion";
import Link from "next/link";

// import { Container } from './styles';

const Main: React.FC = () => {
  const [text, count] = useTypewriter({
    words: ["React JS", "Next Js", "Javascript", "Tailwind Css"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <main className=" h-[calc(100vh-5rem)]  flex flex-col justify-center md:max-w-7xl mx-auto container">
      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        transition={{
          delay: 1.3,
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
          delay: 1.5,
          duration: 0.3,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="text-font-primary text-[40px] font-lateef font-bold leading-none mt-3 md:text-8xl"
      >
        Nikolas Bitencourt
      </motion.h1>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        transition={{
          delay: 1.7,
          duration: 0.3,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="text-font-secondary text-[40px] font-lateef  leading-none md:text-8xl"
      >
        Desenvolvedor front-end
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        transition={{
          delay: 1.9,
          duration: 0.3,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="text-font-secondary mt-6  font-inter md:text-xl md:w-2/3"
      >
        Construo aplicativos digitais, focado na resolução de problemas
        utilizando principais tecnologias do mercado como{" "}
        <span className="text-primary-300">{text}</span>
        <Cursor cursorColor="#2AFA93" />
        {/* Sou um engenheiro de software especializado em construir aplicativos
        digitais. Atualmente estou focado em tecnologias atuais como{" "}
        <span className="text-primary-300">{text}</span>
        <Cursor cursorColor="#2AFA93" /> */}
      </motion.p>

      <Link href="#projects">
        <motion.button
          initial={{
            opacity: 0,
            y: 20,
          }}
          transition={{
            delay: 2.0,
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
      </Link>
    </main>
  );
};

export default Main;
