const GEMINI_API_KEY = 'AIzaSyDyJ5tCcnjDlj6knaRc8oblkkAdCgvaPMY';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

export async function generatePrompt(input: string, category: string): Promise<string> {
  try {
    const promptInstructions = {
      text: `Create a detailed writing prompt (250-300 words) that includes:
             - Clear main topic and objectives
             - Specific requirements and guidelines
             - Target audience and tone
             - Key points to cover
             - Desired outcome and format`,
      image: `Create a detailed image generation prompt (250-300 words) that includes:
              - Visual style and artistic direction
              - Composition and layout
              - Color palette and lighting
              - Specific elements and their placement
              - Mood and atmosphere
              - Technical specifications`,
      video: `Create a comprehensive video concept prompt (250-300 words) that includes:
              - Scene-by-scene breakdown
              - Visual style and cinematography
              - Audio and music requirements
              - Transitions and effects
              - Duration and pacing
              - Target audience and platform`,
      code: `Create a detailed coding prompt (250-300 words) that includes:
             - Project requirements and specifications
             - Technical constraints and guidelines
             - Expected functionality
             - Code structure and organization
             - Testing requirements
             - Performance considerations`,
      youtube: `Create an engaging YouTube video title and description (250-300 words) that includes:
                - Attention-grabbing main title (50-60 characters)
                - SEO-optimized description
                - Key timestamps and chapters
                - Relevant tags and keywords
                - Call-to-action elements
                - Target audience considerations`,
      instagram: `Create an engaging Instagram post caption (250-300 words) that includes:
                  - Attention-grabbing opening line
                  - Engaging story or message
                  - Relevant hashtags (15-20)
                  - Call-to-action
                  - Emoji usage
                  - Formatting for readability`,
      hooks: `Create a detailed React custom hook specification (250-300 words) that includes:
              - Hook purpose and functionality
              - Input parameters and return values
              - Usage examples
              - Edge cases and error handling
              - Performance considerations
              - TypeScript type definitions`,
      'trending-tags': `Generate a comprehensive list of trending hashtags (250-300 words) that includes:
                       - Current top-performing hashtags for YouTube and Instagram
                       - Category-specific hashtags
                       - Trending topics and events
                       - Engagement statistics
                       - Best practices for hashtag usage
                       - Optimal hashtag combinations`,
      'tiktok-hook': `Create an attention-grabbing TikTok opening hook (250-300 words) that includes:
                      - First 3 seconds hook script
                      - Pattern interrupts
                      - Emotional triggers
                      - Visual setup instructions
                      - Audio recommendations
                      - Trending elements to incorporate`,
      'reels-script': `Create an Instagram Reels script (250-300 words) that includes:
                       - Scene-by-scene breakdown
                       - Dialogue and text overlays
                       - Music and sound effects
                       - Transitions and effects
                       - Props and setup requirements
                       - Trending elements to incorporate`,
      'ai-story': `Generate an engaging AI story (250-300 words) that includes:
                   - Compelling narrative arc
                   - Character development
                   - Emotional elements
                   - Dialogue and descriptions
                   - Theme and message
                   - Social media optimization`,
      'seo-keywords': `Generate comprehensive SEO keywords (250-300 words) that includes:
                      - Primary keywords
                      - Long-tail variations
                      - Search volume data
                      - Competition level
                      - Related terms
                      - Implementation recommendations`
    }[category];

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${promptInstructions} based on this input: "${input}".
                   Ensure the response is comprehensive and follows all the specified requirements.
                   Format the output clearly with sections and bullet points where needed.
                   Make the content immediately usable and practical.
                   Response must be between 250-300 words.`
          }]
        }]
      })
    });

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Failed to generate prompt';
    
    return generatedText
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/\n+/g, '\n\n')
      .slice(0, 2000);
  } catch (error) {
    console.error('Error generating prompt:', error);
    throw new Error('Failed to generate prompt');
  }
}