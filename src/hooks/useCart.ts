import { useState } from "react";

export default function useCart() {
  const [cartIsActive, setCartIsActive] = useState(false);
  const handleCart = () => setCartIsActive(!cartIsActive);

  return { cartIsActive, handleCart };
}
