import { useState, useRef, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Aurora X1 Development",
    year: "2024",
    category: "Electric Supercar",
    description: "Revolutionary design process for our flagship electric supercar with autonomous capabilities.",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&h=800&fit=crop",
    color: "#00D4FF"
  },
  {
    id: 2,
    title: "Quantum SUV Innovation",
    year: "2024", 
    category: "Luxury Autonomous",
    description: "Next-generation family vehicle with advanced AI and sustainable materials.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop",
    color: "#A855F7"
  },
  {
    id: 3,
    title: "Neo Sedan Engineering", 
    year: "2023",
    category: "Executive Electric",
    description: "Streamlined design philosophy meeting cutting-edge performance technology.",
    image: "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=1200&h=800&fit=crop",
    color: "#06FFA5"
  },
  {
    id: 4,
    title: "Charging Infrastructure",
    year: "2023",
    category: "Technology",
    description: "Smart charging network design for seamless electric vehicle integration.",
    image: "https://images.unsplash.com/photo-1558618048-fbd25c89cd64?w=1200&h=800&fit=crop",
    color: "#FF6B6B"
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
            Our <span className="text-transparent bg-gradient-primary bg-clip-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our innovative projects that are shaping the future of transportation
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
                <div className="border-b border-border pb-6 hover:border-primary transition-colors duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                      hoveredProject === project.id ? 'text-primary' : 'text-foreground group-hover:text-primary'
                    }`}>
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="text-sm text-primary font-medium mb-3">{project.category}</p>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Dynamic image */}
          <div className="relative h-[600px] lg:sticky lg:top-20">
            {hoveredProjectData && (
              <div 
                className="absolute inset-0 transition-all duration-500 ease-out"
                style={{
                  transform: `translate(${(mousePosition.x - 300) * 0.1}px, ${(mousePosition.y - 300) * 0.1}px)`,
                }}
              >
                {/* Liquid morphing background */}
                <div 
                  className="absolute inset-0 rounded-3xl animate-glow-pulse"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${hoveredProjectData.color}40, transparent 70%)`,
                    filter: 'blur(20px)',
                    transform: `scale(${1 + Math.sin(Date.now() * 0.001) * 0.1})`,
                  }}
                />
                
                {/* Splatter effect overlay */}
                <div 
                  className="absolute inset-0 opacity-60"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x * 0.8}px ${mousePosition.y * 1.2}px, ${hoveredProjectData.color}60, transparent 50%), 
                               radial-gradient(circle at ${mousePosition.x * 1.2}px ${mousePosition.y * 0.6}px, ${hoveredProjectData.color}40, transparent 40%)`,
                    clipPath: `circle(${Math.min(mousePosition.x, mousePosition.y) * 0.5}px at ${mousePosition.x}px ${mousePosition.y}px)`,
                  }}
                />
                
                {/* Main image with morphing mask */}
                <div 
                  className="relative w-full h-full rounded-3xl overflow-hidden animate-scale-in"
                  style={{
                    clipPath: `polygon(
                      ${Math.max(0, mousePosition.x * 0.1)}% ${Math.max(0, mousePosition.y * 0.1)}%,
                      ${Math.min(100, 100 - (mousePosition.x * 0.05))}% ${Math.max(0, mousePosition.y * 0.1)}%,
                      ${Math.min(100, 100 - (mousePosition.x * 0.05))}% ${Math.min(100, 100 - (mousePosition.y * 0.05))}%,
                      ${Math.max(0, mousePosition.x * 0.1)}% ${Math.min(100, 100 - (mousePosition.y * 0.05))}%
                    )`,
                  }}
                >
                  <img
                    src={hoveredProjectData.image}
                    alt={hoveredProjectData.title}
                    className="w-full h-full object-cover"
                    style={{
                      filter: `hue-rotate(${mousePosition.x * 0.5}deg) saturate(${1 + mousePosition.y * 0.001})`,
                    }}
                  />
                  
                  {/* Color overlay with mouse tracking */}
                  <div 
                    className="absolute inset-0 mix-blend-overlay opacity-30"
                    style={{
                      background: `linear-gradient(${mousePosition.x}deg, ${hoveredProjectData.color}, transparent)`,
                    }}
                  />
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 rounded-full animate-float"
                      style={{
                        left: `${mousePosition.x + (i * 50) % 100}px`,
                        top: `${mousePosition.y + (i * 30) % 100}px`,
                        backgroundColor: hoveredProjectData.color,
                        animationDelay: `${i * 0.2}s`,
                        opacity: 0.6,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Placeholder when no hover */}
            {!hoveredProjectData && (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground animate-fade-in">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-lg">Hover over a project to see it come to life</p>
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