import { apiClient } from '../api/client';
import { ChatResponse } from '../types';

export const assistantService = {
  async sendMessage(message: string, conversationId?: string): Promise<ChatResponse> {
    const response = await apiClient.post<ChatResponse>('/assistant/chat', {
      message,
      conversationId,
    });
    return response.data;
  },
};