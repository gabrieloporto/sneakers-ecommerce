import { CheckoutButtonApp } from "../../types";

export default function CheckoutButton({
  handleBuy,
  preferenceId,
  walletRendered,
  children,
  buttonVisible,
  isLoading,
}: CheckoutButtonApp) {
  // Validación adicional para evitar duplicación
  const shouldShowWallet = preferenceId && walletRendered && !isLoading;

  return (
    <>
      {/* Botón de Checkout */}
      {!isLoading && (
        <button
          className={`${
            buttonVisible ? "flex" : "hidden"
          } w-full h-12 justify-center items-center bg-blue text-white rounded-md hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200`}
          onClick={handleBuy}
          disabled={isLoading}
        >
          <span>
            <strong>Checkout</strong>
          </span>
        </button>
      )}

      {/* Skeleton loader mientras carga el botón de Mercado Pago */}
      {isLoading && !walletRendered && (
        <div className="w-full space-y-3">
          {/* Skeleton principal */}
          <div className="w-full h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-md animate-pulse flex items-center justify-center border border-gray-300">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-blue border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-600 font-medium">
                Preparando pago seguro...
              </span>
            </div>
          </div>

          {/* Mensaje informativo */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Estamos configurando tu método de pago con Mercado Pago
            </p>
          </div>
        </div>
      )}

      {/* Mensaje de confirmación cuando el botón de MP esté listo */}
      {shouldShowWallet && (
        <div className="text-center mb-3">
          <p className="text-xs text-green-600 font-medium">
            ✓ Método de pago listo
          </p>
        </div>
      )}

      {/* Botón de Mercado Pago - Solo uno */}
      {shouldShowWallet && children}
    </>
  );
}
