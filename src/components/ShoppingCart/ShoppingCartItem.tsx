import DetailsProduct from "./DetailsProduct.jsx";
import QuantityItems from "./QuantityItems.jsx";
import AddToCartButton from "./AddToCartButton.jsx";
import { Home } from "../../types.js";

export default function ShoppingCartItem({
  countProduct,
  subtractProduct,
  addProduct,
  addItemCart,
}: Home) {
  return (
    <section className="m-4 mb-12">
      <DetailsProduct />

      <div className="flex flex-col items-center md:flex-row">
        <QuantityItems
          count={countProduct}
          onSubtract={subtractProduct}
          onAdd={addProduct}
        />

        <AddToCartButton onAddCart={addItemCart} />
      </div>
    </section>
  );
}
