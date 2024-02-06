import menuIcon from "../.././assets/icon-menu.svg";
import { OnMenu } from "../../types";

export default function MenuButton({ onMenu }: OnMenu) {
  return (
    <button className="md:hidden" onClick={onMenu}>
      <img src={menuIcon} width={16} height={15} alt="menu" />
    </button>
  );
}
