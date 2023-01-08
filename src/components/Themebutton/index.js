import { useState } from "react";
import { Switch } from "@headlessui/react";
import light from "../../assets/SVG/2600.png";
import darkbutton from "../../assets/SVG/1f31c.png";
import { useContext } from "react";
import React from "react";
import { ThemeContext } from "../../context/ThemeContext";
export default function ThemeButton() {
  const [isDarks, setIsDarks] = useState(true);
  console.log(isDarks);
  const { theme, setTheme } = React.useContext(ThemeContext);
  // Check the Theme
  if (isDarks) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
  function isDark() {
    return theme === "dark";
  }
  return (
    <div className="">
      <Switch
        checked={isDarks}
        onChange={() => setIsDarks(!isDarks)}
        className={`${isDarks ? "bg-[#2096F3]" : "bg-[#CCCCCC]"}
          relative inline-block w-[50px] h-[26px] rounded-xl`}
      >
        <span
          aria-hidden="true"
          className={`${isDarks ? "translate-x-7" : "translate-x-0"}
            pointer-events-none z-10 flex items-center h-[26px] w-[28px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          {isDarks ? (
            <img src={darkbutton} alt="the dark button" />
          ) : (
            <img src={light} alt="the-light-img" />
          )}
        </span>
      </Switch>
    </div>
  );
}
