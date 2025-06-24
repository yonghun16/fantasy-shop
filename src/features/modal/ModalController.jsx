import { useSelector, useDispatch } from "react-redux";
import EditProductModal from "../../pages/DetailProductPage/DetailProductComponent/DetailProductModal/EditProductModal";
import DeleteConfirmModal from "../../pages/DetailProductPage/DetailProductComponent/DetailProductModal/DeleteConfirmModal";
import GeminiModal from "../gemini/GeminiModal";
import {
  closeEditModal,
  closeDeleteModal,
  closeGeminiModal,
} from "./modalSlice";

const ModalController = () => {
  const dispatch = useDispatch();
  const { editModal, deleteModal, geminiModal } = useSelector(
    (state) => state.modal || {}
  );

  return (
    <>
      {editModal?.isOpen && (
        <EditProductModal
          isOpen={editModal.isOpen}
          product={editModal.product}
          onClose={() => dispatch(closeEditModal())}
        />
      )}

      {deleteModal?.isOpen && (
        <DeleteConfirmModal
          isOpen={deleteModal.isOpen}
          itemPk={deleteModal.itemPk}
          onClose={() => dispatch(closeDeleteModal())}
          onDeleteSuccess={() => dispatch(closeDeleteModal())}
        />
      )}

      {geminiModal?.isOpen && (
        <GeminiModal
          isOpen={geminiModal.isOpen}
          onClose={() => dispatch(closeGeminiModal())}
        />
      )}
    </>
  );
};

export default ModalController;
