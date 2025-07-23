// src/hooks/useCart.js
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateCartQty,
  clearCart,
} from "../redux/slices/cartSlice";

export const useCart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  return {
    items,
    addToCart: (product) => dispatch(addToCart(product)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    updateCartQty: (id, cartQty) =>
      dispatch(updateCartQty({ id, cartQty })),
    clearCart: () => dispatch(clearCart()),
  };
};
