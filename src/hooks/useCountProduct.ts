import { useState, useEffect, useRef } from "react";
import useItemsCart from "./useItemsCart";

export default function useCountProduct() {
  const [countProduct, setCountProduct] = useState(1);
  const { itemsInCart, checkoutCart, setItemsInCart, setCheckoutCart } =
    useItemsCart();

  // Referencia para trackear si ya se agregó al carrito
  const hasAddedToCartRef = useRef(false);

  const addProduct = () => {
    setCountProduct(countProduct + 1);
    // Si ya había productos en el carrito, marcar que se debe resetear
    if (itemsInCart > 0) {
      hasAddedToCartRef.current = false;
    }
  };

  const subtractProduct = () => {
    setCountProduct(countProduct > 1 ? countProduct - 1 : 1);
    // Si ya había productos en el carrito, marcar que se debe resetear
    if (itemsInCart > 0) {
      hasAddedToCartRef.current = false;
    }
  };

  const addItemCart = () => {
    if (countProduct > 0) {
      // Siempre resetear el checkout cuando se agregan productos
      setCheckoutCart(false);

      // Pequeño delay para asegurar que se resetee antes de agregar
      setTimeout(() => {
        setCheckoutCart(true);
        setItemsInCart(countProduct);
        hasAddedToCartRef.current = true;
      }, 100);
    }
  };

  const deleteItemCart = () => {
    setCheckoutCart(false);
    setItemsInCart(0);
    hasAddedToCartRef.current = false;
  };

  // Resetear el contador cuando se vacíe el carrito
  useEffect(() => {
    if (itemsInCart === 0) {
      setCountProduct(1);
      hasAddedToCartRef.current = false;
    }
  }, [itemsInCart]);

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
