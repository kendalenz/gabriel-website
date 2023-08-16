import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row justify-between bg-black text-white w-screen px-5 xl:px-12">
      <div className="py-6 flex md:w-full items-center justify-between">
        <Link className="text-3xl font-thin font-heading" to='/'>          
          Gabriel Zapata
        </Link>
        {/* Responsive navbar (hamburger menu) */}
        <div className="md:hidden flex items-center">
          <button
            className="navbar-burger self-center"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Nav Links - Hidden by default on small screens */}
      <ul className={`hidden md:flex md:px-4 md:mx-auto font-thin font-heading space-x-12 ${isMenuOpen ? 'md:w-auto md:justify-center' : 'w-screen md:justify-between'} items-center`}>
        <li><Link className="hover:text-gray-200" to='/'>About</Link></li>
        <li><Link className="hover:text-gray-200" to='/mathematics'>Mathematics</Link></li>
        <li><Link className="hover:text-gray-200" to='/art'>Art</Link></li>
        <li><Link className="hover:text-gray-200" to='/contact'>Contact</Link></li>
      </ul>
      {/* Responsive navbar (hamburger menu) - Hidden by default on larger screens */}
      <ul className={`md:hidden absolute top-0 right-0 mt-16 w-screen bg-gray-900 text-white font-semibold font-heading space-y-2 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <li><Link className="block px-4 py-2 hover:text-gray-200" to='/'>About</Link></li>
        <li><Link className="hover:text-gray-200 ml-4" to='/mathematics'>Mathematics</Link></li>
        <li><Link className="hover:text-gray-200 ml-4" to='/art'>Art</Link></li>
        <li><Link className="hover:text-gray-200 ml-4" to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
