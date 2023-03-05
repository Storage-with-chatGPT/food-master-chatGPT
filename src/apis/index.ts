import axios from 'axios';

export const QuetionChat = async (quetionValue: string, type: string) => {
  let apiKey: string | undefined;
  if (process.env.NODE_ENV === 'production') {
    apiKey = process.env.OPENAI_API_KEY;
  }

  if (process.env.NODE_ENV === 'development') {
    apiKey = process.env.NEXT_PUBLIC_API_KEY;
  }
  let question = '';
  if (type === 'menu') {
    question = `${quetionValue} 을/를 꼭 포함한 음식 메뉴 5개 음식명만 추천해주세요`;
  }

  if (type === 'recipe') {
    question = `${quetionValue} 레시피를 필요한재료, 조리방법 정확하게 알려주세요`;
  }

  const res = await axios.post(
    'https://api.openai.com/v1/completions',
    {
      model: 'text-davinci-003',
      prompt: `${question}`,
      temperature: 0.4,
      max_tokens: 1024,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  return res;
};
