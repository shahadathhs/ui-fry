import { GiMoon } from "react-icons/gi";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import { GoSun } from "react-icons/go";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <label className="swap swap-rotate">
        <input onClick={toggleTheme} type="checkbox" className="theme-controller"  />
        {
          theme === 'light' 
          ?
          <GoSun className="text-3xl m-2" />
          :
          <GiMoon className="text-3xl m-2"  />
        }
      </label>
    </div>
  );
};

export default ThemeToggle;