import { find } from "../assets";
import { arrowfDown, question, speaker } from "../assets/icons/navbar";

function Navbar() {
  return (
    <div className="flex gap-4 justify-between items-center py-[21px] h-16 border-solid border-b-[1px] border-color-gray-1 px-8">
      <div className="flex justify-center items-center">
        <p className="text-[15px] text-color-text-1 mr-4">Payments</p>
        <span className="flex text-xs text-color-text-2">
          <img className="object-none mr-[6px]" src={question} alt="question" />
          <span>How it works</span>
        </span>
      </div>
      <div className="relative flex flex-grow max-w-[400px]">
        <div class="absolute inset-y-0 start-0 flex items-center ps-4 pe-2">
          <img src={find} alt="find" />
        </div>
        <input
          type="search"
          class="h-10 block w-full p-4 ps-10 text-sm text-color-gray-1 rounded-[6px] bg-color-gray-2 outline-none"
          placeholder="Search Features, Tutorials, etc."
        />
      </div>
      <div className="flex space-x-3">
        <div className="cursor-pointer bg-color-gray-2 rounded-full flex justify-center items-center p-[10px] h-10 w-10">
          <img src={speaker} alt="speaker" />
        </div>
        <div className="cursor-pointer bg-color-gray-2 rounded-full flex justify-center items-center p-[10px] h-10 w-10">
          <img src={arrowfDown} alt="arrowDown" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
