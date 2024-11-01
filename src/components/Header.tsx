import MenuAndLogo from "./Header/MenuAndLogo.tsx";
import Cart from "./Header/Cart.tsx";
import { HeaderApp } from "../types.ts";

export default function Header({
  menu,
  onMenu,
  onCart,
  onDelete,
  cartState,
  itemsAdded,
  checkoutStatus,
}: HeaderApp) {
  return (
    <header className="sticky p-4 top-0 left-0 right-0 z-[1000] bg-white flex justify-between h-16 items-center md:h-[5.5rem] md:mb-8">
      <MenuAndLogo menu={menu} onMenu={onMenu} />
      <article className="flex gap-4 md:gap-10 md:mt-4">
        <Cart
          itemsAdded={itemsAdded}
          cartState={cartState}
          onCart={onCart}
          checkoutStatus={checkoutStatus}
          onDelete={onDelete}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.4px"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7  md:w-8 md:h-8 object-contain rounded-full cursor-pointer  stroke-[#68707D] hover:stroke-black transition-all duration-75 ease-in-out"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
        </svg>
      </article>
    </header>
  );
}
