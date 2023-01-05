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
        <p className="text-font-secondary font-inter mt-12 md:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          voluptatem natus obcaecati nisi maiores veritatis provident!
          Laboriosam aperiam nesciunt hic. Ducimus alias placeat sunt nostrum,
          quas reprehenderit ut et voluptatum. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Vitae quidem vero asperiores quas
          similique aut amet ducimus, voluptatem, incidunt nostrum eos, magni
          reiciendis dolores culpa neque hic dolor corporis? Harum!
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
