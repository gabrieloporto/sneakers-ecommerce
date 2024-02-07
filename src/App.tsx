import useMenu from "./hooks/useMenu.ts";
import useCart from "./hooks/useCart.ts";
import useCountProduct from "./hooks/useCountProduct.ts";
import useModalState from "./hooks/useModalState.ts";
import useResize from "./hooks/useResize.ts";
import useSlider from "./hooks/useSlider.ts";
import ModalDesktopProduct from "./components/ModalDesktopProduct.tsx";
import Header from "./components/Header.tsx";
import ShoppingCartItem from "./components/ShoppingCart/ShoppingCartItem";
import TextContent from "./components/TextContent";
import MobileProductImage from "./components/ProductImage/MobileProductImage.tsx";
import DesktopProductImage from "./components/ProductImage/DesktopProductImage.tsx";

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

  const { next, previous, selectedImage } = useSlider();
  const { screenSize } = useResize();
  const { modalDesktop, setModalDesktop, handleModalDesktop } = useModalState();

  return (
    <>
      {modalDesktop && (
        <ModalDesktopProduct onModalDesktop={() => setModalDesktop(false)} />
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
      <main className="flex flex-col md:flex-row">
        {screenSize < 768 ? (
          <MobileProductImage
            selectImg={selectedImage}
            onPrev={previous}
            onNext={next}
          />
        ) : (
          <DesktopProductImage onModalDesktop={handleModalDesktop} />
        )}

        <article className="flex flex-col md:w-[40%] md:mt-4">
          <TextContent />

          <ShoppingCartItem
            countProduct={countProduct}
            subtractProduct={subtractProduct}
            addProduct={addProduct}
            addItemCart={addItemCart}
          />
        </article>
      </main>
    </>
  );
}
