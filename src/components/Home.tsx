import useModalState from "../hooks/useModalState";
import useResize from "../hooks/useResize";
import useSlider from "../hooks/useSlider";
import { Home } from "../types";
import DesktopProductImage from "./ProductImage/DesktopProductImage";
import MobileProductImage from "./ProductImage/MobileProductImage";
import ShoppingCartItem from "./ShoppingCart/ShoppingCartItem";
import TextContent from "./TextContent";

export default function Home({
  countProduct,
  subtractProduct,
  addProduct,
  addItemCart,
}: Home) {
  const { next, previous, selectedImage } = useSlider();
  const { screenSize } = useResize();
  const { handleModalDesktop } = useModalState();

  return (
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
  );
}
