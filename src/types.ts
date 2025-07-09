export type PromptCategory = 
  | 'text' 
  | 'image' 
  | 'video' 
  | 'code' 
  | 'youtube' 
  | 'instagram' 
  | 'hooks' 
  | 'trending-tags'
  | 'tiktok-hook'
  | 'reels-script'
  | 'ai-story'
  | 'seo-keywords';

export interface Prompt {
  id: string;
  title: string;
  content: string;
  category: PromptCategory;
  userId: string;
  createdAt: string;
  upvotes: number;
}

export interface User {
  id: string;
  email: string;
  savedPrompts: string[];
}