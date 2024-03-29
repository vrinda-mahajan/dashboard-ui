import { arrowbDown } from "../assets/icons/transaction";

function OverviewSection() {
  return (
    <div className="flex-col mb-8">
      <div className="flex justify-between mb-6">
        <h2 className="font-medium text-xl text-color-text-1">Overview</h2>
        <button class="text-color-text-2 bg-color-white rounded px-[14px] py-[6px] text-center border border-color-gray-3">
          Last Month{" "}
          <img
            className="object-none inline ml-[9px]"
            src={arrowbDown}
            alt="arrowbDown"
          />
        </button>
      </div>
      <div className="flex gap-5">
        <div className="flex-col w-1/2 rounded-lg p-5 bg-color-white shadow-sm">
          <p className="text-color-text-2 mb-4 max-sm:text-sm">Online orders</p>
          <h3 className="text-color-text-1 text-[32px] max-sm:text-[18px] font-medium">231</h3>
        </div>
        <div className="flex-col w-1/2 rounded-lg p-5 bg-color-white shadow-sm">
          <p className="text-color-text-2 mb-4 max-sm:text-sm">Amount received</p>
          <h3 className="text-color-text-1 text-[32px] max-sm:text-[18px] font-medium">
            23,92,312.19
          </h3>
        </div>
      </div>
    </div>
  );
}

export default OverviewSection;
