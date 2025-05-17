
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Medal, TrendingUp, X } from "lucide-react";

// Sports filter categories
const sportCategories = [
  "All",
  "Middle-Distance",
  "Long-Distance",
];

// Athlete data
const athletes = [
 {
  "id": 1,
  "name": "Freweyni Hailu",
  "sport": "Middle-Distance",
  "specialty": "1500m & 800m",
  "image": "https://assets.aws.worldathletics.org/large/65e512956330b697dec95fdd.jpg",
  "achievements": ["World Indoor Silver Medalist", "Diamond League Contender", "Olympic Finalist"],
  "stats": [
    { "label": "PB 1500m", "value": "3:56.28" },
    { "label": "PB 800m", "value": "1:57.57" },
    { "label": "World Rank", "value": "Top 10 (1500m)" }
  ],
  "bio": "Known for her tactical speed and strong finishing kick, Freweyni is one of Ethiopia’s rising middle-distance stars with major finals under her belt.",
  "instagram": "#"
},

 {
  "id": 2,
  "name": "Ejgayehu Taye",
  "sport": "Long-Distance",
  "specialty": "5000m & 10,000m",
  "image": "https://staticg.sportskeeda.com/editor/2022/01/c8b0d-16411206470316-1920.jpg",
  "achievements": ["World Indoor Bronze Medalist", "5km Road World Record Holder", "Diamond League Winner"],
  "stats": [
    { "label": "PB 5000m", "value": "14:12.98" },
    { "label": "PB 10,000m", "value": "29:57.45" },
    { "label": "5km Road WR", "value": "14:19" }
  ],
  "bio": "Ejgayehu’s speed over both track and road distances has earned her global medals and a world record, making her a key figure in long-distance racing.",
  "instagram": "#"
},

{
  "id": 3,
  "name": "Tsige Duguma",
  "sport": "Middle-Distance",
  "specialty": "800m & 1500m",
  "image": "https://sportnewsafrica.com/wp-content/uploads/2024/03/Frezeyni-scaled.jpg",
  "achievements": ["African Games Finalist", "National Champion"],
  "stats": [
    { "label": "PB 1500m", "value": "4:02.40" },
    { "label": "PB 800m", "value": "1:59.93" },
    { "label": "World Rank", "value": "Top 30" }
  ],
  "bio": "Tsige is quickly rising in middle-distance circles, impressing with her front-running tactics and consistency across major African and global meets.",
  "instagram": "#"
}
,
{
  "id": 4,
  "name": "Hirut Meshesha",
  "sport": "Middle-Distance",
  "specialty": "1500m",
  "image": "https://sportnewsafrica.com/wp-content/uploads/2022/06/Ligue-de-Diamant-Rabat-Meshesha-Hirut-1500m.jpg",
  "achievements": ["World Indoor Bronze Medalist", "U20 World Champion", "Diamond League Podiums"],
  "stats": [
    { "label": "PB 1500m", "value": "3:57.30" },
    { "label": "PB 800m", "value": "2:00.18" },
    { "label": "Pro Since", "value": "2019" }
  ],
  "bio": "Hirut’s rapid progress and fierce competitiveness have made her a frequent medalist and a formidable opponent in championship races.",
  "instagram": "#"
},
 {
  "id": 5,
  "name": "Diribe Welteji",
  "sport": "Middle-Distance",
  "specialty": "1500m & Mile",
  "image": "https://trackandfieldnews.com/wp-content/uploads/2019/09/welteji-diribe-10-23.jpg",
  "achievements": ["World Championships Silver Medalist", "Diamond League Winner", "U20 World Champion"],
  "stats": [
    { "label": "PB 1500m", "value": "3:53.93" },
    { "label": "PB Mile", "value": "4:17.13" },
    { "label": "World Rank", "value": "Top 3 (1500m)" }
  ],
  "bio": "Diribe’s combination of youth and experience has already earned her medals at the highest level, with a world title firmly in sight.",
  "instagram": "#"
},
  {
  "id": 6,
  "name": "Samuel Tefera",
  "sport": "Middle-Distance",
  "specialty": "1500m",
  "image": "https://www.sports24ghana.com/wp-content/uploads/2022/03/Samuel-Tefera.jpg",
  "achievements": ["World Indoor Champion", "World Indoor Record Holder (1500m)", "Olympic Finalist"],
  "stats": [
    { "label": "PB 1500m", "value": "3:31.39" },
    { "label": "Indoor WR", "value": "3:31.04" },
    { "label": "Pro Since", "value": "2018" }
  ],
  "bio": "Samuel is known for his smooth stride and blistering indoor finishes, with multiple titles and records showing his dominance under pressure.",
  "instagram": "#"
},
];

const Athletes = () => {
  const [selectedSport, setSelectedSport] = useState("All");
  const [selectedAthlete, setSelectedAthlete] = useState<(typeof athletes)[0] | null>(null);
  
  const filteredAthletes = selectedSport === "All" 
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
            
            {/* Featured Athletes Section (only show if All Sports or relevant sport selected)
            {(selectedSport === "All Sports" || athletes.some(a => a.sport === selectedSport )) && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8">Featured Athletes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {filteredAthletes
                   
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
             */}
            {/* All Athletes Grid */}
            <div>
              <h3 className="text-2xl font-bold mb-8">
                {selectedSport === "All Sports" ? "All Athletes" : selectedSport + " Athletes"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
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
                      src="https://plus.unsplash.com/premium_photo-1664303543960-ce881bfb7e64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2x5bXBpY3MlMjAlMjBydW58ZW58MHwwfDB8fHww" 
                      alt="Athlete Training" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-tr-[50px] overflow-hidden mt-12">
                    <img 
                      src="https://images.unsplash.com/photo-1526676537331-7747bf8278fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9seW1waWNzJTIwJTIwcnVufGVufDB8MHwwfHx8MA%3D%3D" 
                      alt="Athlete Performance" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-bl-[50px] overflow-hidden -mt-12">
                    <img 
                      src="https://images.unsplash.com/photo-1538061210394-c72c824af0fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9seW1waWNzJTIwJTIwcnVufGVufDB8MHwwfHx8MA%3D%3D" 
                      alt="Athlete Media" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-br-[50px] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1646743934958-ae9d951e5dc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTAwMG0lMjBydW58ZW58MHwwfDB8fHww" 
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
                  {/* {selectedAthlete.twitter && (
                    <a href={selectedAthlete.twitter} className="p-2 rounded-full border border-rehoboth-purple/30 hover:bg-rehoboth-purple/10">
                      <Twitter size={20} />
                    </a>
                  )} */}
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
