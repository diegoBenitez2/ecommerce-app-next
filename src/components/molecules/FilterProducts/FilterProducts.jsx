import { FiX }  from "react-icons/fi";
import { FaLongArrowAltRight } from "react-icons/fa";
import Checkbox from "@atoms/Checkbox/Checkbox";
import { Collapse } from "@atoms/Collapse/Collapse";
import cn from "classnames";
import Stepper from "@components/atoms/Stepper/Stepper";

const FilterProductsPanel = ({ open, toggleOpen }) => {
  return (
    <div className={cn('fixed top-0 bottom-0 transition-all duration-300 left-0 right-0 z-[-1]', [open ? 'bg-primary-light/50 z-[1]' : 'delay-200' ])}>
      <article className={cn("w-[80%] md:w-[40%] h-full bg-white relative transition-transform transform duration-500 ease-in-out", [open ? 'translate-x-[0%]' : 'translate-x-[-120%]'])}>
        <header className="flex justify-between items-center text-black py-5 px-4 sticky shadow-md">
          <span className="text-xl">Filter by</span>
          <div className="flex items-center">
            <span className="underline text-base cr-pointer mr-4 hover:opacity-70">Clear</span>
            <FiX
              className="w-[25px] h-[25px] fill-black cr-pointer hover:opacity-70"
              onClick={() => toggleOpen(false)}/>
          </div>
        </header>
        <section className="min-h-[100px] text-left border-1 border-x-white border-y-light-gray p-4 pb-8">
          <h6 className="font-clash text-base text-dark-primary mb-2">Applied Filters</h6>
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center justify-between bg-border-gray hover:bg-border-dark hover:contrast-150 text-sm p-1 rounded cr-pointer">
              Shoes nike
              <FiX className="w-[18px] h-[18px] fill-black cr-pointer text-primary-light"/>
            </button>
          </div>
        </section>
        <ul className="text-base overflow-auto">
          <Collapse
            label={'Product type'}
            content={
              <>
                <li className="py-2 text-left text-dark-primary flex items-center">
                  <Checkbox label="Founiture" className="mr-3" />
                </li>
                <li className="py-2 text-left text-dark-primary flex items-center">
                  <Checkbox label="Homeware" className="mr-3" />
                </li>
                <li className="py-2 text-left text-dark-primary flex items-center">
                  <Checkbox label="Sofas" className="mr-3" />
                </li>
                <li className="py-2 text-left text-dark-primary flex items-center">
                  <Checkbox label="Sofas" className="mr-3" />
                </li>
                <li className="py-2 text-left text-dark-primary flex items-center">
                  <Stepper id={"stepper"} name={'Stepper'} value={0}/>
                </li>
              </>
            }>
          </Collapse>
        </ul>
        <footer>
          <button className="bg-dark-primary hover:contrast-150 absolute bottom-0 left-0 right-0 mx-4 mb-4 shadow-lg shadow-primary-light px-3 py-3 flex items-center justify-between text-white italic text-base font-satoshi cr-pointer border border-dark-primary hover:border-black">
          <span>Apply</span>
          <FaLongArrowAltRight className="w-[30px] h-[20px] fill-white" />
        </button>
        </footer>
      </article>
    </div>
  );
};

export default FilterProductsPanel;