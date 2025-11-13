export const NeuralBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-20">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(243, 75%, 59%)" stopOpacity="0.5" />
            <stop offset="50%" stopColor="hsl(271, 81%, 56%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(173, 80%, 40%)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        
        {/* Neural network lines */}
        <g className="animate-neural-pulse">
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#neural-gradient)" strokeWidth="2" />
          <line x1="30%" y1="40%" x2="50%" y2="30%" stroke="url(#neural-gradient)" strokeWidth="2" />
          <line x1="50%" y1="30%" x2="70%" y2="50%" stroke="url(#neural-gradient)" strokeWidth="2" />
          <line x1="70%" y1="50%" x2="90%" y2="40%" stroke="url(#neural-gradient)" strokeWidth="2" />
          <line x1="20%" y1="60%" x2="40%" y2="80%" stroke="url(#neural-gradient)" strokeWidth="2" />
          <line x1="40%" y1="80%" x2="60%" y2="70%" stroke="url(#neural-gradient)" strokeWidth="2" />
          <line x1="60%" y1="70%" x2="80%" y2="85%" stroke="url(#neural-gradient)" strokeWidth="2" />
          
          {/* Neural nodes */}
          <circle cx="10%" cy="20%" r="4" fill="hsl(243, 75%, 59%)" className="animate-pulse-slow" />
          <circle cx="30%" cy="40%" r="4" fill="hsl(271, 81%, 56%)" className="animate-pulse-slow" />
          <circle cx="50%" cy="30%" r="4" fill="hsl(173, 80%, 40%)" className="animate-pulse-slow" />
          <circle cx="70%" cy="50%" r="4" fill="hsl(243, 75%, 59%)" className="animate-pulse-slow" />
          <circle cx="90%" cy="40%" r="4" fill="hsl(271, 81%, 56%)" className="animate-pulse-slow" />
          <circle cx="20%" cy="60%" r="4" fill="hsl(173, 80%, 40%)" className="animate-pulse-slow" />
          <circle cx="40%" cy="80%" r="4" fill="hsl(243, 75%, 59%)" className="animate-pulse-slow" />
          <circle cx="60%" cy="70%" r="4" fill="hsl(271, 81%, 56%)" className="animate-pulse-slow" />
          <circle cx="80%" cy="85%" r="4" fill="hsl(173, 80%, 40%)" className="animate-pulse-slow" />
        </g>
      </svg>
    </div>
  );
};
