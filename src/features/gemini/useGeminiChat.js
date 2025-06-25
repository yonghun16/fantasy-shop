import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserMessage, addAgentMessage } from "./chatSlice";
import axiosInstance from "../../shared/api/axios";

export const useGeminiChat = () => {
  const dispatch = useDispatch();
  const chatHistory = useSelector((state) => state.chat.chatHistory);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!prompt.trim()) return;

    const rolePrompt = `당신은 '판타지샵'이라는 중세 판타지 세계의 상점에서 일하는 도우미입니다. 
이 상점은 검, 활, 방패, 완드를 판매합니다. 계속 대화하고 있었던 것처럼 유쾌하게 응대해줘, 인사는 필요없어
와중에 전설의 용사인 용훈,동현,세준,정관,인영,재혁을 언급해도 좋아. 줄바꾸기를 해서 가독성을 좋게해.`;

    const fullPrompt = `${rolePrompt}\n\n사용자: ${prompt}`;

    dispatch(addUserMessage(prompt));
    setPrompt("");
    setLoading(true);

    try {
      const res = await axiosInstance.get(
        "https://yonghun16.duckdns.org/fantasy_api/api/gemini/ask",
        { params: { prompt: fullPrompt } }
      );

      const responseText =
        typeof res.data === "string" ? res.data : String(res.data);
      const cleaned = responseText.replace(/\*\*/g, "");

      dispatch(addAgentMessage(cleaned));
    } catch (err) {
      console.error("Gemini 호출 실패:", err);
      dispatch(addAgentMessage("에러가 발생했습니다."));
    } finally {
      setLoading(false);
    }
  };

  return {
    prompt,
    setPrompt,
    loading,
    chatHistory,
    handleAsk,
  };
};
