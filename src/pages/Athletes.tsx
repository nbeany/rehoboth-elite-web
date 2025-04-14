
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Medal, TrendingUp, X } from "lucide-react";

// Sports filter categories
const sportCategories = [
  "All Sports",
  "Track & Field",
  "Soccer",
  "Tennis",
  "Basketball",
  "Swimming",
  "Golf"
];

// Athlete data
const athletes = [
  {
    id: 1,
    name: "Marcus Johnson",
    sport: "Track & Field",
    specialty: "100m Sprint",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=3174&auto=format&fit=crop",
    achievements: ["Olympic Gold Medalist", "World Record Holder", "Diamond League Champion"],
    stats: [
      { label: "Personal Best", value: "9.82s" },
      { label: "World Ranking", value: "#2" },
      { label: "Pro Since", value: "2016" }
    ],
    bio: "Marcus is one of the world's premier sprinters, known for his explosive starts and mental toughness in major competitions. His journey from college standout to Olympic champion has inspired a generation of young athletes.",
    instagram: "#",
    twitter: "#",
    featured: true
  },
  {
    id: 2,
    name: "Sophia Williams",
    sport: "Tennis",
    specialty: "All-Court Player",
    image: "https://images.unsplash.com/photo-1595435934344-b9dba3ac0e48?q=80&w=2940&auto=format&fit=crop",
    achievements: ["Grand Slam Champion", "WTA Top 10", "Billie Jean King Cup Winner"],
    stats: [
      { label: "Career Titles", value: "12" },
      { label: "World Ranking", value: "#6" },
      { label: "Pro Since", value: "2014" }
    ],
    bio: "Sophia's technical mastery and tactical intelligence have established her as a formidable presence on all court surfaces. Her precise serving and aggressive baseline play have earned her multiple Grand Slam quarterfinal appearances.",
    instagram: "#",
    twitter: "#",
    featured: true
  },
  {
    id: 3,
    name: "Adrian Martinez",
    sport: "Soccer",
    specialty: "Attacking Midfielder",
    image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=2940&auto=format&fit=crop",
    achievements: ["Champions League Winner", "World Cup Semifinalist", "Golden Boot Award"],
    stats: [
      { label: "Career Goals", value: "187" },
      { label: "Assists", value: "112" },
      { label: "Pro Since", value: "2012" }
    ],
    bio: "Adrian's creative vision and technical skill have made him one of soccer's most exciting playmakers. Known for his ability to unlock defenses with a single pass, he has become a cornerstone of both his club and national team.",
    instagram: "#",
    twitter: "#",
    featured: true
  },
  {
    id: 4,
    name: "Naomi Chen",
    sport: "Swimming",
    specialty: "Freestyle & Butterfly",
    image: "https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=2940&auto=format&fit=crop",
    achievements: ["Olympic Gold Medalist", "World Champion", "National Record Holder"],
    stats: [
      { label: "Gold Medals", value: "4" },
      { label: "World Records", value: "2" },
      { label: "Pro Since", value: "2015" }
    ],
    bio: "Naomi's dedication to perfecting her technique has resulted in multiple world records and Olympic success. Her commitment to training and mental preparation has established her as one of swimming's most consistent performers.",
    instagram: "#",
    featured: true
  },
  {
    id: 5,
    name: "David Thompson",
    sport: "Basketball",
    specialty: "Point Guard",
    image: "https://images.unsplash.com/photo-1622599511051-16c55633a2ee?q=80&w=3024&auto=format&fit=crop",
    achievements: ["NBA Champion", "All-Star Selection", "Olympic Gold Medalist"],
    stats: [
      { label: "PPG", value: "22.7" },
      { label: "Assists", value: "8.3" },
      { label: "Pro Since", value: "2013" }
    ],
    bio: "David combines court vision with scoring ability to dominate games from the point guard position. His leadership qualities and clutch performance have made him a franchise cornerstone and fan favorite.",
    twitter: "#"
  },
  {
    id: 6,
    name: "Emma Rodriguez",
    sport: "Golf",
    specialty: "Long Drive Specialist",
    image: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=80&w=2787&auto=format&fit=crop",
    achievements: ["Major Champion", "Solheim Cup Winner", "Tour Championship"],
    stats: [
      { label: "Tour Wins", value: "9" },
      { label: "Driving Avg", value: "294yd" },
      { label: "Pro Since", value: "2017" }
    ],
    bio: "Emma's powerful driving and precise iron play have quickly established her as one of golf's rising stars. Her mental toughness in pressure situations has already led to multiple tour victories.",
    instagram: "#"
  },
  {
    id: 7,
    name: "Michael Clark",
    sport: "Track & Field",
    specialty: "Long Jump",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2787&auto=format&fit=crop",
    achievements: ["World Champion", "Diamond League Winner", "National Record Holder"],
    stats: [
      { label: "Personal Best", value: "8.57m" },
      { label: "World Ranking", value: "#1" },
      { label: "Pro Since", value: "2015" }
    ],
    bio: "Michael has revolutionized the long jump with his unique approach and explosive technique. His consistency and mental preparation have made him the man to beat in every major competition.",
    twitter: "#",
    instagram: "#"
  },
  {
    id: 8,
    name: "Isabella Kim",
    sport: "Tennis",
    specialty: "Baseline Player",
    image: "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2130&auto=format&fit=crop",
    achievements: ["Grand Slam Finalist", "WTA Finals Champion", "Olympic Silver Medalist"],
    stats: [
      { label: "Career Titles", value: "7" },
      { label: "World Ranking", value: "#11" },
      { label: "Pro Since", value: "2016" }
    ],
    bio: "Isabella's aggressive baseline game and mental toughness have established her as one of tennis's most exciting young talents. Her powerful groundstrokes and improved net game have led to consistent results against top players.",
    instagram: "#"
  }
];

