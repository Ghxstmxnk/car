import { useState, useRef, useEffect } from "react";

const galleryImages = [
  {
    id: 1,
    title: "Digital Circuit",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=200&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop",
    color: "#00D4FF",
    category: "Technology"
  },
  {
    id: 2,
    title: "Code Matrix",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=200&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&h=1080&fit=crop",
    color: "#A855F7",
    category: "Digital"
  },
  {
    id: 3,
    title: "Matrix Reality",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=200&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop",
    color: "#06FFA5",
    category: "Abstract"
  },
  {
    id: 4,
    title: "Starry Night",
    thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1e0cb?w=200&h=200&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1e0cb?w=1920&h=1080&fit=crop",
    color: "#FF6B6B",
    category: "Cosmic"
  },
  {
    id: 5,
    title: "Ocean Wave",
    thumbnail: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=200&h=200&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1920&h=1080&fit=crop",
    color: "#00BFFF",
    category: "Nature"
  },
  {
    id: 6,
    title: "Orange Bloom",
    thumbnail: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=200&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1920&h=1080&fit=crop",
    color: "#FF8C00",
    category: "Organic"
  },
  {
    id: 7,
    title: "Light Patterns",
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=200&h=200&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop",
    color: "#FFD700",
    category: "Light"
  },
  {
    id: 8,
    title: "Modern Space",
    thumbnail: "https://images.unsplash.com/photo-1517022812141-2362092800607?w=200&h=200&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1517022812141-2362092800607?w=1920&h=1080&fit=crop",
    color: "#8A2BE2",
    category: "Interior"
  }
];

interface MousePosition {
  x: number;
  y: number;
}

const ImageGallery = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isFullScreenVisible, setIsFullScreenVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    if (hoveredImage !== null) {
      document.addEventListener('mousemove', handleMouseMove);
      setIsFullScreenVisible(true);
    } else {
      setIsFullScreenVisible(false);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoveredImage]);

  const hoveredImageData = galleryImages.find(img => img.id === hoveredImage);

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visual <span className="text-transparent bg-gradient-primary bg-clip-text">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore abstract and dynamic visuals that come alive with your interaction
          </p>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8" ref={containerRef}>
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={image.thumbnail}
                  alt={image.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: `linear-gradient(45deg, ${image.color}40, transparent)`,
                  }}
                />
                
                {/* Category badge */}
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span 
                    className="text-xs px-2 py-1 rounded-full text-black font-medium"
                    style={{ backgroundColor: image.color }}
                  >
                    {image.category}
                  </span>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-medium text-foreground">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full-screen dynamic image */}
        {hoveredImageData && isFullScreenVisible && (
          <div className="fixed inset-0 z-[100] pointer-events-none">
            {/* Animated background layers */}
            <div 
              className="absolute inset-0 transition-all duration-700 ease-out"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${hoveredImageData.color}20, transparent 50%)`,
                transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`,
              }}
            />

            {/* Multiple morphing layers */}
            <div 
              className="absolute inset-0 opacity-60"
              style={{
                background: `
                  radial-gradient(circle at ${mousePosition.x * 0.8}px ${mousePosition.y * 1.2}px, ${hoveredImageData.color}30, transparent 40%),
                  radial-gradient(circle at ${mousePosition.x * 1.3}px ${mousePosition.y * 0.7}px, ${hoveredImageData.color}20, transparent 60%)
                `,
                filter: 'blur(40px)',
                transform: `rotate(${mousePosition.x * 0.1}deg) scale(${1 + Math.sin(Date.now() * 0.002) * 0.1})`,
              }}
            />

            {/* Main full-screen image with dynamic effects */}
            <div 
              className="absolute inset-0 flex items-center justify-center animate-scale-in"
              style={{
                transform: `
                  translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)
                  scale(${0.9 + (mousePosition.x / window.innerWidth) * 0.2})
                `,
              }}
            >
              <div 
                className="relative w-[80vw] h-[80vh] rounded-3xl overflow-hidden"
                style={{
                  clipPath: `polygon(
                    ${Math.max(5, (mousePosition.x / window.innerWidth) * 15)}% ${Math.max(5, (mousePosition.y / window.innerHeight) * 15)}%,
                    ${Math.min(95, 100 - ((window.innerWidth - mousePosition.x) / window.innerWidth) * 15)}% ${Math.max(5, (mousePosition.y / window.innerHeight) * 15)}%,
                    ${Math.min(95, 100 - ((window.innerWidth - mousePosition.x) / window.innerWidth) * 15)}% ${Math.min(95, 100 - ((window.innerHeight - mousePosition.y) / window.innerHeight) * 15)}%,
                    ${Math.max(5, (mousePosition.x / window.innerWidth) * 15)}% ${Math.min(95, 100 - ((window.innerHeight - mousePosition.y) / window.innerHeight) * 15)}%
                  )`,
                }}
              >
                <img
                  src={hoveredImageData.fullImage}
                  alt={hoveredImageData.title}
                  className="w-full h-full object-cover"
                  style={{
                    filter: `
                      hue-rotate(${(mousePosition.x / window.innerWidth) * 360}deg) 
                      saturate(${1.2 + (mousePosition.y / window.innerHeight) * 0.5}) 
                      contrast(${1.1 + (mousePosition.x / window.innerWidth) * 0.3})
                      brightness(${0.9 + (mousePosition.y / window.innerHeight) * 0.4})
                    `,
                    transform: `scale(${1.05 + Math.sin(Date.now() * 0.003) * 0.05}) rotate(${Math.sin(Date.now() * 0.001) * 2}deg)`,
                  }}
                />
                
                {/* Dynamic color overlays */}
                <div 
                  className="absolute inset-0 mix-blend-overlay opacity-40"
                  style={{
                    background: `
                      linear-gradient(${mousePosition.x * 0.5}deg, ${hoveredImageData.color}60, transparent 70%),
                      radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${hoveredImageData.color}30, transparent 50%)
                    `,
                  }}
                />

                {/* Animated particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full animate-float"
                      style={{
                        width: `${4 + (i % 3) * 2}px`,
                        height: `${4 + (i % 3) * 2}px`,
                        left: `${(mousePosition.x / window.innerWidth * 80) + (i * 10) % 90}%`,
                        top: `${(mousePosition.y / window.innerHeight * 80) + (i * 15) % 90}%`,
                        backgroundColor: hoveredImageData.color,
                        animationDelay: `${i * 0.3}s`,
                        opacity: 0.7,
                        transform: `translate(${Math.sin(Date.now() * 0.001 + i) * 20}px, ${Math.cos(Date.now() * 0.001 + i) * 20}px)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Image title overlay */}
            <div 
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <h3 className="text-4xl font-bold text-foreground mb-2">{hoveredImageData.title}</h3>
              <p 
                className="text-lg font-medium"
                style={{ color: hoveredImageData.color }}
              >
                {hoveredImageData.category}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;