import React from 'react';
import { 
  Type, 
  Image, 
  Video, 
  Code, 
  Youtube, 
  Instagram, 
  Component,
  Hash,
  Sparkles,
  ScrollText,
  BookOpen,
  Search
} from 'lucide-react';
import type { PromptCategory } from '../types';

interface CategorySelectorProps {
  selected: PromptCategory;
  onSelect: (category: PromptCategory) => void;
}

export function CategorySelector({ selected, onSelect }: CategorySelectorProps) {
  const categories: { id: PromptCategory; icon: React.ReactNode; label: string }[] = [
    { id: 'text', icon: <Type className="w-5 h-5" />, label: 'Text' },
    { id: 'image', icon: <Image className="w-5 h-5" />, label: 'Image' },
    { id: 'video', icon: <Video className="w-5 h-5" />, label: 'Video' },
    { id: 'code', icon: <Code className="w-5 h-5" />, label: 'Code' },
    { id: 'youtube', icon: <Youtube className="w-5 h-5" />, label: 'YouTube' },
    { id: 'instagram', icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
    { id: 'hooks', icon: <Component className="w-5 h-5" />, label: 'React Hooks' },
    { id: 'trending-tags', icon: <Hash className="w-5 h-5" />, label: 'Trending Tags' },
    { id: 'tiktok-hook', icon: <Sparkles className="w-5 h-5" />, label: 'TikTok Hook' },
    { id: 'reels-script', icon: <ScrollText className="w-5 h-5" />, label: 'Reels Script' },
    { id: 'ai-story', icon: <BookOpen className="w-5 h-5" />, label: 'AI Story' },
    { id: 'seo-keywords', icon: <Search className="w-5 h-5" />, label: 'SEO Keywords' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg ${
            selected === category.id
              ? 'bg-blue-600 text-white'
              : 'bg-white dark:bg-blue-950 text-blue-900 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900 border border-blue-100 dark:border-blue-800'
          }`}
        >
          {category.icon}
          <span className="font-medium">{category.label}</span>
        </button>
      ))}
    </div>
  );
}