import useMenu from "./hooks/useMenu.ts";
import useCart from "./hooks/useCart.ts";
import useCountProduct from "./hooks/useCountProduct.ts";
import useModalState from "./hooks/useModalState.ts";
// import useSlider from "./hooks/useSlider.ts";
import ModalDesktopProduct from "./components/ModalDesktopProduct.tsx";
import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";

export default function App() {
  //menu
  const { menuIsActive, handleMenu } = useMenu();

  //cart
  const { cartIsActive, handleCart } = useCart();
  const {
    countProduct,
    addProduct,
    subtractProduct,
    addItemCart,
    itemsInCart,
    checkoutCart,
    deleteItemCart,
  } = useCountProduct();

  //slider
  // const { next, previous } = useSlider();
  const { modalDesktop, setModalDesktop } = useModalState();

  return (
    <>
      {modalDesktop && (
        <ModalDesktopProduct
          onModalDesktop={() => setModalDesktop(false)}
          // onNext={next}
          // onPrev={previous}
        />
      )}
      <Header
        menu={menuIsActive}
        onMenu={handleMenu}
        onCart={handleCart}
        cartState={cartIsActive}
        itemsAdded={itemsInCart}
        checkoutStatus={checkoutCart}
        onDelete={deleteItemCart}
      />
      <Home
        addItemCart={addItemCart}
        addProduct={addProduct}
        countProduct={countProduct}
        subtractProduct={subtractProduct}
      />
    </>
  );
}
