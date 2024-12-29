import { useState, useEffect } from "react";
import { NavItem, navItems } from "../constants/index";
import logo from "../assets/images/Logo.png";
import Button from "./Button";



const Navbar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileView = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-lg border-b bg-cream border-neutral-700/80 transition-opacity duration-300 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="container px-4 py-4 mx-auto relative text-lg">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          {/* Logo */}

          {/* Nav */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item: NavItem, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="text-gray-500 font-bold hover:text-gray-800"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Nav */}

          {/* Button */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Button description="Book Now!!" />
          </div>
          {/* Button */}

          {/* Menu */}
          <div className="lg:hidden md:flex flex-col justify-end py-2 space-x-12">
            <button onClick={toggleMobileView} className="text-white">
              {drawerIsOpen ? (
                <div className="hover:text-gray-900 text-2xl mt-4 flex space-x-8 text-gray-600">
                  <i className="fa fa-times" />
                </div>
              ) : (
                <div className="hover:text-gray-900 text-2xl mt-4 flex space-x-8 text-gray-600">
                  <i className="fa fa-bars" />
                </div>
              )}
            </button>
          </div>
          {/* Menu */}
        </div>

        {/* Drawer */}
        {drawerIsOpen && (
          <div className="fixed z-20 right-0 bg-neutral-800 w-full p-12 flex flex-col items-center justify-center lg:hidden">
            <ul>
              {navItems.map((item: NavItem, index) => (
                <li key={index} className="py-2">
                  <a
                    href={item.path}
                    className="text-gray-500 font-bold hover:text-gray-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="justify-center space-x-12 items-center">
              <Button description="Book Now!!" />
            </div>
          </div>
        )}
        {/* Drawer */}
      </div>
    </nav>
  );
};

export default Navbar;
