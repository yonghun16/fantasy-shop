import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editModal: {
    isOpen: false,
    product: null, // 수정 대상 아이템 데이터
  },
  deleteModal: {
    isOpen: false,
    itemPk: null, // 삭제 대상 아이템 PK
  },
  geminiModal: { isOpen: false },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openEditModal: (state, action) => {
      state.editModal.isOpen = true;
      state.editModal.product = action.payload; // product 객체
    },
    closeEditModal: (state) => {
      state.editModal.isOpen = false;
      state.editModal.product = null;
    },
    openDeleteModal: (state, action) => {
      state.deleteModal.isOpen = true;
      state.deleteModal.itemPk = action.payload; // PK
    },
    closeDeleteModal: (state) => {
      state.deleteModal.isOpen = false;
      state.deleteModal.itemPk = null;
    },
    openGeminiModal: (state) => {
      state.geminiModal.isOpen = true;
    },
    closeGeminiModal: (state) => {
      state.geminiModal.isOpen = false;
    },
  },
});

export const {
  openEditModal,
  closeEditModal,
  openDeleteModal,
  closeDeleteModal,
  openGeminiModal,
  closeGeminiModal,
} = modalSlice.actions;

export default modalSlice.reducer;
