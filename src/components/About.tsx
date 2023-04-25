import React from "react";
import Title from "./Title";

import { motion } from "framer-motion";
import Image from "next/image";

import MyImage from "../../public/images/MyImage.jpg";

const About: React.FC = () => {
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
      className="  pb-12 pt-24  lg:mt-48 h-[calc(100vh-5rem)] container"
    >
      <Title title="About Me" number="01" />

      <div className="md:flex md:items-center">
        <p className="text-font-secondary font-inter mt-12 md:w-1/2 leading-relaxed">
          Sou um Desenvolvedor de Software apaixonado por{" "}
          <span className="text-primary-500">React.js</span> e{" "}
          <span className="text-primary-500">Next.js</span> , especializado em
          transformar ideias em Aplicações Web, de Alto desempenho e experiência
          do usuário. Com habilidades técnicas e uma mentalidade orientada a
          detalhes. Se você busca um profissional com paixão e dedicação, estou
          pronto para ajudá-lo(a) a transformar suas ideias em realidade!
        </p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          transition={{
            ease: "circOut",
            duration: 1,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.8, once: true }}
          className="relative md:w-1/2"
        >
          <div className="rounded-md overflow-hidden w-52 h-52 mx-auto mt-12 ">
            {/* Div Border */}
            <div className="border-2 border-primary-500 w-52 h-52 absolute right-24 top-6 rounded-md " />

            <Image
              src={MyImage}
              className="w-60 h-60  object-cover scale-150 -translate-x-5 grayscale"
              alt="Minha foto"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
