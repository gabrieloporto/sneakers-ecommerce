import { useState } from "react";
import useItemsCart from "./useItemsCart";

export default function useCountProduct() {
  const [countProduct, setCountProduct] = useState(1);
  const { itemsInCart, checkoutCart, setItemsInCart, setCheckoutCart } =
    useItemsCart();

  const addProduct = () => setCountProduct(countProduct + 1);
  const subtractProduct = () =>
    setCountProduct(countProduct > 1 ? countProduct - 1 : 1);

  const addItemCart = () => {
    if (countProduct > 0) {
      setCheckoutCart(true);
      setItemsInCart(countProduct);
    }
  };

  const deleteItemCart = () => {
    setCheckoutCart(false);
    setItemsInCart(0);
  };

  return {
    countProduct,
    addProduct,
    subtractProduct,
    addItemCart,
    itemsInCart,
    checkoutCart,
    deleteItemCart,
  };
}
