import OpenAI from 'openai';
import { OPENAI_KEY } from './Costants';

const openai = new OpenAI({
  apiKey:OPENAI_KEY ,
  dangerouslyAllowBrowser: true  // This is the default and can be omitted
});

export const main=async (query)=> {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: query }],
    model: 'gpt-3.5-turbo',
  });
  console.log(chatCompletion)
}

export default openai