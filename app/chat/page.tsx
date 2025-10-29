// Just updated the frontend

'use client';

import { useState, useRef, useEffect } from 'react'; 
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content:
        "Assalamu alaykum! Welcome to TaxEdu.pk. I'm your AI tax education assistant. I can help you understand FBR registration, tax filing requirements, business registration, and more. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement;
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsTyping(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const API_KEY = process.env.NEXT_PUBLIC_CHAT_API_KEY;

      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          messages: updatedMessages
            .slice(-10)
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server Error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || '⚠️ No response received from the assistant.',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          role: 'assistant',
          content: '⚠️ Something went wrong. Please try again later.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };


  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-gray-900">Tax Education Assistant</h1>
            <div className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold">
              <Sparkles className="w-4 h-4 mr-1" />
              Demo MVP
            </div>
          </div>
          <p className="text-gray-600">
            Ask me anything about FBR registration, tax filing, business setup, and more
          </p>
        </div>

        <Card className="bg-white shadow-lg border-2 border-emerald-100">
          <ScrollArea className="h-[550px] p-6" ref={scrollAreaRef}> 
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      message.role === 'user'
                        ? 'bg-gray-200'
                        : 'bg-gradient-to-br from-emerald-500 to-emerald-600'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <User className="w-5 h-5 text-gray-700" />
                    ) : (
                      <Bot className="w-5 h-5 text-white" />
                    )}
                  </div>

                  <div
                    className={`flex-1 max-w-[80%] ${
                      message.role === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div
                      className={`inline-block px-4 py-3 rounded-2xl whitespace-pre-wrap ${
                        message.role === 'user'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      {message.role === 'assistant' ? (
                        <div className="text-sm leading-relaxed prose prose-sm max-w-none">
                          <ReactMarkdown>
                            {message.content}
                          </ReactMarkdown>
                        </div>
                      ) : (
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1 px-2">
                      {message.timestamp.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-4 py-3 rounded-2xl bg-gray-100">
                      <div className="flex gap-1">
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: '0ms' }}
                        />
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: '150ms' }}
                        />
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: '300ms' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about tax filing, FBR registration, business setup..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Responses are generated by an AI tax assistant connected to your backend.
            </p>
          </div>
        </Card>

        <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
          <h3 className="font-semibold text-emerald-900 mb-2">Try asking:</h3>
          <ul className="text-sm text-emerald-800 space-y-1">
            <li>• How do I register as an FBR filer?</li>
            <li>• What documents do I need to register my startup?</li>
            <li>• How to register for NTN as a sole proprietor?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}