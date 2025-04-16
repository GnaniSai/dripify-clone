import logo from "./assets/logo.svg";
import down from "./assets/down.svg";
import menu from "./assets/menu.svg";
function Navbar() {
  return (
    <div className="w-[85%] flex justify-center items-center p-4 max-xl:w-full max-sm:w-full text-white">
      <div className="w-full flex justify-between items-center">
        <ul className="flex gap-7 items-center">
          <li>
            <img src={logo} alt="" className="w-30" />
          </li>
          <li className="flex items-center gap-1 max-lg:hidden">
            <span>Software</span> <img src={down} alt="down" className="w-5" />
          </li>
          <li className="flex items-center gap-1 max-lg:hidden">
            <span>Resources</span> <img src={down} alt="down" className="w-5" />
          </li>
          <li className="max-lg:hidden">
            <span>Pricing</span>
          </li>
          <li className="max-lg:hidden">
            <span>Partners</span>
          </li>
        </ul>
        <ul className="flex gap-7 items-center">
          <li className="max-lg:hidden">Book Demo</li>
          <li className="max-lg:hidden">Login</li>
          <li className="bg-white text-black pt-3 pb-3 pl-7 pr-7 font-bold rounded-lg max-lg:hidden">
            Start for free
          </li>
          <li>
            <img src={menu} alt="menu" className="hidden max-lg:flex" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
