import { useState, useEffect } from "react";

interface PreLoaderProps {
  onComplete: () => void;
}

const PreLoader = ({ onComplete }: PreLoaderProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prevCount + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-[9999] flex flex-col items-center justify-center">
      {/* Progress counter */}
      <div className="text-6xl md:text-8xl font-light text-foreground mb-4 animate-fade-in">
        {count}
      </div>
      
      {/* Main text */}
      <div className="text-3xl md:text-5xl font-light text-center mb-8 max-w-4xl leading-relaxed">
        <span className="text-foreground">EXPERIENCE THE</span>
        <br />
        <span className="text-transparent bg-gradient-primary bg-clip-text font-medium">
          FUTURE OF MOBILITY
        </span>
      </div>
      
      {/* Secondary text */}
      <div className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
        Please wait a few seconds.
      </div>
      
      {/* Progress bar */}
      <div className="w-80 h-0.5 bg-border mt-8 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-primary transition-all duration-100 ease-out"
          style={{ width: `${count}%` }}
        />
      </div>
    </div>
  );
};

export default PreLoader;