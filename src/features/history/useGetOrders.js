import { useEffect, useState } from "react";
import { getOrders } from "../../shared/api/history";

const useGetOrders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setError(null);
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (err) {
        console.error("주문 목록 불러오기 실패", err);
        setError(err);
      }
    };
    fetchOrders();
  }, []);

  return {
    orders,
    error,
  };
};

export default useGetOrders;
