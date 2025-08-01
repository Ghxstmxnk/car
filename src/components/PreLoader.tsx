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
    <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center">
      {/* Progress counter */}
      <div className="text-6xl md:text-8xl font-light text-white mb-8 animate-fade-in font-sans">
        {count}
      </div>
      
      {/* Main text */}
      <div className="text-2xl md:text-4xl font-light text-center max-w-4xl leading-relaxed">
        <span className="text-white font-sans">PREMIUM AUTOMOTIVE SHOWCASE</span>
      </div>
    </div>
  );
};

export default PreLoader;