import { logo } from "../assets/index";
import {
  analytics,
  apperance,
  arrowDown,
  audience,
  credits,
  delivery,
  discounts,
  home,
  marketing,
  orders,
  payments,
  plugins,
  products,
  tools,
} from "../assets/icons/sidebar/index";

const sidebarItemsData = [
  { itemName: "Home", itemIcon: home },
  { itemName: "Orders", itemIcon: orders },
  { itemName: "Products", itemIcon: products },
  { itemName: "Delivery", itemIcon: delivery },
  { itemName: "Marketing", itemIcon: marketing },
  { itemName: "Analytics", itemIcon: analytics },
  { itemName: "Payments", itemIcon: payments },
  { itemName: "Tools", itemIcon: tools },
  { itemName: "Discounts", itemIcon: discounts },
  { itemName: "Audience", itemIcon: audience },
  { itemName: "Apperance", itemIcon: apperance },
  { itemName: "Plugins", itemIcon: plugins },
];

function Sidebar() {
  return (
    <div className="bg-color-primary text-color-white sticky top-0 overflow-y-auto scrollbar-hidden px-2 py-4 flex flex-col justify-between w-1/6 h-screen">
      <div>
        <div className="flex mb-6 justify-between">
          <div className="flex">
            <img className="object-none rounded mr-3 w-[39px] h-[39px]" src={logo} alt="logo" />
            <div className="mr-3">
              <h5 className="font-medium text-[15px]">Nishyan</h5>
              <p className="underline underline-offset-2 text-[13px]">
                Visit store
              </p>
            </div>
          </div>
          <img className="object-none mr-2 cursor-pointer" src={arrowDown} alt="arrowDown" />
        </div>
        <div>
          <ul className="">
            {sidebarItemsData.map(({ itemName, itemIcon }, index) => {
              return (
                <li
                  key={index}
                  className="flex h-9 items-center px-4 text-sm hover:bg-[#343c53] rounded"
                >
                  <img
                    className="object-none mr-3"
                    src={itemIcon}
                    alt={itemName}
                  />
                  <p>{itemName}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="rounded bg-[#353c53]">
        <div className="mx-3 my-[9px] flex">
        <img className="object-none mr-3" src={credits} alt="credits" />
        <div>
          <span className="text-[13px]">Available credits</span>
          <p className="font-medium">222.10</p>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
