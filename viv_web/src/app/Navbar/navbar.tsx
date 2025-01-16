"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1a202c] text-white z-50 w-full">
      <div className="flex justify-between items-center py-4 sm:py-6 px-4 sm:px-8 lg:px-12">
        <div className="text-xl font-bold hover:text-blue-600 active:text-blue-600">
          <Link href="#about">
            <h1 className="text-xl font-bold">VN</h1>
          </Link>
        </div>

        <button
          className="lg:hidden p-2 hover:blue-800 z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <ul className="hidden lg:flex justify-between space-x-12 text-xl xl:text-2xl pr-4 xl:pr-20">
          <li className="hover:text-blue-600 active:text-blue-600">
            <Link href="#aboutme">About</Link>
          </li>
          <li className="hover:text-blue-600 active:text-blue-600">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="hover:text-blue-600 active:text-blue-600">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="hover:text-blue-600 active:text-blue-600">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-blue-600 bg-opacity-95 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-center h-full">
          <ul className="flex flex-col items-center space-y-8 text-2xl">
            <li className="transform hover:scale-110 transition-transform hover:text-yellow-300 active:text-yellow-300">
              <Link href="#about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="transform hover:scale-110 transition-transform hover:text-yellow-300 active:text-yellow-300">
              <Link href="#skills" onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li className="transform hover:scale-110 transition-transform hover:text-yellow-300 active:text-yellow-300">
              <Link href="#projects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li className="transform hover:scale-110 transition-transform hover:text-yellow-300 active:text-yellow-300">
              <Link href="#contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;