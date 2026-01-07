import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";


const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);
  return (
    <div className="px-4 py-1.5 m-0 border-0 bg-obsidian text-xl font-heading text-gold leading-loose h-12.5 font-bold hover:text-gold flex items-center cursor-pointer" style={{zIndex: 1000}} onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 className="w-8 h-8" />
    </div>
  );
};

export default Themetoggle;
