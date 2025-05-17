
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const partners = [
  {
    id: 1,
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    type: "Apparel"
  },
  {
    id: 2,
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    type: "Sportswear"
  },
  {
    id: 3,
    name: "Gatorade",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/Gatorade_logo.svg",
    type: "Nutrition"
  },
  {
    id: 4,
    name: "Under Armour",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Under_armour_logo.svg",
    type: "Equipment"
  },
  {
    id: 5,
    name: "New Balance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/New_Balance_logo.svg",
    type: "Footwear"
  },
  {
    id: 6,
    name: "Puma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Puma_logo.svg",
    type: "Apparel"
  }
];

export default function PartnershipsSection() {
  return (
    <section className="py-24 bg-rehoboth-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-rehoboth-purple text-lg font-semibold mb-2">PARTNERSHIPS</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Global Brand Alliances</h3>
            <p className="text-gray-300 text-lg mb-6">
              We connect our athletes with the world's most prestigious brands, creating powerful partnerships that transcend sport and drive mutual success.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              Rehoboth's extensive network includes relationships with leading companies across apparel, nutrition, media, and technology sectors.
            </p>
            <Button className="group">
               <Link to="/Partnerships">Become a Partner</Link>
              
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-tr-[80px] rounded-bl-[80px] overflow-hidden border-2 border-rehoboth-purple/20">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Brand Partnership" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-60 h-60 bg-rehoboth-purple/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Partner logos */}
        <div className="bg-rehoboth-dark/50 rounded-2xl p-10 border border-rehoboth-purple/20">
          <h4 className="text-center text-2xl font-bold mb-12">Our Strategic Partners</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map(partner => (
              <div key={partner.id} className="flex flex-col items-center hover-scale">
                <div className="h-16 flex items-center justify-center mb-3 filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity">
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
        </div>

        {/* Success stories teaser */}
        <div className="mt-20 p-8 md:p-12 rounded-lg bg-gradient-to-r from-rehoboth-purple/20 to-rehoboth-dark border border-rehoboth-purple/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-2xl font-bold mb-2">Partnership Success Stories</h4>
              <p className="text-gray-300 max-w-xl">
                Discover how we've created multi-million dollar partnerships that have transformed both athlete careers and brand presence globally.
              </p>
            </div>
            <Button variant="outline" className="border-rehoboth-silver text-white hover:bg-rehoboth-purple/10">
            <Link to="/Partnerships">View Case Studies</Link>
             
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
