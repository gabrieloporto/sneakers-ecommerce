import { QuantityItems } from "../../types";

export default function QuantityItems({
  onSubtract,
  onAdd,
  count,
}: QuantityItems) {
  return (
    <div className="w-full h-8 text-2xl font-bold flex items-center justify-between text-orange my-4 px-4">
      <button className="hover:opacity-70" onClick={onSubtract}>
        -
      </button>
      <span className="text-black text-base ">{count}</span>
      <button className="hover:opacity-70" onClick={onAdd}>
        +
      </button>
    </div>
  );
}
