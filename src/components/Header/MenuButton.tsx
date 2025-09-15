import menuIcon from "../.././assets/icon-menu.svg";
import { useUIContext } from "../../context/UIContext";

export default function MenuButton() {
  const { toggleMenu } = useUIContext();

  return (
    <button
      className="md:hidden transition-all duration-[125ms] ease-in-out"
      onClick={toggleMenu}
    >
      <img src={menuIcon} width={16} height={15} alt="menu" />
    </button>
  );
}
