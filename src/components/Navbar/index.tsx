import * as React from "react";
import { Link } from "react-router-dom";

import Button from '../Button';

// Navbar Interface
interface INavbarProps {
  bgColor?: 'black' | 'cyan' ;
}

const BackgroudType = {
  black: 'bg-black',
  cyan: 'bg-cyan-800',
};

// Top Navigation Bar
const Navbar = (props:INavbarProps) => {
  // Decomple props
  const {bgColor = 'cyan'} = props
  return (
      <nav id="header" className={`fixed w-full z-30 top-0 text-white ${BackgroudType[bgColor]}`}>
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
              TODO APP
            </a>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <Link
                  to="/"
                  className="inline-block py-2 px-4 text-white font-bold no-underline"
                >
                  Home
                </Link>
              </li>
             
            </ul>
            <Link to="/login" state={{ fromDashboard: true }} >
            <Button
                buttonType="primaryOrange"
                className={`
                      w-full block
                      h-12
                  `}
                size="nav"
                type="button"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
  );
};

export default Navbar;