import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { AssistantOrb } from './components/assistant/AssistantOrb';
import { CommandBar } from './components/chat/CommandBar';
import { Message } from './types';
import { assistantService } from './services/assistant.service';

export function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (text: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      // Backend Integration Call
      const res = await assistantService.sendMessage(text);
      const jarvisMsg: Message = {
        id: res.messageId || (Date.now() + 1).toString(),
        sender: 'jarvis',
        text: res.response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, jarvisMsg]);
    } catch (error) {
      // Offline / Local Fallback Simulation agar backend run na ho raha ho
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'jarvis',
        text: "Offline Mode: JARVIS Backend API is currently unreachable.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200 flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col justify-between p-8 overflow-y-auto">
          {/* Top Section / Chat Log */}
          <div className="flex-1 flex flex-col items-center justify-center max-w-4xl w-full mx-auto space-y-6">
            {messages.length === 0 ? (
              <AssistantOrb />
            ) : (
              <div className="w-full space-y-4 overflow-y-auto max-h-[60vh] pr-2">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-xl p-4 rounded-xl text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-[#58a6ff]/20 text-white border border-[#58a6ff]/40 rounded-br-none'
                          : 'bg-[#161b22] text-gray-200 border border-[#2d333b] rounded-bl-none'
                      }`}
                    >
                      <p className="font-semibold text-xs mb-1 text-gray-400">
                        {msg.sender === 'user' ? 'You' : 'J.A.R.V.I.S.'}
                      </p>
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-gray-500 mt-1">{msg.timestamp}</span>
                  </div>
                ))}
                {loading && (
                  <div className="text-left">
                    <div className="bg-[#161b22] border border-[#2d333b] p-3 rounded-xl inline-block text-xs text-[#58a6ff] animate-pulse">
                      JARVIS is thinking...
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Command Input */}
          <div className="w-full pt-4">
            <CommandBar onSend={handleSendMessage} disabled={loading} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;