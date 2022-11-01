import React from "react";
import Title from "./Title";

// import { Container } from './styles';

const About: React.FC = () => {
  return (
    <div className="bg-primary-900 px-6 ">
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
    </div>
  );
};

export default About;
