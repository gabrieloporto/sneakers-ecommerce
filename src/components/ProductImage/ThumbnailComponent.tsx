import { ThumbnailComponentApp } from "../../types";

export default function ThumbnailComponent({
  imgThumbnail,
  isSelected,
  onClick,
}: ThumbnailComponentApp) {
  return (
    <button
      className={`mt-8 rounded-xl transition-all duration-[125ms] ease-in-out ${
        isSelected ? "border-2 border-solid border-orange" : ""
      }`}
      onClick={onClick}
    >
      <img
        src={imgThumbnail}
        alt="image-thumbnail"
        className={`rounded-lg hover:opacity-50 transition-all duration-[125ms] ease-in-out ${
          isSelected ? "opacity-30" : ""
        }`}
      />
    </button>
  );
}
