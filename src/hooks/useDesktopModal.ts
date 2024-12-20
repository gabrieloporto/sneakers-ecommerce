import { useState } from "react";
import imgProduct1 from "../assets/image-product-1.webp";
import imgProduct2 from "../assets/image-product-2.webp";
import imgProduct3 from "../assets/image-product-3.webp";
import imgProduct4 from "../assets/image-product-4.webp";

export default function useDesktopModal() {
  const [selectedImg, setSelectedImage] = useState(imgProduct1);

  const handleThumbnailSelect = (image: string) => setSelectedImage(image);

  const handleNext = () => {
    switch (selectedImg) {
      case imgProduct1:
        setSelectedImage(imgProduct2);
        break;
      case imgProduct2:
        setSelectedImage(imgProduct3);
        break;
      case imgProduct3:
        setSelectedImage(imgProduct4);
        break;
    }
  };

  const handlePrev = () => {
    switch (selectedImg) {
      case imgProduct4:
        setSelectedImage(imgProduct3);
        break;
      case imgProduct3:
        setSelectedImage(imgProduct2);
        break;
      case imgProduct2:
        setSelectedImage(imgProduct1);
        break;
    }
  };

  return { selectedImg, handleNext, handlePrev, handleThumbnailSelect };
}
