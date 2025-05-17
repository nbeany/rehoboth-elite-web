
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, TrendingUp, Globe, Mail } from "lucide-react";
import { Link } from "react-router-dom";

// Partner brands
const partners = [
  {
    id: 1,
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    type: "Apparel",
    featured: true
  },
  {
    id: 2,
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    type: "Sportswear",
    featured: true
  },
  {
    id: 3,
    name: "Gatorade",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/Gatorade_logo.svg",
    type: "Nutrition",
    featured: true
  },
  {
    id: 4,
    name: "Under Armour",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Under_armour_logo.svg",
    type: "Equipment",
    featured: true
  },
  {
    id: 5,
    name: "New Balance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/New_Balance_logo.svg",
    type: "Footwear",
    featured: false
  },
  {
    id: 6,
    name: "Puma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Puma_logo.svg",
    type: "Apparel",
    featured: false
  },
  {
    id: 7,
    name: "Asics",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Asics_Logo.svg",
    type: "Footwear",
    featured: false
  },
  {
    id: 8,
    name: "Wilson",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/35/Wilson_Sporting_Goods_logo.svg",
    type: "Equipment",
    featured: false
  }
];

// Case studies
// const caseStudies = [
//   {
//     id: 1,
//     title: "Global Tennis Star & Luxury Watch Brand",
//     description: "A multi-year partnership that transcended traditional sponsorship to create an iconic signature timepiece collection.",
//     image: "https://images.unsplash.com/photo-1595123550441-d377e017de6a?q=80&w=2787&auto=format&fit=crop",
//     results: ["68% increase in brand recognition", "$12M in media value", "4 signature product releases"]
//   },
//   {
//     id: 2,
//     title: "Olympic Sprinter & Sports Nutrition Company",
//     description: "Collaborative product development that resulted in a best-selling performance supplement line backed by athletic excellence.",
//     image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=2940&auto=format&fit=crop",
//     results: ["122% YoY sales growth", "Expanded to 28 markets", "5 clinical studies published"]
//   },
//   {
//     id: 3,
//     title: "Soccer Phenomenon & Sustainable Sportswear",
//     description: "Pioneering eco-friendly athletic apparel that set new industry standards while achieving record-breaking sales.",
//     image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2434&auto=format&fit=crop",
//     results: ["1.2M units sold in first quarter", "37M social media impressions", "6 sustainability awards"]
//   }
// ];

// // Partnership types
// const partnershipTypes = [
//   {
//     id: 1,
//     title: "Brand Endorsements",
//     description: "Connect your brand with world-class athletes who embody your values and can authentically advocate for your products or services.",
//     icon: Users
//   },
//   {
//     id: 2,
//     title: "Product Collaborations",
//     description: "Develop signature products with elite athletes that combine performance expertise with innovative design and marketability.",
//     icon: CheckCircle
//   },
//   {
//     id: 3,
//     title: "Media & Content Creation",
//     description: "Create compelling content featuring top athletic talent to engage audiences across multiple platforms and markets.",
//     icon: TrendingUp
//   },
//   {
//     id: 4,
//     title: "Global Event Sponsorships",
//     description: "Align your brand with major sporting events and athlete appearances to maximize visibility on the world stage.",
//     icon: Globe
//   }
// ];

