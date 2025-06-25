import { FaHatWizard } from "react-icons/fa";
import ChatHistory from "./ChatHistory";
import ChatInputForm from "./ChatInputForm";
import { useGeminiChat } from "./useGeminiChat";

function GeminiModal({ isOpen, onClose }) {
  const { prompt, setPrompt, loading, chatHistory, handleAsk } =
    useGeminiChat();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div
        className="fixed bottom-15 md:bottom-8 right-4 md:right-8 z-50 w-[calc(100%-30px)] sm:w-100 max-w-full p-6 rounded-3xl
        border border-indigo-500 flex flex-col shadow-lg bg-white"
        style={{ minHeight: "450px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="flex items-center text-xl font-bold text-gray-800 select-none">
            <FaHatWizard className="mr-2" /> 판타지 도우미
          </h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-600 hover:text-indigo-500 cursor-pointer"
            aria-label="닫기"
          >
            &times;
          </button>
        </div>

        <ChatHistory chatHistory={chatHistory} />
        <ChatInputForm
          prompt={prompt}
          setPrompt={setPrompt}
          loading={loading}
          onSubmit={handleAsk}
        />
      </div>
    </>
  );
}

export default GeminiModal;
