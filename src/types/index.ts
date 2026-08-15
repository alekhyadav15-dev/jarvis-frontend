export type AssistantStatus = 'IDLE' | 'LISTENING' | 'PROCESSING' | 'RESPONDING' | 'SPEAKING' | 'ERROR';

export interface Message {
  id: string;
  sender: 'user' | 'jarvis';
  text: string;
  timestamp: string;
}

export interface ChatResponse {
  response: string;
  conversationId: string;
  messageId: string;
}