import Link from "../common/Link";
import ThemeButton from "./Themebutton";

const Header = () => {
  return (
    <header className="flex justify-between py-6 px-10">
      <div className="flex">
        <span className="text-4xl dark:text-gray-400">{"<"}</span>{" "}
        <span className=" text-4xl dark:text-white">Manirmp</span>
        <span className="text-4xl dark:text-gray-400 ">{"/>"}</span>{" "}
      </div>
      <ul className="flex">
        <Link prop="Skills" />
        <Link prop="Open Source" />
        <Link prop="Contact Me" />
        <li className="pt-4 pb-4 pr-5 pl-5 block cursor-pointer hover:bg-primary">
          <ThemeButton />
        </li>
      </ul>
    </header>
  );
};

export default Header;
