import { useState } from "react";

export default function useItemsCart() {
  const [itemsInCart, setItemsInCart] = useState(0);
  const [checkoutCart, setCheckoutCart] = useState(false);

  return { itemsInCart, checkoutCart, setItemsInCart, setCheckoutCart };
}
