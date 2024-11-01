import deleteIcon from "../.././assets/icon-delete.svg";
import { CheckoutDeleteButtonApp } from "../../types";

export default function CheckoutDeleteButton({
  onDelete,
}: CheckoutDeleteButtonApp) {
  return (
    <button
      onClick={onDelete}
      className="transition-all duration-[125ms] ease-in-out"
    >
      <img src={deleteIcon} alt="delete" />
    </button>
  );
}
