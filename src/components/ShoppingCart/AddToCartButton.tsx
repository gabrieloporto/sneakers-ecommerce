import cartBtn from "../.././assets/icon-cart-btn.svg";
import { AddtoCart } from "../../types";

export default function AddToCartButton({ onAddCart }: AddtoCart) {
  return (
    <button
      className="flex w-full h-12 justify-center items-center bg-blue text-white rounded-md hover:opacity-70 md:w-[170%] transition-all duration-[125ms] ease-in-out"
      onClick={onAddCart}
    >
      <img src={cartBtn} width={16} height={15} alt="add-cart" />
      <span>
        <strong className="ml-2">Añadir al carrito</strong>
      </span>
    </button>
  );
}
