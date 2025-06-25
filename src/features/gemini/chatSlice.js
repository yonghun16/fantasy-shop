import { createSlice } from "@reduxjs/toolkit";

const loadFromStorage = () => {
  try {
    const stored = localStorage.getItem("chatHistory");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const initialState = {
  chatHistory: loadFromStorage(),
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addUserMessage: (state, action) => {
      state.chatHistory.push({ role: "user", text: action.payload });
      localStorage.setItem("chatHistory", JSON.stringify(state.chatHistory));
    },
    addAgentMessage: (state, action) => {
      state.chatHistory.push({ role: "agent", text: action.payload });
      localStorage.setItem("chatHistory", JSON.stringify(state.chatHistory));
    },
    resetChat: (state) => {
      state.chatHistory = [];
      localStorage.removeItem("chatHistory");
    },
  },
});

export const { addUserMessage, addAgentMessage, resetChat } = chatSlice.actions;
export default chatSlice.reducer;
