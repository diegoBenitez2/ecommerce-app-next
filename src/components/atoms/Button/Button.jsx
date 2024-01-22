import cn from "classnames";
import { FaAngleDown } from 'react-icons/fa';
// import styles from './Button.module.scss';

const Button = ({
  text='Button',
  size='small',
  iconColor,
  style,
  disabled,
  onclick}) => {

  const styles = {
    primary: 'bg-primary text-black',
    secondary: 'bg-light-gray text-black',
    tertiary: 'bg-dark-primary text-white',
    fourty: 'bg-primary text-white',
    fifty: 'bg-dark-primary text-white',
  };

  const sizes = {
    small: 'min-w-[95px] h-[48px]',
    medium: 'min-w-[111px] h-[56px]',
  };

  return (
    <button
      data-testid='btn-custom'
      disabled={disabled}
      className={cn(`font-satoshi items-center justify-center py-4 px-8 
                      border-0 whitespace-nowrap text-sm
                      disabled:opacity-60`,
                      styles.container,
                      styles[style],
                      sizes[size],)}
      onClick={onclick}>
      <span>{ text }</span>
      {
        iconColor && <FaAngleDown
                        style={{ color: iconColor }}
                        className="ml-4"
                        data-testid='btn-icon' />
      }

    </button>
  );
};

export default Button;