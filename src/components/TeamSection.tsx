import { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Marcus Rodriguez",
    title: "Lead Designer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&crop=face",
    color: "#FF6B35",
    bio: "Visionary automotive designer with over 12 years of experience crafting iconic vehicle aesthetics."
  },
  {
    id: 2,
    name: "Elena Vasquez",
    title: "Performance Engineer", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    color: "#00FF87",
    bio: "Expert in high-performance automotive engineering, specializing in aerodynamics and powertrain optimization."
  }
];

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const hoveredMemberData = teamMembers.find(member => member.id === hoveredMember);

  return (
    <section id="team" className="py-20 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-gray-400">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The talented individuals behind our automotive excellence
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
                        ? 'transform scale-105' 
                        : 'text-white group-hover:text-white'
                    style={{
                      color: hoveredMember === member.id ? member.color : '#ffffff'
                    }}
                    }`}>
                      {member.name}
                    </h3>
                    
                    {/* Job title appears on hover */}
                    <div className={`transition-all duration-300 overflow-hidden ${
                      hoveredMember === member.id 
                        ? 'max-h-20 opacity-100 mt-3' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-lg font-medium text-gray-300">
                        {member.title}
                      </p>
                      <p className="text-gray-400 mt-2 text-sm leading-relaxed">
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
                  className="absolute inset-0 w-80 h-80 mx-auto rounded-full"
                  style={{ 
                    backgroundColor: hoveredMemberData.color,
                    filter: 'blur(40px)',
                    transform: 'scale(1.4)',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
                
                {/* Secondary vibrant layer */}
                <div 
                  className="absolute inset-0 w-80 h-80 mx-auto rounded-full opacity-60"
                  style={{ 
                    backgroundColor: hoveredMemberData.color,
                    filter: 'blur(20px)',
                    transform: 'scale(1.2)',
                  }}
                />

                {/* Main image container */}
                <div 
                  className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 transition-all duration-500 hover:scale-105"
                  style={{ 
                    borderColor: hoveredMemberData.color,
                    boxShadow: `0 0 60px ${hoveredMemberData.color}80`
                  }}
                >
                  <img
                    src={hoveredMemberData.image}
                    alt={hoveredMemberData.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name and title overlay */}
                <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 text-center">
                  <h4 className="text-xl font-bold text-white mb-1">{hoveredMemberData.name}</h4>
                  <p className="text-sm" style={{ color: hoveredMemberData.color }}>
                    {hoveredMemberData.title}
                  </p>
                </div>
              </div>
            )}

            {/* Placeholder when no hover */}
            {!hoveredMemberData && (
              <div className="text-center text-gray-500 animate-fade-in">
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