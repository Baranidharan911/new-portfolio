import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a0a0f] transition-opacity duration-700">
      <div className="text-center">
        <div className="font-mono text-6xl font-bold bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent mb-8 animate-pulse">
          B.
        </div>
        <div className="w-[280px] h-1 bg-[#161622] rounded overflow-hidden mb-5">
          <div 
            className="h-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4] rounded transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="font-mono text-sm text-[#64748b] tracking-[4px]">
          LOADING PORTFOLIO...
        </div>
      </div>
    </div>
  );
};

export default Loader;
