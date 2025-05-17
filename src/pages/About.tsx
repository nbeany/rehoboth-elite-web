
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import athleteImage from "../pages/TEAMf.jpg";
import ceo from "../pages/ceo.jpg";
import manager from "../pages/manager.jpg";
// Team member data
const teamMembers = [

  {
    id: 2,
    name: "Yonas Mekonnen",
    role: "CEO",
    image:ceo,
    bio: " professional, with extensive industry connections. Focuses on developing personalized career strategies for each athlete."
  },
 
  {
    id: 4,
    name: "Gedion Ephrem",
    role: "Manager",
    image: manager,
    bio: "Award-winning manager with experience at global sports brands. Specializes in digital presence and personal brand development."
  }
];

// Values data
const values = [
  {
    id: 1,
    title: "Excellence",
    description: "We hold ourselves and our athletes to the highest standards of performance and professionalism in everything we do."
  },
  {
    id: 2,
    title: "Integrity",
    description: "We operate with complete transparency, honesty, and ethical conduct in all business dealings and relationships."
  },
  {
    id: 3,
    title: "Innovation",
    description: "We constantly seek new opportunities and creative solutions to stay ahead in a rapidly evolving sports landscape."
  },
  {
    id: 4,
    title: "Commitment",
    description: "We are dedicated to the long-term success and wellbeing of our athletes, both during and after their sporting careers."
  }
];

const About = () => {
  return (
    <div className="relative min-h-screen bg-rehoboth-dark">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 text-white">
          <div className="absolute inset-0 bg-rehoboth-dark bg-opacity-90 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-rehoboth-purple text-lg font-semibold mb-2">ABOUT US</h1>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">The Story Behind Our Success</h2>
              <p className="text-xl text-gray-300 mb-6">
                Rehoboth International Athletics was founded with a singular vision: to transform how elite athletes are represented in the global sports landscape.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-rehoboth-dark text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-300 mb-4">
                  Founded in 2010 by former Olympic athlete Sarah Johnson, Rehoboth International Athletics began with a simple premise: athletes deserve representation that matches their exceptional talents.
                </p>
                <p className="text-gray-300 mb-4">
                  What started as a boutique agency with just three athletes has grown into one of the most respected sports management firms globally, representing over 200 elite athletes across 15 different sports.
                </p>
                <p className="text-gray-300 mb-6">
                  Our name "Rehoboth" — meaning "room to flourish" — embodies our commitment to creating space for athletes to reach their fullest potential, both on and off the field.
                </p>
                <div className="grid grid-cols-2 gap-8 mt-8">
                  <div className="text-center p-6 bg-rehoboth-dark/50 rounded-lg border border-rehoboth-purple/20">
                    <h3 className="text-4xl font-bold text-rehoboth-purple mb-2">200+</h3>
                    <p className="text-gray-300">Elite Athletes</p>
                  </div>
                  <div className="text-center p-6 bg-rehoboth-dark/50 rounded-lg border border-rehoboth-purple/20">
                    <h3 className="text-4xl font-bold text-rehoboth-purple mb-2">15+</h3>
                    <p className="text-gray-300">Sports Represented</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-tr-[100px] rounded-bl-[100px] overflow-hidden border-2 border-rehoboth-purple/20">
                 <img src={athleteImage} alt="My Athlete" />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-rehoboth-dark p-6 rounded-lg border border-rehoboth-purple/30 shadow-xl">
                  <p className="text-2xl font-bold">13 Years</p>
                  <p className="text-rehoboth-silver">of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-gradient-to-b from-rehoboth-dark/90 to-rehoboth-dark text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
              <p className="text-gray-300">
                These principles guide every decision we make and every relationship we build.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value.id} className="p-8 bg-rehoboth-dark/50 rounded-lg border border-rehoboth-purple/20 hover-scale">
                  <h3 className="text-2xl font-bold mb-4 text-rehoboth-purple">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 bg-rehoboth-dark text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Meet Our Leadership Team</h2>
              <p className="text-gray-300">
                Our diverse team of industry experts brings decades of combined experience 
                in sports management, marketing, and athlete representation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-rehoboth-dark/50 rounded-lg border border-rehoboth-purple/20 overflow-hidden hover-scale">
                  <div className="aspect-[5/4]">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-rehoboth-purple mb-4">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              {/* <Button variant="outline" className="border-rehoboth-silver text-white hover:bg-rehoboth-purple/10 group">
                <span>View Full Team</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button> */}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-rehoboth-purple/30 to-rehoboth-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Winning Team?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Whether you're an athlete seeking representation or a brand looking for partnership opportunities,
              we're ready to elevate your success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-rehoboth-purple hover:bg-rehoboth-purple/90 text-white px-8 py-6 text-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" className="border-rehoboth-silver text-white hover:bg-rehoboth-purple/10 px-8 py-6 text-lg">
                <Link to="/athletes">View Our Athletes</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
