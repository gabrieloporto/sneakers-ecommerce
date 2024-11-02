import ThumbnailComponent from "./ThumbnailComponent";
import { images } from "../../constants";
import { ProductThumbnailImageApp } from "../../types";

export default function ProductThumbnailImage({
  selectedImage,
  onThumbnailSelect,
}: ProductThumbnailImageApp) {
  const handleThumbnailClick = (index: number) =>
    onThumbnailSelect(images[index]);

  return (
    <div className="flex gap-8">
      {images.map((thumbnail: string, index: number) => (
        <ThumbnailComponent
          key={index}
          imgThumbnail={thumbnail}
          isSelected={images[index] === selectedImage}
          onClick={() => handleThumbnailClick(index)}
        />
      ))}
    </div>
  );
}
