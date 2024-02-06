import { useState } from "react";
import { images } from "../constants";

export default function useSlider() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const previous = () => {
    const previusIndex = selectedIndex > 0 ? selectedIndex - 1 : selectedIndex;

    setSelectedImage(images[previusIndex]);
    setSelectedIndex(previusIndex);
  };
  const next = () => {
    const nextIndex =
      selectedIndex < images.length - 1 ? selectedIndex + 1 : selectedIndex;

    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  return { next, previous, selectedImage };
}
