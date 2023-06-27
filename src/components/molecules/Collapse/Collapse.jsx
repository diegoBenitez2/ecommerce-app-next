import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import  Checkbox from '@atoms/Checkbox/Checkbox';
import cn from 'classnames';

export const Collapse = ({
  title='Product type',
  items=['furniture', 'homeware', 'sofas'],
  onChange }) => {

  const [collapse, setCollapse] = useState(false);

  return (
    <div className="px-4 py-3 text-left text-dark-primary border-2 border-x-white border-y-light-gray relative">
      <div className="flex items-center justify-between w-full">
        <span className="font-clash text-dark-primary mr-3">{title}</span>
        <FiChevronDown className={cn("w-[20px] h-[20px] text-dark-primary cr-pointer transition transform ease duration-500", {'rotate-180': collapse})}
        onClick={() => setCollapse(!collapse)}/>
      </div>
      <ul className={cn("p-0 border-white overflow-hidden transition-all ease-in-out ", [collapse ? 'h-[0] mt-0': 'mt-3 h-[auto] border-2 border-t-light-gray  '])}>
        { items && items.map((item) => (
          <li
            className="py-2 text-left text-dark-primary flex items-center"
            key={item}>
            <Checkbox
              label={item}
              value={item}
              className="mr-3"
              onchange={onChange} />
          </li>
        ))}
      </ul>
    </div>
  );
};