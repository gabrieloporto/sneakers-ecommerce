import { CheckoutCartApp } from "../../types.ts";
import CheckoutButton from "./CheckoutButton.tsx";
import CheckoutDeleteButton from "./CheckoutDeleteButton.tsx";
import CheckoutDetailProduct from "./CheckoutDetailProduct.tsx";

export default function CheckoutCart({
  itemsInCart,
  onDelete,
  children,
  handleBuy,
  preferenceId,
  walletRendered,
  buttonVisible,
  isLoading,
}: CheckoutCartApp) {
  return (
    <section className="flex flex-col justify-center items-center p-6 mt-4 gap-6">
      <article
        className="flex
         items-center justify-center gap-4"
      >
        <CheckoutDetailProduct itemsInCart={itemsInCart} />
        <CheckoutDeleteButton onDelete={onDelete} />
      </article>

      <CheckoutButton
        handleBuy={handleBuy}
        preferenceId={preferenceId}
        walletRendered={walletRendered}
        buttonVisible={buttonVisible}
        isLoading={isLoading}
      >
        {children}
      </CheckoutButton>
    </section>
  );
}
