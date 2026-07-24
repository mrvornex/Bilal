"use client";

import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="pt-5 pb-10 font-mono">
        <nav className="flex items-center justify-between">

          <a
            href="/"
            className="font-mono text-black hover:text-gray-600 uppercase text-[16px] tracking-widest transition-colors"
          >
            Bilal (mrvornex)
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 font-mono text-[16px] text-gray-500">
            <a
              href="#work-experience"
              className="hover:text-black transition-colors"
            >
              Work Experience
            </a>

            <a
              href="#projects"
              className="hover:text-black transition-colors"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black cursor-pointer"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>

        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col px-6 py-10 font-mono">

          <button
            className="self-end mb-20 text-3xl"
            onClick={toggleMobileMenu}
          >
            ✕
          </button>

          <ul className="flex flex-col gap-10 text-3xl font-semibold text-center text-gray-500">

            <li>
              <a
                href="#work-experience"
                onClick={toggleMobileMenu}
                className="hover:text-black"
              >
                Work Experience
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={toggleMobileMenu}
                className="hover:text-black"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={toggleMobileMenu}
                className="hover:text-black"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}
    </>
  );
};

export default Header;