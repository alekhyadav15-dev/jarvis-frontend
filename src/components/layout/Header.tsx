import React from 'react';
import { Shield, Activity, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="h-16 border-b border-jarvis-border bg-jarvis-panel px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Shield className="w-6 h-6 text-jarvis-accent" />
        <h1 className="text-lg font-bold text-white tracking-wider">J.A.R.V.I.S.</h1>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-jarvis-green"></span>
          </span>
          <span className="text-xs font-semibold text-jarvis-green uppercase tracking-wider">ONLINE</span>
        </div>

        <div className="flex items-center gap-2 border-l border-jarvis-border pl-6">
          <User className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-300 font-medium">Sir</span>
        </div>
      </div>
    </header>
  );
};