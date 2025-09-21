import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import neutraWiseLogo from "@/assets/neutrawise-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/dashboard", label: "NW Insights" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={neutraWiseLogo} 
              alt="Neutrawise Logo" 
              className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xl font-bold text-brand-black group-hover:text-brand-green transition-colors font-primary">
              Neutrawise
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium font-primary transition-colors hover:text-brand-green relative group ${
                  location.pathname === item.href
                    ? "text-brand-green"
                    : "text-brand-black"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            {/* <Button variant="default" size="sm">
              Get Started
            </Button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-black hover:text-brand-green hover:bg-brand-green/10"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-3 py-2 text-sm font-medium font-primary transition-colors hover:text-brand-green hover:bg-brand-green/5 rounded-md ${
                  location.pathname === item.href
                    ? "text-brand-green bg-brand-green/10"
                    : "text-brand-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* <div className="px-3 pt-2">
              <Button variant="default" size="sm" className="w-full">
                Get Started
              </Button>
            </div> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;