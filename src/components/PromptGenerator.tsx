import React, { useState } from 'react';
import { Wand2, Copy, Check } from 'lucide-react';
import type { PromptCategory } from '../types';

interface PromptGeneratorProps {
  category: PromptCategory;
  onGenerate: (input: string) => Promise<void>;
  isGenerating: boolean;
  generatedPrompt: string;
}

export function PromptGenerator({ category, onGenerate, isGenerating, generatedPrompt }: PromptGeneratorProps) {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isGenerating) return;
    await onGenerate(input);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const placeholderText = {
    text: "Describe what kind of text you want to generate (e.g., 'A blog post about sustainable living')",
    image: "Describe the image you want to create (e.g., 'A serene landscape with mountains at sunset')",
    video: "Describe the video concept you want to generate (e.g., 'A product demonstration for a smart home device')",
    code: "Describe what you want to code (e.g., 'A React component for a user profile card')",
    youtube: "Describe your video content (e.g., 'A tutorial about machine learning basics for beginners')",
    instagram: "Describe your post content (e.g., 'A motivational post about achieving fitness goals')",
    hooks: "Describe the React hook functionality (e.g., 'A custom hook for handling form validation')",
    'trending-tags': "Enter your content niche or topic (e.g., 'Tech tutorials' or 'Fitness motivation')",
    'tiktok-hook': "Describe your video concept (e.g., 'A productivity hack that will shock people')",
    'reels-script': "Describe your video idea (e.g., 'A day in the life of a software developer')",
    'ai-story': "Provide a story theme or concept (e.g., 'A tale about friendship and artificial intelligence')",
    'seo-keywords': "Enter your content topic or niche (e.g., 'Organic gardening tips' or 'Remote work tools')"
  }[category];

  const getCategoryTitle = (cat: PromptCategory) => {
    const titles = {
      text: "Text Generator",
      image: "Image Prompt Generator",
      video: "Video Concept Generator",
      code: "Code Prompt Generator",
      youtube: "YouTube Title & Description Generator",
      instagram: "Instagram Caption Generator",
      hooks: "React Hook Generator",
      'trending-tags': "Trending Tags Generator",
      'tiktok-hook': "TikTok Hook Generator",
      'reels-script': "Reels Script Generator",
      'ai-story': "AI Story Generator",
      'seo-keywords': "SEO Keyword Generator"
    };
    return titles[cat] || "Prompt Generator";
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-200">
          {getCategoryTitle(category)}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Generate high-quality, detailed content for your needs
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholderText}
            className="w-full h-40 p-6 bg-white dark:bg-blue-950 rounded-xl shadow-lg border border-blue-100 dark:border-blue-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-lg"
            disabled={isGenerating}
          />
          <div className="absolute bottom-4 right-4">
            <button
              type="submit"
              disabled={isGenerating || !input.trim()}
              className={`flex items-center gap-2 px-8 py-3 rounded-lg text-white font-medium transition-all shadow-md hover:shadow-lg ${
                isGenerating || !input.trim()
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              <Wand2 className="w-5 h-5" />
              <span>{isGenerating ? 'Generating...' : 'Generate Content'}</span>
            </button>
          </div>
        </div>
      </form>

      {generatedPrompt && (
        <div className="bg-white dark:bg-blue-950 rounded-xl shadow-lg p-6 border border-blue-100 dark:border-blue-800">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-200">Generated Content</h4>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{generatedPrompt}</p>
          </div>
        </div>
      )}
    </div>
  );
}