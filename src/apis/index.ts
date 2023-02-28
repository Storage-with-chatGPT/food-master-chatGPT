import axios from "axios";

export const QuetionChat = (quetionValue: string, type: string) => {
  let question = "";
  if (type === "menu") {
    question = `${quetionValue}를 포함한 메뉴 5개 추천해주세요`;
  }

  if (type === "recipe") {
    question = `${quetionValue} 레시피를 정확하게 알려줘`;
  }
  console.log(type);
  console.log(quetionValue);
  return axios.post(
    String(process.env.NEXT_PUBLIC_API_URL),
    {
      model: "text-davinci-003",
      prompt: `${question}`,
      temperature: 0.3,
      max_tokens: 1024,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${String(process.env.NEXT_PUBLIC_API_KEY)}`,
      },
    }
  );
};
