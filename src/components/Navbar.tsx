import { useState, useEffect, useCallback } from "react";
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

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-lg border-b bg-cream border-neutral-700/80 transform transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container px-4 py-4 mx-auto relative text-lg">
        <div className="flex items-center justify-between w-full">
          {/* Logo at start */}
          <img src={logo} alt="logo" className="h-12" />
          
          {/* Nav links in center */}
          <ul className="hidden lg:flex space-x-12">
            {navItems.map((item: NavItem, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="text-gray-500 font-bold hover:text-gray-800 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Button at end for desktop */}
          <div className="hidden lg:block">
            <Button description="Book Now" />
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileView } 
            className="lg:hidden text-gray-600 hover:text-gray-900"
          >
            <div className="text-2xl">
              <i className={`fa fa-${drawerIsOpen ? 'times' : 'bars'}`} />
            </div>
          </button>
        </div>
        
        {/* Mobile drawer */}
        <div 
          className={`fixed z-20 top-[73px] left-0 right-0 bg-neutral-800 w-full p-12 flex flex-col items-center justify-center lg:hidden transform transition-transform duration-300 ease-in-out ${
            drawerIsOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="space-y-4 mb-8">
            {navItems.map((item: NavItem, index) => (
              <li key={index} className="text-center">
                <a
                  href={item.path}
                  className="text-gray-500 font-bold hover:text-gray-200 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button description="Book now" />
 
        </ div>
      </ div>
    </ nav>
  );
};

export default Navbar;