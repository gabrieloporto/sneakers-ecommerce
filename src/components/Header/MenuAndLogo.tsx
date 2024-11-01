import logo from "../.././assets/logo.svg";
import { MenuAndLogoApp } from "../../types";

import MenuButton from "./MenuButton";
import Nav from "./Nav";

export default function MenuAndLogo({ menu, onMenu }: MenuAndLogoApp) {
  return (
    <article className="flex gap-4 md:h-full">
      <MenuButton onMenu={onMenu} />
      <img src={logo} width={138} className="h-5 md:mt-6" alt="sneakers" />
      <div
        className={`${
          menu ? "absolute" : "hidden"
        } inset-0 bg-black bg-opacity-75 z-[999] min-h-screen md:hidden`}
      ></div>
      <Nav menu={menu} onMenu={onMenu} />
    </article>
  );
}
