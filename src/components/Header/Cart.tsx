import cart from "../.././assets/icon-cart.svg";
import cartActiveIcon from "../.././assets/icon-cart-active.svg";
import CartModal from "./CartModal.jsx";
import { Cart } from "../../types.ts";

export default function Cart({
  itemsAdded,
  cartState,
  onCart,
  checkoutStatus,
  onDelete,
}: Cart) {
  return (
    <section className="relative flex items-center justify-center">
      <p
        className={`${
          itemsAdded > 0 ? "absolute" : "hidden"
        } -top-[2px] -right-[6px] md:top-[6px] bg-orange text-white w-4 h-3 rounded-full text-[8px] text-center font-bold z-[99999]`}
      >
        {itemsAdded}
      </p>
      <img
        src={cartState ? cartActiveIcon : cart}
        className="cursor-pointer"
        onClick={onCart}
        alt="cart"
      />
      <CartModal
        cartState={cartState}
        checkoutStatus={checkoutStatus}
        itemsInCart={itemsAdded}
        onDelete={onDelete}
      />
    </section>
  );
}
