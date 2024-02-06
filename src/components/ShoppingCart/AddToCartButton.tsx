import cartBtn from "../.././assets/icon-cart-btn.svg";
import { AddtoCart } from "../../types";

export default function AddToCartButton({ onAddCart }: AddtoCart) {
  return (
    <button
      className="flex w-full h-12 justify-center items-center bg-orange text-white rounded-md hover:opacity-70 md:w-[170%]"
      onClick={onAddCart}
    >
      <img src={cartBtn} width={16} height={15} alt="add-cart" />
      <span>
        <strong>Add to cart</strong>
      </span>
    </button>
  );
}
