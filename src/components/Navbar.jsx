import { useState } from "react";
// import icons
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="w-full fixed top-0 left-0 right-0 border-b-2">
      <nav
        className={`py-4 md:px-8 px-4 max-w-screen-2xl mx-auto bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="font-bold text-2xl cursor-pointer text-black">
            <a href="/">Contacts Pro</a>
          </div>
          {/* for larger devices */}
          <div className="lg:flex items-center gap-3 hidden text-stone-700">
            <a href="/" className="block hover:text-violet-700 py-2 px-4">
              All Contacts
            </a>
            <a
              href="/add-contact"
              className="block hover:text-violet-700 py-2 px-4"
            >
              Add Contacts
            </a>
          </div>
          <div className="lg:block hidden">
            <button className="px-4 py-2 border border-violet-600 rounded-sm text-violet-600 hover:bg-violet-600 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
          {/* menu button for small devices */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-violet-500 text-3xl"
          >
            <HiMenu />
          </button>
        </div>

        {/* nav items for small devices */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-violet-500 text-white rounded transition-all duration-200">
            <a href="/" className="block hover:text-gray-400 py-2 px-4">
              All Contacts
            </a>
            <a
              href="/add-contact"
              className="block hover:text-gray-400 py-2 px-4"
            >
              Add Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
