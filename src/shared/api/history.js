import axiosInstance from "./axios";

export const getOrders = async () => {
  const res = await axiosInstance.get("/payments");
  return res.data;
};

export const getPaymentDetail = async (paymentPk) => {
  const res = await axiosInstance.get(`/payments/${paymentPk}`);
  return res;
};
