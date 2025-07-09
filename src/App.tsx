import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { ThemeToggle } from './components/ThemeToggle';
import { CategorySelector } from './components/CategorySelector';
import { PromptCard } from './components/PromptCard';
import { PromptGenerator } from './components/PromptGenerator';
import { CommunityShowcase } from './components/CommunityShowcase';
import { AboutUs } from './components/AboutUs';
import { generatePrompt } from './lib/gemini';
import type { PromptCategory, Prompt } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory>('text');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [prompts] = useState<Prompt[]>([
    {
      id: '1',
      title: 'Creative Story Writing',
      content: 'Write a short story about a time traveler who accidentally changes a minor historical event and must deal with the unexpected consequences.',
      category: 'text',
      userId: '1',
      createdAt: new Date().toISOString(),
      upvotes: 42
    },
    {
      id: '2',
      title: 'Cyberpunk Character',
      content: 'Create a highly detailed cyberpunk character portrait with neon lighting, cybernetic enhancements, and a futuristic cityscape background.',
      category: 'image',
      userId: '1',
      createdAt: new Date().toISOString(),
      upvotes: 38
    }
  ]);

  const handleUpvote = (id: string) => {
    console.log('Upvoting prompt:', id);
  };

  const handleGeneratePrompt = async (input: string) => {
    setIsGenerating(true);
    try {
      const result = await generatePrompt(input, selectedCategory);
      setGeneratedPrompt(result);
    } catch (error) {
      console.error('Error generating prompt:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-blue-950 shadow-lg border-b border-blue-100 dark:border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                PromptoAI
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  'Create Perfect AI Prompts',
                  2000,
                  'Generate Amazing Content',
                  2000,
                  'Transform Your Ideas',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-blue-900 dark:text-blue-200 text-xl max-w-3xl mx-auto">
              Transform your ideas into powerful prompts for text, image, video, and code generation.
            </p>
          </div>

          <PromptGenerator
            category={selectedCategory}
            onGenerate={handleGeneratePrompt}
            isGenerating={isGenerating}
            generatedPrompt={generatedPrompt}
          />

          <div className="mt-20">
            <h3 className="text-2xl font-semibold mb-8 text-blue-900 dark:text-blue-200">
              Explore Popular Prompts
            </h3>
            <CategorySelector
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {prompts
                .filter(prompt => prompt.category === selectedCategory)
                .map(prompt => (
                  <PromptCard
                    key={prompt.id}
                    prompt={prompt}
                    onUpvote={handleUpvote}
                  />
                ))}
            </div>
          </div>
        </div>

        <AboutUs />
        <CommunityShowcase />
      </main>
    </div>
  );
}

export default App;