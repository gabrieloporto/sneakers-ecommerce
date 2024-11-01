import close from "../.././assets/icon-close.svg";
import { OnMenu } from "../../types";

export default function MenuButtonClose({ onMenu }: OnMenu) {
  return (
    <button
      className="pb-8 transition-all duration-[125ms] ease-in-out"
      onClick={onMenu}
    >
      <img src={close} alt="close-menu" />
    </button>
  );
}
