import axiosInstance from "./axios";

export const getCartItems = async () => {
  const res = await axiosInstance.get("/cart");
  console.log("res", res);
  return res.data;
};

export const updateCartItems = async (items) => {
  const res = await axiosInstance.put("/cart", { items });
  return res.data;
};

export const deleteCartItems = async (cartPk) => {
  const res = await axiosInstance.delete(`/cart/${cartPk}`);
  return res.data;
};

export const getUserInfo = async () => {
  const res = await axiosInstance.get("/users/me");
  return res.data;
};

export const postPayment = async (paymentData) => {
  const res = await axiosInstance.post("/payments", paymentData);
  return res.data;
};
