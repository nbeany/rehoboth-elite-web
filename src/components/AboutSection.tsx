
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="bg-rehoboth-dark py-24 text-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-tr-[100px] rounded-bl-[100px] overflow-hidden border-2 border-rehoboth-purple/20">
              <img 
                src="https://images.unsplash.com/photo-1579156618274-5c2d3d06a113?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Rehoboth Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-rehoboth-dark p-6 rounded-lg border border-rehoboth-purple/30 shadow-xl">
              <p className="text-rehoboth-silver mb-2 text-sm">FOUNDED</p>
              <p className="text-3xl font-bold">2010</p>
            </div>
            
            {/* Purple accent */}
            <div className="absolute -top-8 -left-8 w-60 h-60 bg-rehoboth-purple/10 rounded-full blur-3xl -z-10"></div>
          </div>
          
          <div>
            <h2 className="text-rehoboth-purple text-lg font-semibold mb-2">ABOUT US</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Redefining Excellence in Sports Management</h3>
            
            <p className="text-gray-300 mb-8 text-lg">
              Rehoboth International Athletics was founded with a singular vision: to represent the world's most elite athletes with unparalleled dedication and expertise. We aren't just agents—we're strategic partners in every aspect of our athletes' careers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-rehoboth-dark/50 p-6 rounded-lg border border-rehoboth-purple/20">
                <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                <p className="text-gray-300">To elevate athletes to their highest potential both on and off the field through strategic career management.</p>
              </div>
              
              <div className="bg-rehoboth-dark/50 p-6 rounded-lg border border-rehoboth-purple/20">
                <h4 className="text-xl font-bold mb-2">Our Values</h4>
                <p className="text-gray-300">Integrity, excellence, and innovation form the foundation of everything we do at Rehoboth.</p>
              </div>
            </div>
            
            {/* <Button className="group">
              <span>Meet Our Team</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
