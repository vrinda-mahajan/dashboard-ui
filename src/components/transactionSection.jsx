import { find } from "../assets";
import { arrowbLeft, arrowbRight, download, info, sort } from "../assets/icons/transaction";

function TransactionSection() {
  return (
    <div className="flex-col">
      <h2 className="font-medium text-xl mb-5 text-color-text-1">
        <span className="border-r-[1px] pr-1 border-color-text-1">
          Transactions
        </span>
        <span className="border-l-[1px] pl-1 border-color-text-1">
          This Month
        </span>
      </h2>
      <div className="p-3 bg-color-white rounded-md">
        <div className="flex justify-between mb-3">
          <div className="relative flex flex-grow max-w-[250px]">
            <div class="absolute inset-y-0 start-0 flex items-center ps-4 pe-2">
              <img src={find} alt="find" />
            </div>
            <input
              type="search"
              class="h-10 block w-full p-4 ps-10 text-sm text-color-gray-1 rounded-[6px] bg-color-white  border border-color-gray-3 outline-none"
              placeholder="Search by order ID..."
            />
          </div>
          <div className="space-x-3">
            <button class="text-color-text-2 bg-color-white rounded px-[14px] py-[6px] text-center border border-color-gray-3">
              Sort{" "}
              <img
                className="object-none inline ml-[9px]"
                src={sort}
                alt="sort"
              />
            </button>
            <button class="text-color-text-2 bg-color-white rounded px-[14px] py-[6px] text-center border border-color-gray-3">
              <img
                className="object-none inline "
                src={download}
                alt="download"
              />
            </button>
          </div>
        </div>

        <table className="rounded w-full ">
          <thead className="text-[14px] mr-3 bg-color-gray-2 text-color-text-2">
            <th className="font-medium text-left w-1/4 px-3 py-[10px]">
              Order ID
            </th>
            <th className="font-medium text-left w-1/4 px-3 py-[10px]">
              Order date
            </th>
            <th className="font-medium text-right w-1/4 px-3 py-[10px]">
              Order amount
            </th>
            <th className="font-medium text-right w-1/4 px-3 py-[10px]">
              <span className="relative pr-6">
                Transaction fees 
              <img className="absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2" src={info} alt="info" />
              </span>
            </th>
          </thead>
          <tbody className="text-color-text-1">
            {[...Array(10)].map(() => (
              <tr className="border-b border-[#E6E6E6]">
                <td className="px-3 py-[14px] text-color-secondary">#281209</td>
                <td className="px-3 py-[14px]">7 July, 2023</td>
                <td className="px-3 py-[14px] text-right">₹1,278.23</td>
                <td className="px-3 py-[14px] text-right">₹22</td>
              </tr>
            ))}
            <tr className="border-b border-[#E6E6E6]">
              <td className="px-3 py-[14px] text-color-secondary">#281209</td>
              <td className="px-3 py-[14px]">7 July, 2023</td>
              <td className="px-3 py-[14px] text-right">₹1,278.23</td>
              <td className="px-3 py-[14px] text-right">₹22</td>
            </tr>
          </tbody>
        </table>
        <ul class="flex justify-center text-sm mt-6 mb-3">
            <li>
            <button class="text-color-text-2 bg-color-white rounded px-[14px] py-[6px] text-center border border-color-gray-3 mr-6">
              Previous{" "}
              <img
                className="object-none inline ml-[9px]"
                src={arrowbLeft}
                alt="arrowbLeft"
              />
            </button>
            </li>
            <li className="mr-1">
                <button className="text-color-text-2 bg-color-white rounded  px-[6px] py-[4px]  text-center">1</button>
            </li>
            <li className="mr-1">
                <button className="text-color-text-2 bg-color-white rounded  px-[6px] py-[4px]  text-center">...</button>
            </li>
            <li className="mr-1">
                <button className="text-color-white bg-color-secondary rounded px-[6px] py-[4px] text-center">10</button>
            </li>
            {[11,12,13,14,15,16,17,18].map((page)=>
            <li className="mr-1">
                <button className="text-color-text-2 bg-color-white rounded  px-[6px] py-[4px]  text-center">{page}</button>
            </li>)}
            <li>
            <button class="text-color-text-2 bg-color-white rounded px-[14px] py-[6px] text-center border border-color-gray-3 ml-6">
              Next{" "}
              <img
                className="object-none inline ml-[9px]"
                src={arrowbRight}
                alt="arrowbRight"
              />
            </button>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default TransactionSection;
