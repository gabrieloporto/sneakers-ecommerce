import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from "react";

interface CartContextValue {
  // UI
  cartIsActive: boolean;
  toggleCart: () => void;

  // Cart data
  itemsInCart: number;
  checkoutCart: boolean;
  countProduct: number;

  // Actions
  addProduct: () => void;
  subtractProduct: () => void;
  addItemCart: () => void;
  deleteItemCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartIsActive, setCartIsActive] = useState(false);
  const toggleCart = () => setCartIsActive((v) => !v);

  const [itemsInCart, setItemsInCart] = useState(0);
  const [checkoutCart, setCheckoutCart] = useState(false);
  const [countProduct, setCountProduct] = useState(1);

  const hasAddedRef = useRef(false);

  const addProduct = () => {
    setCountProduct((c) => c + 1);
    if (itemsInCart > 0) hasAddedRef.current = false;
  };

  const subtractProduct = () => {
    setCountProduct((c) => (c > 1 ? c - 1 : 1));
    if (itemsInCart > 0) hasAddedRef.current = false;
  };

  const addItemCart = () => {
    if (countProduct > 0) {
      setCheckoutCart(false);
      setTimeout(() => {
        setCheckoutCart(true);
        setItemsInCart(countProduct);
        hasAddedRef.current = true;
      }, 100);
    }
  };

  const deleteItemCart = () => {
    setCheckoutCart(false);
    setItemsInCart(0);
    hasAddedRef.current = false;
  };

  useEffect(() => {
    if (itemsInCart === 0) {
      setCountProduct(1);
      hasAddedRef.current = false;
    }
  }, [itemsInCart]);

  const value = useMemo(
    () => ({
      cartIsActive,
      toggleCart,
      itemsInCart,
      checkoutCart,
      countProduct,
      addProduct,
      subtractProduct,
      addItemCart,
      deleteItemCart,
    }),
    [cartIsActive, itemsInCart, checkoutCart, countProduct]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCartContext must be used within CartProvider");
  return ctx;
}
