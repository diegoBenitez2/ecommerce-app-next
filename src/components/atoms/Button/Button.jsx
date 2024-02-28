import cn from "classnames";
import { FaAngleDown } from 'react-icons/fa';

const Button = ({
  text='Button',
  size='small',
  hasIcon,
  variant,
  disabled,
  onclick}) => {

  const variants = {
    primary: 'bg-primary text-white',
    secondary: 'bg-dark-primary text-white',
    tertiary: 'bg-light-gray text-black',
    fourty: 'bg-border-gray text-white',
    fifty: 'bg-border-dark text-white',
  };
  const variantsHover = {
    primary: 'hover:shadow-btn-dark-primary',
    secondary: 'hover:shadow-btn-primary',
    tertiary: 'hover:shadow-btn-b-white',
    fourty: 'hover:shadow-btn-b-dark-gray',
    fifty: 'hover:shadow-btn-b-gray',
  };
  const sizes = {
    small: 'min-w-[95px] h-[48px]',
    medium: 'min-w-[111px] h-[56px]',
    wFull: 'w-full',
  };

  const iconColor = {
    primary: 'text-white',
    secondary: 'text-white',
    tertiary: 'text-black',
    fourty: 'text-white',
    fifty: 'text-white',
  };

  return (
    <button
      data-testid='btn-custom'
      disabled={disabled}
      className={cn(`font-satoshi flex items-center justify-center py-4 px-8 border-0 whitespace-nowrap text-sm disabled:opacity-60 transition-shadow duration-700 transform active:scale-95`,
      variants[variant],
      !disabled && variantsHover[variant],
      sizes[size],)}
      onClick={onclick}>
      <span>{ text }</span>
      {
        hasIcon && <FaAngleDown
                        className={cn(`ml-2`, iconColor[variant])}
                        data-testid='btn-icon' />
      }

    </button>
  );
};

export default Button;