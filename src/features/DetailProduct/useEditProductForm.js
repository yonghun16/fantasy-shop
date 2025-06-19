import { useEffect, useState } from "react";
import useEditProduct from "./useEditProduct";

const getInitialFormData = (product) => ({
  itemName: product?.itemName || "",
  itemDescription: product?.itemDescription || "",
  itemPrice: product?.itemPrice || 0,
  itemInventory: product?.itemInventory || 0,
  itemEffect: product?.itemEffect || "",
  itemCategory: product?.itemCategory || "",
  itemImage: null,
});

const useEditProductForm = (product, onSuccess) => {
  const [formData, setFormData] = useState(getInitialFormData(product));
  const mutation = useEditProduct(onSuccess);

  useEffect(() => {
    if (product) {
      setFormData(getInitialFormData(product));
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "itemImage" ? files[0] : value,
    }));
  };

  const handleImageSelect = (file) => {
    setFormData((prev) => ({ ...prev, itemImage: file }));
  };

  const handleCategorySelect = (category) => {
    setFormData((prev) => ({ ...prev, itemCategory: category }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        data.append(key, value);
      }
    });
    mutation.mutate({ productPk: product.itemPk, formData: data });
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleImageSelect,
    handleCategorySelect,
    handleSubmit,
    isLoading: mutation.isLoading,
  };
};

export default useEditProductForm;
