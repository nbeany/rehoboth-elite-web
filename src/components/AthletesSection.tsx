
import { useState } from "react";
import { ArrowRight, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
    name: "Freweyni Hailu",
    sport: "Athletics (Middle-Distance Running)",
    image: "https://assets.aws.worldathletics.org/large/65e512956330b697dec95fdd.jpg",
    achievements: ["World Indoor Champion – 1500m (2024)", "World Indoor Champion – 3000m (2025)", "World Indoor Silver Medalist – 800m (2022)","5th Place – 1500m at the 2020 Tokyo Olympics"],
    instagram: "#",
    twitter: "#"
  },
  {
    id: 2,
    name: "Ejgayehu Taye",
    sport: "Athletics (Long-Distance Running)",
    image: "https://staticg.sportskeeda.com/editor/2022/01/c8b0d-16411206470316-1920.jpg",
    achievements: ["World Indoor Bronze Medalist – 3000m (2022)", "World Championships Bronze Medalist – 10,000m (2023)", "Former World Record Holder – 5km road race (14:19, 2021–2024)","Silver Medalist – 5000m at the 2018 World U20 Championships"],
    instagram: "#",
    twitter: "#"
  },
  {
    id: 3,
    name: "Tsige Duguma",
    sport: "Athletics (Middle-Distance Running)",
    image: "https://sportnewsafrica.com/wp-content/uploads/2024/03/Frezeyni-scaled.jpg",
    achievements: ["World Indoor Champion – 800m (2024)", "Olympic Silver Medalist – 800m (2024 Paris Olympics)", "African Games Gold Medalist – 800m (2024)","National Record Holder – 800m (1:56.64, 2025"],
    instagram: "#",
    twitter: "#"
  },
  {
    id: 4,
    name: "Hirut Meshesha",
    sport: "Athletics (Middle-Distance Running)",
    image: "https://sportnewsafrica.com/wp-content/uploads/2022/06/Ligue-de-Diamant-Rabat-Meshesha-Hirut-1500m.jpg",
    achievements: ["African Games Gold Medalist – 800m (2019)", "World U18 Championships Bronze Medalist – 800m (2017", "World Indoor Bronze Medalist – 1500m (2022)"],
    instagram: "#"
  },
    {
    id: 5,
    name: "Diribe Welteji",
    sport: "Athletics (Middle-Distance Running)",
    image: "https://trackandfieldnews.com/wp-content/uploads/2019/09/welteji-diribe-10-23.jpg",
    achievements: ["World Championships Silver Medalist – 1500m (2023)", "World U20 Champion – 800m (2018)", "World U20 Silver Medalist – 1500m (2021)","Jesse Owens Rising Star Award – 2024"],
    instagram: "#"
  },
    {
    id: 6,
    name: "Samuel Tefera",
    sport: "Athletics (Middle-Distance Running)",
    image: "https://www.sports24ghana.com/wp-content/uploads/2022/03/Samuel-Tefera.jpg",
    achievements: ["World Indoor Champion – 1500m (2018, 2022)", "Former World Indoor Record Holder – 1500m (3:31.04, 2019)", "African Indoor Record Holder – 1500m"],
    instagram: "#"
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <Link to="/Athletes">View All Athletes</Link>
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
