import axiosInstance from "./axios";

export const getCartItems = async () => {
  const res = await axiosInstance.get("/cart");
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

export const getPaymentDetail = async (paymentPk) => {
  const res = await axiosInstance.get(`/payments/${paymentPk}`);
  return res.data;
};
