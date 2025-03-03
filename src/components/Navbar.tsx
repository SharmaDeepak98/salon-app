import { useState, useEffect, useCallback } from "react";
import { NavItem, navItems } from "../constants/index";
import logo from "../assets/images/Logo.png";
import Button from "./Button";
import BookModal from "./BookModal";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

const Navbar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const location = useLocation(); // Get current location

  const toggleMobileView = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (Math.abs(currentScrollY - lastScrollY) < 100) return;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    let timeoutId: number | null = null;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = window.setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 100);
    };
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const isActivePath = (path: string) => {
    // Check if the current location pathname matches the nav item path
    return location.pathname === path;
  };

  return (
    <div>
      <nav
        className={`fixed w-full top-0 z-50 backdrop-blur-lg border-b bg-cream border-neutral-700/80 transform transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto relative">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="h-8 sm:h-10 md:h-12 w-auto cursor-pointer"
                />
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item: NavItem, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`px-3 py-2 text-lg transition-colors duration-300 ${
                    isActivePath(item.path)
                      ? "text-gray-800 font-bold" // Active path styles
                      : "text-gray-500 hover:text-gray-800 font-bold"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="ml-4">
                <button
                  onClick={() => setIsBookModalOpen(true)}
                  className="tracking-wider hover:text-black hover:bg-gray-300 bg-black font-bold py-2 px-8 rounded-md text-white shadow-md"
                >
                  Book Now
                </button>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={toggleMobileView}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-neutral-300"
                aria-expanded={drawerIsOpen}
              >
                <span className="sr-only">Open main menu</span>
                <i
                  className={`fa fa-${drawerIsOpen ? "times" : "bars"} text-xl`}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            drawerIsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-gray-700`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6">
            {navItems.map((item: NavItem, index) => (
              <Link
                key={index}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base transition-colors duration-300 ${
                  isActivePath(item.path)
                    ? "text-gray-900 bg-gray-50 font-bold" // Active path styles
                    : "text-gray-100 hover:text-gray-900 hover:bg-gray-50 font-medium"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-10 px-3">
              <Button description="Book Now" />
            </div>
          </div>
        </div>
      </nav>
      <BookModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </div>
  );
};

export default Navbar;
