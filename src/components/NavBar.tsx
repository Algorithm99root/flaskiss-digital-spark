
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Chat", path: "/chat" },
    { label: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
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
                className="text-flaskiss-text hover:text-flaskiss-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-flaskiss-primary hover:bg-flaskiss-secondary transition-colors">
              <Link to="/chat">Start a Chat</Link>
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
                className="block py-2 text-flaskiss-text hover:text-flaskiss-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className="w-full bg-flaskiss-primary hover:bg-flaskiss-secondary transition-colors"
              onClick={toggleMenu}
            >
              <Link to="/chat" className="w-full">Start a Chat</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
