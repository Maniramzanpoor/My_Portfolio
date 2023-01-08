import manOnTable from "../assets/SVG/manOnTable.svg";
import { BsStackOverflow } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import MainBtn from "./mainBtn";
const LandingSection = () => {
  return (
    <section className="font-Montserrat flex flex-col justify-center md:flex-row md:justify-between items-center md:px-32">
      <div className="md:w-144 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-black mt-4 dark:text-white">
          Hi all, I'm <span className="text-primary dark:text-white">Mani</span>
          <span> 👋 </span>
        </h1>
        <p className="block mt-5 font-thin text-xl md:text-3xl text-gray-400">
          A Junior Front-end Developer
          <br />
          🚀 having an experience of building Web applications with JavaScript /
          Reactjs and some other cool libraries and frameworks.
        </p>
        <div className="flex mt-10 justify-center md:justify-start">
          <VscGithub className="mx-1 text-3xl rounded-full bg-[#333333] text-white p-2 w-10 h-10" />
          <FaLinkedinIn className="mx-1 text-3xl rounded-full w-10 h-10 bg-[#0D76A8] text-white p-2" />
          <CiMail className="mx-1 text-3xl rounded-full w-10 h-10 bg-[#EA4335] text-white p-2" />
          <FaTelegramPlane className="mx-1 text-3xl rounded-full w-10 h-10 bg-[#3C5997] text-white p-2" />
          <BsStackOverflow className="mx-1 text-3xl rounded-full w-10 h-10 bg-[#F48023] text-white p-2" />
        </div>
        <div className="flex mt-10 justify-center md:justify-start">
          <MainBtn prop="CONTACT ME" />
          <MainBtn prop="SEE MY RESUME" />
        </div>
      </div>
      <div>
        <img src={manOnTable} alt="" className="w-144 h-144" />
      </div>
    </section>
  );
};

export default LandingSection;
