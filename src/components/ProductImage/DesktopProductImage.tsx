import { useState } from "react";
import imgProduct1 from "../.././assets/image-product-1.webp";
import ProductThumbnailImage from "./ProductThumbnailImage.tsx";
import { DesktopProductImageApp } from "../../types.js";

export default function DesktopProductImage({
  onModalDesktop,
}: DesktopProductImageApp) {
  const [selectedImage, setSelectedImage] = useState(imgProduct1);

  const handleThumbnailSelect = (image: string) => setSelectedImage(image);

  return (
    <>
      <article className="w-[35%]  mr-[10%] ml-[5%]">
        <img
          src={selectedImage}
          alt="image-product"
          onClick={onModalDesktop}
          className="rounded-xl max-w-[100%] h-auto"
        />
        <ProductThumbnailImage
          selectedImage={selectedImage}
          onThumbnailSelect={handleThumbnailSelect}
        />
      </article>
    </>
  );
}
