import { useState, useRef, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "McLaren P1",
    year: "2024",
    category: "Hypercar",
    description: "The ultimate expression of McLaren's Formula 1 technology in a road car.",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&h=800&fit=crop",
    color: "#FF6B35"
  },
  {
    id: 2,
    title: "Lamborghini Huracán",
    year: "2024", 
    category: "Supercar",
    description: "Italian excellence meets cutting-edge performance and design.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop",
    color: "#00FF87"
  },
  {
    id: 3,
    title: "Porsche 911 Turbo S", 
    year: "2023",
    category: "Sports Car",
    description: "The perfect balance of everyday usability and track-focused performance.",
    image: "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=1200&h=800&fit=crop",
    color: "#FFD700"
  },
  {
    id: 4,
    title: "Ferrari SF90 Stradale",
    year: "2023",
    category: "Hybrid Supercar",
    description: "Ferrari's most powerful production car, blending V8 power with electric innovation.",
    image: "https://images.unsplash.com/photo-1558618048-fbd25c89cd64?w=1200&h=800&fit=crop",
    color: "#DC143C"
  },
  {
    id: 5,
    title: "Bugatti Chiron",
    year: "2023",
    category: "Hypercar",
    description: "The pinnacle of automotive engineering, delivering unmatched luxury and speed.",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&h=800&fit=crop",
    color: "#4169E1"
  }
];

interface MousePosition {
  x: number;
  y: number;
}

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    if (hoveredProject !== null) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoveredProject]);

  const hoveredProjectData = projects.find(p => p.id === hoveredProject);

  return (
    <section id="portfolio" className="py-20 min-h-screen relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gray-400">Vehicles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of the world's most exceptional automobiles
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Project list */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="border-b border-gray-800 pb-6 hover:border-white transition-colors duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                      hoveredProject === project.id ? 'text-white scale-105' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <p className="text-sm font-medium mb-3" style={{ 
                    color: hoveredProject === project.id ? project.color : '#9CA3AF' 
                  }}>{project.category}</p>
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Dynamic image */}
          <div className="relative h-[600px] lg:sticky lg:top-20">
            {hoveredProjectData && (
              <div 
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  transform: `translate(${(mousePosition.x - 300) * 0.05}px, ${(mousePosition.y - 300) * 0.05}px)`,
                }}
              >
                {/* Liquid ink spreading effect */}
                <div 
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x * 0.8}px ${mousePosition.y * 0.8}px, ${hoveredProjectData.color}60, transparent 60%)`,
                    filter: 'blur(30px)',
                    animation: 'liquid-spread 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                  }}
                />
                
                {/* Secondary liquid layer */}
                <div 
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: `radial-gradient(ellipse at ${mousePosition.x * 1.2}px ${mousePosition.y * 0.7}px, ${hoveredProjectData.color}40, transparent 70%)`,
                    animation: 'liquid-spread 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards',
                    transform: 'scale(0)',
                  }}
                />
                
                {/* Main image with liquid reveal */}
                <div 
                  className="relative w-full h-full rounded-3xl overflow-hidden"
                  style={{
                    clipPath: `circle(0% at ${mousePosition.x}px ${mousePosition.y}px)`,
                    animation: 'liquid-reveal 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards',
                  }}
                >
                  <img
                    src={hoveredProjectData.image}
                    alt={hoveredProjectData.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Subtle color overlay */}
                  <div 
                    className="absolute inset-0 mix-blend-overlay opacity-20"
                    style={{
                      background: `linear-gradient(45deg, ${hoveredProjectData.color}30, transparent 60%)`,
                    }}
                  />
                </div>

                {/* Vehicle title overlay */}
                <div className="absolute bottom-8 left-8 z-10">
                  <h3 className="text-3xl font-bold text-white mb-2">{hoveredProjectData.title}</h3>
                  <p className="text-lg" style={{ color: hoveredProjectData.color }}>
                    {hoveredProjectData.category}
                  </p>
                </div>
              </div>
            )}

            {/* Placeholder when no hover */}
            {!hoveredProjectData && (
              <div className="text-center text-gray-500 animate-fade-in h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚗</div>
                  <p className="text-lg">Hover over a vehicle to see it in detail</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;