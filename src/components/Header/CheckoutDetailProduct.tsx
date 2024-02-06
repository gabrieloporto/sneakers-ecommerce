import imgThumbnail1 from "../.././assets/image-product-1-thumbnail.jpg";
import { CheckOutDetailProduct } from "../../types";

export default function CheckoutDetailProduct({
  itemsInCart,
}: CheckOutDetailProduct) {
  return (
    <>
      <img
        src={imgThumbnail1}
        alt="img-product"
        width={50}
        height={50}
        className="rounded-md"
      />
      <div className="text-darkGrayishBlue text-sm">
        <p>Fall Limited Edition Sneakers</p>
        <p>
          $5000.00 x {itemsInCart}
          <strong className="text-black font-bold ml-2">{`$${
            5000 * itemsInCart
          }.00`}</strong>
        </p>
      </div>
    </>
  );
}
