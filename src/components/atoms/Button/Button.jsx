import cn from "classnames";
import { FaAngleDown } from 'react-icons/fa';

const Button = ({
  text='Button',
  size='small',
  isIcon,
  style,
  disabled,
  onclick}) => {

  const variants = {
    primary: 'bg-primary text-white',
    secondary: 'bg-light-gray text-black',
    tertiary: 'bg-dark-primary text-white',
    fourty: 'bg-primary text-white',
    fifty: 'bg-dark-primary text-white',
  };

  const sizes = {
    small: 'min-w-[95px] h-[48px]',
    medium: 'min-w-[111px] h-[56px]',
    wFull: 'w-full',
  };

  const iconColor = {
    primary: 'text-white',
    secondary: 'text-black',
    tertiary: 'text-white',
    fourty: 'text-white',
    fifty: 'text-white',
  };

  return (
    <button
      data-testid='btn-custom'
      disabled={disabled}
      className={cn(`font-satoshi flex items-center justify-center py-4 px-8 border-0 whitespace-nowrap text-sm disabled:opacity-60 transition-shadow hover:shadow-normal trasnform active:scale-95`,
      variants[style],
      sizes[size],)}
      onClick={onclick}>
      <span>{ text }</span>
      {
        isIcon && <FaAngleDown
                        className={cn(`ml-2`, iconColor[style])}
                        data-testid='btn-icon' />
      }

    </button>
  );
};

export default Button;