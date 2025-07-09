import React from 'react';
import { Copy, ThumbsUp, MessageCircle } from 'lucide-react';
import type { Prompt } from '../types';

interface PromptCardProps {
  prompt: Prompt;
  onUpvote: (id: string) => void;
}

export function PromptCard({ prompt, onUpvote }: PromptCardProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt.content);
  };

  return (
    <div className="bg-white dark:bg-blue-950 rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-800 transition-all hover:shadow-xl">
      <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-200">{prompt.title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{prompt.content}</p>
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <button
            onClick={() => onUpvote(prompt.id)}
            className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            <ThumbsUp className="w-4 h-4" />
            <span>{prompt.upvotes}</span>
          </button>
          <button className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            <MessageCircle className="w-4 h-4" />
            <span>Comment</span>
          </button>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          <Copy className="w-4 h-4" />
          <span>Copy</span>
        </button>
      </div>
    </div>
  );
}