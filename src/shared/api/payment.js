import axiosInstance from "./axios";

export const getPaymentDetail = async (paymentPk) => {
  const res = await axiosInstance.get(`/payments/${paymentPk}`);
  return res.data;
};
