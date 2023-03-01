import axios from "axios";

export const QuetionChat = (quetionValue: string, type: string) => {
  console.log(quetionValue);
  console.log(type);
  let question = "";
  if (type === "menu") {
    question = `${quetionValue} 을/를 꼭 포함한 음식 메뉴 5개 음식명만 추천해주세요`;
    console.log(question);
  }

  if (type === "recipe") {
    question = `${quetionValue} 레시피를 필요한재료, 조리방법 정확하게 알려주세요`;
  }

  return axios.post(
    String(process.env.NEXT_PUBLIC_API_URL),
    {
      model: "text-davinci-003",
      prompt: `${question}`,
      temperature: 0.4,
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
