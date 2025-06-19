import { useSelector, useDispatch } from "react-redux";
import EditProductModal from "./EditProductModal";
import DeleteConfirmModal from "./DeleteConfirmModal";
import {
  closeEditModal,
  closeDeleteModal,
} from "../../../../features/DetailProduct/modalSlice";

const ModalController = () => {
  const dispatch = useDispatch();
  const { editModal, deleteModal } = useSelector((state) => state.modal);

  return (
    <>
      <EditProductModal
        isOpen={editModal.isOpen}
        product={editModal.product}
        onClose={() => dispatch(closeEditModal())}
      />
      <DeleteConfirmModal
        isOpen={deleteModal.isOpen}
        itemPk={deleteModal.itemPk}
        onClose={() => dispatch(closeDeleteModal())}
        onDeleteSuccess={() => {
          dispatch(closeDeleteModal());
        }}
      />
    </>
  );
};

export default ModalController;
