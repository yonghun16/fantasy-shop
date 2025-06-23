import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartItems } from "../../shared/api/cart";
import { setCartItems, setCartLoading } from "./cartSlice";
import { authUser } from "../../shared/api/authUser";

export const useCartItems = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const userData = useSelector((state) => state.user.userData);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCart = async () => {
      dispatch(setCartLoading(true));
      try {
        if (!isAuth || !userData.userPk) {
          await dispatch(authUser().unwrap());
        }
        const data = await getCartItems();
        
        const mapped = data.map((item) => ({
          id: item.itemPk,
          name: item.itemName,
          quantity: item.quantity,
          price: item.itemPrice,
          imageUrl: item.itemImageUrl,
          cartPk: item.cartPk,
        }));
        dispatch(setCartItems(mapped));
      } catch {
        console.log("error", error);
      }
    };

    loadCart();
  }, [dispatch, navigate, isAuth, userData.userPk]);
};
