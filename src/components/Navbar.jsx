import { useState } from "react";
import { FaHeart } from "react-icons/fa";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-xl font-bold text-black">
            MyNGO
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:text-xl">
            <a href="#" className="text-gray-700 ">
              Home
            </a>
            <a href="#" className="text-gray-700 ">
              About
            </a>
            <a href="#" className="text-gray-700 ">
              News
            </a>
            <a href="#" className="text-gray-700 ">
              Work With Us
            </a>

            {/* Donate Button */}
            <button 
              className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition flex gap-2"
            >
              Donate 
              <FaHeart className="mt-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none font-bold text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <a href="#" className="text-gray-700 " onClick={ () => setIsOpen(!isOpen)}>
              Home
            </a>
            <a href="#" className="text-gray-700 " onClick={ () => setIsOpen(!isOpen)}>
              About
            </a>
            <a href="#" className="text-gray-700 " onClick={ () => setIsOpen(!isOpen)}>
              News
            </a>
            <a href="#" className="text-gray-700 " onClick={ () => setIsOpen(!isOpen)}>
              Work With Us
            </a>

            <button 
              className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition flex gap-8 max-w-[160px]"
            >
              Donate 
              <FaHeart className="mt-1" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
