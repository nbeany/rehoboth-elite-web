
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Linkedin, Youtube, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-rehoboth-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-playfair text-2xl font-bold text-white">REHOBOTH</span>
              <span className="text-xs text-rehoboth-purple font-semibold tracking-widest">INTERNATIONAL ATHLETICS</span>
            </div>
            <p className="text-gray-300">
              World-class representation for elite athletes. Connecting talent with global opportunities that transcend sport.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-rehoboth-dark/70 hover:bg-rehoboth-purple/20 rounded-full border border-rehoboth-purple/30 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="p-2 bg-rehoboth-dark/70 hover:bg-rehoboth-purple/20 rounded-full border border-rehoboth-purple/30 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="p-2 bg-rehoboth-dark/70 hover:bg-rehoboth-purple/20 rounded-full border border-rehoboth-purple/30 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="p-2 bg-rehoboth-dark/70 hover:bg-rehoboth-purple/20 rounded-full border border-rehoboth-purple/30 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="p-2 bg-rehoboth-dark/70 hover:bg-rehoboth-purple/20 rounded-full border border-rehoboth-purple/30 transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-bold mb-4">Quick Links</h5>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-rehoboth-purple hover-underline inline-block">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-rehoboth-purple hover-underline inline-block">About Us</Link></li>
              <li><Link to="/athletes" className="text-gray-300 hover:text-rehoboth-purple hover-underline inline-block">Our Athletes</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-rehoboth-purple hover-underline inline-block">Partnerships</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-rehoboth-purple hover-underline inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-lg font-bold mb-4">Our Services</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-rehoboth-purple hover-underline inline-block">Athlete Representation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rehoboth-purple hover-underline inline-block">Brand Partnerships</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rehoboth-purple hover-underline inline-block">Career Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rehoboth-purple hover-underline inline-block">Media Relations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rehoboth-purple hover-underline inline-block">Contract Negotiations</a></li>
            </ul>
          </div>

          {/* Legal */}
          {/* <div>
            <h5 className="text-lg font-bold mb-4">Legal</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-rehoboth-purple hover-underline inline-block">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rehoboth-purple hover-underline inline-block">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rehoboth-purple hover-underline inline-block">Cookies Policy</a></li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-rehoboth-purple/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Rehoboth International Athletics. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center text-rehoboth-purple hover:text-rehoboth-purple/80 transition-colors group"
          >
            <span className="mr-2 text-sm font-medium">Back to top</span>
            <span className="p-1 bg-rehoboth-purple/10 rounded-full group-hover:bg-rehoboth-purple/20 transition-colors">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
