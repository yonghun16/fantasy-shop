import axiosInstance from "./axios";

export const postItem = async (formValues) => {
  const formData = new FormData();

  formData.append("itemName", formValues.itemName);
  formData.append("itemDescription", formValues.itemDescription);
  formData.append("itemPrice", formValues.itemPrice);
  formData.append("itemInventory", formValues.itemInventory);
  formData.append("itemEffect", formValues.itemEffect);
  formData.append("itemCategory", formValues.itemCategory);
  formData.append("itemImage", formValues.itemImage);

  console.log("formValues", formValues);

  const res = await axiosInstance.post("/item", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};
