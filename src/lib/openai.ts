import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

export async function generatePrompt(input: string, category: string): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are an expert AI prompt engineer. Generate a high-quality ${category} prompt based on the user's input. Make it detailed and specific.`
      },
      {
        role: "user",
        content: input
      }
    ],
    temperature: 0.7,
    max_tokens: 500
  });

  return response.choices[0].message.content || 'Failed to generate prompt';
}