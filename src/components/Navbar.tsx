
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "../components/LOGO.svg";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-rehoboth-dark/95 shadow-lg py-3" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
       <img src={logo} alt="My Athlete" className="w-12 h-12" />
          <span className="font-playfair text-2xl font-bold text-white">REHOBOTH</span>
          <span className="text-xs text-rehoboth-purple font-semibold tracking-widest">INTERNATIONAL ATHLETICS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex space-x-8">
            <Link to="/" className="text-white hover-underline">Home</Link>
            <Link to="/about" className="text-white hover-underline">About</Link>
            <Link to="/athletes" className="text-white hover-underline">Athletes</Link>
            <Link to="/partnerships" className="text-white hover-underline">Partnerships</Link>
            <Link to="/contact" className="text-white hover-underline">Contact</Link>
          </div>
          {/* <Button className="bg-rehoboth-purple hover:bg-rehoboth-purple/90 text-white">
            Join the Team
          </Button> */}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-rehoboth-dark z-40 animate-fade-in md:hidden">
          <div className="container mx-auto px-4 pt-8 flex flex-col space-y-8">
            <Link to="/" className="text-white text-xl py-2 border-b border-rehoboth-purple/20" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-white text-xl py-2 border-b border-rehoboth-purple/20" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/athletes" className="text-white text-xl py-2 border-b border-rehoboth-purple/20" onClick={() => setIsMenuOpen(false)}>Athletes</Link>
            <Link to="/partnerships" className="text-white text-xl py-2 border-b border-rehoboth-purple/20" onClick={() => setIsMenuOpen(false)}>Partnerships</Link>
            <Link to="/contact" className="text-white text-xl py-2 border-b border-rehoboth-purple/20" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            {/* <Button className="bg-rehoboth-purple hover:bg-rehoboth-purple/90 text-white w-full mt-4">
              Join the Team
            </Button> */}
          </div>
        </div>
      )}
    </nav>
  );
}
