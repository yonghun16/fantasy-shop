function ChatHistory({ chatHistory }) {
  return (
    <div
      className="flex-grow overflow-y-auto mb-4 space-y-3 p-4 rounded-lg bg-white"
      style={{ maxHeight: "300px" }}
    >
      {chatHistory.map((chat, idx) => (
        <div
          key={idx}
          className={`flex ${
            chat.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`relative max-w-[80%] px-4 py-3.5 rounded-xl whitespace-pre-wrap shadow-md ${
              chat.role === "user"
                ? "bg-indigo-500 text-white"
                : "bg-yellow-200 text-gray-900"
            }`}
          >
            {/* 꼬리 */}
            <div
              className={`absolute bottom-2 w-3 h-3 rotate-45 ${
                chat.role === "user"
                  ? "right-[-5px] bg-indigo-500"
                  : "left-[-5px] bg-yellow-200"
              }`}
            />
            {chat.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatHistory;
