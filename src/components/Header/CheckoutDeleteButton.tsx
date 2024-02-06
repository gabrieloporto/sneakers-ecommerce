import deleteIcon from "../.././assets/icon-delete.svg";
import { CheckoutDeleteButton } from "../../types";

export default function CheckoutDeleteButton({
  onDelete,
}: CheckoutDeleteButton) {
  return (
    <button onClick={onDelete}>
      <img src={deleteIcon} alt="delete" />
    </button>
  );
}
