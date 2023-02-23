import axios from "axios";

export const QuetionAI = async () => {
  try {
    const res = await axios.post(
      String(process.env.NEXT_PUBLIC_API_URL),
      {
        model: "text-davinci-003",
        prompt: "",
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
    // 응답 값 텍스트
    console.log(res.data.choices[0].text);
  } catch (err) {
    console.log(err);
  }
};
