import styles from './InputText.module.scss';
import cn from 'classnames';
const InpuText = ({
  value,
  name,
  style,
  oninput,
  ...props
}) => {
  const handleInput = ({ target }) => {
    oninput({ name, value: target.value });
  };
  return (
      <input
        {...props}
        data-testid='input-custom'
        name={name}
        value={value}
        className={cn(styles.InputText, styles[style])}
        onInput={handleInput}/>
  );
};

export default InpuText;