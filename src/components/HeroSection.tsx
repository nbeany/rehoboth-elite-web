
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=2787&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-rehoboth-dark to-rehoboth-dark/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight">
              Elite Athletes <span className="text-gradient">Deserve</span> Elite Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              Rehoboth International Athletics represents the world's most exceptional sporting talent. We connect elite athletes with global opportunities that transcend sport.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-rehoboth-purple hover:bg-rehoboth-purple/90 text-white px-8 py-6 text-lg">
              <Link to="/contact"> Join the Winning Team</Link>
                
              </Button>
              <Button variant="outline" className="border-rehoboth-silver text-white hover:bg-rehoboth-dark/50 px-8 py-6 text-lg">
              <Link to="/contact"> Partner With Us</Link>
              
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block animate-scale-in">
            <div className="relative">
              <div className="w-[500px] h-[600px] rounded-tl-[100px] rounded-br-[100px] overflow-hidden border-2 border-rehoboth-purple/20">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1721756007521-7ba163989156?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Elite Athlete" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-rehoboth-dark p-6 rounded-lg border border-rehoboth-purple/30 shadow-xl max-w-[260px]">
                <p className="text-sm text-rehoboth-silver mb-2">CAREER GROWTH</p>
                <p className="text-2xl font-bold">25+ Elite Athletes Represented</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-rehoboth-dark to-transparent"></div>
    </section>
  );
}
