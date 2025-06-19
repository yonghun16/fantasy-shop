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
  },
});

export const {
  openEditModal,
  closeEditModal,
  openDeleteModal,
  closeDeleteModal,
} = modalSlice.actions;

export default modalSlice.reducer;
