import nextBtn from "../.././assets/icon-next.svg";
import previousBtn from "../.././assets/icon-previous.svg";
import { MobileProductImage } from "../../types";

export default function MobileProductImage({
  selectImg,
  onPrev,
  onNext,
}: MobileProductImage) {
  return (
    <article>
      <img src={selectImg} alt="image-product" className="relative" />
      <button
        onClick={onPrev}
        className="absolute w-10 h-10 flex items-center justify-center pr-1 left-4 top-[35%] bg-white rounded-full sm:top-[50%] sm:translate-y-[-50%]"
      >
        <img src={previousBtn} alt="previous" />
      </button>
      <button
        onClick={onNext}
        className="absolute w-10 h-10 flex items-center justify-center right-4 top-[35%] bg-white rounded-full sm:top-[50%] sm:translate-y-[-50%]"
      >
        <img src={nextBtn} alt="next" />
      </button>
    </article>
  );
}
