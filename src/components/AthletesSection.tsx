
import { useState } from "react";
import { ArrowRight, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Athlete {
  id: number;
  name: string;
  sport: string;
  image: string;
  achievements: string[];
  instagram?: string;
  twitter?: string;
}

const athletes: Athlete[] = [
  {
    id: 1,
    name: "Marcus Johnson",
    sport: "Track & Field",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=3174&auto=format&fit=crop",
    achievements: ["Olympic Gold Medalist", "World Record Holder", "Diamond League Champion"],
    instagram: "#",
    twitter: "#"
  },
  {
    id: 2,
    name: "Sophia Williams",
    sport: "Tennis",
    image: "https://images.unsplash.com/photo-1595435934344-b9dba3ac0e48?q=80&w=2940&auto=format&fit=crop",
    achievements: ["Grand Slam Champion", "WTA Top 10", "Billie Jean King Cup Winner"],
    instagram: "#",
    twitter: "#"
  },
  {
    id: 3,
    name: "Adrian Martinez",
    sport: "Soccer",
    image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=2940&auto=format&fit=crop",
    achievements: ["Champions League Winner", "World Cup Semifinalist", "Golden Boot Award"],
    instagram: "#",
    twitter: "#"
  },
  {
    id: 4,
    name: "Naomi Chen",
    sport: "Swimming",
    image: "https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=2940&auto=format&fit=crop",
    achievements: ["Olympic Gold Medalist", "World Champion", "National Record Holder"],
    instagram: "#"
  }
];

export default function AthletesSection() {
  const [activeAthlete, setActiveAthlete] = useState<Athlete | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-rehoboth-dark to-rehoboth-dark/95 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-rehoboth-purple text-lg font-semibold mb-2">OUR ATHLETES</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">World-Class Talent</h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Rehoboth represents some of the most exceptional athletes across multiple sports. 
            Our roster includes Olympic medalists, world champions, and record breakers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {athletes.map((athlete) => (
            <div 
              key={athlete.id}
              className="group relative overflow-hidden rounded-lg bg-rehoboth-dark/50 border border-rehoboth-purple/20 hover-scale cursor-pointer"
              onClick={() => setActiveAthlete(athlete)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={athlete.image} 
                  alt={athlete.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-rehoboth-dark to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-2xl font-bold mb-1">{athlete.name}</h4>
                <p className="text-rehoboth-purple font-medium">{athlete.sport}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-transparent hover:bg-rehoboth-purple/10 border border-rehoboth-purple text-rehoboth-purple group">
            <span>View All Athletes</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Athlete Modal */}
        {activeAthlete && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setActiveAthlete(null)}>
            <div 
              className="bg-rehoboth-dark max-w-4xl rounded-lg overflow-hidden border border-rehoboth-purple/30 animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-full">
                  <img 
                    src={activeAthlete.image} 
                    alt={activeAthlete.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-1">{activeAthlete.name}</h3>
                  <p className="text-rehoboth-purple text-xl mb-6">{activeAthlete.sport}</p>
                  
                  <h4 className="text-lg font-semibold mb-3">Career Highlights</h4>
                  <ul className="mb-8">
                    {activeAthlete.achievements.map((achievement, index) => (
                      <li key={index} className="mb-2 flex items-start">
                        <span className="text-rehoboth-purple mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex space-x-4">
                    {activeAthlete.instagram && (
                      <a href={activeAthlete.instagram} className="p-2 rounded-full border border-rehoboth-purple/30 hover:bg-rehoboth-purple/10">
                        <Instagram size={20} />
                      </a>
                    )}
                    {activeAthlete.twitter && (
                      <a href={activeAthlete.twitter} className="p-2 rounded-full border border-rehoboth-purple/30 hover:bg-rehoboth-purple/10">
                        <Twitter size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
