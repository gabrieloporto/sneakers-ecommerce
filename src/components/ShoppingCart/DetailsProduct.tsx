export default function DetailsProduct() {
  return (
    <div className="flex items-center justify-between md:flex-col md:items-start">
      <div className="flex items-center">
        <span className="text-3xl font-bold mr-[15%]">$5000.00</span>
        <span className="text-orange text-lg font-bold">50%</span>
      </div>
      <span className="text-darkGrayishBlue line-through">$10000.00</span>
    </div>
  );
}
