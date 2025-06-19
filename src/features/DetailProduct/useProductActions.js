import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import useAddToCart from "../../shared/hooks/useAddToCart";

const useProductActions = (product, count) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const addToCart = useAddToCart();
  const navigate = useNavigate();
  const isAdmin = useSelector((state) => state.user.userData?.isAdmin);

  useEffect(() => {
    const toastMessage = localStorage.getItem("toastMessage");
    if (toastMessage) {
      toast.success(toastMessage);
      localStorage.removeItem("toastMessage");
    }
  }, []);

  const handleAddToCart = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      toast.warn("장바구니는 로그인 후 이용 가능합니다.");
      navigate("/login");
      return;
    }
    addToCart(product, count);
  };

  const handleDeleteSuccess = () => navigate("/");

  return {
    isEditing,
    isDeleting,
    isAdmin,
    setIsEditing,
    setIsDeleting,
    handleAddToCart,
    handleDeleteSuccess,
  };
};

export default useProductActions;
