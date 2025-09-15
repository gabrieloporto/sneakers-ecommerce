import close from "../.././assets/icon-close.svg";
import { useUIContext } from "../../context/UIContext";

export default function MenuButtonClose() {
  const { toggleMenu } = useUIContext();

  return (
    <button
      className="pb-8 transition-all duration-[125ms] ease-in-out"
      onClick={toggleMenu}
    >
      <img src={close} alt="close-menu" />
    </button>
  );
}
