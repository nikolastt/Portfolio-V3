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
      className=" px-6 pb-12"
    >
      <Title title="About Me" number="01" />

      <p className="text-font-secondary font-inter mt-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        voluptatem natus obcaecati nisi maiores veritatis provident! Laboriosam
        aperiam nesciunt hic. Ducimus alias placeat sunt nostrum, quas
        reprehenderit ut et voluptatum. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Vitae quidem vero asperiores quas similique aut amet
        ducimus, voluptatem, incidunt nostrum eos, magni reiciendis dolores
        culpa neque hic dolor corporis? Harum!
      </p>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        transition={{
          ease: "circOut",
          duration: 1,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.8, once: true }}
        className="relative"
      >
        <div className="rounded-md overflow-hidden w-52 h-52 mx-auto mt-12 ">
          {/* Div Border */}
          <div className="border-2 border-primary-500 w-52 h-52 absolute right-24 top-6 rounded-md " />

          <Image
            src={MyImage}
            className="w-60 h-60  object-cover scale-150 -translate-x-5"
            alt="Minha foto"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
