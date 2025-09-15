import DetailsProduct from "./DetailsProduct.jsx";
import QuantityItems from "./QuantityItems.jsx";
import AddToCartButton from "./AddToCartButton.jsx";
import { useCartContext } from "../../context/CartContext";

export default function ShoppingCartItem() {
  const { countProduct, subtractProduct, addProduct, addItemCart } =
    useCartContext();

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
