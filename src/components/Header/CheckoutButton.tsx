import { CheckoutButtonApp } from "../../types";

export default function CheckoutButton({
  handleBuy,
  preferenceId,
  walletRendered,
  children,
}: CheckoutButtonApp) {
  return (
    <>
      <button
        className="flex w-full h-12 justify-center items-center bg-blue text-white rounded-md hover:opacity-70"
        onClick={handleBuy}
      >
        <span>
          <strong>Checkout</strong>
        </span>
      </button>
      {preferenceId && walletRendered && children}
    </>
  );
}
