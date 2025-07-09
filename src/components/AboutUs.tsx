import React from 'react';
import { 
  Zap, 
  Target, 
  Sparkles, 
  Clock, 
  Rocket, 
  Shield, 
  Brain,
  Award,
  Users,
  Lightbulb
} from 'lucide-react';

export function AboutUs() {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Generation",
      description: "Generate high-quality prompts in seconds using advanced AI technology"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Platform-Optimized",
      description: "Tailored content for each social media platform's unique requirements"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Intelligence",
      description: "Leveraging cutting-edge AI models for superior content generation"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assured",
      description: "Advanced algorithms ensure high-quality, relevant content every time"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time-Saving",
      description: "Reduce content creation time by up to 80% with our automated tools"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "SEO Optimized",
      description: "Built-in SEO optimization for better content visibility and ranking"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "1M+", label: "Prompts Generated" },
    { number: "90%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-blue-950 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-200 mb-6">
            Empowering Creators with AI
          </h2>
          <p className="text-xl text-blue-700 dark:text-blue-300 max-w-3xl mx-auto">
            We're on a mission to revolutionize content creation by making professional-grade AI tools accessible to everyone. Our platform combines cutting-edge technology with user-friendly design to help creators produce exceptional content across all platforms.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-blue-900 dark:text-blue-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-4">
              Our Core Values
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-blue-950 rounded-xl p-8 shadow-lg border border-blue-100 dark:border-blue-800">
              <Users className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mb-3">
                User-Centric
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Every feature we build starts with understanding our users' needs and challenges.
              </p>
            </div>
            <div className="bg-white dark:bg-blue-950 rounded-xl p-8 shadow-lg border border-blue-100 dark:border-blue-800">
              <Lightbulb className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mb-3">
                Innovation
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                We continuously push the boundaries of what's possible with AI technology.
              </p>
            </div>
            <div className="bg-white dark:bg-blue-950 rounded-xl p-8 shadow-lg border border-blue-100 dark:border-blue-800">
              <Award className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mb-3">
                Excellence
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                We're committed to delivering the highest quality tools and results for our users.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-4">
              Why Choose PromptoAI
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-blue-950 rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-800 hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}