import MenuAndLogo from "./Header/MenuAndLogo.tsx";
import Cart from "./Header/Cart.tsx";
import avatar from ".././assets/image-avatar.png";
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
        <img
          src={avatar}
          className="w-6 h-6 object-contain aspect-square hover:outline outline-1 md:outline-2 outline-orange rounded-full cursor-pointer md:w-10 md:h-10"
          alt="avatar"
        />
      </article>
    </header>
  );
}
