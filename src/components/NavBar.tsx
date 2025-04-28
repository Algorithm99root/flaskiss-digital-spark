
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Rocket, Wrench } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // TODO: Backend Integration - Fetch user subscription status
  // const [isSubscribed, setIsSubscribed] = useState(false);
  
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    // TODO: Backend Integration - Check user authentication before showing Upgrade
    { label: "Upgrade", path: "/upgrade", icon: <Rocket className="w-4 h-4" /> },
    { label: "Free Tools", path: "/tools", icon: <Wrench className="w-4 h-4" /> },
    { label: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl bg-gradient-to-r from-flaskiss-primary to-flaskiss-accent bg-clip-text text-transparent">
              Flaskiss
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center gap-2 text-flaskiss-text hover:text-flaskiss-primary transition-colors duration-200"
              >
                {link.icon && link.icon}
                {link.label}
              </Link>
            ))}
            {/* TODO: Backend Integration - Handle upgrade button visibility based on subscription */}
            <Button className="bg-flaskiss-primary hover:bg-flaskiss-secondary transition-colors">
              <Link to="/upgrade">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-flaskiss-primary rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center gap-2 py-2 text-flaskiss-text hover:text-flaskiss-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                {link.icon && link.icon}
                {link.label}
              </Link>
            ))}
            {/* TODO: Backend Integration - Handle mobile upgrade button visibility */}
            <Button 
              className="w-full bg-flaskiss-primary hover:bg-flaskiss-secondary transition-colors"
              onClick={toggleMenu}
            >
              <Link to="/upgrade" className="w-full">Get Started</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
