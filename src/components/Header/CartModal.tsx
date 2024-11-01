import CheckoutCart from "./CheckoutCart.tsx";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";
import { CartModalApp } from "../../types.js";

export default function CartModal({
  cartState,
  checkoutStatus,
  itemsInCart,
  onDelete,
}: CartModalApp) {
  const [preferenceId, setPreferenceId] = useState("");
  const [walletRendered, setWalletRendered] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  initMercadoPago("TEST-c8dcbcea-ce8d-44f1-baa0-76570e585fa6", {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      const res = await fetch(
        "https://sneaker-server.vercel.app/create_preference",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "Low-profile sneaker",
            quantity: itemsInCart,
            price: 5000,
          }),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      const { id } = data;
      return id;
    } catch (error) {
      console.error(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
      setWalletRendered(true);
      setButtonVisible(false);
    }
  };

  return (
    <div
      className={`${cartState ? "absolute" : "hidden"} 
           inset-0 bg-white z-[999] w-[21rem] ${
             preferenceId && walletRendered && itemsInCart > 0 ? "h-96" : "h-72"
           } top-12 -left-[17rem] md:-left-[10rem] rounded-lg shadow-2xl object-contain`}
    >
      <h3 className="font-bold p-6">Carrito</h3>
      {checkoutStatus ? (
        <CheckoutCart
          itemsInCart={itemsInCart}
          onDelete={onDelete}
          handleBuy={handleBuy}
          preferenceId={preferenceId}
          walletRendered={walletRendered}
          buttonVisible={buttonVisible}
        >
          <Wallet
            initialization={{ preferenceId: preferenceId }}
            customization={{ texts: { valueProp: "smart_option" } }}
          />
        </CheckoutCart>
      ) : (
        <p className="text-center text-darkGrayishBlue font-bold mt-20">
          Tu carrito está vacío.
        </p>
      )}
    </div>
  );
}
