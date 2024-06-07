import ThemeToggle from "./ThemeToggle";
import logo from "../assets/images/logo/Group.png"

const Navbar = () => {
  const navLinks = 
  <>
    <li><a className="text-[#FF5555]">Home</a></li>
    <li><a>About Us</a></li>
    <li><a>Pricing</a></li>
    <li><a>Features</a></li>
  </>

  return (
    <nav>
      <div className="flex justify-between p-2 md:p-4 mb-3">
        {/* start */}
        <div className="flex items-center md:gap-2">
          {/* for sm/md */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} 
            className="menu menu-sm dropdown-content mt-3 z-[1] 
            shadow bg-base-100 rounded-box w-40 font-bold text-xl">
              {navLinks}
            </ul>
          </div>
          {/* logo */}
          <div>
            <img src={logo} alt="" />
          </div>
          {/* for lg */}
          <div className="hidden lg:flex ml-2">
            <ul className="menu menu-horizontal px-1 font-bold text-xl">
              {navLinks}
            </ul>
          </div>
        </div>
        
        {/* end */}
        <div className="space-x-2 flex items-center">
          <button className="btn btn-active btn-neutral">DownLoad</button>
          {/* toggle button */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;