const Partnerships = () => {
  return (
    <div className="relative min-h-screen bg-rehoboth-dark">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 text-white">
          <div className="absolute inset-0 bg-rehoboth-dark bg-opacity-90 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-rehoboth-purple text-lg font-semibold mb-2">PARTNERSHIPS</h1>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Strategic Brand Alliances</h2>
              <p className="text-xl text-gray-300 mb-8">
                We connect elite athletes with premium brands to create authentic, high-impact partnerships 
                that drive mutual success and captivate global audiences.
              </p>
              <Button className="bg-rehoboth-purple hover:bg-rehoboth-purple/90 text-white px-8 py-6 text-lg">
                Become a Partner
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Partners */}
        <section className="py-16 bg-rehoboth-dark text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-6">Our Premier Partners</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Rehoboth International Athletics proudly partners with leading global brands 
                who share our commitment to excellence and innovation.
              </p>
            </div>
            
            <div className="bg-rehoboth-dark/50 rounded-2xl p-10 border border-rehoboth-purple/20">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center">
                {partners.filter(partner => partner.featured).map(partner => (
                  <div key={partner.id} className="flex flex-col items-center hover-scale">
                    <div className="h-24 flex items-center justify-center mb-4 filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <p className="text-sm text-rehoboth-silver">{partner.type}</p>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                <div className="text-center p-6">
                  <p className="text-4xl font-bold text-rehoboth-purple mb-2">50+</p>
                  <p className="text-gray-300">Global Brands</p>
                </div>
                <div className="text-center p-6">
                  <p className="text-4xl font-bold text-rehoboth-purple mb-2">$120M+</p>
                  <p className="text-gray-300">Partnership Value</p>
                </div>
                <div className="text-center p-6">
                  <p className="text-4xl font-bold text-rehoboth-purple mb-2">15+</p>
                  <p className="text-gray-300">Industry Sectors</p>
                </div>
                <div className="text-center p-6">
                  <p className="text-4xl font-bold text-rehoboth-purple mb-2">200+</p>
                  <p className="text-gray-300">Campaigns</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partnership Types
        <section className="py-16 bg-gradient-to-b from-rehoboth-dark to-rehoboth-dark/95 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-6">Partnership Opportunities</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Discover the various ways your brand can collaborate with our elite roster of athletes 
                to achieve your marketing and business objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipTypes.map((type) => (
                <div key={type.id} className="bg-rehoboth-dark/50 p-8 rounded-lg border border-rehoboth-purple/20 hover-scale">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-rehoboth-purple/10 rounded-lg mr-4">
                      <type.icon className="h-6 w-6 text-rehoboth-purple" />
                    </div>
                    <h4 className="text-2xl font-bold">{type.title}</h4>
                  </div>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        
        {/* Case Studies
        <section className="py-16 bg-rehoboth-dark text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-6">Partnership Success Stories</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how we've created multi-million dollar partnerships that have transformed 
                both athlete careers and brand presence globally.
              </p>
            </div> */}
            
            {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-rehoboth-dark/50 rounded-lg border border-rehoboth-purple/20 overflow-hidden hover-scale">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3">{study.title}</h4>
                    <p className="text-gray-300 mb-4">{study.description}</p>
                    <h5 className="text-rehoboth-purple font-semibold mb-2">Key Results:</h5>
                    <ul className="space-y-1 mb-4">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-rehoboth-purple mr-2">•</span>
                          <span className="text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul> */}
                    {/* <Button variant="outline" className="w-full border-rehoboth-silver text-white hover:bg-rehoboth-purple/10">
                      View Full Case Study
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="border-rehoboth-silver text-white hover:bg-rehoboth-purple/10 group">
                <span>View All Case Studies</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section> */}
        
        {/* Full Partner Roster */}
        <section className="py-16 bg-gradient-to-b from-rehoboth-dark/95 to-rehoboth-dark text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6">Our Brand Network</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Rehoboth's extensive partner network spans global leaders across multiple industries.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
              {partners.map(partner => (
                <div key={partner.id} className="flex flex-col items-center hover-scale">
                  <div className="h-12 sm:h-16 flex items-center justify-center mb-2 filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <p className="text-xs text-rehoboth-silver">{partner.type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Partnership Process */}
        <section className="py-16 bg-rehoboth-dark text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Our Partnership Process</h3>
                <p className="text-gray-300 mb-8">
                  We take a strategic, customized approach to every partnership, ensuring perfect alignment 
                  between athlete and brand for maximum impact and authenticity.
                </p>
                
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rehoboth-purple/20 flex items-center justify-center mr-4 border border-rehoboth-purple/30">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Discovery & Strategy</h4>
                      <p className="text-gray-300">We learn your brand objectives and identify the perfect athlete matches from our roster.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rehoboth-purple/20 flex items-center justify-center mr-4 border border-rehoboth-purple/30">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Partnership Design</h4>
                      <p className="text-gray-300">Our team creates a custom partnership framework with clear KPIs and deliverables.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rehoboth-purple/20 flex items-center justify-center mr-4 border border-rehoboth-purple/30">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Execution & Activation</h4>
                      <p className="text-gray-300">We handle all logistics, creative development, and activation of the partnership.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rehoboth-purple/20 flex items-center justify-center mr-4 border border-rehoboth-purple/30">
                      <span className="text-xl font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Measurement & Optimization</h4>
                      <p className="text-gray-300">Continuous performance tracking with regular reporting and strategy refinement.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] rounded-tl-[80px] rounded-br-[80px] overflow-hidden border-2 border-rehoboth-purple/20">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=3087&auto=format&fit=crop" 
                    alt="Partnership Process" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-rehoboth-dark p-6 rounded-lg border border-rehoboth-purple/30 shadow-xl">
                  <p className="text-2xl font-bold">95%</p>
                  <p className="text-rehoboth-silver">Partnership Renewal Rate</p>
                </div>
                
                {/* Purple accent */}
                <div className="absolute -top-8 -right-8 w-60 h-60 bg-rehoboth-purple/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-rehoboth-purple/30 to-rehoboth-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Next Success Story?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how Rehoboth International Athletics can connect your brand with world-class athletic talent.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="bg-rehoboth-purple hover:bg-rehoboth-purple/90 text-white px-8 py-6 text-lg flex items-center justify-center">
                  <Link to="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Partnership Team
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-rehoboth-silver text-white hover:bg-rehoboth-purple/10 px-8 py-6 text-lg">
                  <Link to="/athletes">View Our Athletes</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Partnerships;
