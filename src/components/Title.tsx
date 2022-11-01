import React from "react";

interface ITitle {
  title: string;
  number: string;
}

const Title: React.FC<ITitle> = ({ title, number }) => {
  return (
    <h1
      className="font-robotoMono text-font-primary whitespace-nowrap  flex items-end   after:block after:h-[2px] after:rounded-full after:bg-[#233554] after:w-full after:ml-3 after:m-3

"
    >
      <span className="text-primary-500  ">{number}.</span>{" "}
      <span className="text-xl font-bold ">{title}</span>
    </h1>
  );
};

export default Title;
