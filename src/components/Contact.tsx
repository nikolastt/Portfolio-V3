import React from "react";
import Title from "./Title";

import { motion } from "framer-motion";

import { AiOutlineWhatsApp, AiFillMail } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:nikolasbitencourtt@gmail.com?subject=${formData.subject}&body=Olá, meu nome é ${formData.name}. ${formData.message} (${formData.email})`;
  };

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
      className="px-6 mt-24 h-screen flex flex-col justify-center md:px-24 lg:max-w-7xl lg:mx-auto"
    >
      <Title number="03" title="Contact-me" />

      <div className="space-y-6 text-font-primary mt-12">
        <h4 className="text-4xl font-semibold text-center font-lateef">
          <span className="decoration-primary-500 underline text-font-primary">
            Lets Talk
          </span>
        </h4>

        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <AiOutlineWhatsApp size={35} className="animate-pulse" />
            <p className="text-xl font-inter">+55 (31) 97307-4108</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <AiFillMail size={35} className="animate-pulse" />
            <p className="text-xl font-inter">nikolasbitencourtt@gmail.com</p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-full mx-auto pt-6 "
      >
        <div className="flex space-x-2 w-full">
          <input
            {...register("name")}
            placeholder="Name"
            className="w-1/2 contactInput"
            type="text"
          />{" "}
          <input
            {...register("email")}
            placeholder="E-mail"
            className="w-1/2 contactInput"
            type="text"
          />
        </div>

        <input
          {...register("subject")}
          type="text"
          placeholder="Subject"
          className="contactInput"
        />

        <textarea
          {...register("message")}
          placeholder="Mensagem"
          className="contactInput"
        ></textarea>
        <button
          type="submit"
          className="bg-primary-500 py-3 px-10 rounded-md text-text font-bold text-lg hover:scale-105 duration-300"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
