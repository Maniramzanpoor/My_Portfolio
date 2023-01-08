import img from "../../assets/SVG/image.svg";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiReact, SiSvelte } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
const WhatIDO = () => {
  return (
    <section className="flex justify-center  flex-col md:flex-row dark:bg-[#171C28] dark:text-white">
      <div>
        <img src={img} alt="programmer" className="w-160 h-160" />
      </div>
      <div className="flex flex-col mt-36 ml-10">
        <h1 className="text-6xl">What I do</h1>
        <h2 className="my-3">
          CRAZY Frot-end DEVELOPER WHO WANTS TO EXPLORE
          <br /> EVERY TECH STACK
        </h2>
        <div className=" flex">
          <div className="mx-2 flex flex-col justify-center items-center text-gray-400 hover:text-primary dark:hover:text-[#635AEB]">
            <AiFillHtml5 className="w-12 h-12" />
            <span className="text-sm">html-5</span>
          </div>
          <div className="mx-1 flex flex-col justify-center items-center text-gray-400 hover:text-primary dark:hover:text-[#635AEB]">
            <DiCss3 className="w-12 h-12" />
            <span className="text-sm">css3</span>
          </div>
          <div className="mx-1 flex flex-col justify-center items-center text-gray-400 hover:text-primary dark:hover:text-[#635AEB]">
            <SiJavascript className="w-12 h-12" />
            <span className="text-sm">Javascript</span>
          </div>
          <div className="mx-1 flex flex-col justify-center items-center text-gray-400 hover:text-primary dark:hover:text-[#635AEB]">
            <SiReact className="w-12 h-12" />
            <span className="text-sm">ReactJs</span>
          </div>
          <div className="mx-1 flex flex-col justify-center items-center text-gray-400 hover:text-primary dark:hover:text-[#635AEB]">
            <SiSvelte className="w-12 h-12" />
            <span className="text-sm">SvelteJs</span>
          </div>
          <div className="mx-1 flex flex-col justify-center items-center text-gray-400 hover:text-primary dark:hover:text-[#635AEB]">
            <FaDatabase className="w-12 h-12" />
            <span className="text-sm">sql-database</span>
          </div>
        </div>
        <h1 className="mt-5">
          <span className="text-3xl">⚡</span>
          Develop highly interactive Front end / User Interfaces for your
          <br /> web applications
        </h1>
      </div>
    </section>
  );
};

export default WhatIDO;
