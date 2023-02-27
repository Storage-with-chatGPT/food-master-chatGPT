import axios from "axios";

export const QuetionChat = (quetionValue: string, type: string) => {
  let question = "";
  if (type === "menu") {
    question = `(${quetionValue})(을/를) 포함한 메뉴 5개 추천해주세요`;
  }

  if (type === "recipe") {
    question = `${quetionValue} 레시피를 알려주세요.`;
  }

  return axios.post(
    String(process.env.NEXT_PUBLIC_API_URL),
    {
      model: "text-davinci-003",
      prompt: question,
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
