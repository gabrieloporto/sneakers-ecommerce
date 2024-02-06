import { MenuAndLogo } from "../../types.js";
import MenuButtonClose from "./MenuButtonClose.jsx";

export default function Nav({ menu, onMenu }: MenuAndLogo) {
  return (
    <nav
      className={`${
        menu ? "absolute" : ""
      } bg-white z-[9999] left-0 w-52 top-0 min-h-screen p-6 gap-8 ${
        menu ? "flex" : "hidden"
      } flex-col font-bold md:flex md:flex-row md:min-h-max md:p-0 md:font-normal md:text-darkGrayishBlue md:text-sm md:mt-6 md:ml-4 md:h-14`}
    >
      <MenuButtonClose onMenu={onMenu} />
      <a className="cursor-pointer md:border-b-4 border-b-transparent md:hover:border-b-orange md:hover:text-black">
        Colecciones
      </a>
      <a className="cursor-pointer md:border-b-4 border-b-transparent md:hover:border-b-orange md:hover:text-black">
        Hombre
      </a>
      <a className="cursor-pointer md:border-b-4 border-b-transparent md:hover:border-b-orange md:hover:text-black">
        Mujer
      </a>
      <a className="cursor-pointer md:border-b-4 border-b-transparent md:hover:border-b-orange md:hover:text-black">
        Acerca
      </a>
      <a className="cursor-pointer md:border-b-4 border-b-transparent md:hover:border-b-orange md:hover:text-black">
        Contacto
      </a>
    </nav>
  );
}
