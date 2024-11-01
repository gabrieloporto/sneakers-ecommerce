import { CheckoutButtonApp } from "../../types";

export default function CheckoutButton({
  handleBuy,
  preferenceId,
  walletRendered,
  children,
  buttonVisible,
}: CheckoutButtonApp) {
  return (
    <>
      <button
        className={`${
          buttonVisible ? "flex" : "hidden"
        } w-full h-12 justify-center items-center bg-blue text-white rounded-md hover:opacity-70`}
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
