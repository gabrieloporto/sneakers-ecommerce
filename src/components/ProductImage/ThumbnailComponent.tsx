import { ThumbnailComponent } from "../../types";

export default function ThumbnailComponent({
  imgThumbnail,
  isSelected,
  onClick,
}: ThumbnailComponent) {
  return (
    <button
      className={`mt-8 rounded-xl ${
        isSelected ? "border-2 border-solid border-orange" : ""
      }`}
      onClick={onClick}
    >
      <img
        src={imgThumbnail}
        alt="image-thumbnail"
        className={`rounded-lg hover:opacity-50 ${
          isSelected ? "opacity-30" : ""
        }`}
      />
    </button>
  );
}
