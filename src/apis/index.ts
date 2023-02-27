import axios from "axios";

export const QuetionChat = (quetionValue: string) => {
  return axios.post(
    String(process.env.NEXT_PUBLIC_API_URL),
    {
      model: "text-davinci-003",
      prompt: `${quetionValue} 재료를 포함한 메뉴 5개 추천해줘`,
      temperature: 0.5,
      max_tokens: 1024,
      top_p: 0.5,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${String(process.env.NEXT_PUBLIC_API_KEY)}`,
      },
    }
  );
};
