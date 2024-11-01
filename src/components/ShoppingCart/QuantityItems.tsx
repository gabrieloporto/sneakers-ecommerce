import { QuantityItemsApp } from "../../types";

export default function QuantityItems({
  onSubtract,
  onAdd,
  count,
}: QuantityItemsApp) {
  return (
    <div className="w-full h-8 text-2xl font-bold flex items-center justify-between text-blue my-4 px-4">
      <button
        className="hover:opacity-70 transition-all duration-[125ms] ease-in-out"
        onClick={onSubtract}
      >
        -
      </button>
      <span className="text-black text-base ">{count}</span>
      <button
        className="hover:opacity-70 transition-all duration-[125ms] ease-in-out"
        onClick={onAdd}
      >
        +
      </button>
    </div>
  );
}