const Athletes = () => {
  const [selectedSport, setSelectedSport] = useState("All Sports");
  const [selectedAthlete, setSelectedAthlete] = useState<(typeof athletes)[0] | null>(null);
  
  const filteredAthletes = selectedSport === "All Sports" 
    ? athletes 
    : athletes.filter(athlete => athlete.sport === selectedSport);

  return (
    <div className="relative min-h-screen bg-rehoboth-dark">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 text-white">
          <div className="absolute inset-0 bg-rehoboth-dark bg-opacity-90 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-rehoboth-purple text-lg font-semibold mb-2">OUR ATHLETES</h1>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Elite Talent Roster</h2>
              <p className="text-xl text-gray-300">
                Rehoboth International Athletics represents some of the world's most exceptional sporting talent.
                Our diverse roster includes Olympic medalists, world champions, and rising stars across multiple sports.
              </p>
            </div>
          </div>
        </section>
        
        {/* Athletes Filter & Grid */}
        <section className="py-16 bg-rehoboth-dark text-white">
          <div className="container mx-auto px-4">
            {/* Sport Filters */}
            <div className="mb-12 overflow-x-auto">
              <div className="flex space-x-4 min-w-max pb-4">
                {sportCategories.map((sport) => (
                  <button
                    key={sport}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                      selectedSport === sport
                        ? "bg-rehoboth-purple text-white"
                        : "bg-rehoboth-dark/50 text-gray-300 border border-rehoboth-purple/20 hover:bg-rehoboth-purple/10"
                    }`}
                    onClick={() => setSelectedSport(sport)}
                  >
                    {sport}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Featured Athletes Section (only show if All Sports or relevant sport selected) */}
            {(selectedSport === "All Sports" || athletes.some(a => a.sport === selectedSport && a.featured)) && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8">Featured Athletes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {filteredAthletes
                    .filter(athlete => athlete.featured)
                    .map((athlete) => (
                      <div 
                        key={athlete.id}
                        className="relative overflow-hidden rounded-lg bg-rehoboth-dark/50 border border-rehoboth-purple/20 hover-scale cursor-pointer"
                        onClick={() => setSelectedAthlete(athlete)}
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
                          <div className="flex mt-3 space-x-2">
                            {athlete.achievements.slice(0, 1).map((achievement, index) => (
                              <span 
                                key={index} 
                                className="bg-rehoboth-purple/20 text-white text-xs px-3 py-1 rounded-full"
                              >
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
            
            {/* All Athletes Grid */}
            <div>
              <h3 className="text-2xl font-bold mb-8">
                {selectedSport === "All Sports" ? "All Athletes" : selectedSport + " Athletes"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredAthletes.map((athlete) => (
                  <div 
                    key={athlete.id}
                    className="relative overflow-hidden rounded-lg bg-rehoboth-dark/50 border border-rehoboth-purple/20 hover-scale cursor-pointer group"
                    onClick={() => setSelectedAthlete(athlete)}
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img 
                        src={athlete.image} 
                        alt={athlete.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-rehoboth-dark to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h4 className="text-xl font-bold mb-1">{athlete.name}</h4>
                      <p className="text-rehoboth-purple font-medium mb-2">{athlete.sport}</p>
                      <p className="text-gray-300 text-sm">{athlete.specialty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {filteredAthletes.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-300">No athletes found for this sport category.</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Become an Athlete CTA */}
        <section className="py-20 bg-gradient-to-r from-rehoboth-purple/20 to-rehoboth-dark text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Your Career to the Next Level?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Rehoboth International Athletics is constantly seeking exceptional talent across all sports. 
                  Our comprehensive management approach focuses on maximizing your athletic potential while building your personal brand.
                </p>
                <Button className="bg-rehoboth-purple hover:bg-rehoboth-purple/90 text-white px-8 py-6 text-lg">
                  Apply for Representation
                </Button>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="aspect-square rounded-tl-[50px] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop" 
                      alt="Athlete Training" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-tr-[50px] overflow-hidden mt-12">
                    <img 
                      src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2940&auto=format&fit=crop" 
                      alt="Athlete Performance" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-bl-[50px] overflow-hidden -mt-12">
                    <img 
                      src="https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2940&auto=format&fit=crop" 
                      alt="Athlete Media" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-br-[50px] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?q=80&w=2940&auto=format&fit=crop" 
                      alt="Athlete Competing" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Athlete Detail Modal */}
      {selectedAthlete && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto"
          onClick={() => setSelectedAthlete(null)}
        >
          <div 
            className="bg-rehoboth-dark w-full max-w-5xl rounded-lg overflow-hidden border border-rehoboth-purple/30 animate-scale-in my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-50">
              <button 
                onClick={() => setSelectedAthlete(null)}
                className="bg-rehoboth-dark/70 p-2 rounded-full text-white hover:bg-rehoboth-purple/20"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-full max-h-[600px] overflow-hidden">
                <img 
                  src={selectedAthlete.image} 
                  alt={selectedAthlete.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-rehoboth-dark to-transparent h-32"></div>
              </div>
              
              <div className="p-8 lg:p-10 max-h-[600px] overflow-y-auto">
                <h3 className="text-3xl font-bold mb-1">{selectedAthlete.name}</h3>
                <p className="text-rehoboth-purple text-xl mb-4">{selectedAthlete.sport} • {selectedAthlete.specialty}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Medal className="mr-2 h-5 w-5 text-rehoboth-purple" />
                    Career Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedAthlete.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-rehoboth-purple mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-rehoboth-purple" />
                    Career Stats
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedAthlete.stats.map((stat, index) => (
                      <div key={index} className="bg-rehoboth-dark/70 p-3 rounded-lg border border-rehoboth-purple/20 text-center">
                        <p className="text-lg font-bold">{stat.value}</p>
                        <p className="text-sm text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3">About</h4>
                  <p className="text-gray-300">{selectedAthlete.bio}</p>
                </div>
                
                <div className="flex space-x-4">
                  {selectedAthlete.instagram && (
                    <a href={selectedAthlete.instagram} className="p-2 rounded-full border border-rehoboth-purple/30 hover:bg-rehoboth-purple/10">
                      <Instagram size={20} />
                    </a>
                  )}
                  {selectedAthlete.twitter && (
                    <a href={selectedAthlete.twitter} className="p-2 rounded-full border border-rehoboth-purple/30 hover:bg-rehoboth-purple/10">
                      <Twitter size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Athletes;
