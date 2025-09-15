import CheckoutCart from "./CheckoutCart.tsx";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState, useEffect, useRef } from "react";
import { useCartContext } from "../../context/CartContext";

export default function CartModal() {
  const { cartIsActive, checkoutCart, itemsInCart, deleteItemCart } =
    useCartContext();
  const [preferenceId, setPreferenceId] = useState("");
  const [walletRendered, setWalletRendered] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Referencia para trackear la cantidad anterior
  const prevItemsInCartRef = useRef(itemsInCart);

  // Resetear el estado del checkout cuando cambie la cantidad de productos
  useEffect(() => {
    // Si la cantidad de productos cambió, resetear todo el estado del checkout
    if (prevItemsInCartRef.current !== itemsInCart) {
      // Solo resetear si no es la primera vez (itemsInCart > 0) y hay un cambio real
      if (prevItemsInCartRef.current > 0 && itemsInCart > 0) {
        setPreferenceId("");
        setWalletRendered(false);
        setButtonVisible(true);
        setIsLoading(false);
      }
      // Actualizar la referencia
      prevItemsInCartRef.current = itemsInCart;
    }

    // Lógica adicional para manejar estados específicos
    if (itemsInCart === 0) {
      // Resetear todo cuando el carrito esté vacío

      setPreferenceId("");
      setWalletRendered(false);
      setButtonVisible(true);
      setIsLoading(false);
    } else if (preferenceId && walletRendered) {
      // Si ya hay un botón de MP activo, ocultar el botón de checkout

      setButtonVisible(false);
    } else if (!preferenceId && !walletRendered) {
      // Si no hay botón de MP activo, mostrar el botón de checkout

      setButtonVisible(true);
    }
  }, [itemsInCart, preferenceId, walletRendered]);

  // Resetear el estado cuando se cierre el carrito
  useEffect(() => {
    if (!cartIsActive) {
      setIsLoading(false);
    }
  }, [cartIsActive]);

  initMercadoPago("APP_USR-4ff5bdf7-60c5-4670-817f-9ec7b8f82dfe", {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(
        "https://sneaker-server.vercel.app/create_preference",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "Sneaker estilo urbano",
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
      return null;
    } finally {
      setIsLoading(false);
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
      className={`${cartIsActive ? "absolute" : "hidden"} 
           inset-0 bg-white z-[999] w-[21rem] ${
             preferenceId && walletRendered && itemsInCart > 0 ? "h-96" : "h-72"
           } top-12 -left-[17rem] md:-left-[10rem] rounded-lg shadow-2xl object-contain`}
    >
      <h3 className="font-bold p-6">Carrito</h3>
      {checkoutCart ? (
        <CheckoutCart
          itemsInCart={itemsInCart}
          onDelete={deleteItemCart}
          handleBuy={handleBuy}
          preferenceId={preferenceId}
          walletRendered={walletRendered}
          buttonVisible={buttonVisible}
          isLoading={isLoading}
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
