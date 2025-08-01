import { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&crop=face",
    color: "#00D4FF",
    bio: "Leading AI and autonomous vehicle development with 15+ years in automotive innovation."
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Lead Design Engineer", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    color: "#A855F7",
    bio: "Visionary designer shaping the future of sustainable transportation aesthetics."
  }
];

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const hoveredMemberData = teamMembers.find(member => member.id === hoveredMember);

  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-transparent bg-gradient-primary bg-clip-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the visionaries driving innovation in future mobility
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Team member list */}
          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="flex items-center space-x-6">
                  <div className="flex-1">
                    <h3 className={`text-3xl font-bold transition-all duration-300 ${
                      hoveredMember === member.id 
                        ? 'text-primary transform scale-105' 
                        : 'text-foreground group-hover:text-primary'
                    }`}>
                      {member.name}
                    </h3>
                    
                    {/* Job title appears on hover */}
                    <div className={`transition-all duration-300 overflow-hidden ${
                      hoveredMember === member.id 
                        ? 'max-h-20 opacity-100 mt-3' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-lg font-medium" style={{ color: member.color }}>
                        {member.title}
                      </p>
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    hoveredMember === member.id 
                      ? 'opacity-100 scale-125' 
                      : 'opacity-30 scale-100'
                  }`} style={{ backgroundColor: member.color }} />
                </div>

                {/* Underline effect */}
                <div className={`h-0.5 mt-4 transition-all duration-300 ${
                  hoveredMember === member.id ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`} style={{ backgroundColor: member.color }} />
              </div>
            ))}
          </div>

          {/* Right side - Member image */}
          <div className="relative h-[600px] flex items-center justify-center">
            {hoveredMemberData && (
              <div className="relative animate-scale-in">
                {/* Vibrant background circle */}
                <div 
                  className="absolute inset-0 w-80 h-80 mx-auto rounded-full animate-glow-pulse"
                  style={{ 
                    backgroundColor: hoveredMemberData.color,
                    filter: 'blur(20px)',
                    transform: 'scale(1.2)',
                  }}
                />
                
                {/* Secondary glow effect */}
                <div 
                  className="absolute inset-0 w-80 h-80 mx-auto rounded-full opacity-40 animate-pulse"
                  style={{ 
                    background: `radial-gradient(circle, ${hoveredMemberData.color}60, transparent 70%)`,
                    transform: 'scale(1.5)',
                  }}
                />

                {/* Main image container */}
                <div 
                  className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 transition-all duration-500 hover:scale-105"
                  style={{ borderColor: hoveredMemberData.color }}
                >
                  <img
                    src={hoveredMemberData.image}
                    alt={hoveredMemberData.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `linear-gradient(45deg, ${hoveredMemberData.color}, transparent)`,
                    }}
                  />
                </div>

                {/* Floating accent elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 rounded-full animate-float"
                      style={{
                        backgroundColor: hoveredMemberData.color,
                        left: `${20 + i * 25}%`,
                        top: `${15 + i * 20}%`,
                        animationDelay: `${i * 0.5}s`,
                        opacity: 0.6,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Placeholder when no hover */}
            {!hoveredMemberData && (
              <div className="text-center text-muted-foreground animate-fade-in">
                <div className="w-80 h-80 mx-auto rounded-full border-2 border-dashed border-border flex items-center justify-center">
                  <div>
                    <div className="text-6xl mb-4">👥</div>
                    <p className="text-lg">Hover over a team member</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;