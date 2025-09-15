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
  // Hooks locales aún en uso
  const { next, previous, selectedImage } = useSlider();
  const { screenSize } = useResize();
  const { modalDesktop, setModalDesktop, handleModalDesktop } = useModalState();

  return (
    <>
      {modalDesktop && (
        <ModalDesktopProduct onModalDesktop={() => setModalDesktop(false)} />
      )}
      <Header />
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

          <ShoppingCartItem />
        </article>
      </main>
    </>
  );
}
