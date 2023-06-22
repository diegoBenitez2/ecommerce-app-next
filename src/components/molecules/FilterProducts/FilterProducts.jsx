import { FiX }  from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FaLongArrowAltRight } from "react-icons/fa";
import Checkbox from "@atoms/Checkbox/Checkbox";
import cn from "classnames";
import { useState } from "react";

const FilterProductsPanel = ({ open, toggleOpen }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className={cn('fixed top-0 bottom-0 left-0 right-0 z-[-1]', { 'bg-primary-light/50 z-[1]': open })}>
      <div className={cn("w-[80%] h-full bg-white relative transition-all transform duration-500", [open ? 'translate-x-[0%]' : 'translate-x-[-120%]'])}>
        <div className="flex justify-between items-center text-black py-5 px-4 sticky shadow-md">
          <span className="text-xl">Filter by</span>
          <div className="flex items-center">
            <span className="underline text-base cr-pointer mr-4">Clear</span>
            <FiX
              className="w-[25px] h-[25px] fill-black cr-pointer"
              onClick={() => toggleOpen(false)}/>
          </div>
        </div>
        <ul className="text-base overflow-auto">
          <li className="px-4 py-3 text-left text-dark-primary border-2 border-x-white border-y-light-gray relative">
            <div className="flex items-center justify-between w-full">
              <span className="font-clash text-dark-primary mr-3">Product Type</span>
              <FiChevronDown className={cn("w-[20px] h-[20px] text-dark-primary cr-pointer transition transform ease duration-500", {'rotate-180': collapse})}
              onClick={() => setCollapse(!collapse)}/>
            </div>
            <ul className={cn("p-0 border-white overflow-hidden  transition-all ease-in-out ", [collapse ? 'h-[0] mt-0': 'mt-3 h-[auto] border-2 border-t-light-gray  '])}>
              <li className="py-2 text-left text-dark-primary flex items-center">
                <Checkbox label="Founiture" className="mr-3" />
              </li>
              <li className="py-2 text-left text-dark-primary flex items-center">
                <Checkbox label="Homeware" className="mr-3" />
              </li>
              <li className="py-2 text-left text-dark-primary flex items-center">
                <Checkbox label="Sofas" className="mr-3" />
              </li>
            </ul>
          </li>
        </ul>

        <button className="bg-dark-primary absolute bottom-0 left-0 right-0 mx-4 mb-4 shadow-lg shadow-primary-light px-3 py-3 flex items-center justify-between text-white italic text-base font-satoshi cr-pointer border border-dark-primary hover:border-black">
          <span>Apply</span>
          <FaLongArrowAltRight className="w-[30px] h-[20px] fill-white" />
        </button>

      </div>
    </div>
  );
};

export default FilterProductsPanel;