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
      className={`${styles.Button} ${styles.Button}--${size} ${styles.Button}--${style}`}
      onClick={onclick}>
      <span>{ text }</span>
      {
        iconColor && <FaAngleDown 
                        color={iconColor} 
                        className={`${styles.Button}__icon`}
                        data-testid='btn-icon' /> 
      }
      
    </button>
  );
};

export default Button;