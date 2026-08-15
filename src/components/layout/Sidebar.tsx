import React from 'react';
import { LayoutDashboard, MessageSquare, Mic, History, Cpu, Settings } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: MessageSquare, label: 'Chat', active: false },
  { icon: Mic, label: 'Voice', active: false },
  { icon: History, label: 'History', active: false },
  { icon: Cpu, label: 'System', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-[#161b22] border-r border-[#2d333b] flex flex-col justify-between py-6">
      <div className="space-y-1 px-3">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                item.active
                  ? 'bg-[#58a6ff]/10 text-[#58a6ff] border-l-4 border-[#58a6ff]'
                  : 'text-gray-400 hover:bg-[#0d1117] hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </button>
          );
        })}
      </div>
    </aside>
  );
};