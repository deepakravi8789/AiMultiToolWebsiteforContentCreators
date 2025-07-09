import React from 'react';
import { Star, Users, Zap, Trophy, Target, Rocket } from 'lucide-react';

interface ShowcaseItem {
  category: string;
  title: string;
  description: string;
  result: string;
  engagement: string;
}

export function CommunityShowcase() {
  const showcaseItems: ShowcaseItem[] = [
    {
      category: 'YouTube',
      title: 'Tech Tutorial Channel Growth',
      description: 'A tech educator used our YouTube Title & Description Generator to optimize their video content.',
      result: 'Generated highly clickable titles and SEO-optimized descriptions that increased CTR by 47%.',
      engagement: '150K+ views across optimized videos'
    },
    {
      category: 'Instagram',
      title: 'Fitness Influencer Success',
      description: 'Fitness coach leveraged our Instagram Caption Generator and Trending Tags tools.',
      result: 'Created engaging captions with optimal hashtag combinations that increased reach.',
      engagement: '3x increase in post engagement'
    },
    {
      category: 'TikTok',
      title: 'Viral Content Creation',
      description: 'Content creator used our TikTok Hook Generator for business tips videos.',
      result: 'Crafted attention-grabbing hooks that kept viewers watching.',
      engagement: 'Multiple videos reached 1M+ views'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-blue-950 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-200 mb-4">
            Empowering Content Creators
          </h2>
          <p className="text-xl text-blue-700 dark:text-blue-300">
            See how our AI-powered tools are helping creators achieve their goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-blue-950 rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-800 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200">{item.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
              <div className="bg-blue-50 dark:bg-blue-900/50 rounded-lg p-4 mb-4">
                <p className="text-blue-700 dark:text-blue-300 font-medium">{item.result}</p>
              </div>
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <Trophy className="w-5 h-5" />
                <span className="font-medium">{item.engagement}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 rounded-xl p-6 text-white">
            <Users className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Content Creators</h3>
            <p>Generate engaging content that resonates with your audience across all major platforms.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 rounded-xl p-6 text-white">
            <Target className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Marketing Teams</h3>
            <p>Optimize your content strategy with data-driven prompts and trending hashtags.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 rounded-xl p-6 text-white">
            <Rocket className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Developers</h3>
            <p>Generate React hooks, code snippets, and technical content with expert precision.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-blue-100 dark:bg-blue-900 px-6 py-3 rounded-full">
            <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-900 dark:text-blue-200 font-medium">
              Join thousands of creators using our AI tools
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}