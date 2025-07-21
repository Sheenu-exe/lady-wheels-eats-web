import { Sparkles, Star, Zap } from "lucide-react";

interface FloatingElementsProps {
  className?: string;
}

const FloatingElements = ({ className = "" }: FloatingElementsProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Floating Stars */}
      <div className="floating-element top-10 left-10 animate-float-slow">
        <Star className="w-6 h-6 text-yellow-400 opacity-60" fill="currentColor" />
      </div>
      
      <div className="floating-element top-1/4 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-4 h-4 text-warm-orange opacity-50" />
      </div>
      
      <div className="floating-element bottom-1/3 left-1/4 animate-float-slow" style={{ animationDelay: '2s' }}>
        <Zap className="w-5 h-5 text-bright-red opacity-40" />
      </div>
      
      <div className="floating-element top-1/2 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
        <Star className="w-3 h-3 text-mint-green opacity-60" fill="currentColor" />
      </div>

      {/* Floating Circles */}
      <div className="floating-element top-20 right-1/4 w-8 h-8 bg-gradient-warm rounded-full opacity-20 animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="floating-element bottom-20 left-16 w-4 h-4 bg-mustard rounded-full opacity-30 animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="floating-element top-3/4 right-1/3 w-6 h-6 bg-warm-orange rounded-full opacity-25 animate-float-slow" style={{ animationDelay: '2.5s' }}></div>

      {/* Dotted Lines */}
      <svg className="floating-element top-1/3 left-1/3 w-20 h-20 opacity-30 animate-tilt" style={{ animationDelay: '1s' }}>
        <path
          d="M10,10 Q30,5 50,10 T90,10"
          stroke="hsl(var(--mustard))"
          strokeWidth="2"
          strokeDasharray="3,3"
          fill="none"
        />
      </svg>
      
      <svg className="floating-element bottom-1/4 right-1/5 w-16 h-16 opacity-25 animate-tilt" style={{ animationDelay: '2s' }}>
        <circle cx="8" cy="8" r="2" fill="hsl(var(--warm-orange))" opacity="0.6" />
        <circle cx="24" cy="8" r="2" fill="hsl(var(--warm-orange))" opacity="0.4" />
        <circle cx="40" cy="8" r="2" fill="hsl(var(--warm-orange))" opacity="0.6" />
      </svg>

      {/* Drifting Elements */}
      <div className="absolute top-0 w-2 h-2 bg-yellow-300 rounded-full opacity-40 animate-drift" style={{ animationDelay: '0s', animationDuration: '25s' }}></div>
      <div className="absolute top-1/4 w-1 h-1 bg-warm-orange rounded-full opacity-50 animate-drift" style={{ animationDelay: '5s', animationDuration: '30s' }}></div>
      <div className="absolute top-1/2 w-3 h-3 bg-bright-red rounded-full opacity-30 animate-drift" style={{ animationDelay: '10s', animationDuration: '20s' }}></div>
    </div>
  );
};

export default FloatingElements;