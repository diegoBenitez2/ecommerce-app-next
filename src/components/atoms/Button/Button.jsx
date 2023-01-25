import cn from "classnames";
import { FaAngleDown } from 'react-icons/fa';
import styles from './Button.module.scss';

const Button = ({ 
  text='Button', 
  size='small', 
  iconColor, 
  style,
  disabled,
  onclick}) => {
  return (
    <button
      data-testid='btn-custom'
      disabled={disabled}
      className={cn(styles.Button, styles[size], styles[style], 'flex')}
      onClick={onclick}>
      <span>{ text }</span>
      {
        iconColor && <FaAngleDown
                        style={{ color: iconColor }}
                        className={`${styles.Button__icon}`}
                        data-testid='btn-icon' /> 
      }
      
    </button>
  );
};

export default Button;