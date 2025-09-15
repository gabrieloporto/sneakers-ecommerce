import cart from "../.././assets/icon-cart.svg";
import cartActiveIcon from "../.././assets/icon-cart-active.svg";
import CartModal from "./CartModal.jsx";
import { useCartContext } from "../../context/CartContext";

export default function Cart() {
  const { itemsInCart, cartIsActive, toggleCart } = useCartContext();

  return (
    <section className="relative flex items-center justify-center">
      <p
        className={`${
          itemsInCart > 0 ? "absolute" : "hidden"
        } -top-[2px] -right-[6px] md:top-[6px] bg-blue text-white w-4 h-3 rounded-full text-[8px] text-center font-bold z-[99999]`}
      >
        {itemsInCart}
      </p>
      <img
        src={cartIsActive ? cartActiveIcon : cart}
        className="cursor-pointer"
        onClick={toggleCart}
        alt="cart"
      />
      <CartModal />
    </section>
  );
}
