import React, { useState } from 'react';
import { Send, Mic } from 'lucide-react';

interface CommandBarProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const CommandBar: React.FC<CommandBarProps> = ({ onSend, disabled }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto flex items-center gap-3 bg-[#161b22] border border-[#2d333b] rounded-xl p-2 px-4 shadow-lg">
      <button type="button" className="p-2 text-gray-400 hover:text-[#58a6ff] hover:bg-[#0d1117] rounded-lg transition-all">
        <Mic className="w-5 h-5" />
      </button>
      
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask JARVIS anything..."
        disabled={disabled}
        className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-500"
      />
      
      <button
        type="submit"
        disabled={disabled || !input.trim()}
        className="px-4 py-2 bg-[#58a6ff] hover:bg-blue-600 disabled:opacity-40 text-white text-sm font-medium rounded-lg flex items-center gap-2 transition-all"
      >
        <span>Send</span>
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
};