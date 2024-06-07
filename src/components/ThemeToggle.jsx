import { GiMoon } from "react-icons/gi";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import { GoSun } from "react-icons/go";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="btn btn-error">
      <label className="swap swap-rotate">
        <input onClick={toggleTheme} type="checkbox" className="theme-controller"  />
        {
          theme === 'light' 
          ?
          <div className="text-lg"><GoSun /></div>
          :
          <div className="text-lg"><GiMoon /></div>
        }
      </label>
    </div>
  );
};

export default ThemeToggle;