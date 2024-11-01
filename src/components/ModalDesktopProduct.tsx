import useDesktopModal from "../hooks/useDesktopModal";
import { ModalDesktopProductApp } from "../types";
import { CloseButton } from "./ProductImage/CloseModalButton";
import { NextButton, PreviousButton } from "./ProductImage/PrevAndNextButton";
import ProductThumbnailImage from "./ProductImage/ProductThumbnailImage";

export default function ModalDesktopProduct({
  onModalDesktop,
}: ModalDesktopProductApp) {
  const { selectedImg, handleNext, handlePrev, handleThumbnailSelect } =
    useDesktopModal();

  return (
    <article className="flex flex-col items-center justify-center absolute inset-0 bg-black bg-opacity-75 z-[9999999] min-h-screen h-screen w-screen">
      <button
        className="ml-[29%] mb-4 transition-all duration-[125ms] ease-in-out"
        onClick={onModalDesktop}
      >
        <CloseButton />
      </button>
      <div className="w-[30%]">
        <img
          src={selectedImg}
          alt="image-product"
          className="relative rounded-xl"
        />
        <button
          onClick={handlePrev}
          className="absolute w-12 h-12 flex items-center justify-center pr-1 right-[63.3%] top-[35%] bg-white rounded-full sm:top-[50%] sm:translate-y-[-120%] transition-all duration-[125ms] ease-in-out"
        >
          <PreviousButton />
        </button>
        <button
          onClick={handleNext}
          className="absolute w-12 h-12 flex items-center justify-center left-[63.3%] top-[35%] bg-white rounded-full sm:top-[50%] sm:translate-y-[-120%] pl-[0.15rem] transition-all duration-[125ms] ease-in-out"
        >
          <NextButton />
        </button>
        <ProductThumbnailImage
          selectedImage={selectedImg}
          onThumbnailSelect={() => handleThumbnailSelect(selectedImg)}
        />
      </div>
    </article>
  );
}
