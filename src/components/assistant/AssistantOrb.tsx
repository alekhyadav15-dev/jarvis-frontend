import React from 'react';

export const AssistantOrb: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Outer Pulsing Glow */}
        <div className="absolute inset-0 rounded-full bg-jarvis-accent/20 animate-ping"></div>
        
        {/* Core Orb */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-jarvis-accent via-blue-400 to-jarvis-purple shadow-[0_0_50px_rgba(88,166,255,0.4)] flex items-center justify-center border-2 border-white/20">
          <div className="w-16 h-16 rounded-full bg-jarvis-bg/80 backdrop-blur-sm border border-jarvis-accent/50 animate-pulse"></div>
        </div>
      </div>
      <p className="mt-6 text-sm text-gray-400 tracking-widest uppercase">JARVIS IS READY</p>
    </div>
  );
};